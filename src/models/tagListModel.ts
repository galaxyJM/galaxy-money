import createID from "@/lib/createID";

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
    update: (id: string, name: string) => void
    delete: (id: string) => void
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
        const names = this.tags.map(item => item.name);
        if (names.indexOf(name) >= 0) {
            return 'duplicated';
            //返回错误信息
        }
        const id = createID().toString();
        this.tags.push({id: id, name: name});
        this.save();
        return 'success';
    },
    update(id, name) {
        for (let i = 0; i < this.tags.length; i++) {
            if (this.tags[i].id === id) {
                this.tags[i].name = name;
                this.save();
            }
        }
    },
    delete(id) {
        for (let i = 0; i < this.tags.length; i++) {
            if (this.tags[i].id === id) {
                this.tags.splice(i,1)
                this.save();
            }
        }
    }
};

export default tagListModel;