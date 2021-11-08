const recordTypeList = Object.freeze( [
    {text: '支出', value: '-'},
    {text: '收入', value: '+'}
]);  //freeze可以让该常量不可被push等操作

export default recordTypeList;