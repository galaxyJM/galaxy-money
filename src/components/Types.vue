<template>
  <div class="types">
    <ul>
      <li :class="type === '-' && 'selected'" @click="changeType('-')">支出</li>
      <!--当type为‘-’时，给支出加上selected属性-->
      <li :class="type === '+' && 'selected'" @click="changeType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
//ts写法
import Vue from 'vue';
import {Component} from "vue-property-decorator";

@Component
export default class Types extends Vue{
  type = '-';
  changeType(type: string){
      if(type !== '-' && type !== '+')
      {
        throw new Error('type is wrong');
      }
      this.type = type;
    }

}
// js写法
// export default {
//   name: "Types",
//   data(){
//     return {
//       type: '-', //支出用‘-’表示 收入用‘+’表示
//     }
//   },
//   methods:{
//     changeType(type){
//       if(type !== '-' && type !== '+')
//       {
//         throw new Error('type is wrong')
//       }
//       this.type = type
//     }
//   }
// }
</script>

<style lang="scss" scoped>
@import "../assets/style/reset.scss";

.types {
  ul {
    display: flex;
    padding: 10px 0 10px 0;
    justify-content: center;
    align-items: center;
    background: #c4c4c4;

    li {
      width: 50%;
      line-height: 64px;
      font-size: 24px;
      position: relative;
      text-align: center;
      &.selected::after {
        content: '';
        background: black;
        height: 4px;
        bottom: 10px;
        left: 25%;
        width: 50%;
        position: absolute;
      }
    }
  }
}
</style>