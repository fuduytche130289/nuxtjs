<template>
  <div>
    heyyyy
    <button v-tooltip="'You have ' + count + ' new messages.'"></button>
  </div>
</template>

<script>
export default {
  name: "Test",
  data(){
    count: 1
  }
}
</script>

<style scoped>

</style>
