<template>
  <div class="button-wrapper">
    <button>{{ buttonName }}</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop(String) buttonName!: string;
}
</script>

<style lang="scss" scoped>
.button-wrapper{
  text-align: center;
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
</style>