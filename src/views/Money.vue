<template>
  <Layout>
    <Types/>
    <Tags :all-tags.sync="allTags"/>
    <Notes/>
    <NumberPad/>
  </Layout>

</template>

<script lang="js">
import Types from "@/components/Types.vue";
import NumberPad from "@/components/NumberPad.vue";
import Notes from "@/components/Notes.vue";
import Tags from "@/components/Tags.vue";

export default {
  name: "Money",
  data(){
    return{
      allTags:['衣','食','住','行']

    }
  },
  components: {Tags, Notes, NumberPad, Types}
}
</script>

<style lang="scss" scoped>
</style>