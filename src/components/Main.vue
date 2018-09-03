<template>
<div class="layout">
  <Layout>
    <Layout>
      <Sider hide-trigger :style="{background: '#fff'}">
        <XMenu :menu='menu'/>
      </Sider>
      <Layout :style="{padding: '0 24px 24px'}">
        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
</div>
</template>

<script>
import Vue from 'vue'
import XMenu from '@/components/Menu'
import menuData from '../menu.json'
import { Layout, Sider, Header, Content, Menu, Submenu, MenuItem, Icon } from 'iview'
Vue.component('Layout', Layout)
Vue.component('Sider', Sider)
Vue.component('Header', Header)
Vue.component('Content', Content)
Vue.component('Menu', Menu)
Vue.component('Submenu', Submenu)
Vue.component('MenuItem', MenuItem)
Vue.component('Icon', Icon)
Vue.component('XMenu', XMenu)

export default {
  name: 'Main',
  data () {
    return {
      msg: '123',
      menu: menuData
    }
  }
}
</script>

<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>
