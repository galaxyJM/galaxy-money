<template>
  <div class="tags">
    <ul>
      <li v-for="item in allTags" :key="item.id" @click="toggle(item.name)"
          :class="{selected: currentTags.indexOf(item.name)>=0}">
        <!--表示当currentTags.indexOf(item)>=0这个表达式为true时，selected属性添加上去-->
        <Icon :name="item.iconName"/>
        {{ item.name }}
      </li>
    </ul>
    <router-link to="/labels">
      <Button button-name="编辑标签列表"/>
    </router-link>
  </div>
</template>

<script lang="ts">
// 一次性引入整个目录
import Vue from "vue";
import {Component, Prop, Watch} from "vue-property-decorator";
import Button from "@/components/Button.vue";

@Component({
  components: {Button}
})
export default class Tags extends Vue {
  @Prop(Array) allTags: Tag[] | undefined;
  currentTags: string[] = [];

  @Watch('currentTags')
  onCurrentTagsChange(currentTags: string) {
    this.$emit('update:tags', currentTags);
  }

  toggle(item: string) {
    const index = this.currentTags.indexOf(item);
    if (index >= 0) {
      this.currentTags.splice(index, 1);
    } else {
      this.currentTags.push(item);
    }
  }

  // addNew() {
  //   const name = window.prompt('请输入标签名');
  //   if (name === '') {
  //     window.alert('输入内容不能为空')
  //   } else if (this.allTags) {
  //     this.$emit('update:allTags', [...this.allTags, name]);
  //   }
  // }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/reset.scss";

.tags {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;

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

  button {
    outline: none;
    border-style: none;
    border-radius: 4px;
    font-size: 14px;
    background: #66b1ff;
    line-height: 1;
    padding: 10px;
    margin-top: 20px;

    a {
      color: white;
    }
  }
}

</style>