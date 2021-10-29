<template>
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
</template>

<script>
export default {
  name: "NumberPad"
}
</script>

<style lang="scss" scoped>
@import "../assets/style/reset.scss";
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

      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 4%);
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($bg, 8%);
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: darken($bg, 12%);
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: darken($bg, 16%);
      }

      &:nth-child(14) {
        background: darken($bg, 20%);
      }

      &:nth-child(12) {
        background: darken($bg, 24%);
      }

    }

  }
}
</style>