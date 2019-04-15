<template>
  <van-nav-bar
    :title="title"
    left-text=""
    left-a
    rrow
   
    @click-right="onClickRight"
  >
    <van-icon name="bullhorn-o" slot="right"/>
  </van-nav-bar>
</template>

<script>
import { NavBar, Toast } from "vant";
export default {
  props: ["title"],

  methods: {

    onClickRight() {
      this.$router.push({ path: "/message" });
    }
  }
};
</script>

<style>
.van-icon-bullhorn-o:before {
  color: #646b97;
}
</style>
