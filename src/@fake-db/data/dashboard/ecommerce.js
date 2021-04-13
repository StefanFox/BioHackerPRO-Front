import mock from '@/@fake-db/mock'
/* eslint-disable global-require */
const data = {
  congratulations: {
    name: 'John',
    saleToday: '48900',
  },
  statisticsItems: [
    {
      icon: 'TrendingUpIcon',
      color: 'light-primary',
      title: '230k',
      subtitle: 'Что-то',
      customClass: 'mb-2 mb-xl-0',
    },
    {
      icon: 'UserIcon',
      color: 'light-info',
      title: '8.549k',
      subtitle: 'Что-то',
      customClass: 'mb-2 mb-xl-0',
    },
    {
      icon: 'BoxIcon',
      color: 'light-danger',
      title: '1.423k',
      subtitle: 'Что-то',
      customClass: 'mb-2 mb-sm-0',
    },
    {
      icon: 'DollarSignIcon',
      color: 'light-success',
      title: '$9745',
      subtitle: 'Что-то',
      customClass: '',
    },
  ],
  statisticsOrder: {
    series: [
      {
        name: '2020',
        data: [45, 85, 65, 45, 65],
      },
    ],
  },
  statisticsProfit: {
    series: [
      {
        data: [0, 20, 5, 30, 15, 45],
      },
    ],
  },
  earningsChart: {
    series: [53, 16, 31],
  },
  revenue: {
    years: ['2020', '2019', '2018'],
    price: '25,852',
    budget: '56,800',
    revenueReport: {
      series: [
        {
          name: 'Earning',
          data: [95, 177, 284, 256, 105, 63, 168, 218, 72],
        },
        {
          name: 'Expense',
          data: [-145, -80, -60, -180, -100, -60, -85, -75, -100],
        },
      ],
    },
    budgetChart: {
      series: [
        {
          data: [61, 48, 69, 52, 60, 40, 79, 60, 59, 43, 62],
        },
        {
          data: [20, 10, 30, 15, 23, 0, 25, 15, 20, 5, 27],
        },
      ],
    },
  },
  companyTable: [
    {
      title: 'Активированый уголь',
      subtitle: 'Описания',
      revenue: '4',
      sales: '16',
    },
  ],
  meetup: {
    mediaData: [
      { avatar: 'CalendarIcon', title: 'Сдача крови', subtitle: 'ПТ, 25 апреля, 10:41' },
      { avatar: 'CalendarIcon', title: 'Прием врача', subtitle: 'ПТ, 25 апреля, 15:41' },
    ],
    avatars: [
      { avatar: require('@/assets/images/portrait/small/avatar-s-9.jpg'), fullName: 'Billy Hopkins' },
      { avatar: require('@/assets/images/portrait/small/avatar-s-6.jpg'), fullName: 'Amy Carson' },
      { avatar: require('@/assets/images/portrait/small/avatar-s-8.jpg'), fullName: 'Brandon Miles' },
      { avatar: require('@/assets/images/portrait/small/avatar-s-7.jpg'), fullName: 'Daisy Weber' },
      { avatar: require('@/assets/images/portrait/small/avatar-s-20.jpg'), fullName: 'Jenny Looper' },
    ],
  },
  goalOverview: {
    completed: '786,617',
    inProgress: '13,561',
    series: [83],
  },
  transactionData: [
    {
      mode: 'Wallet',
      types: 'Starbucks',
      avatar: 'PocketIcon',
      avatarVariant: 'light-primary',
      payment: '-$74',
      deduction: true,
    },
    {
      mode: 'Bank Transfer',
      types: 'Add Money',
      avatar: 'CheckIcon',
      avatarVariant: 'light-success',
      payment: '+$480',
      deduction: false,
    },
    {
      mode: 'Paypal',
      types: 'Add Money',
      avatar: 'DollarSignIcon',
      avatarVariant: 'light-danger',
      payment: '+$480',
      deduction: false,
    },
    {
      mode: 'Mastercard',
      types: 'Ordered Food',
      avatar: 'CreditCardIcon',
      avatarVariant: 'light-warning',
      payment: '-$23',
      deduction: true,
    },
    {
      mode: 'Transfer',
      types: 'Refund',
      avatar: 'TrendingUpIcon',
      avatarVariant: 'light-info',
      payment: '+$98',
      deduction: false,
    },
  ],
}
/* eslint-disable global-require */
mock.onGet('/ecommerce/data').reply(() => [200, data])
