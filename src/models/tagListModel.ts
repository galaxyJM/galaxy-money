const localStorageName = 'tagList';
type Tag = {
    id: string
    name: string
}
type TagListModel = {
    tags: Tag[]
    fetch: () => Tag[]
    save: () => void
    create: (name: string) => 'success' | 'duplicated'
    //联合声明 该函数只能返回这两个字符串 防止外部使用的时候自己拼写错误造成影响
}
const tagListModel: TagListModel = {
    tags: [],
    fetch() {
        this.tags = JSON.parse(window.localStorage.getItem(localStorageName) || '[]');  //返回一个data变量 让外部操作更方便
        return this.tags;
    },
    save() {
        window.localStorage.setItem(localStorageName, JSON.stringify(this.tags));
    },
    create(name) {
        const names = this.tags.map(item => item.name)
        if (names.indexOf(name) >= 0) {
            return 'duplicated';
            //返回错误信息
        }
        this.tags.push({id:name,name:name});
        this.save();
        return 'success';
    },

};

export default tagListModel;