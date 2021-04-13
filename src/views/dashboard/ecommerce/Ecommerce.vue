<template>
  <section id="dashboard-ecommerce">
    <b-row class="match-height">
      <b-col xl="4" md="6">
        <analytics-congratulation :data="data.congratulations"/>
      </b-col>
      <b-col xl="8" md="6">
        <ecommerce-statistics :data="data.statisticsItems"/>
      </b-col>
    </b-row>

    <b-row class="match-height">
      <!-- Company Table Card -->
      <b-col lg="4">
        <ecommerce-company-table :table-data="data.companyTable"/>
      </b-col>
      <!--/ Company Table Card -->

      <!-- Developer Meetup Card -->
      <b-col lg="4" md="6">
        <ecommerce-meetup :data="data.meetup"/>
      </b-col>
      <!--/ Developer Meetup Card -->

      <b-col lg="4" md="6">
        <ecommerce-transactions :data="data.transactionData"/>
      </b-col>
    </b-row>


  </section>
</template>

<script>
import {BRow, BCol} from 'bootstrap-vue'

import {getUserData} from '@/auth/utils'
import EcommerceMedal from './EcommerceMedal.vue'
import EcommerceStatistics from './EcommerceStatistics.vue'
import EcommerceRevenueReport from './EcommerceRevenueReport.vue'
import EcommerceOrderChart from './EcommerceOrderChart.vue'
import EcommerceProfitChart from './EcommerceProfitChart.vue'
import EcommerceEarningsChart from './EcommerceEarningsChart.vue'
import EcommerceCompanyTable from './EcommerceCompanyTable.vue'
import EcommerceMeetup from './EcommerceMeetup.vue'
import EcommerceBrowserStates from './EcommerceBrowserStates.vue'
import EcommerceGoalOverview from './EcommerceGoalOverview.vue'
import EcommerceTransactions from './EcommerceTransactions.vue'
import AnalyticsCongratulation from "@/views/dashboard/analytics/AnalyticsCongratulation.vue";


export default {
  components: {
    BRow,
    BCol,
    AnalyticsCongratulation,
    EcommerceMedal,
    EcommerceStatistics,
    EcommerceRevenueReport,
    EcommerceOrderChart,
    EcommerceProfitChart,
    EcommerceEarningsChart,
    EcommerceCompanyTable,
    EcommerceMeetup,
    EcommerceBrowserStates,
    EcommerceGoalOverview,
    EcommerceTransactions,
  },
  data() {
    return {
      data: {},
    }
  },
  created() {
    // data
    this.$http.get('/ecommerce/data')
        .then(response => {
          this.data = response.data

          // ? Your API will return name of logged in user or you might just directly get name of logged in user
          // ? This is just for demo purpose
          const userData = getUserData()
          this.data.congratulations.name = userData.fullName.split(' ')[0] || userData.username
        })
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-ecommerce.scss';
@import '@core/scss/vue/libs/chart-apex.scss';
</style>
