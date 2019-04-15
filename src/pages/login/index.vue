<template>
    <div class="container">
        <div class="container_introduction">
            <div class="introduction_text">
                <img src="../../assets/images/logo.png">
            </div>
            <div class="introduction_start" @click="goLink()">开始使用</div>
        </div>
        
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mountod: function() {},
  methods: {
    goLink() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
 
<style lang="less" scoped >
.container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  background: #222A45;
  .container_introduction {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    background: #222A45;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    .introduction_text {
      font-size: 0.4rem;
      color: #cccccc;
      margin-top: 3.46rem;
      img{
        width: 3rem;
        height: 1.08rem;
      }
    }
    .introduction_start {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4.8rem;
      height: 0.88rem;
      background: rgba(255, 70, 124, 1);
      border-radius: 0.12rem;
      font-size: 0.28rem;
      color: #ffffff;
      margin-bottom: 1.2rem;
    }
 
  }
}
</style>
