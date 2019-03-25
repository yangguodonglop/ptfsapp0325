<template>
    <div class="container">
        <div class="container_bg">
           <navBar></navBar>
            <div class="bind">
                <div class="bind_title">
                    绑定PTFS
                </div>
                <div class="bind_text">
                    <div class="bind_text_warn">
                        <div class="text_item">1.请填写正确的信息，请仔细阅读说明</div>
                        <div class="text_item">2.祝您使用愉快。！！！！</div>
                        <div class="text_img">
                            <img src="../assets/images/product model.png">
                        </div>
                    </div>
                </div>
                <div class="bind_find" @click="goLink()">
                    发现
                </div>
            </div>
   
        </div>
        
    </div>
</template>

<script>
import navBar from "../components/navigationBar";
export default {
  data() {
    return {};
  },
  mounted: function() {},
  methods: {
    //导航栏返回路由
    routerback: function() {
      this.$router.back(-1);
    },
    //发现跳转路由
    goLink() {
      this.$router.push({ path: "/device" });
    }
  },
  components: {
    navBar
  }
};
</script>

<style lang='less' scoped>
.container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  background: #303030;
  .container_bg {
    background: url("../assets/images/material_bg.png");
    width: 100%;
    height: 100%;
    background-size: 100% 100%;

    .bind {
      width: 100%;
      height: auto;
      overflow: hidden;
      .bind_title {
        color: #ffffff;
        font-size: 0.4rem;
        margin-top: 1.8rem;
        text-align: left;
        padding-left: 0.32rem;
      }
      .bind_text {
        width: 5.89rem;
        height: 5.3rem;
        background-color: #262d4a;
        border-radius: 0.08rem;
        opacity: 0.98;
        margin: 0 auto;
        margin-top: 1rem;
        .bind_text_warn {
          color: #ffffff;
          font-size: 0.24rem;
          display: flex;
          flex-direction: column;
          text-align: left;
          .text_item {
            padding-left: 0.2rem;
            padding-top: 0.2rem;
            width: 100%;
          }
          .text_img {
            margin: 0 auto;
            margin-top: 1rem;
            img {
              width: 2.68rem;
              height: 2.12rem;
            }
          }
        }
      }
      .bind_find {
        width: 4.26rem;
        height: 1.02rem;
        background-color: #b25b26;
        border-radius: 0.04rem;
        font-size: 0.38rem;
        color: #ffffff;
        display: flex;
        align-items: center;
        margin: 0 auto;
        justify-content: center;
        margin-top: 1.5rem;
      }
    }
  }
}
</style>
