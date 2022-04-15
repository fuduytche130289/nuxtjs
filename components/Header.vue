<template>
  <div class="w-full h-24 shadow-lg shadow-black-500/50 flex md:space-x-6 md:px-0 px-5 justify-between items-center ">
    <div class="md:order-1 order-2 w-32 pl-6">
      <router-link :to="{name:'list-product'}">
        <img src="@/assets/images/logo.png" alt="logo">
      </router-link>
    </div>
    <div class="md:order-2 order-1 pr-6 flex space-x-2 uppercase font-semibold items-center">
      <div class=".pr-4"><a href="">Home</a></div>
      <div class=".pr-4"><a href="">Danh mục</a></div>
      <div class=".pr-4">
        <router-link :to="{name:'signup'}">
          <a href="">Đăng ký</a>
        </router-link>
      </div>
      <div class=".pr-4">
        <router-link :to="{name:'login'}">
          <a href="">Đăng nhập</a>
        </router-link>
      </div>
      <div class="relative">
        <router-link :to="{name:'card-detail'}">
          <div class="w-8"><img src="@/assets/images/shopping.jpg" alt="shopping"></div>
          <div
            class="bg-red-400 text-white -top-4 -right-2 absolute rounded-full text-sm w-6 h-6 flex items-center justify-center cart-item-counter">
            0
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
