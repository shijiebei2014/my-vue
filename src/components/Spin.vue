<template>
  <Spin class='demo-spin-container' v-if='showy' size='large' fix></Spin>
</template>

<script>
import Vue from 'vue'
import {Spin} from 'iview'

Vue.component('Spin', Spin)
export default {
  name: 'XSpin',
  props: {
    'showy': {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style>
  .demo-spin-container{
    /* display: inline-block;
    width: 200px;
    height: 100px;
    position: relative;
    border: 1px solid #eee; */
  }
</style>
