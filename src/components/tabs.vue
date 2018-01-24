<template>
  <div class="tabs">
    <ul>

      <router-link :to="{name:'Home'}" tag="li" exact replace>
        <div>
          <img src="../assets/images/home.svg" alt="">
        </div>
        <div>首页</div>
      </router-link>

      <router-link :to="{name:'Categories'}" tag="li">
        <div>
          <img src="../assets/images/category.svg" alt="">
        </div>
        <div>分类</div>
      </router-link>

      <router-link :to="{name:'ShoppingCart'}" tag="li">
        <div>
          <img src="../assets/images/cart.svg" alt="">
        </div>
        <div>购物车</div>
      </router-link>

      <router-link :to="{name:'Me'}" tag="li">
        <div>
          <img src="../assets/images/me.svg" alt="">
        </div>
        <div>我</div>
      </router-link>

    </ul>

  </div>
</template>
<script>
  import './tabs.less'
  export default {

  }
</script>
