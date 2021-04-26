import { createRouter, createWebHashHistory } from 'vue-router'
// import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'AllPostPage',
    component: loadPage('AllPostPage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  // {
  //   path: '/posts',
  //   name: 'Posts',
  //   component: loadPage('AllPostPage')
  // },
  {
    path: '/profile/:id',
    name: 'AccountPage',
    component: loadPage('AccountPage')
  // NOTE this line prevents the user from loading this page if they are not loggedin
  // beforeEnter: authGuard
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
