<script>
import Vue from 'vue'
import { Menu, Submenu, MenuItem, Icon } from 'iview'

export default {
  name: 'XMenu',
  props: ['menu'],
  data () {
    return {
    }
  },
  render () {
    let component = []
    let genSubMenu = function (ms) {
      ms = Array.isArray(ms) ? ms : []
      ms.map(function (m) {
        const {title, type, name, icon, items} = m
        if (type !== 'menu') { // 如果是菜单项
          component.push(<MenuItem name={name}>{title}</MenuItem>)
        } else {
          let start = component.length
          genSubMenu(items)
          let content = component.splice(start, component.length - start)
          component.push(<Submenu name={name}>
            <template slot="title">
              <Icon type={icon}></Icon>
              {title}
            </template>
            {content}
          </Submenu>)
        }
      })
    }
    // console.log(this.menu)
    genSubMenu(this.menu)
    return (
      <Menu theme="light" width="auto">
        {component}
      </Menu>
    )
  }
}

Vue.component('Menu', Menu)
Vue.component('Submenu', Submenu)
Vue.component('MenuItem', MenuItem)
Vue.component('Icon', Icon)

</script>
/*let genSubMenu = function (m) {
  const {title, type, name, icon, items} = m
  if (type !== 'menu') { // 如果是菜单项
    component.push(<MenuItem name={name}>{title}</MenuItem>)
  } else {
    let start = component.length
    items.map(function (item) {
      genSubMenu(item)
    })
    let content = component.splice(start, component.length - start)
    component.push(<Submenu name={name}>
      <template slot="title">
        <Icon type={icon}></Icon>
        {title}
      </template>
      {content}
    </Submenu>)
  }
}
this.menu.map(function (m) {
  genSubMenu(m)
})*/
