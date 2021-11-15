<template>
  <Layout>
    <Tabs :data-source="recordTypeList" :value.sync="recordType"/>
    <Notes edit-name="请输入标签名："/>
    <TagList :tag-type="recordType"/>
    <button>
    </button>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue";
import recordTypeList from "@/constants/recordTypeList";
import Notes from "@/components/Notes.vue";
import TagList from "@/components/TagList.vue";

@Component({
  components: {TagList, Notes, Tabs}
})
export default class addNewLabel extends Vue {
  recordType = '-';
  recordTypeList = recordTypeList;
}
</script>

<style lang="scss" scoped>
::v-deep .notes{
  margin-top: 0;
}
</style>