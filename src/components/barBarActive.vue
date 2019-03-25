<template>
    <van-nav-bar :title="title" left-text="" left-arrow  @click-left="onClickLeft"
  @click-right="onClickRight">
  <van-icon name="bullhorn-o" slot="right" />
</van-nav-bar>

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
      this.$router.push({path:"/message"});
    }
  }
};
</script>

<style>

</style>
