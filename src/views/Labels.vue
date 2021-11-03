<template>
  <Layout>
    <Types/>
    <ol class="tagsList">
      <li>
        <span><Icon name='衣'/>衣</span>
        <Icon name='arrow'/>
      </li>
      <li>
        <span><Icon name='食'/>食</span>
        <Icon name='arrow'/>
      </li>
      <li>
        <span><Icon name='住'/>住</span>
        <Icon name='arrow'/>
      </li>
      <li>
        <span><Icon name='行'/>行</span>
        <Icon name='arrow'/>
      </li>
      <li>
        <span><Icon name='edit'/>新建标签</span>
        <Icon name='arrow'/>
      </li>
    </ol>

  </Layout>
</template>

<script lang="ts">
import Types from "@/components/Types.vue";
import Vue from "vue";
import {Component} from "vue-property-decorator";
import tagListModel from "@/models/tagListModel";

tagListModel
@Component(
    {components: {Types}}
)
export default class Labels extends Vue {
  tagListModel
}
</script>

<style lang="scss" scoped>
.tagsList {
  display: flex;
  flex-direction: column;
  li {
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
    &:last-child{
      font-size: 15px;
    }
  }
}


</style>