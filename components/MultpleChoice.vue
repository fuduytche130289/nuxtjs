<template>
  <div>
    <div v-for="(dataItem,dataIndex) in data" :key="dataIndex">
      <form v-if="dataItem.type === 3" action="">
        <h1>Câu {{dataIndex+1}}:</h1>
        <p>{{dataItem.question}}</p>
        <input type="checkbox" value=""> {{dataItem.answers[0]}} <br>
        <input type="checkbox" value=""> {{dataItem.answers[1]}} <br>
        <input type="checkbox" value=""> {{dataItem.answers[2]}} <br>
        <input type="checkbox" value=""> {{dataItem.answers[3]}} <br>
      </form>
      <br>
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
