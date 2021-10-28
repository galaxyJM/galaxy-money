<template>
  <div class="nav">
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="labels"/>
      <div>标签</div>
    </router-link>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"/>
      <div>记一笔</div>
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"/>
      <div>统计</div>
    </router-link>
  </div>
</template>

<script lang="ts">
// import x from '@/assets/icons/money.svg'
// console.log(x)
// 常规的引入方法

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
  name: "Nav"
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-around;
  border-top: grey;
  background: rgba(241,241,241,.5);
  padding-top: 10px;
  .item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .icon{
    font-size: 32px;
  }
  .item.selected{
    color: #FF6600;
  }

}

a {
  text-decoration: none;
  color: black;
}


</style>