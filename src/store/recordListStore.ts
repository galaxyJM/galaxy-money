import recordListModel from "@/models/recordListModel";

export default {
    recordList: recordListModel.fetch(),  //将数据提升到全局
    createRecord: (record: RecordItem) => {
        recordListModel.createItem(record);
    }
}