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
          lg="5"
          class="d-none d-lg-flex align-items-center p-5"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <b-img
              fluid
              :src="imgUrl"
              alt="Register V2"
          />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Register-->
      <b-col lg="7" class="d-flex align-items-center auth-bg px-2 p-lg-5">
        <b-col
            sm="8"
            md="6"
            lg="12"
            class="px-xl-2 mx-auto"
        >
          <b-card-title class="mb-1">
            Регистрация
          </b-card-title>
          <b-card-text class="mb-2">
            Заполните форму ниже
          </b-card-text>

          <!-- form -->
          <form-wizard color="#7367F0" :title="null" :subtitle="null" shape="square"
                       finish-button-text="Отправить" back-button-text="Назад" nextButtonText="Вперед" class="mb-3"
                       @on-complete="register"
          >

            <!-- accoint details tab -->
            <tab-content title="Аккаунт">
              <validation-observer ref="accountRules" tag="form">
                <b-row>
                  <b-col md="6">
                    <b-form-group
                        label="Фамилия Имя Отчество"
                        label-for="name"
                    >
                      <validation-provider
                          #default="{ errors }"
                          name="fio"
                          rules="required"
                      >
                        <b-form-input
                            id="fio"
                            v-model="data.fio"
                            :state="errors.length > 0 ? false:null"
                            placeholder="Перов Иван Васильевич"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>
                  </b-col>
                  <b-col md="6">
                    <b-form-group
                        label="Email"
                        label-for="email"
                    >
                      <validation-provider
                          #default="{ errors }"
                          name="email"
                          rules="required|email"
                      >
                        <b-form-input
                            id="email"
                            v-model="data.email"
                            type="email"
                            :state="errors.length > 0 ? false:null"
                            placeholder="example@email.com"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>
                  </b-col>
                  <b-col md="6">
                    <b-form-group
                        label="Пароль"
                        label-for="password"
                    >
                      <validation-provider
                          #default="{ errors }"
                          name="Password"
                          vid="Password"
                          rules="required|password"
                      >
                        <b-form-input
                            id="password"
                            v-model="data.password"
                            type="password"
                            :state="errors.length > 0 ? false:null"
                            placeholder="Password"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>
                  </b-col>
                  <b-col md="6">
                    <b-form-group
                        label="Повтороение пароля"
                        label-for="c-password"
                    >
                      <validation-provider
                          #default="{ errors }"
                          name="Password Confirm"
                          rules="required|confirmed:Password"
                      >
                        <b-form-input
                            id="c-password"
                            v-model="data.password2"
                            type="password"
                            :state="errors.length > 0 ? false:null"
                            placeholder="Re-type Password"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>
                  </b-col>
                </b-row>
              </validation-observer>
            </tab-content>

            <!-- personal details tab -->
            <tab-content title="Анкета общая">
              <validation-observer ref="infoRules" tag="form">
                <b-row>
                  <b-col sm="12">
                    <h3>Общая инфомамция</h3><br>
                  </b-col>
                  <b-col sm="6">
                    <b-form-group
                        label="Фамилия имя отчество"
                        label-for="fio">
                      <b-form-input
                          v-model="data.fio"
                          placeholder="Фамилия имя отчество"
                          name="fio"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col sm="6">
                    <b-form-group
                        label="Дата рождения"
                        label-for="dob">
                      <b-form-datepicker name="dob" placeholder="20.11.1995" v-model="data.dob">
                      </b-form-datepicker>
                    </b-form-group>
                  </b-col>

                  <b-col sm="6">
                    <b-form-group
                        label="Пол"
                        label-for="gender">
                      <b-form-checkbox
                          v-model="data.gender"
                          value="0"
                          plain>
                        Мужской
                      </b-form-checkbox>
                      <b-form-checkbox
                          v-model="data.gender"
                          value="1"
                          plain>
                        Женский
                      </b-form-checkbox>
                    </b-form-group>


                  </b-col>

                  <b-col sm="2">
                    <b-form-group
                        label="Вес"
                        label-for="weight">
                      <b-form-input
                          v-model="data.weight"
                          placeholder="70"
                          name="weight"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col sm="2">
                    <b-form-group
                        label="Рост"
                        label-for="height">
                      <b-form-input
                          v-model="data.height"
                          placeholder="160"
                          name="height"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col sm="2">
                    <b-form-group
                        label="Индекс массы"
                        label-for="account-im">
                      <b-form-input
                          :value="indexM"
                          disabled=""
                          placeholder="160"
                          name="im"
                      />
                    </b-form-group>
                  </b-col>

                  <b-col sm="12">
                    <h3>Метрика</h3><br>
                  </b-col>
                  <b-col sm="3">
                    <b-form-group
                        label="Обхват запястья [СМ]"
                        label-for="wrist">
                      <b-form-input
                          v-model="data.wrist"
                          placeholder="30"
                          name="wrist"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col sm="3">
                    <b-form-group
                        label="Обхват груди [СМ]"
                        label-for="chest">
                      <b-form-input
                          v-model="data.chest"
                          placeholder="140"
                          name="chest"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col sm="3">
                    <b-form-group
                        label="Объем талии [СМ]"
                        label-for="account-waist">
                      <b-form-input
                          v-model="data.waist"
                          placeholder="140"
                          name="waist"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col sm="3">
                    <b-form-group
                        label="Объем бедер [СМ]"
                        label-for="hips">
                      <b-form-input
                          v-model="data.hips"
                          placeholder="260"
                          name="hips"
                      />
                    </b-form-group>
                  </b-col>

                  <b-col sm="3">
                    <b-form-group
                        label="Артериальное давление"
                        label-for="pressure">
                      <b-form-input
                          v-model="data.pressure"
                          placeholder="120/80"
                          name="pressure"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col sm="2">
                    <b-form-group
                        label="Группа крови"
                        label-for="blood">
                      <b-form-input
                          v-model="data.blood"
                          placeholder="2"
                          name="blood"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col sm="5">
                    <b-form-group
                        label="Частота сердечных сокращений [уд/мин]"
                        label-for="pulse">
                      <b-form-input
                          v-model="data.pulse"
                          placeholder="80"
                          name="pulse"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col sm="5"></b-col>

                  <b-col sm="12">
                    <h3>История</h3><br>
                  </b-col>

                  <b-col sm="10" class="mb-1">
                    <b-form-group
                        label="Хронические заболевания[C какого возраста или дата]"
                        label-for="chronicd">
                      <b-form-textarea
                          v-model="data.chronicd"
                          size="lg"
                          name="chronicd"
                          placeholder=""
                      />
                    </b-form-group>
                  </b-col>

                  <b-col sm="10" class="mb-1">
                    <b-form-group
                        label="Наследственные заболевания[C какого возраста или дата]"
                        label-for="hereditaryd">
                      <b-form-textarea
                          v-model="data.hereditaryd"
                          name="hereditaryd"
                          size="lg"
                          placeholder=""
                      />
                    </b-form-group>
                  </b-col>

                  <b-col sm="10" class="mb-1">
                    <b-form-group
                        label="Аллергические реакции [указать подробно на что именно],"
                        label-for="allergic">
                      <b-form-textarea
                          v-model="data.allergic"
                          name="data.allergic"
                          size="lg"
                          placeholder=""
                      />
                    </b-form-group>
                  </b-col>

                  <b-col sm="10" class="mb-1">
                    <b-form-group
                        label="Жалобы"
                        label-for="complaints">
                      <b-form-textarea
                          v-model="data.complaints"
                          name="complaints"
                          size="lg"
                          placeholder=""
                      />
                    </b-form-group>
                  </b-col>
                </b-row>
              </validation-observer>
            </tab-content>
          </form-wizard>
        </b-col>
      </b-col>
      <!-- /Register-->
    </b-row>
  </div>
