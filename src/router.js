import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      meta:{
        rightShow:false
      },
      children:[
        {
          path:"about",
          name:"about",
          component:()=>import('./views/About.vue'),
          meta:{
            rightShow:true
          }

        }
      ]
    }
  ]
})
