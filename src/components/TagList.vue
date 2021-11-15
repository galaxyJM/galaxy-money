<template>
  <div class="tagSvg">
    <div class="title">图标选择:</div>
    <ul v-if="tagType === '-'">
      <li @click="selectMe(item)" v-for="item in myOutTags"
          :key="item.id"
          :class="{selected: currentTag === item}">
        <Icon :name="item"/>
      </li>
    </ul>
    <ul v-else>
      <li @click="selectMe(item)" v-for="item in myInTags"
          :key="item.id"
          :class="{selected: currentTag === item}">
        <Icon :name="item"/>
      </li>
    </ul>
    <Button @click.native="addNewTag" button-name="完成"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from "@/components/Button.vue";
import {Component, Prop} from "vue-property-decorator";
import Notes from "@/components/Notes.vue";
import Tabs from "@/components/Tabs.vue";

@Component({components: {Button, TagList, Notes, Tabs}})
export default class TagList extends Vue {
  myOutTags = ['出租车', '医疗', '口红', '手机',
    '教育', '水果', '电影', '鞋子',
    '衣', '食', '住', '行'];
  myInTags = ['中奖', '商业', '股票', '房租', '工资'];
  @Prop({required: true}) tagType!: string;
  currentTag = '';

  addNewTag() {
    this.$emit('transTag', this.currentTag);
  }

  selectMe(iconName: string) {
    this.currentTag = iconName;
  }
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