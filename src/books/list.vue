<template>
  <div class="section">
    <div class="book-list">
      <div class="header">
        <div class="heading">{{heading}}</div>
        <div class="more">更多</div>
      </div>
      <div class="book-items">
          <div class="book" v-for="book in books" @click="$emit('onBookSelect',book)">
            <div class="cover">
              <img :src="book.img_url" alt="">
            </div>
            <div class="title">{{book.title}}</div>
            <div class="authors">{{book.authors | join}}</div>
       </div>


      </div>

    </div>
    <!--<div class="book-list">-->
      <!--<div class="header">-->
        <!--<div class="heading">编辑推荐</div>-->
        <!--<div class="more">更多</div>-->
      <!--</div>-->
      <!--<div class="book-items">-->
        <!--<div class="book" v-for="book in recommended">-->
          <!--<div class="cover">-->
            <!--<img :src="book.img_url" alt="">-->
          <!--</div>-->
          <!--<div class="title">{{book.title}}</div>-->
          <!--<div class="authors">{{book.authors | join}}</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>
<style></style>
<script>
  import './list.less'
  export default{
    props:[
      'heading','books'
    ],
    filters:{
      join(args){
        return args.join(',')
      }
    }
  }
</script>
