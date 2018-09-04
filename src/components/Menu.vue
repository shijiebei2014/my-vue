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
  methods: {
    handleClickMenu: function (name) { // on + 事件名(首字母大写)
      console.log('click menu:', name)
    }
  },
  render () {
    let component = []
    let genSubMenu = (ms) => {
      ms = Array.isArray(ms) ? ms : []
      ms.map((m) => {
        let {title, type, items, icon, ...others} = m
        if (type !== 'menu') { // 如果是菜单项
          // console.log('others:', {...others})
          // component.push(<MenuItem name={others.name} to={others.to} target={others.target} >{title}</MenuItem>)
          // https://github.com/vuejs/babel-plugin-transform-vue-jsx/issues/143,要加一层attrs
          component.push(<MenuItem {...{attrs: others}}>{title}</MenuItem>)
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
    genSubMenu(this.menu)
    return (
      <Menu theme="light" width="auto" onOn-select={this.handleClickMenu}>
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
  const {title, type, name, icon, items, to} = m
  if (type !== 'menu') { // 如果是菜单项
    component.push(<MenuItem name={name} to={to}>{title}</MenuItem>)
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
