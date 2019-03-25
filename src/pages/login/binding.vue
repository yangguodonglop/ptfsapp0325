<template>
    <div class="container">
        <navBar :title="title"></navBar>
        <div class="container_introduction">
            <div class="introduction_text">
                <div class="protocol_titie">
                    绑定矿机
                </div>
                <div class="protocol_text">
                    将设备接通电源，插入网线，等待灯光闪烁，确认你的手机和设备在同一网络（同一WIFI)    
                </div>   
            </div>
            <div class="introduction_start" @click="goLink()">继续</div>
            <div class="introduction_start introduction_start_active" @click="goLinkCode()">尝试扫码绑定</div>
        </div>
        
    </div>
</template>

<script>
import navBar from "../../components/navBar";

export default {
  data() {
    return {
      title:"绑定矿机"
    };
  },
  mounted: function() {},
  methods: {
    goLink() {
      this.$router.push({ path: "/find" });
    },
     goLinkCode() {
      this.$router.push({ path: "/scancode" });
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
      &.introduction_start_active{
         margin-top: 0.25rem; 
      }
    }
  }
}
</style>
