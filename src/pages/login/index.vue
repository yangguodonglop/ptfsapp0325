<template>
    <div class="container">
        <div class="container_introduction">
            <div class="introduction_text">西柚介绍几标语</div>
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
  background: #f2f2f2;
  .container_introduction {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    background: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .introduction_text {
      font-size: 0.4rem;
      color: #cccccc;
      margin-top: 2.5rem;
    }
    .introduction_start {
      font-size: 0.4rem;
      color: #ffffff;
      width: 5.6rem;
      margin: 0 auto;
      height: 0.9rem;
      background: #cccccc;
      margin-top: 4.5rem;
      border-radius: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
