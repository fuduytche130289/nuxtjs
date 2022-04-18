<template>
  <div>
    <div v-for="(dataItem,dataIndex) in data" :key="dataIndex">
      <form v-if="dataItem.type === 2" action="">
        <h1>Câu 2:</h1>
        <p>{{dataItem.question}}</p>
        <textarea class="border-4 border-black w-5/12 h-40"></textarea>
      </form>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  computed: {
    ...mapState(['data'])
  }
}
</script>

<style scoped>

</style>
