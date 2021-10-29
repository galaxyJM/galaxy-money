<template>
  <Layout>
    <Types/>
    <Tags/>
    <Notes/>
    <NumberPad/>
  </Layout>

</template>

<script lang="ts">
import Types from "@/components/Types.vue";
import NumberPad from "@/components/NumberPad.vue";
import Notes from "@/components/Notes.vue";
import Tags from "@/components/Tags.vue";

export default {
  name: "Money",
  components: {Tags, Notes, NumberPad, Types}
}
</script>

<style lang="scss" scoped>
</style>