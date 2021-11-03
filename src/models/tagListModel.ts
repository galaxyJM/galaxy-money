const localStorageName = 'tagList';

type TagListModel = {
    tags: string[]
    fetch: () => string[]
    save: () => void
    create: (name: string) => string
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
        this.tags.push(name);
        this.save();
        return name;
    },

};

export default tagListModel;