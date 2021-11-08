import Vue from 'vue';
import Vuex from 'vuex';
import clone from "@/lib/clone";
import createID from "@/lib/createID";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        recordList: [],
        tagList: [],
        wantEditTag: undefined
    } as RootState,
    mutations: {
        fetchRecordList(state) {
            state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]');
        },
        createRecordItem(state, record) {
            const deepClone: RecordItem = clone(record);
            //深拷贝 每次record发生改变时创建一个新的record(一个新的地址）
            deepClone.createTime = new Date().toISOString();
            state.recordList.push(deepClone);
            store.commit('saveRecordItem');
        },
        saveRecordItem(state) {
            window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
        },
        fetchTag(state) {
            state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
        },
        createTag(state, name) {
            if (name === '') {
                window.alert('输入的标签值不能为空');
            }
            const names = state.tagList.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                window.alert('标签名已存在，请更改标签名');
                return 'duplicated';
                //返回错误信息
            }
            const id = createID().toString();
            state.tagList.push({id: id, name: name});
            store.commit('saveTag');
            window.alert('添加成功');
            return 'success';
        },
        saveTag(state) {
            window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
        },
        findWantEditTag(state, id: string) {
            //filter默认返回一个数组
            state.wantEditTag = state.tagList.filter(t => t.id === id)[0];
        },
        //mutations只能传入两个参数 所以第二个参数只能为一个对象
        updateTag(state, tag: { id: string, name: string }) {
            for (let i = 0; i < state.tagList.length; i++) {
                if (state.tagList[i].id === tag.id) {
                    console.log(tag.name);
                    state.tagList[i].name = tag.name;
                    store.commit('saveTag');
                }
            }
        },
        removeTag(state, id: string) {
            for (let i = 0; i < state.tagList.length; i++) {
                if (state.tagList[i].id === id) {
                    state.tagList.splice(i, 1);
                    store.commit('saveTag');
                }
            }
        }

    },
    actions: {},
    modules: {}
});

export default store;
