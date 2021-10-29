<template>
  <div class="types">
    <ul>
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "Types"
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
</style>