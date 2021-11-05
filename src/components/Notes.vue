<template>
  <div class="notes">
    <label>
      <span>{{this.editName}}</span>
      <input type="text" :value="value" @input='onValueChange($event.target.value)' :placeholder="placeholder">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,Prop,Watch} from "vue-property-decorator";

@Component
export default class Notes extends Vue {
  @Prop({default: ''}) value! : string
  @Prop({required: true}) editName! : string
  @Prop() placeholder! : string
  @Watch('value')
  onValueChange(value: string) {
    this.$emit('update:notes',value);
  }
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