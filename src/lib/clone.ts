function clone<outType>(data: outType):outType {
    //<outType>可以接收外部的类型 之后参数的类型和返回值的类型就可以这样写
    return JSON.parse(JSON.stringify(data));
}

export default clone;