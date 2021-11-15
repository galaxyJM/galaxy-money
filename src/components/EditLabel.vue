<template>
  <Layout>
    <div class="titleBox">
      <Icon name="left" @click="goBack"/>
      <div class="title">编辑标签</div>
    </div>
    <Notes :value="wantEditTag.name" @update:notes="onTagChange" edit-name="标签名" placeholder="请输入标签名"/>
    <div class="tagSvg">
      <div class="title">图标选择:</div>
      <ul v-if="wantEditTag.type === '-'">
        <li @click="selectMe(item)"
            v-for="item in myOutTags"
            :key="item.id"
            :class="{selected: currentTag === item}">
          <Icon :name="item"/>
        </li>
      </ul>
      <ul v-else>
        <li @click="selectMe(item)"
            v-for="item in myInTags"
            :key="item.id"
            :class="{selected: currentTag === item}">
          <Icon :name="item"/>
        </li>
      </ul>
    </div>
    <div class="container">
      <button @click="deleteTag">
        删除标签
      </button>
      <button @click="changeIconName">
        完成编辑
      </button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import Notes from "@/components/Notes.vue";
import TagList from "@/components/TagList.vue";


@Component({
  components: {TagList, Notes}
})
export default class EditLabel extends Vue {
  myOutTags = ['出租车', '医疗', '口红', '手机',
    '教育', '水果', '电影', '鞋子',
    '衣', '食', '住', '行'];
  myInTags = ['中奖', '商业', '股票', '房租', '工资'];
  currentTag = '';
  currentName = '';

  //vue原生自带的ts支持中计算属性的写法
  get wantEditTag() {
    return this.$store.state.wantEditTag;
  }

  selectMe(iconName: string) {
    this.currentTag = iconName;
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
    this.currentTag = this.wantEditTag.iconName;
    this.currentName = this.wantEditTag.name;
  }

  onTagChange(name: string) {
    this.currentName = name;
  }

  deleteTag() {
    if (this.wantEditTag) {
      this.$store.commit('removeTag', this.wantEditTag.id);
      window.alert('删除成功!');
      this.$router.push('/labels');
    }
  }
  changeIconName(){
    if (this.wantEditTag) {
      const editContent = {'id': this.wantEditTag.id, 'name': this.currentName,'iconName': this.currentTag};
      this.$store.commit('updateTag', editContent);
      this.goBack();
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

.tagSvg {
  display: flex;
  flex-direction: column;
  height: 50vh;
  .title{
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


.container {
  display: flex;
  justify-content: space-evenly;
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