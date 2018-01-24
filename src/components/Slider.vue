<template>
  <div class="swiper-container" ref="slider">
    <div class="swiper-wrapper" v-for="slide in slides">
      <router-link class="swiper-slide" tag="div" :to="{name:'BookDetails',params:{id:slide.id}}">
        <img   :src="slide.img_url" alt="">
      </router-link>
    </div>

    <div class="swiper-pagination" ref="pagination">

    </div>
  </div>
</template>
<style>
  .swiper-container {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .swiper-wrapper {
    height: 200px;
  }

  .swiper-slide img {
    max-width: 100%;
  }

  .swiper-slide {
    text-align: center;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
//  import BookDetail from './books/details.vue'
//  import t1 from '@/fixtures/sliders/t1.svg'
//  import t2 from '@/fixtures/sliders/t2.svg'
  export default{
      props:[
        'slides'
      ],
      data(){
        return{
//          slides:[
//            {id:1,img_url:t1},
//            {id:2,img_url:t2}
//          ]
        }
      },
      mounted(){
        new Swiper(this.$refs.slider,{
          pagination:this.$refs.pagination,
          paginationClickable:true,
          spaceBetween:30,
          centeredSliders:true,
          autoplay:2500,
          autoplayDisableOnInteraction:false
        })
      },
//      components:{BookDetail}

  }
</script>
