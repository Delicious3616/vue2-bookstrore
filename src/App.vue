<template>
  <transition name="slide-fade">
  <div>
    <Main></Main>
    <!--<Details></Details>-->

  </div>



  </transition>


  <!--<router-view></router-view>-->

</template>

<script type="text/ecmascript-6">
  import Main from './Main.vue'
  import Details from './books/details.vue'
  export default{
    components:{
      Details,Main
    }
  }
</script>

<style>
.slide-fade-enter-active{transition:all .3s ease}
.slide-fade-leave-active{transition:all .3s cubic-bezier(1.0,0.5,0.8,1.0)}
.slide-fade-enter,.slide-fade-leave-active{transform:translateX(-430px);opacity: 0}
</style>
