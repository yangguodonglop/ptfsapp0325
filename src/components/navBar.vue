<template>
    <van-nav-bar
  :title="title"
  left-text=""
  right-text=""
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
</template>

<script>
import { NavBar, Toast } from "vant";
export default {
  props: ["title"],
  methods: {
    onClickLeft() {
      this.$router.back(-1);
    },
    onClickRight() {
      Toast("按钮");
    }
  }
};
</script>

<style>
</style>
