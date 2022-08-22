
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: 'login', name: 'login', component: () => import('pages/Login.vue') },
      { path: '', name: 'loginDefault', component: () => import('pages/Login.vue') },
      { path: 'register', name: 'register', component: () => import('pages/Register.vue') },
      { path: 'email-confimation', name: 'emailConfimation', component: () => import('pages/EmailConfimation.vue') },
      { path: 'forgot-password', name: 'forgotPassword', component: () => import('pages/ForgotPassword.vue') },
      { path: 'forgot-sucess', name: 'forgotSucess', component: () => import('pages/EmailReset.vue') },
      { path: 'reset-password', name: 'reset-password', component: () => import('pages/ResetPassword.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', name: 'home', component: () => import('pages/Home.vue') }
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
