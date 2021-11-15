<template>
  <Layout>
    <Tabs :data-source="recordTypeList" :value.sync="recordType"/>
    <Notes edit-name="请输入标签名："/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue";
import recordTypeList from "@/constants/recordTypeList";
import Notes from "@/components/Notes.vue";

@Component({
  components: {Notes, Tabs}
})
export default class addNewLabel extends Vue {
  recordType = '-';
  recordTypeList = recordTypeList;
}
</script>

<style lang="scss" scoped>
.titleBox {
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 15px;
  font-size: 20px;

  .icon {
    position: absolute;
    left: 0;
    font-size: 20px;
    margin-top: 4px;
  }
}

.container {
  text-align: center;
}

button {
  outline: none;
  border-style: none;
  border-radius: 4px;
  font-size: 14px;
  background: #66b1ff;
  line-height: 1;
  padding: 10px;
  margin-top: 20px;
  color: white;
}

</style>