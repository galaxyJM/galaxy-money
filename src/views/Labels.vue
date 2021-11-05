<template>
  <Layout>
    <Types/>
    <div class="tagsList">
      <router-link class="tag" :to="`/labels/edit/${tag.id}`" v-for="tag in tags" :key="tag.id">
        <span><Icon :name='tag.name'/>{{ tag.name }}</span>
        <Icon name='arrow'/>
      </router-link>
      <div @click="createNew">
        <span><Icon name='edit'/>新建标签</span>
        <Icon name='arrow'/>
      </div>
    </div>

  </Layout>
</template>

<script lang="ts">
import Types from "@/components/Types.vue";
import Vue from "vue";
import {Component} from "vue-property-decorator";
import tagListModel from "@/models/tagListModel.ts";


@Component(
    {components: {Types}}
)
export default class Labels extends Vue {
  tags = tagListModel.fetch();

  createNew() {
    const name = window.prompt('请输入你想创建的标签名称');
    if (name === '') {
      window.alert('输入的标签值不能为空');
    } else if (name) {
      const error = tagListModel.create(name);
      if (error === 'duplicated') {
        window.alert('标签名已存在，请更改标签名');
      } else if (error === 'success') {
        window.alert('添加成功');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/reset.scss";

.tagsList {
  display: flex;
  flex-direction: column;

  .tag {
    border-bottom: 1px solid dimgrey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    padding: 0 16px 0 16px;
    font-size: 20px;

    .icon {
      margin: 4px 10px 0 0;
    }
  }
  div {
    border-bottom: 1px solid dimgrey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    padding: 0 16px 0 16px;
    font-size: 15px;

    .icon {
      margin: 4px 10px 0 0;
    }
  }
}




</style>