<template>
  <Layout>
    <Types :value.sync="type"/>
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
import store from "@/store/index-c";

@Component(
    {components: {Types}}
)
export default class Labels extends Vue {
  tags = store.tagList;
  type = '-';

  createNew() {
    const name = window.prompt('请输入你想创建的标签名称');
    if (name) {
      store.createNewTag(name);
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