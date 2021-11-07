import tagListModel from "@/models/tagListModel";

export default {
    //封装tagList
    tagList: tagListModel.fetch(),  //将数据提升到全局
    createNewTag: (name: string) => {
        if (name === '') {
            window.alert('输入的标签值不能为空');
        }
        const error = tagListModel.create(name);
        if (error === 'duplicated') {
            window.alert('标签名已存在，请更改标签名');
        } else if (error === 'success') {
            window.alert('添加成功');
        }
    },  //将函数封装到全局
    removeTag: (id: string) => {
        tagListModel.delete(id);
        window.alert('删除成功！！');
    },
    updateTag: (id: string, name: string) => {
        tagListModel.update(id, name);
    },
};