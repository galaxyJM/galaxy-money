<template>
  <Layout>
    <div class="titleBox">
      <Icon name="left" @click="goback"/>
      <div class="title">编辑标签</div>
    </div>
    <Notes :value="tag.name" @update:notes="onTagChange" edit-name="标签名" placeholder="请输入标签名"/>
    <div class="container">
      <button @click="deleteTag">
        删除标签
      </button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import Notes from "@/components/Notes.vue";

@Component({
  components: {Notes}
})
export default class EditLabel extends Vue {
  tag?: Tag = undefined;

  //生命周期
  created() {
    const id = this.$route.params.id;
    //this.$route.params.id就是指向这个组件的路由路径里的:id
    //可以获取到用户访问的url的路径参数
    const tags = window.tagList;
    const tag = tags.filter(t => t.id === id)[0]; //filter默认返回一个数组
    if (tag) {
      this.tag = tag;
    } else {
      this.$router.replace('/404');  //用replace让用户可以回退
    }
  }

  onTagChange(name: string) {
    if (this.tag) {
      window.updateTag(this.tag.id, name);
    }
  }

  deleteTag() {
    if (this.tag) {
      window.removeTag(this.tag.id);
      this.$router.push('/labels');
    }
  }

  goback() {
    this.$router.push('/labels');
  }
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