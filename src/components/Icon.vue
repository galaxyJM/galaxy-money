<template>
  <!-- 组件名无法直接传递事件，要从组件内部传递click事件-->
  <svg class="icon" @click="$emit('click', $event)">
     <use :xlink:href="'#'+ name"></use>
   </svg>
</template>

<script>
export default {
  props:['name'],
  name: "Icon"
}
</script>

<style scoped>
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>