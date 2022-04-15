<template>
  <div>
    <div v-if="$fetchState.pending">Đang load</div>
    <div v-if="!$fetchState.pending && !$fetchState.error">

      <!-- New product -->
      <div class="container mx-auto">
        <h4 class="text-2xl font-bold mt-5">Sản phẩm mới nhất</h4>
        <div class="grid  grid-cols-1 md:grid-rows-2 md:grid-cols-4 mt-5 gap-10">

          <div class="bg-white shadow col-span-1"
               v-for="(cartsItem,cartsIndex) in homeData.lastProducts" :key="cartsIndex">

            <div>
              <router-link @click.native="scrollToTop" :to="{name:'detail-product',query:{id:cartsItem.id}} ">
                <img :src="cartsItem.image.full_image_path" class="z-10 w-full h-72 object-cover" alt="shoe">
              </router-link>
              <div class="space-y-4 mt-5 px-4">
                <div class="flex justify-between">
                  <h4 class="uppercase font-extrabold text-xl text-left">{{ cartsItem.name }}</h4>
                  <button><i class="fa-regular fa-heart text-xl"></i></button>
                </div>
                <p class="font-bold text-2xl text-red-500 text-left"><span>{{ cartsItem.price }}</span></p>
              </div>
              <div class="flex w-full mt-5 items-center justify-between pl-2">
                <div class="flex space-x-2 font-bold">
                  <span class="bi bi-plus cursor-pointer"><i class="fa-solid fa-plus"></i></span>
                  <input type="text" readonly class="border rounded w-12 text-center font-medium" value="1">
                  <span class="bi bi-dash cursor-pointer"><i class="fa-solid fa-minus"></i></span>
                </div>
                <div class="gap-1 flex">
                  <button class="p-3 text-md bg-gray-900 text-white">
                    Add To Cart
                  </button>
                  <button class="p-3 text-md bg-gray-900 text-white"><i class="fa-solid fa-share-nodes"></i></button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>

</template>

<script>

export default {
  data() {
    return {
      homeData: {},
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
  async fetch() {
    if (process.client) {
      //thực thi các lệnh thuộc về trình duyệt
    }
    this.homeData =await this.$repositories.home.getHome(); //await this.$axios.get('/home');
    console.log(this.homeData)
  },
  fetchOnServer: false


}
</script>

<style scoped>

</style>
