<template>
    <div class="container">
        <navBar :title=title></navBar>
        <div class="container_introduction">
            <div class="introduction_text">
                <div class="protocol_titie">
                    《稀有用户协议》
                </div>
                <div class="protocol_text">
                    飒飒打撒打撒打撒打撒打撒打撒打撒打撒大阿斯顿撒旦撒旦撒萨达萨达萨达萨达是撒旦萨达萨达萨达阿斯顿阿斯顿撒旦撒旦阿斯顿撒阿斯顿撒旦撒旦阿三    
                </div>   
            </div>
            <div class="introduction_start" @click="goLink()">已阅读并同意</div>
        </div>
        
    </div>
</template>

<script>
import navBar from "../../components/navBar";

export default {
  data() {
    return {
      title:"用户协议"
    };
  },
  mounted: function() {},
  methods: {
    goLink() {
      this.$router.push({ path: "/binding" });
    }
  },
    components:{
        navBar:navBar
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
    width: 90%;
      font-size: 0.4rem;
      color: #cccccc;
      margin-top: 2.5rem;
      margin: 0 auto;
      background: #ffffff;
      padding: 1rem 0.2rem;
      border-radius: 0.1rem;
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
