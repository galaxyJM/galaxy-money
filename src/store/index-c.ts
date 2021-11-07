//全局变量太多 太依赖window 需要继续优化
//封装tagList
import tagListModel from "@/models/tagListModel";
import recordListModel from "@/models/recordListModel";

type store = {
    tagList: Tag[]
    createNewTag: (name: string) => void
    removeTag: (id: string) => void
    updateTag: TagListModel['update']
    recordList: RecordItem[]
    createRecord: (record: RecordItem) => void
}

const store: store = {
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
    updateTag: (id, name) => {
        tagListModel.update(id, name);
    },

    //封装recordList
    recordList: recordListModel.fetch(),  //将数据提升到全局
    createRecord: (record) => {
        recordListModel.createItem(record);
    }
};

export default store;




