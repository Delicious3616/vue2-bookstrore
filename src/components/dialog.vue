<template>
  <div class="dialog-wrapper" :class="{'open':is_open}">
    <div class="overlay" @click="$emit('dialogClose','close')"></div>
    <div class="dialog">
      <div class="heading">
        <slot name="heading">

        </slot>
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>

</template>
<style>

</style>
<script>
  import './dialog.less'
  export default{
    data(){
      return{
        is_open:false
      }
    },
    methods:{
      open(){
        if(!this.is_open){
          this.$emit('dislogOpen')
        }
        this.is_open=true
      },
      close(){
        if(this.is_open){
          this.$emit('dislogClose')
        }
        this.is_open=false
      }
    }
  }
</script>
