<template>
  <section class="invoice-preview-wrapper">

    <!-- Alert: No item found -->
    <b-alert
        variant="danger"
        :show="invoiceData === undefined"
    >
      <h4 class="alert-heading">
        Error fetching invoice data
      </h4>
      <div class="alert-body">
        No invoice found with this invoice id. Check
        <b-link
            class="alert-link"
            :to="{ name: 'apps-invoice-list'}"
        >
          Invoice List
        </b-link>
        for other invoices.
      </div>
    </b-alert>

    <b-row
        v-if="invoiceData"
        class="invoice-preview"
    >

      <!-- Col: Left (Invoice Container) -->
      <b-col
          cols="12"
          xl="12"
          md="8"
      >
        <b-card
            no-body
            class="invoice-preview-card"
        >
          <!-- Header -->
          <b-card-body class="invoice-padding pb-0">

            <div class="d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0">

              <!-- Header: Left Content -->
              <div>
                <div class="logo-wrapper">
                  <logo/>
                  <h3 class="text-primary invoice-logo">
                    BiohackerPro
                  </h3>
                </div>
                <p class="card-text mb-25">
                  здание «Технопарк» Большой бульвар, 42, стр. 1, 2 этаж, оф.2.228
                </p>
                <p class="card-text mb-25">
                  г. Москва, «Сколково», livenergy@mail.ru
                </p>
                <p class="card-text mb-0">
                  +7 495 960 60 16
                </p>
              </div>

              <!-- Header: Right Content -->
              <div class="mt-md-0 mt-1">
                <h4 class="invoice-title">
                  Документ
                  <span class="invoice-number">№{{ invoiceData.id }}</span>
                </h4>
                <div class="invoice-date-wrapper">
                  <p class="invoice-date-title">
                    Дата выпуска:
                  </p>
                  <p class="invoice-date">
                    24 марта 2021
                  </p>
                </div>
                <div class="invoice-date-wrapper">
                  <p class="invoice-date-title">
                    Врач:
                  </p>
                  <p class="invoice-date">
                    Кудрина А.В.
                  </p>
                </div>
              </div>
            </div>
          </b-card-body>

          <!-- Spacer -->
          <hr class="invoice-spacing">

          <!-- Invoice Client & Payment Details -->
          <b-card-body
              v-if="invoiceData.client"
              class="invoice-padding pt-0"
          >
            <b-row class="invoice-spacing">

              <!-- Col: Invoice To -->
              <b-col
                  cols="12"
                  xl="10"
                  class="p-0"
              >
                <h6 class="mb-2">
                  Риски:
                </h6>

                <h3>Примеры формулировки диагнозов и кодирование CОVID-19 по МКБ-10</h3>
                <br>
                <b>Пример 1.</b> Новая коронавирусная инфекция COVID-19 (подтвержденная), среднетяжелая форма, внебольничная
                двусторонняя пневмония. ДН 0.<br>
                <b>Пример 2.</b> Новая коронавирусная инфекция COVID-19 (подтвержденная), тяжелая форма, внебольничная
                двусторонняя пневмония. ОДН.<br>
                <b>Пример 3.</b> Подозрение на новую коронавирусную инфекцию COVID-19, тяжелая форма, внебольничная
                двусторонняя пневмония. Острый респираторный дистресс-синдром. ОДН.<br>
                Кодирования статистической информации при наличии подозрения или установленного диагноза коронавирусной
                инфекции COVID-19 осуществляется в соответствии с нижеследующим порядком:<br>
                <br>
                - Коронавирусная инфекция, вызванной вирусом COVID-19, вирус идентифицирован (подтвержден лабораторным
                тестированием независимо от тяжести клинических признаков или симптомов) - U07.1<br>
                - Коронавирусная инфекция, вызванной вирусом COVID-19, вирус не идентифицирован (COVID-19
                диагностируется клинически или эпидемиологически, но лабораторные исследования неубедительны или
                недоступны) - U07.2<br>
                - Наблюдение при подозрении на коронавирусную инфекцию - Z03.8<br>
                - Носительство возбудителя коронавирусной инфекции - Z22.8<br>
                - Контакт с больным коронавирусной инфекцией - Z20.8<br>
                - Скрининговое обследование с целью выявления коронавирусной инфекции - Z11.5<br>
                - Коронавирусная инфекция неуточненная (кроме вызванной COVID-19) - B34.2<br>
                - Коронавирусная инфекция уточненная (кроме вызванной COVID-19) - B33.8<br>
                - При наличии пневмонии, вызванной COVID-19, рубрики J12 - J18 используются в качестве дополнительных
                кодов. При летальных исходах рубрики XXI класса МКБ-10 не используются.<br>
                Первичная медицинская документация (Талон пациента, получающего медицинскую помощь в амбулаторных<br>
                условиях - форма N 025-1/у; Статистическая карта выбывшего из стационара - форма N 066/у) заполняется в
                установленном порядке. Дополнительные коды проставляются ручным способом в правом верхнем углу.<br>
              </b-col>

              <!-- Col: Payment Details -->
              <b-col
                  xl="2"
                  cols="12"
                  class="p-0 mt-xl-0 mt-2 d-flex justify-content-xl-end"
              >
                <div>
                  <h6 class="mb-2">
                    МКБ-10:
                  </h6>
                  <table>
                    <tbody>
                    <tr>
                      <td><span class="font-weight-bold">Z03.8</span></td>
                    </tr>
                    <tr>
                      <td><span class="font-weight-bold">Z03.8</span></td>
                    </tr>
                    <tr>
                      <td><span class="font-weight-bold">Z11.5</span></td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </b-col>
            </b-row>
          </b-card-body>


        </b-card>
      </b-col>
    </b-row>

    <invoice-sidebar-send-invoice/>
    <invoice-sidebar-add-payment/>
  </section>
