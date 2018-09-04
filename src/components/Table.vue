<template lang="html">
  <div class="">
    <Table highlight-row border stripe ref='selection' :row-class-name="rowClassName" :columns='columns' :data='data' :loading='loading'></Table>
    <Button @click="handleSelectAll(true)">Set all selected</Button>
    <Button @click="handleSelectAll(false)">Cancel all selected</Button>
  </div>
</template>

<script>
import {Table, Button, Modal} from 'iview'
import Vue from 'vue'

Vue.component('Table', Table)
Vue.component('Button', Button)
Vue.prototype.$Modal = Modal
export default {
  name: 'XTable',
  props: {
    'columns': {type: Array, required: true},
    'data': {type: Array, required: true},
    'loading': Boolean
  },
  created: function () {
    this.columns.push({
      title: 'Action',
      key: 'action',
      width: 150,
      align: 'center',
      render: (h, params) => {
        return h('div', [
          h('Button', {
            props: {
              type: 'primary',
              size: 'small'
            },
            style: {
              marginRight: '5px'
            },
            on: {
              click: () => {
                this.show(params.index)
              }
            }
          }, 'View'),
          h('Button', {
            props: {
              type: 'error',
              size: 'small'
            },
            on: {
              click: () => {
                this.remove(params.index)
              }
            }
          }, 'Delete')
        ])
      }
    })
  },
  data () {
    return {}
  },
  methods: {
    rowClassName (row, index) {
      // if (index === 1) {
      //     return 'demo-table-info-row'
      // } else if (index === 2) {
      //     return 'demo-table-error-row'
      // }
      return ''
    },
    handleSelectAll (status) {
      this.$refs.selection.selectAll(status)
    },
    show (index) {
      this.$Modal.info({
        title: 'Tag Info',
        content: `Name：${this.data[index].name}<br>Desc：${this.data[index].description}`
      })
    },
    remove (index) {
      this.data.splice(index, 1)
    }
  }
}
</script>

<style>
    .ivu-table .demo-table-info-row td{
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-error-row td{
        background-color: #ff6600;
        color: #fff;
    }
    .ivu-table td.demo-table-info-column{
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-name {
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-age {
        background-color: #ff6600;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-address {
        background-color: #187;
        color: #fff;
    }
</style>
