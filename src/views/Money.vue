<template>
  <Layout>
    <Types :value.sync="record.type"/>
    <Tags :all-tags.sync="this.allTags" @update:tags="onTagsChange"/>
    <Notes @update:notes="onNotesChange"/>
    <NumberPad @update:number="onNumberChange"/>
  </Layout>

</template>

<script lang="ts">
import Types from "@/components/Types.vue";
import NumberPad from "@/components/NumberPad.vue";
import Notes from "@/components/Notes.vue";
import Tags from "@/components/Tags.vue";
import Vue from "vue";
import {Component} from "vue-property-decorator";


//定义一个新的类型
type Record = {
  type: string
  currentTag: string[]
  notes: string
  number: number
}

@Component(
    {components: {Tags, Notes, NumberPad, Types}}
)
export default class Money extends Vue {
  allTags = ['衣', '食', '住', '行'];
  record: Record = {
    type: '-',
    currentTag: [],
    notes: '',
    number: 0
  }

  onTagsChange(currentTag: string[]) {
    this.record.currentTag = currentTag;
  }

  onNotesChange(notes: string) {
    this.record.notes = notes;
  }

  onNumberChange(number: string) {
    this.record.number = parseFloat(number);
  }
}
</script>

<style lang="scss" scoped>
</style>