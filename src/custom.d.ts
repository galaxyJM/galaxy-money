type RecordItem = {
    type: string
    currentTag: string[]
    notes: string
    number: number
    createTime: string  //日期类
}
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
//全局类型定义
//定义一个新的类型


