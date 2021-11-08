const timeIntervalList = Object.freeze( [
    {text: '按月', value: 'month'},
    {text: '按周', value: 'week'},
    {text: '按天', value: 'day'}
]);  //freeze可以让该常量不可被push等操作

export default timeIntervalList;