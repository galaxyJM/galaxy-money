<template>
  <div class="tagSvg">
    <div class="title">图标选择:</div>
    <ul v-if="tagType === '-'">
      <li v-for="item in myOutTags" :key="item.id">
        <Icon :name="item"/>
      </li>
    </ul>
    <ul v-else>
      <li v-for="item in myInTags" :key="item.id">
        <Icon :name="item"/>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from "vue-property-decorator";

@Component({})
export default class TagList extends Vue {
  myOutTags = ['出租车', '医疗', '口红', '手机',
    '教育', '水果', '电影', '鞋子',
    '衣', '食', '住', '行'];
  myInTags = ['中奖', '商业', '股票', '房租', '工资'];
  @Prop({required: true}) tagType!: string;
}
</script>

<style lang="scss" scoped>
.tagSvg {
  display: flex;
  flex-direction: column;
  height: 50vh;

  .title {
    color: #666;
    margin-left: 12px;
    margin-top: 12px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    li {
      display: flex;
      width: 20%;
      flex-direction: column;
      align-items: center;
      font-size: 16px;
      margin-top: 30px;

      .icon {
        font-size: 36px;
      }

      &.selected {
        color: skyblue;
      }
    }
  }

}
</style>