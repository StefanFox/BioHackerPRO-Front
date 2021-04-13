<template>
  <section id="card-actions">
    <b-row>
      <b-col style="text-align: -webkit-right;" class="m-2">
        <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
        >
          Загрузить
        </b-button>
      </b-col>

      <!-- card actions -->
      <b-col cols="12">
        <b-card-actions ref="cardAction" title="Анализ крови от 23.03.2021" @refresh="refreshStop('cardAction')">
          <b-row>
            <b-col>
              <h5>Обработанный резльутат</h5>
            </b-col>

            <b-col cols="12">
              <b-table
                  responsive
                  :items="items"
                  :fields="fields"
                  bordered
              >
                <template
                    #cell(ICON)="data"
                    class="text-center"
                >
                  <div class="text-center">
                    <feather-icon :icon="data.value"/>
                  </div>
                </template>
              </b-table>
            </b-col>

            <b-col cols="12">
              <h5>Оригинальный файл</h5>
            </b-col>
            <b-col sm="10">
              <b-button
                  v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                  variant="outline-primary"
              >
                Скачать
              </b-button>
            </b-col>
          </b-row>
        </b-card-actions>
      </b-col>

      <!-- card actions -->
      <b-col cols="12">
        <b-card-actions ref="cardAction" title="Анализ крови от 23.02.2021" @refresh="refreshStop('cardAction')">
          <b-row>
            <b-col>
              <h5>Обработанный резльутат</h5>
            </b-col>

            <b-col cols="12">
              <b-table
                  responsive
                  :items="items"
                  :fields="fields"
                  bordered
              >
                <template
                    #cell(ICON)="data"
                    class="text-center"
                >
                  <div class="text-center">
                    <feather-icon :icon="data.value"/>
                  </div>
                </template>
              </b-table>
            </b-col>

            <b-col cols="12">
              <h5>Оригинальный файл</h5>
            </b-col>
            <b-col sm="10">
              <b-button
                  v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                  variant="outline-primary"
              >
                Скачать
              </b-button>
            </b-col>
          </b-row>
        </b-card-actions>
      </b-col>


    </b-row>
  </section>
</template>

<script>
import BCardActions from '@core/components/b-card-actions/BCardActions.vue'
import {
  BRow, BCol, BTable, BCardText, BButton
} from 'bootstrap-vue'

export default {
  components: {
    BCardActions,
    BRow,
    BCol,
    BTable,
    BCardText,
    BButton
  },
  data() {
    return {
      fields: [
        {key: 'NAME', label: 'Наименования'},
        {key: 'METER', label: 'Ед. ИЗМ'},
        {key: 'RESULT', label: 'Результат'},
        {key: 'BASE', label: 'Результат'},
      ],
      items: [
        {NAME: 'Общ. биллирубин', METER: 'мкммоль/л', RESULT: '3.5', BASE: '1.8'},
        {NAME: 'АлАТ', METER: 'Е/л', RESULT: '122', BASE: '40'},
        {NAME: 'АсАТ', METER: 'Е/л', RESULT: '59', BASE: '25'},
        {NAME: 'Креатинин', METER: 'мкммоль/л', RESULT: '18.6', BASE: '67'},
        {NAME: 'Мочевина', METER: 'мкммоль/л', RESULT: '11.3', BASE: '6.5'},
      ],
    }
  },
  methods: {

    // stop refreshing card in 3 sec
    refreshStop(cardName) {
      setTimeout(() => {
        this.$refs[cardName].showLoading = false
      }, 3000)
    },
  },
}
</script>
