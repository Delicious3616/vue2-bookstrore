<template>
  <div class="Announcement">
    <label>快讯</label>
    <span>
      {{kx.text}}
    </span>
  </div>
</template>
<style></style>
<script>
  export default{
    props:['kx']
//    data(){
//      return{
//        Announcement:'今日是上架图书全部八折',
//        slides:[
//          {id:1,img_url:'../fixtures/sliders/t1.svg'},
//          {id:2,img_url:'../fixtures/sliders/t2.svg'}
//        ]
//
//      }
//    }
  }
</script>
