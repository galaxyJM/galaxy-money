<template>
  <div class="tags">
    <ul>
      <li>
        <Icon name="cloth"/>
        衣
      </li>
      <li>
        <Icon name="food"/>
        食
      </li>
      <li>
        <Icon name="home"/>
        住
      </li>
      <li>
        <Icon name="walk"/>
        行
      </li>
      <li>
        <Icon name="cloth"/>
        衣
      </li>
      <li>
        <Icon name="food"/>
        食
      </li>
      <li>
        <Icon name="home"/>
        住
      </li>
      <li>
        <Icon name="walk"/>
        行
      </li>
      <li>
        <Icon name="cloth"/>
        衣
      </li>
      <li>
        <Icon name="food"/>
        食
      </li>
      <li>
        <Icon name="home"/>
        住
      </li>
      <li>
        <Icon name="walk"/>
        行
      </li>
    </ul>
    <button>
      新增标签
    </button>
  </div>
</template>

<script lang="ts">
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
  name: "Tags"
}
</script>

<style lang="scss" scoped>
@import "../assets/style/reset.scss";
.tags {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      display: flex;
      width: 20%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      margin-top: 30px;

      .icon {
        font-size: 36px;
      }
    }
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
}

</style>