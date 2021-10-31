<template>
  <div class="numberPad">
    <div class="number">{{ output }}</div>
    <div class="buttons">
      <button @click="inputNum">1</button>
      <button @click="inputNum">2</button>
      <button @click="inputNum">3</button>
      <button @click="backspace">删除</button>
      <button @click="inputNum">4</button>
      <button @click="inputNum">5</button>
      <button @click="inputNum">6</button>
      <button @click="clean">清空</button>
      <button @click="inputNum">7</button>
      <button @click="inputNum">8</button>
      <button @click="inputNum">9</button>
      <button @click="ok" class="ok">完成</button>
      <button @click="inputNum" class="zero">0</button>
      <button @click="inputNum">.</button>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";

@Component
export default class NumberPad extends Vue {
  output = '0';
  ok(){
    this.$emit('update:number',this.output);
  }
  inputNum(event: MouseEvent) {
    const button = (event.target as HTMLButtonElement); //强制执行类型，这样就无需判断e.target是否为空（ts会检查）
    const input = button.textContent as string;  //理由同上 或直接加！ 写button.textContent！ 排除空的情况
    if (this.output.length === 18) {
      return;
    }
    if (this.output === '0') {
      if ('0123456789'.indexOf(input) >= 0)   //该判断条件表示input这个字符是否属于前面这个字符串  indexOf返回索引
      {
        this.output = input;
        return;
      }
    }
    if (this.output.indexOf('.') >= 0 && input === '.') {
      return;
    }
    this.output += input;
    console.log(1);
  }

  backspace() {
    if (this.output.length === 1) {
      this.output = '0';
    } else {
      this.output = this.output.slice(0, -1);
    }
  }

  clean() {
    this.output = '0';
  }
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