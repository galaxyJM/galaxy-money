<template>
  <Layout>
    <div class="types">
      <ul>
        <li>支出</li>
        <li>收入</li>
      </ul>
    </div>

    <div class="labels">
      <ul>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
      <button>
        新增标签
      </button>
    </div>
    
    <div class="notes">
      <label>
        写点备注
        <input type="text">
      </label>
    </div>

    <div class="numberPad">

    </div>


  </Layout>

</template>

<script>
export default {
  name: "Money"
}
</script>

<style lang="scss" scoped>

</style>