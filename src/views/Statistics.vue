<template>
  <Layout>
    <Tabs :data-source="recordTypeList" :value.sync="recordType"/>
    <Tabs :data-source="timeIntervalList" :value.sync="timeInterval"/>
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
  recordType = '-';
  recordTypeList = recordTypeList;
  timeInterval = 'month';
  timeIntervalList = timeIntervalList;
}

</script>

<style lang="scss" scoped>

</style>