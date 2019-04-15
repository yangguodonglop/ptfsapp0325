<template>
  <van-nav-bar
  :title="title"
  left-text="返回"
  right-text=""
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
  
  >
    <van-icon name="scan" slot="right"/>
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
      this.$router.push({ path: "/saoma" });
    }
  }
};
</script>

<style>
.van-icon-bullhorn-o:before {
  color: #646b97;
}
.van-nav-bar {
  background: #222a45;
}
.van-hairline--bottom::after {
  border-bottom-width: 0px;
}
.van-nav-bar__title{
  font-size: 0.32rem;
  color: #ffffff;
}
.van-nav-bar__text{
 color: #646B97;
}
.van-nav-bar__left{
  font-size: 0.32rem;
 
}
.van-icon-arrow-left:before{
  color: #646B97; 
}
.van-icon-scan:before {
     color: #646B97;
}
</style>
