<template>
  <Layout>
    <div class="types">
      <ul>
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>

    <div class="labels">
      <ul>
        <li>
          <Icon name="cloth"/>
          衣
        </li>
        <li>
          <Icon name="food"/>
          食
        </li>
        <li>
          <Icon name="home"/>
          住
        </li>
        <li>
          <Icon name="walk"/>
          行
        </li>
        <li>
          <Icon name="cloth"/>
          衣
        </li>
        <li>
          <Icon name="food"/>
          食
        </li>
        <li>
          <Icon name="home"/>
          住
        </li>
        <li>
          <Icon name="walk"/>
          行
        </li>
        <li>
          <Icon name="cloth"/>
          衣
        </li>
        <li>
          <Icon name="food"/>
          食
        </li>
        <li>
          <Icon name="home"/>
          住
        </li>
        <li>
          <Icon name="walk"/>
          行
        </li>
      </ul>
      <button>
        新增标签
      </button>
    </div>

    <div class="notes">
      <label>
        <span>备注:</span>
        <input type="text" placeholder="请输入你想写的话">
      </label>
    </div>

    <div class="numberPad">
      <div class="number">100</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="ok">完成</button>
        <button class="zero">0</button>
        <button>.</button>

      </div>
    </div>


  </Layout>

</template>

<script lang="ts">
// 一次性引入整个目录
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  requireContext.keys().forEach(requireContext);
}

try {
  importAll(require.context('../assets/icons', true, /\.svg$/));
} catch (error) {
  console.log(error);
}


export default {
  name: "Money"
}
</script>

<style lang="scss" scoped>
@import "../assets/style/reset.scss";

.types {
  ul {
    display: flex;
    padding: 10px 0 10px 0;
    justify-content: space-around;
    background: #c4c4c4;
    position: relative;

    li {
      line-height: 64px;
      font-size: 24px;

      &.selected::after {
        content: '';
        background: black;
        height: 4px;
        bottom: 15px;
        left: 12.5%;
        width: 25%;
        position: absolute;
      }
    }
  }
}

.labels {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      display: flex;
      width: 20%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      margin-top: 30px;

      .icon {
        font-size: 36px;
      }
    }
  }

  button {
    outline: none;
    border-style: none;
    border-radius: 4px;
    font-size: 14px;
    background: #66b1ff;
    line-height: 1;
    padding: 10px;
    margin-top: 20px;
    color: white;
  }
}

.notes {
  border-top: 1px solid #f5f5f5;
  margin-top: 20px;

  label {
    display: flex;
    align-items: center;
    background: #f5f5f5;

    span {
      padding: 12px;
      display: block;
    }

    input {
      border: 0;
      margin-left: 5px;
      padding-top: 3px;
      background: #f5f5f5;

      &:focus {
        outline: none;
      }
    }
  }
}

.numberPad {
  margin-top: 10px;

  .number {
    width: 100%;
    height: 36px;
    font-size: 30px;
    display: flex;
    flex-direction: row-reverse;
    padding-right: 10px;
    line-height: 1.2;
  }

  .buttons {
    @extend %clearfix; //scss的placeholder用于快速写一些通用属性
    button {
      height: 64px;
      width: 25%;
      border: none;
      border-radius: 0;
      float: left;

      &.zero {
        width: 50%;
      }

      &.ok {
        height: 128px;
        float: right; //记住这个操作！
      }

      $bg: #f2f2f2;

      &:nth-child(1) {
          background: $bg;
      }
      &:nth-child(2),&:nth-child(5){
      background: darken($bg,4%);
      }
      &:nth-child(3),&:nth-child(6),&:nth-child(9) {
      background: darken($bg,8%);
      }
      &:nth-child(4),&:nth-child(7),&:nth-child(10) {
      background: darken($bg,12%);
      }
      &:nth-child(8),&:nth-child(11),&:nth-child(13) {
      background: darken($bg,16%);
      }
      &:nth-child(14) {
      background: darken($bg,20%);
      }
      &:nth-child(12) {
      background: darken($bg,24%);
      }

    }

  }
}
</style>