<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default class App extends Vue {
  created() {
    this.$store.commit('fetchRecordList');
    this.$store.commit('fetchTag');
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
