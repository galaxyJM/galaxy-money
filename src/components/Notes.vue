<template>
  <div class="notes">
    <label>
      <span>备注:</span>
      <input type="text" placeholder="请输入你想写的话">
    </label>
  </div>
</template>

<script>
export default {
  name: "Notes"
}
</script>

<style lang="scss" scoped>
@import "../assets/style/reset.scss";
.notes {
  border-top: 1px solid #f5f5f5;
  margin-top: 20px;

  label {
    display: flex;
    align-items: center;
    background: #f5f5f5;

    span {
      padding: 12px;
      display: block;
    }

    input {
      border: 0;
      margin-left: 5px;
      padding-top: 3px;
      background: #f5f5f5;

      &:focus {
        outline: none;
      }
    }
  }
}

</style>