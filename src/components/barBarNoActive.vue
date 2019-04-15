
<template>
  <van-nav-bar
    :title="title"
    left-text="返回"
    left-a
    rrow
    @click-left="onClickLeft"
   
  >
  
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
  }
};
</script>

<style>
.van-icon-bullhorn-o:before {
  color: #646b97;
}
</style>
