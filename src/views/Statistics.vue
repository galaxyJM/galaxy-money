<template>
  <div class="wrapper">
    <div class="content">tognji</div>
    <Nav/>
  </div>
</template>

<script lang="ts">

export default {
  name: "Statistics"
}

</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  height: 100vh;

}
.content{
  overflow: auto;
  flex-grow: 1;   //让content占满剩余空间
}

</style>