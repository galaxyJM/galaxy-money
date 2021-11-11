<template>
  <Layout>
    <Tabs :data-source="recordTypeList" :value.sync="recordType" class-prefix="type"/>
    <Tabs :data-source="timeIntervalList" :value.sync="timeInterval" class-prefix="timeInterval"/>
    <div class="list">
      <h3></h3>
      <ol>
        <li v-for="(group,index) in result" :key="index">
          <h3 class="title">{{ group.title }}</h3>
          <ol>
            <li v-for="item in group.items" :key="item.number" class="recordList">
              <span>{{ tagString(item.currentTag) }}</span>
              <span class="notes">{{ item.notes }}</span>
              <span>￥{{ item.number }}</span>
            </li>
          </ol>
        </li>
      </ol>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue";
import recordTypeList from "@/constants/recordTypeList";
import timeIntervalList from "@/constants/timeIntervalList";


@Component({
  components: {Tabs}
})
export default class Statistics extends Vue {

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get result() {
    const {recordList} = this;
    type Items = RecordItem[];
    type hashTableValue = { title: string, items: Items }
    const hashTable: { [key: string]: hashTableValue } = {};
    for (let i = 0; i < recordList.length; i++) {
      const [data] = recordList[i].createTime.split('T');
      hashTable[data] = hashTable[data] || {title: data, items: []};
      hashTable[data].items.push(recordList[i]);
    }
    return hashTable;
  }

  tagString(tags: string[]) {
    return tags.length === 0 ? '无' : tags.join(',');
  }

  created() {
    this.$store.commit('fetchRecordList');
  }

  recordType = '-';
  recordTypeList = recordTypeList;
  timeInterval = 'month';
  timeIntervalList = timeIntervalList;
}

</script>

<style lang="scss" scoped>
::v-deep .timeInterval-tabs-item {
  height: 50px;
  font-size: 16px;
  border-top: 1px solid #bbbbbb;

  &.selected::after {
    content: '';
    background: black;
    height: 2px;
    bottom: 10px;
    left: 25%;
    width: 50%;
  }
}

::v-deep .type-tabs-item {
  &.selected {
    background: white;
  }

  &.selected::after {
    content: none;
  }
}

%item {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.title {
  background-color: #E5E5E5;
  @extend %item;
}

.recordList {
  @extend %item;
  border-bottom: 1px solid #eee;

  .notes {
    color: #999;
    margin-right: auto;
    font-size: 14px;
    padding-left: 10px;
    margin-top: 2px;
  }
}

</style>