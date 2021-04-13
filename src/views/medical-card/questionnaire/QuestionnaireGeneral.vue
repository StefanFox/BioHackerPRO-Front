<template>
  <b-card>
    <!-- form -->
    <b-form class="mt-2">
      <b-row>
        <b-col sm="12">
          <h3>Общая инфомамция</h3><br>
        </b-col>
        <b-col sm="6">
          <b-form-group
              label="Фамилия имя отчество"
              label-for="account-fio">
            <b-form-input
                v-model="optionsLocal.fio"
                disabled="optionsLocal.fio"
                placeholder="Фамилия имя отчество"
                name="fio"
            />
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group
              label="Дата рождения"
              label-for="account-dob">
            <b-form-datepicker v-model="optionsLocal.dob"
                               disabled="optionsLocal.dob" placeholder="20.11.1995">
            </b-form-datepicker>
          </b-form-group>
        </b-col>

        <b-col sm="6">
          <b-form-group
              label="Пол"
              label-for="account-fio">
            <b-form-checkbox
                v-model="selected"
                value="A"
                plain>
              Мужской
            </b-form-checkbox>
            <b-form-checkbox
                v-model="selected"
                value="B"
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
                v-model="optionsLocal.weight"
                disabled="optionsLocal.weight"
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
                v-model="optionsLocal.height"
                disabled="optionsLocal.height"
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


        <b-col sm="2">
          <b-form-group
              label="Обхват запястья [СМ]"
              label-for="wrist">
            <b-form-input
                v-model="optionsLocal.wrist"
                disabled="optionsLocal.wrist"
                placeholder="30"
                name="wrist"
            />
          </b-form-group>
        </b-col>
        <b-col sm="2">
          <b-form-group
              label="Обхват груди [СМ]"
              label-for="chest">
            <b-form-input
                v-model="optionsLocal.chest"
                disabled="optionsLocal.chest"
                placeholder="140"
                name="chest"
            />
          </b-form-group>
        </b-col>
        <b-col sm="2">
          <b-form-group
              label="Объем талии [СМ]"
              label-for="waist">
            <b-form-input
                v-model="optionsLocal.waist"
                disabled="optionsLocal.waist"
                placeholder="140"
                name="waist"
            />
          </b-form-group>
        </b-col>
        <b-col sm="2">
          <b-form-group
              label="Объем бедер [СМ]"
              label-for="hips">
            <b-form-input
                v-model="optionsLocal.hips"
                disabled="optionsLocal.hips"
                placeholder="140"
                name="hips"
            />
          </b-form-group>
        </b-col>
        <b-col sm="4"></b-col>

        <b-col sm="2">
          <b-form-group
              label="Артериальное давление"
              label-for="pressure">
            <b-form-input
                v-model="optionsLocal.pressure"
                disabled="optionsLocal.pressure"
                placeholder="140"
                name="pressure"
            />
          </b-form-group>
        </b-col>
        <b-col sm="2">
          <b-form-group
              label="Группа крови"
              label-for="blood">
            <b-form-input
                v-model="optionsLocal.blood"
                disabled="optionsLocal.blood"
                placeholder="140"
                name="blood"
            />
          </b-form-group>
        </b-col>
        <b-col sm="3">
          <b-form-group
              label="Частота сердечных сокращений [уд/мин]"
              label-for="pulse">
            <b-form-input
                v-model="optionsLocal.pulse"
                disabled="optionsLocal.pulse"
                placeholder="140"
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
                name="chronicd"
                size="lg"
                placeholder=""
                v-model="optionsLocal.chronicd"
                disabled="optionsLocal.chronicd"
            />
          </b-form-group>
        </b-col>

        <b-col sm="10" class="mb-1">
          <b-form-group
              label="Наследственные заболевания[C какого возраста или дата]"
              label-for="account-zap">
            <b-form-textarea
                id="textarea-large-s"
                size="lg"
                placeholder=""
            />
          </b-form-group>
        </b-col>

        <b-col sm="10" class="mb-1">
          <b-form-group
              label="Аллергические реакции [указать подробно на что именно],"
              label-for="account-zap">
            <b-form-textarea
                id="textarea-large-a"
                size="lg"
                placeholder=""
            />
          </b-form-group>
        </b-col>

        <b-col sm="10" class="mb-1">
          <b-form-group
              label="Жалобы"
              label-for="account-zap">
            <b-form-textarea
                id="textarea-large-j"
                size="lg"
                placeholder=""
            />
          </b-form-group>
        </b-col>

        <!--/ alert -->

        <b-col cols="12">
          <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              class="mt-2 mr-1"
          >
            Обновить
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
import {
  BFormFile,
  BButton,
  BForm,
  BFormGroup,
  BFormInput,
  BRow,
  BCol,
  BAlert,
  BCard,
  BCardText,
  BMedia,
  BMediaAside,
  BMediaBody,
  BLink,
  BImg,
  BFormDatepicker,
  BFormCheckbox,
  BFormTextarea
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import {useInputImageRenderer} from '@core/comp-functions/forms/form-utils'
import {ref} from '@vue/composition-api'

export default {
  components: {
    BButton,
    BFormDatepicker,
    BForm,
    BImg,
    BFormFile,
    BFormGroup,
    BFormInput,
    BRow,
    BCol,
    BAlert,
    BCard,
    BCardText,
    BMedia,
    BMediaAside,
    BMediaBody,
    BLink,
    BFormCheckbox,
    BFormTextarea
  },
  directives: {
    Ripple,
  },
  props: {
    generalData: {
      type: Object,
      default: () => {
      },
    },
  },
  data() {
    return {
      optionsLocal: JSON.parse(localStorage.getItem('userData')),
      profileFile: null,
    }
  },
  computed: {
    indexM() {
      return this.ves / this.rost ** 2
    },
  },
  methods: {
    resetForm() {
      this.optionsLocal = JSON.parse(JSON.stringify(this.generalData))
    },
  },
  setup() {
    const refInputEl = ref(null)
    const previewEl = ref(null)

    const {inputImageRenderer} = useInputImageRenderer(refInputEl, previewEl)

    return {
      refInputEl,
      previewEl,
      inputImageRenderer,
    }
  },
}
</script>
