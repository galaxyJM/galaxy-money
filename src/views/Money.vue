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
import {Component, Watch} from "vue-property-decorator";
import recordListModel from "@/models/recordListModel";

@Component(
    {components: {Tags, Notes, NumberPad, Types}}
)
export default class Money extends Vue {
  allTags = window.tagList;
  recordList = recordListModel.fetch();
  record: RecordItem = {
    type: '-',
    currentTag: [],
    notes: '',
    number: 0,
    createTime: ''
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

  saveToDb() {
    recordListModel.createItem(this.record)
  }

  @Watch('recordList')
  onRecordChange() {
    recordListModel.save()
  }
}
</script>

<style lang="scss" scoped>
</style>