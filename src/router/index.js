import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Config from '@/components/Config'
import Configs from '@/components/Configs'
import Tag from '@/components/Tag'
import Tags from '@/components/Tags'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [{
        path: 'tags',
        component: Tags
      }, {
        path: 'tag',
        component: Tag
      }, {
        path: 'config',
        component: Config
      }, {
        path: 'configs',
        component: Configs
      }]
    }
  ]
})
