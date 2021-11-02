<template>
  <Layout>
    <Types :value.sync="record.type"/>
    <Tags :all-tags.sync="this.allTags" @update:tags="onTagsChange"/>
    <Notes @update:notes="onNotesChange"/>
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


//定义一个新的类型
type Record = {
  type: string
  currentTag: string[]
  notes: string
  number: number
  createTime: string  //日期类
}


@Component(
    {components: {Tags, Notes, NumberPad, Types}}
)
export default class Money extends Vue {
  allTags = ['衣', '食', '住', '行'];
  recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
  record: Record = {
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
    const deepClone: Record = JSON.parse(JSON.stringify(this.record));
    //深拷贝 每次record发生改变时创建一个新的record(一个新的地址）
    deepClone.createTime = new Date().toLocaleString();
    this.recordList.push(deepClone);
  }

  @Watch('recordList')
  onRecordChange(recordList: Record) {
    window.localStorage.setItem('recordList', JSON.stringify(recordList));
  }
}
</script>

<style lang="scss" scoped>
</style>