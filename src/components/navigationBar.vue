<template>
          <div class="goback">
                <div class="goback_img" @click="routerback()">
                    <img src="../assets/images/return.png" alt="">
                </div>
            </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted: function() {},
  methods: {
    routerback: function() {
      this.$router.back(-1);
    }
  }
};
</script>

<style lang="less">
.goback {
  display: flex;
  justify-content: start;
  width: 100%;
  height: 1rem;
  background: #fe8101;
  .goback_img {
    height: 1rem;
    display: flex;
    align-items: center;
    padding-left: 0.3rem;
    img {
      width: 0.19rem;
      height: 0.3rem;
    }
  }
}
</style>