</template>

<script>

import VuexyLogo from '@core/layouts/components/Logo.vue'
import {FormWizard, TabContent} from 'vue-form-wizard'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {required, email} from '@validations'
import {
  BRow,
  BCol,
  BLink,
  BButton,
  BForm,
  BFormCheckbox,
  BFormGroup,
  BFormInput,
  BInputGroup,
  BInputGroupAppend,
  BImg,
  // BFormInvalidFeedback,
  BCardTitle,
  BCardText,
  BFormDatepicker,
  BFormTextarea
} from 'bootstrap-vue'
import {togglePasswordVisibility} from '@core/mixins/ui/forms'
import store from '@/store/index'
import useJwt from '@/auth/jwt/useJwt'
import {ValidationObserver, ValidationProvider} from "vee-validate";

export default {
  components: {
    VuexyLogo,
    BRow,
    BImg,
    BCol,
    BLink,
    BButton,
    BForm,
    BCardText,
    BCardTitle,
    BFormCheckbox,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BInputGroupAppend,
    // validations
    FormWizard,
    TabContent,
    ValidationProvider,
    ValidationObserver,
    BFormDatepicker,
    BFormTextarea
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      data: {
        fio: '',
        email: '',
        password: '',
        password2: '',
        dob: '',
        gender: 0,
        height: 0,
        weight: 0,
        wrist: '',
        chest: '',
        waist: '',
        hips: '',
        pressure: '',
        blood: '',
        pulse: '',
        chronicd: '',
        hereditaryd: '',
        allergic: '',
        complaints: '',
      },
      sideImg: require('@/assets/images/pages/register-v2.svg'),
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
        // this.sideImg = require('@/assets/images/pages/register-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
    indexM() {
      return Math.round(this.data.weight / this.data.height ** 2)
    }
  },
  methods: {
    formSubmitted() {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Form Submitted',
          icon: 'EditIcon',
          variant: 'success',
        },
      })
    },
    register() {
      useJwt.register(this.data)
          .then(response => {
            useJwt.setToken(response.data.accessToken)
            useJwt.setRefreshToken(response.data.refreshToken)
            localStorage.setItem('userData', JSON.stringify(response.data.userData))
            this.$ability.update(response.data.userData.ability)
            this.$router.push('/')
          })
          .catch(error => {
            this.$refs.registerForm.setErrors(error.response.data.error)
          })
    },
  },
}
/* eslint-disable global-require */
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
@import '@core/scss/vue/libs/vue-wizard.scss';
@import '@core/scss/vue/libs/vue-select.scss';
</style>
