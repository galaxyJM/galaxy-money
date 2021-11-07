//全局变量太多 太依赖window 需要继续优化
//封装tagList
import tagListStore from "@/store/tagListStore";
import recordListStore from "@/store/recordListStore";

const store = {
    ...tagListStore,
    ...recordListStore
};

export default store;

// type store = {
//     tagList: Tag[]
//     createNewTag: (name: string) => void
//     removeTag: (id: string) => void
//     updateTag: TagListModel['update']
//     recordList: RecordItem[]
//     createRecord: (record: RecordItem) => void
// }


