<template>
  <div>
    <div v-for="(dataItem,dataIndex) in data" :key="dataIndex">
      <form v-if="dataItem.type === 4" action="">
        <h1>Câu 5:</h1>
        <p>{{dataItem.question}}</p>
        <select class="border-2 border-black">
          <option v-for="(optionItem, optionIndex) in dataItem.answers" :key="optionIndex">{{optionItem}}</option>
        </select>
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
