<template>
  <Layout>
    <div class="titleBox">
      <Icon name="left"/>
      <div class="title">编辑标签</div>
    </div>
    <Notes edit-name="标签名" placeholder="请输入标签名"/>
    <div class="container">
      <button>
        删除标签
      </button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import tagListModel from "@/models/tagListModel";
import Notes from "@/components/Notes.vue";

@Component({
  components: {Notes}
})
export default class EditLabel extends Vue {
  created() {
    const id = this.$route.params.id;
    //this.$route.params.id就是指向这个组件的路由路径里的:id
    //可以获取到用户访问的url的路径参数
    tagListModel.fetch();
    const tags = tagListModel.tags;
    const tag = tags.filter(t => t.id === id)[0]; //filter默认返回一个数组
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace('/404');  //用replace让用户可以回退
    }
  }

}
</script>

<style lang="scss" scoped>
.titleBox{
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 15px;
  font-size: 20px;
  .icon{
    position: absolute;
    left: 0;
    font-size: 20px;
    margin-top: 4px;
  }
}
.container{
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