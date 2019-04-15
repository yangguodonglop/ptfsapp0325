<template>
    <div class="container">
        <navBar :title="title"></navBar>
        <div class="container_introduction">
            <div class="introduction_text">
                <div class="protocol_titie">
                    绑定稀有机
                </div>
                 <div class="find_devive_item">
                      <img src="../../assets/images/product_model_01.png">
                </div>
                <div class="protocol_text">
                   将设备接通电源，插入网线，等待灯光闪烁，确认你的手机和设备在同一网络（同一WIFI） 
                </div>   
                    <div class="introduction_start" @click="goLink()">继续</div>
                  <div class="introduction_start introduction_start_active" @click="goLinkCode()">尝试扫码绑定</div>
            </div>
        
        </div>
        
    </div>
</template>

<script>
import navBar from "../../components/barBarScan";

export default {
  data() {
    return {
      title: "绑定稀有机"
    };
  },
  mounted: function() {},
  methods: {
    goLink() {
      this.$router.push({ path: "/find" });
    },
    goLinkCode() {
      this.$router.push({ path: "/saoma" });
    }
  },
  components: {
    navBar: navBar
  }
};
</script>
 
<style lang="less" scoped >
.container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  background: #222a45;
  .container_introduction {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    background: #222a45;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    .introduction_text {
      width: 90%;
      margin-top: 2.5rem;
      margin: 0 auto;
      padding: 1rem 0.4rem;
      width: 6.9rem;
      height: 8.2rem;
      background: rgba(41, 50, 83, 1);
      border-radius: 0.12rem;
      box-sizing: border-box;
      .find_devive_item {
        img {
          width: 2.4rem;
          height: 2.4rem;
        }
      }
      .protocol_text {
        color: #888fa9;
        font-size: 0.24rem;
        text-align: left;
        text-indent: 0.4rem;
      }
       .introduction_start {
      font-size: 0.28rem;
      color: #ffffff;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5.9rem;
      height: 0.88rem;
      background: rgba(255, 70, 124, 1);
      border-radius: 0.12rem;
         margin-top: 0.6rem;
    
    }
    }
   
  }
}
</style>
