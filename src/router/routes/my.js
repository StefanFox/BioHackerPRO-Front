export default [
  {
    path: '/login',
    name: 'auth-login',
    component: () => import('@/views/authentication/Login.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      redirectIfLoggedIn: true,
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/authentication/Register'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      redirectIfLoggedIn: true,
    },
  },
  {
    path: '/medical/form',
    name: 'medical-form',
    component: () => import('@/views/medical-card/questionnaire/QuestionnaireWrapper.vue'),
    meta: {
      pageTitle: 'Анкета',
      breadcrumb: [
        {
          text: 'Медицинская карта',
        },
        {
          text: 'Анкета',
          active: true,
        }
      ],
    }
  },
  {
    path: '/medical/analyzes',
    name: 'medical-analyzes',
    component: () => import('@/views/medical-card/Analyzes'),
    breadcrumb: [
      {
        text: 'Анализы',
      },
      {
        text: 'Анализы',
        active: true,
      }
    ],
  },
  {
    path: '/medical/risk',
    name: 'medical-risk',
    component: () => import('@/views/medical-card/Risk')
  },
  {
    path: '/medical/recommendations',
    name: 'recommendations',
    component: () => import('@/views/medical-card/Recommendations')

  },
  {
    path: '/medical/doc-note',
    name: 'doc-note',
    component: () => import('@/views/medical-card/Doc-note')

  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('@/views/chat/Chat'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: 'chat-application',
    },
  }
]