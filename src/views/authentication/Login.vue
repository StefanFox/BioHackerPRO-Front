<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">

      <!-- Brand logo-->
      <b-link class="brand-logo">
        <vuexy-logo/>
        <h2 class="brand-text text-primary ml-1">
          BiohackerPro
        </h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col
          lg="8"
          class="d-none d-lg-flex align-items-center p-5"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <b-img
              fluid
              :src="imgUrl"
              alt="Login V2"
          />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
      <b-col
          lg="4"
          class="d-flex align-items-center auth-bg px-2 p-lg-5"
      >
        <b-col
            sm="8"
            md="6"
            lg="12"
            class="px-xl-2 mx-auto"
        >
          <b-card-title
              title-tag="h2"
              class="font-weight-bold mb-1"
          >
            Авторизация
          </b-card-title>
          <b-card-text class="mb-2">
            Пожалуйста, войдите свой email и пароль
          </b-card-text>

          <!-- form -->
          <validation-observer
              ref="loginForm"
              #default="{invalid}"
          >
            <b-form
                class="auth-login-form mt-2"
                @submit.prevent="login"
            >
              <!-- email -->
              <b-form-group
                  label="E-mail"
                  label-for="login-email"
              >
                <validation-provider
                    #default="{ errors }"
                    name="Email"
                    rules="required|email"
                >
                  <b-form-input
                      id="login-email"
                      v-model="userEmail"
                      :state="errors.length > 0 ? false:null"
                      name="login-email"
                      placeholder="john@example.com"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- forgot password -->
              <b-form-group>
                <div class="d-flex justify-content-between">
                  <label for="login-password">Пароль</label>
                  <b-link :to="{name:'auth-forgot-password-v2'}">
                    <small>Забыли пароль?</small>
                  </b-link>
                </div>
                <validation-provider
                    #default="{ errors }"
                    name="Password"
                    rules="required"
                >
                  <b-input-group
                      class="input-group-merge"
                      :class="errors.length > 0 ? 'is-invalid':null"
                  >
                    <b-form-input
                        id="login-password"
                        v-model="password"
                        :state="errors.length > 0 ? false:null"
                        class="form-control-merge"
                        :type="passwordFieldType"
                        name="login-password"
                        placeholder="············"
                    />
                    <b-input-group-append is-text>
                      <feather-icon
                          class="cursor-pointer"
                          :icon="passwordToggleIcon"
                          @click="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>


              <!-- submit buttons -->
              <b-button
                  type="submit"
                  variant="primary"
                  block
                  :disabled="invalid"
              >
                Войти
              </b-button>
            </b-form>
          </validation-observer>

          <b-card-text class="text-center mt-2">
            <span>Новичок на нашей платформе? </span>
            <b-link :to="{name:'auth-register'}">
              <span>&nbsp;Создайте аккаунт</span>
            </b-link>
          </b-card-text>

          <!-- social buttons -->
        </b-col>
      </b-col>
      <!-- /Login-->
    </b-row>
  </div>
</template>

<script>
/* eslint-disable global-require */
import {ValidationProvider, ValidationObserver} from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import {
  BRow,
  BCol,
  BLink,
  BFormGroup,
  BFormInput,
  BInputGroupAppend,
  BInputGroup,
  BFormCheckbox,
  BCardText,
  BCardTitle,
  BImg,
  BForm,
  BButton,
  BAlert,
  VBTooltip,
} from 'bootstrap-vue'
import useJwt from '@/auth/jwt/useJwt'
import {required, email} from '@validations'
import {togglePasswordVisibility} from '@core/mixins/ui/forms'
import store from '@/store/index'
import {getHomeRouteForLoggedInUser} from '@/auth/utils'

import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  directives: {
    'b-tooltip': VBTooltip,
  },
  components: {
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BFormCheckbox,
    BCardText,
    BCardTitle,
    BImg,
    BForm,
    BButton,
    BAlert,
    VuexyLogo,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      status: '',
      password: 'admin',
      userEmail: 'admin@demo.com',
      sideImg: require('@/assets/images/pages/login-v2.svg'),

      // validation rules
      required,
      email,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/login-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
  methods: {
    login() {
      this.$refs.loginForm.validate().then(success => {
        if (success) {
          useJwt.login({
            email: this.userEmail,
            password: this.password,
          }).then(response => {
            useJwt.setToken(response.data.access)
            useJwt.setRefreshToken(response.data.refresh)

            this.$store.dispatch('updateInfoAboutUser').then(() => {
              // localStorage.setItem('userData', JSON.stringify(userData))
              // this.$ability.update([{
              //   action: 'manage', subject: 'all',
              // }])

              this.$router.replace(getHomeRouteForLoggedInUser(this.$store.getters.getUserRole))
                  .then(() => {
                    this.$toast({
                      component: ToastificationContent,
                      position: 'top-right',
                      props: {
                        title: `Welcome ${this.$store.getters.getUserData.fullName}`,
                        icon: 'CoffeeIcon',
                        variant: 'success',
                        text: `You have successfully logged in as ${this.$store.getters.getUserRole}. Now you can start to explore!`,
                      },
                    })
                  })
                  .catch(error => {
                    this.$refs.loginForm.setErrors(error.response.data.error)
                  })
            }).catch(error => {
              console.log('error', error)
            })
          })
        }
      })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
