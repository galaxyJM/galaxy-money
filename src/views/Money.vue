<template>
  <Layout>
    <Types :value.sync="record.type"/>
    <Tags :all-tags.sync="allTags" @update:tags="onTagsChange"/>
    <Notes edit-name="备注：" placeholder="请输入你想说的话" @update:notes="onNotesChange"/>
    <NumberPad @update:number="onNumberChange" @saveToDb="saveToDb"/>
  </Layout>

</template>

<script lang="ts">
import Types from "@/components/Types.vue";
import NumberPad from "@/components/NumberPad.vue";
import Notes from "@/components/Notes.vue";
import Tags from "@/components/Tags.vue";
import Vue from "vue";
import {Component} from "vue-property-decorator";
import store from "@/store/index-c";

@Component(
    {components: {Tags, Notes, NumberPad, Types}}
)
export default class Money extends Vue {
  allTags = store.tagList;
  recordList = store.recordList;
  record: RecordItem = {
    type: '-',
    currentTag: [],
    notes: '',
    number: 0,
    createTime: ''
  };

  onTagsChange(currentTag: string[]) {
    this.record.currentTag = currentTag;
  }

  onNotesChange(notes: string) {
    this.record.notes = notes;
  }

  onNumberChange(number: string) {
    this.record.number = parseFloat(number);
  }

  saveToDb() {
    store.createRecord(this.record);
  }
}
</script>

<style lang="scss" scoped>
</style>