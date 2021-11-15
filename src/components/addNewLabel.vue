<template>
  <Layout>
    <Tabs :data-source="recordTypeList" :value.sync="recordType"/>
    <Notes edit-name="请输入标签名：" @update:notes="onNotesChange"/>
    <TagList :tag-type="recordType" @transTag="onIconChange"/>
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
  tagListRecord = {name: '', iconName: '', type: ''};

  onNotesChange(notes: string) {
    this.tagListRecord.name = notes;
  }

  onIconChange(iconName: string) {
    this.tagListRecord.iconName = iconName;
    this.tagListRecord.type = this.recordType;
    this.$store.commit('createTag', this.tagListRecord);
    this.$router.push('/labels');
  }
}
</script>

<style lang="scss" scoped>
::v-deep .notes {
  margin-top: 0;
}
</style>