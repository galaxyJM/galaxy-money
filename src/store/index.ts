import Vue from 'vue'
import Vuex from 'vuex';
import clone from "@/lib/clone";

Vue.use(Vuex)

const store2 = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[]
  },
  mutations: {
    fetchRecordList(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]');
    },
    createRecordItem(state,record){
      const deepClone: RecordItem = clone(record);
      //深拷贝 每次record发生改变时创建一个新的record(一个新的地址）
      deepClone.createTime = new Date().toLocaleString();
      state.recordList.push(deepClone);
      store2.commit('saveRecordItem');
    },
    saveRecordItem(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    fetchTag(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    },
  },
  actions: {
  },
  modules: {
  }
})

export default store2
