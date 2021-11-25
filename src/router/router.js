import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import JobDetails from "@/components/JobDetails"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/position/:id',
      name: 'description',
      component: JobDetails
    }
  ],
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
})
