<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
    <Nav/>
  </div>
</template>

<script>
export default {
  name: "Layout"
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  height: 100vh;

}
.content{
  overflow: auto;
  flex-grow: 1;
}
</style>