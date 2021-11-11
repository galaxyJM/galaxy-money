<template>
  <Layout>
    <Tabs :data-source="recordTypeList" :value.sync="recordType" class-prefix="type"/>
    <Tabs :data-source="timeIntervalList" :value.sync="timeInterval" class-prefix="timeInterval"/>
    <div class="list">
      <h3></h3>
      <ol>
        <li v-for="(group,index) in groupedList" :key="index">
          <h3 class="title">{{ beautify(group.title) }}</h3>
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
import dayjs from "dayjs";
import clone from "@/lib/clone";

@Component({
  components: {Tabs}
})
export default class Statistics extends Vue {

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get groupedList() {
    const {recordList} = this;
    if(recordList.length === 0){return [];}
    //因为对象是无序的 所以为了排序hash应该是一个数组
    //用两个数相减来比较大小
    //sort这个api会直接在原数组上进行更改，所以要进行一个深拷贝！
    const newList = clone(recordList).sort((a,b) => dayjs(a.createTime).valueOf()-dayjs(b.createTime).valueOf())
    const result = [{title: dayjs(newList[0].createTime).format('YYYY-MM-DD'),items: [newList[0]]}]
    for(let i=1;i<newList.length;i++){
      const lastTime = result[result.length - 1]
      const now = newList[i]
      if(dayjs(now.createTime).isSame(lastTime.title,'day')){
        lastTime.items.push(now)
      }else{
        result.push({title: dayjs(now.createTime).format('YYYY-MM-DD'),items: [now]})
      }
    }
    return result;
  }

  tagString(tags: string[]) {
    return tags.length === 0 ? '无' : tags.join(',');
  }

  beautify(string: string) {
    const now = dayjs();
    const time = dayjs(string);
    if (time.isSame(now, 'day')) {
      return '今天';
    } else if (time.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (time.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (time.isSame(now, 'year')) {
      return time.format('M月D日');
    } else {
      return time.format('YYYY年M月D日');
    }
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