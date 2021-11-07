//将所有JSON操作封装成一个model（数据操作）

import clone from "@/lib/clone";

const localStorageName = 'recordList';
const recordListModel = {
    data:[] as RecordItem[],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageName) || '[]');
        return this.data
    },
    save() {
        window.localStorage.setItem(localStorageName, JSON.stringify(this.data));
    },
    createItem(record: RecordItem){
        const deepClone: RecordItem = clone(record);
        //深拷贝 每次record发生改变时创建一个新的record(一个新的地址）
        deepClone.createTime = new Date().toLocaleString();
        this.data.push(deepClone);
    }


};

export default recordListModel;