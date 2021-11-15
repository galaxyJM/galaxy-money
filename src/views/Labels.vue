<template>
  <Layout>
    <Tabs :data-source="recordTypeList" :value.sync="recordType"/>
    <div class="tagsList">
      <router-link class="tag" :to="`/labels/edit/${tag.id}`" v-for="tag in tags" :key="tag.id">
        <span><Icon :name='tag.iconName'/>{{ tag.name }}</span>
        <Icon name='arrow'/>
      </router-link>
    </div>
    <div class="addButton">
      <router-link to="/labels/addNew">
        <Button button-name="新建标签"/>
      </router-link>
    </div>
  </Layout>
</template>

<script lang="ts">
import Tabs from "@/components/Tabs.vue";
import recordTypeList from "@/constants/recordTypeList";
import Vue from "vue";
import {Component} from "vue-property-decorator";
import Button from "@/components/Button.vue";

@Component(
    {
      components: {Button, Tabs},
      computed: {
        tags() {
          return this.$store.state.tagList;
        }
      }
    }
)
export default class Labels extends Vue {
  recordType = '-';
  recordTypeList = recordTypeList;

  //生命周期
  created() {
    this.$store.commit('fetchTag');
  }

  addNewTag() {
    const name = window.prompt('请输入你想创建的标签名称');
    if (name) {
      this.$store.commit('createTag', name);
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
.addButton{
  text-align: center;
}


</style>