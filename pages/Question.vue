<template>
  <div>
    <SingleChoice></SingleChoice> <br>
    <InputAnswer></InputAnswer>
    <MultpleChoice></MultpleChoice>
    <SingleSelect></SingleSelect> <br>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import InputAnswer from "@/components/InputAnswer";
import MultpleChoice from "@/components/MultpleChoice";
import SingleChoice from "@/components/SingleChoice";
import SingleSelect from "@/components/SingleSelect";

export default {
  components:{
    InputAnswer,
    MultpleChoice,
    SingleSelect,
    SingleChoice
  },
  computed: {
    ...mapState(['data'])
  }
}
</script>

<style scoped>

</style>
