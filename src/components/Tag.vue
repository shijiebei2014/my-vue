<template lang="html">
  <div class="">
    <p>新增标签</p>
    <XSpin :showy='showy'></XSpin>
    <Form :model="tag">
      <FormItem label='签名'>
        <Input v-model='tag.name' placeholder='签名'/>
      </FormItem>
      <FormItem label='描述'>
        <Input v-model='tag.description' type='textarea' placeholder='描述'/>
      </FormItem>
      <Button @click="handleSubmit">提交</Button>
    </Form>
  </div>
</template>

<script>
import Vue from 'vue'
import {Form, FormItem, Input, Button, Message} from 'iview'
import XSpin from '@/components/Spin'

Vue.component('Form', Form)
Vue.component('Input', Input)
Vue.component('Button', Button)
Vue.component('FormItem', FormItem)
Vue.component('XSpin', XSpin)

Vue.prototype.$Message = Message

export default {
  data () {
    return {
      'showy': false,
      tag: {
        name: '',
        description: ''
      }
    }
  },
  methods: {
    handleSubmit: function () {
      this.showy = true
      if (!this.tag.name || !this.tag.description) {
        setTimeout(() => {
          this.showy = false
          this.$Message.error(`请指定签名和描述`)
        }, 5000)
      }
      // this.showy = false
      // this.$Message.success(`新建成功`)
      // this.tag = {
      //   name: '',
      //   description: ''
      // }
    }
  }
}
</script>

<style lang="css">
</style>
