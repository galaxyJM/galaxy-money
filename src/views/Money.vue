<template>
  <Layout>
    <Tabs :data-source="recordTypeList" :value.sync="recordType" @update:recordType="onRecordTypeChange"/>
    <Tags :all-tags.sync="allTags" @update:tags="onTagsChange"/>
    <Notes edit-name="备注：" placeholder="请输入你想说的话" @update:notes="onNotesChange"/>
    <NumberPad @update:number="onNumberChange" @saveToDb="saveToDb"/>
  </Layout>

</template>

<script lang="ts">
import NumberPad from "@/components/NumberPad.vue";
import Notes from "@/components/Notes.vue";
import Tags from "@/components/Tags.vue";
import Vue from "vue";
import {Component} from "vue-property-decorator";
import recordTypeList from "@/constants/recordTypeList";
import Tabs from "@/components/Tabs.vue";

@Component(
    {
      components: {Tags, Notes, NumberPad, Tabs},
      computed: {
        recordList() {
          return this.$store.state.recordList;
        },
        allTags() {
          return this.$store.state.tagList;
        }
      }
    }
)
export default class Money extends Vue {

  recordType = '-';
  recordTypeList = recordTypeList;

  record: RecordItem = {
    type: '-',
    currentTag: [],
    notes: '',
    number: 0,
    createTime: ''
  };

  //生命周期
  created() {
    this.$store.commit('fetchRecordList');
    this.$store.commit('fetchTag');
  }

  onRecordTypeChange(recoedType: string) {
    this.record.type = recoedType;
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
    this.$store.commit('createRecordItem', this.record);
  }
}
</script>

<style lang="scss" scoped>
</style>