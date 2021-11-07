import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from "@/components/Nav.vue";
import Notfound from "@/components/Notfound.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
import tagListModel from "@/models/tagListModel";


Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Notfound', Notfound);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

window.tagList = tagListModel.fetch();  //将数据提升到全局
window.createNewTag = (name: string) => {
    if (name === '') {
        window.alert('输入的标签值不能为空');
    }
    const error = tagListModel.create(name);
    if (error === 'duplicated') {
        window.alert('标签名已存在，请更改标签名');
    } else if (error === 'success') {
        window.alert('添加成功');
    }
};  //将函数封装到全局

window.removeTag = (id: string)=>{
    tagListModel.delete(id);
    window.alert('删除成功！！')
}
window.updateTag = (id,name)=>{
    tagListModel.update(id,name);
}


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
