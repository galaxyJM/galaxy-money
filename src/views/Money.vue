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
import tagListModel from "@/models/tagListModel";

@Component(
    {components: {Tags, Notes, NumberPad, Types}}
)
export default class Money extends Vue {
  allTags = tagListModel.fetch();
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
    const deepClone: RecordItem = recordListModel.clone(this.record);
    //深拷贝 每次record发生改变时创建一个新的record(一个新的地址）
    deepClone.createTime = new Date().toLocaleString();
    this.recordList.push(deepClone);
  }

  @Watch('recordList')
  onRecordChange(recordList: RecordItem[]) {
    recordListModel.save(recordList)
  }
}
</script>

<style lang="scss" scoped>
</style>