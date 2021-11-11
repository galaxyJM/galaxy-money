<template>
  <div>
    <ul class="tabs">
      <li class="tabs-item" :class="{selected: item.value === value,[classPrefix + '-tabs-item']: classPrefix}"
          v-for="item in dataSource"
          :key="item.value"
          @click="changeValue(item.value)">{{item.text}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop, Watch} from "vue-property-decorator";

type dataSourceItem = {
  text: string
  value: string
}

@Component
export default class Tabs extends Vue {
  @Prop(String) value!: string;  //表示外部选中的元素
  @Prop(String) classPrefix!: string; //加前缀使得外部可以方便控制组件内部的元素的CSS
  @Prop({required: true, type: Array}) dataSource!: dataSourceItem[];
  changeValue(value: string) {
    this.$emit('update:value', value);
  }
  @Watch('value')
  onCurrentTagsChange(value: string) {
    this.$emit('update:recordType', value);
  }

}
</script>

<style lang="scss" scoped>
@import "../assets/style/reset.scss";
.tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #c4c4c4;
    //通过一级选择器降低优先级 方便外面进行控制
    &-item {
      width: 50%;
      height: 64px;
      font-size: 24px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      &.selected::after {
        content: '';
        background: black;
        height: 4px;
        bottom: 10px;
        left: 25%;
        width: 50%;
        position: absolute;
      }
    }

}
</style>