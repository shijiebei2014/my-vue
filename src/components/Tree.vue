<template lang="html">
  <Tree :data='data' :load-data='loadData' show-checkbox/>
</template>

<script>
import Vue from 'vue'
import {Tree} from 'iview'

Vue.component('Tree', Tree)
export default {
  name: 'XTree',
  props: {
    'data': {
      required: true,
      type: Array
    },
    'loadData': {
      type: Function
    }
  }
}
</script>

<style lang="css">
</style>
