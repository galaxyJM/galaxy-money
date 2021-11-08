<template>
  <Layout>
    <Tabs :data-source="recordTypeList" :value.sync="recordType" class-prefix="type"/>
    <Tabs :data-source="timeIntervalList" :value.sync="timeInterval" class-prefix="timeInterval"/>
    <div class="list">
      <ol>
        <li v-for="record in recordList" :key="record">
          {{record}}
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

  get recordList(){
    return (this.$store.state as RootState).recordList
  }


  created(){
    this.$store.commit('fetchRecordList')
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
  &.selected{
    background: white;
  }
  &.selected::after {content: none;}
}
</style>