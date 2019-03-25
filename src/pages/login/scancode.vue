<template>
    <div class="container">
        <navBar :title="title"></navBar>
        <div class="container_introduction">
            <div class="introduction_text">
                <div class="protocol_titie">
                    扫码
                </div>
                <div class="protocol_text">
                    <div class="text_item">1.保证手机正常联网</div>  
                    <div class="text_item">2.扫码确认关联后即可使用</div>
                    <div class="text_scan">
                           扫码区域
                    </div>
                    <div class="text_item text_item_active">请将扫描框对准设备背面二维码</div>
                </div>   
            </div>
            <div class="introduction_start"></div>
            
        </div>
        
    </div>
</template>

<script>
import navBar from "../../components/navBar";

export default {
  data() {
    return {
      title:"扫码绑定"
    };
  },
  mounted: function() {},
  methods: {
    goLink() {
      this.$router.push({ path: "/find" });
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
      padding: 0.5rem 0.2rem;
      border-radius: 0.1rem;
      .text_item{
          text-align: left;
      }
      .text_item_active{
          font-size: 0.28rem;
          text-align: center;
      }
    }
    .text_scan{
        width: 4.6rem;
        height: 4.6rem;
        margin:0.2rem auto;
        background: #ADA49B;
        display: flex;
        justify-content: center;
        align-items: center;
    

    }
    .introduction_start {
      font-size: 0.4rem;
      color: #ffffff;
      width: 5.6rem;
      margin: 0 auto;
      height: 0.9rem;

      margin-top: 2.5rem;
      border-radius: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
   
    }
  }
}
</style>