</template>

<script>
import {ref, onUnmounted} from '@vue/composition-api'
import store from '@/store'
import {
  BRow, BCol, BCard, BCardBody, BTableLite, BCardText, BButton, BAlert, BLink, VBToggle,
} from 'bootstrap-vue'
import Logo from '@core/layouts/components/Logo.vue'
import Ripple from 'vue-ripple-directive'
import invoiceStoreModule from '@/views/apps/invoice/invoiceStoreModule'
import InvoiceSidebarSendInvoice from '@/views/apps/invoice/InvoiceSidebarSendInvoice.vue'
import InvoiceSidebarAddPayment from '@/views/apps/invoice/InvoiceSidebarAddPayment.vue'

export default {
  directives: {
    Ripple,
    'b-toggle': VBToggle,
  },
  components: {
    BRow,
    BCol,
    BCard,
    BCardBody,
    BTableLite,
    BCardText,
    BButton,
    BAlert,
    BLink,

    Logo,
    InvoiceSidebarAddPayment,
    InvoiceSidebarSendInvoice,
  },
  setup() {
    const invoiceData = ref(null)
    const paymentDetails = ref({})

    // Invoice Description
    // ? Your real data will contain this information
    const invoiceDescription = [
      {
        taskTitle: 'Native App Development',
        taskDescription: 'Developed a full stack native app using React Native, Bootstrap & Python',
        rate: '$60.00',
        hours: '30',
        total: '$1,800.00',
      },
      {
        taskTitle: 'UI Kit Design',
        taskDescription: 'Designed a UI kit for native app using Sketch, Figma & Adobe XD',
        rate: '$60.00',
        hours: '20',
        total: '$1200.00',
      },
    ]

    const INVOICE_APP_STORE_MODULE_NAME = 'app-invoice'

    // Register module
    if (!store.hasModule(INVOICE_APP_STORE_MODULE_NAME)) store.registerModule(INVOICE_APP_STORE_MODULE_NAME, invoiceStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(INVOICE_APP_STORE_MODULE_NAME)) store.unregisterModule(INVOICE_APP_STORE_MODULE_NAME)
    })

    store.dispatch('app-invoice/fetchInvoice', {id: 4987})
        .then(response => {
          invoiceData.value = response.data.invoice
          paymentDetails.value = response.data.paymentDetails
        })
        .catch(error => {
          if (error.response.status === 404) {
            invoiceData.value = undefined
          }
        })

    const printInvoice = () => {
      window.print()
    }

    return {
      invoiceData,
      paymentDetails,
      invoiceDescription,
      printInvoice,
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~@core/scss/base/pages/app-invoice.scss";
</style>

<style lang="scss">
@media print {

  // Global Styles
  body {
    background-color: transparent !important;
  }
  nav.header-navbar {
    display: none;
  }
  .main-menu {
    display: none;
  }
  .header-navbar-shadow {
    display: none !important;
  }
  .content.app-content {
    margin-left: 0;
    padding-top: 2rem !important;
  }
  footer.footer {
    display: none;
  }
  .card {
    background-color: transparent;
    box-shadow: none;
  }
  .customizer-toggle {
    display: none !important;
  }

  // Invoice Specific Styles
  .invoice-preview-wrapper {
    .row.invoice-preview {
      .col-md-8 {
        max-width: 100%;
        flex-grow: 1;
      }

      .invoice-preview-card {
        .card-body:nth-of-type(2) {
          .row {
            > .col-12 {
              max-width: 50% !important;
            }

            .col-12:nth-child(2) {
              display: flex;
              align-items: flex-start;
              justify-content: flex-end;
              margin-top: 0 !important;
            }
          }
        }
      }
    }

    // Action Right Col
    .invoice-actions {
      display: none;
    }
  }
}
</style>
