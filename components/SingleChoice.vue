<template>
  <div>
    <div v-for="(dataItem,dataIndex) in data" :key="dataIndex">
      <form v-if="dataItem.type === 1" action="">
        <h1>Câu 1:</h1>
        <p>{{dataItem.question}}</p>
        <input type="radio" value=""> {{dataItem.answers[0]}} <br>
        <input type="radio" value=""> {{dataItem.answers[1]}} <br>
        <input type="radio" value=""> {{dataItem.answers[2]}} <br>
        <input type="radio" value=""> {{dataItem.answers[3]}} <br>
      </form>
    </div>
  </div>

</template>

<script>
import {mapState} from 'vuex';
export default {
  name: "SingleChoice",
  computed:{
    ...mapState(['data'])
  }
}
</script>

<style scoped>

</style>
