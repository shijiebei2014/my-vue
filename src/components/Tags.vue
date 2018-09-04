<template lang="html">
  <div class="">
    <p>标签详情</p>
    <!-- 动态传属性: :columns='tableData.columns' :data='tableData.data' -->
    <!-- 动态整体传属性: v-bind='tableData' -->
    <!-- https://cn.vuejs.org/v2/guide/components-props.html -->
    <XTable v-bind='tableData'></XTable>
    <!-- <XTree :data='treeData'/> -->
    <XTree :data='asyncTreeData' :loadData='loadData'/>
  </div>
</template>

<script>
import Vue from 'vue'
import XTable from '@/components/Table'
import XTree from '@/components/Tree'
import tableData from '../table.json'
import treeData from '../tree.json'

Vue.component('XTable', XTable)
Vue.component('XTree', XTree)
export default {
  name: 'XTag',
  data () {
    return {
      tableData: {...tableData, loading: true},
      treeData: treeData,
      asyncTreeData: [{
        title: 'parent',
        children: [],
        loading: false
      }]
    }
  },
  created: function () {
    // console.log({...tableData, loading: true})
    setTimeout(() => {
      this.tableData.loading = false
    }, 3000)
  },
  methods: {
    loadData: function (item, callback) {
      setTimeout(() => {
        callback([{
          title: 'children',
          loading: false,
          children: []
        }, {
          title: 'children',
          loading: false,
          children: []
        }, {
          title: 'children',
          loading: false,
          children: []
        }])
      }, 1000)
    }
  }
}
</script>

<style lang="css">
</style>
