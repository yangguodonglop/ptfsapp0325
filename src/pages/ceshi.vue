<template>
    <div>
        <div>这里是测试首页</div>
         <footers v-if="isshow"></footers>
         <div @click="goLink()">跳转到下一个页面测试footers显示隐藏</div>
         </div>
   
</template>

<script>
import footers from "../components/FooterBar";
export default {
  data() {
    return {};
  },
  computed: {
    isshow() {
      return this.$store.getters.isshow;
    }
  },
  watch: {
    $route(to, from) {
      console.log(to);
    }
  },
  mounted: function() {
    this.$store.dispatch("showFooter");
  },
  methods: {
    goLink() {
      this.$router.push({ path: "/ceshinext" });
    }
  },
  components: {
    footers: footers
  }
};
</script>

<style>
</style>
