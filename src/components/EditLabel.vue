<template>
  <Layout>
    <div class="titleBox">
      <Icon name="left" @click="goBack"/>
      <div class="title">编辑标签</div>
    </div>
    <Notes :value="wantEditTag.name" @update:notes="onTagChange" edit-name="标签名" placeholder="请输入标签名"/>
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
  //vue原生自带的ts支持中计算属性的写法
  get wantEditTag() {
    return this.$store.state.wantEditTag;
  }

  //生命周期
  created() {
    const id = this.$route.params.id;
    //this.$route.params.id就是指向这个组件的路由路径里的:id
    //可以获取到用户访问的url的路径参数
    this.$store.commit('fetchTag');
    //如果直接进入这个页面，由于此时页面中的tagList并不存在
    //所以相应的wantEditTag也不存在，会直接进入404页面，故应该先fetch一下
    this.$store.commit('findWantEditTag', id);
    if (!this.wantEditTag) {
      this.$router.replace('/404');  //用replace让用户可以回退
    }
  }

  onTagChange(name:string) {
    if (this.wantEditTag) {
      const editContent = {'id':this.wantEditTag.id,'name':name}
      this.$store.commit('updateTag', editContent);
    }
  }

  deleteTag() {
    if (this.wantEditTag) {
      this.$store.commit('removeTag', this.wantEditTag.id);
      window.alert('删除成功!');
      this.$router.push('/labels');
    }
  }

  goBack() {
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