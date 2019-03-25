<template>
    <div class="details">
        <div class="details_nav">
               <div class="goback">
                <div class="goback_img" @click="routerback()">
                    <img src="../assets/images/return.png" alt="">
                </div>
            </div>
            <div class="details_nav_con" @click="openDevice()">
                {{nowDevice}}
            </div>
            
          
        </div>
        <div class="details_space">
            <div class="details_space_bg">
                <div class="details_space_cont">

                </div>
            </div>
            <div class="details_space_text">空间使用</div>
            <div class="details_space_num">1.45GB/899GB</div>
        </div>
        <div class="details_meun">
            <div class="details_meun_item">
                <img src="../assets/images/icon_restart.png">
            </div>
            <div class="details_meun_item">
                <img src="../assets/images/icon_close.png">
            </div>
            <div class="details_meun_item">
                <img src="../assets/images/icon_unbind.png">
            </div>
            <div class="details_meun_item" @click="goMining()">
                <img src="../assets/images/icon_mining.png">
            </div>
     
        </div>
        <div class="details_li">
            <div class="details_li_item">
                <div class="details_item_l">PTFS名称</div>
                <div class="details_item_r">{{nowDevice}}</div>
            </div>
            <div class="details_li_item">
                <div class="details_item_l">产品型号：</div>
                <div class="details_item_r">PTFS</div>
            </div>
            <div class="details_li_item">
                <div class="details_item_l">序列号:</div>
                <div class="details_item_r">X123SADSADSA32212</div>
            </div>
            <div class="details_li_item">
                <div class="details_item_l">MAC地址：</div>
                <div class="details_item_r">-ASD_34_SDFS_FSD</div>
            </div>
            <div class="details_li_item">
                <div class="details_item_l">IP:</div>
                <div class="details_item_r">192.168.0.180</div>
            </div>
        </div>
        <div class="details_show" v-show="showStatus">
           
                <div class="show_con_item" v-for="(item,index) in device" v-bind:key="index" @click="closeDevice(item)">{{item.deviceName}}</div>
            
        </div>
    </div>
    
</template>

<script>
export default {
  data() {
    return{
      showStatus: false,
      device: [
        {
          deviceName: "设备111111"
        },
        {
          deviceName: "设备22222"
        }
      ],
      nowDevice: "设备111111"
    }
  },
  mountod: function() {

  },
  methods: {
    openDevice(){
      this.showStatus = true;
    },
    closeDevice(item) {
      this.showStatus = false;
      this.nowDevice = item.deviceName;
    },
    routerback: function() {
      this.$router.back(-1);
    },
    goMining(){
        this.$router.push({path:'/mining'})
    }
  }
};
</script>

<style lang="less" scoped>
.details_show {
  width: 100%;
  height: 3rem;
  background: #333333;
  left: 0rem;
  position: absolute;
  z-index: 1000000;
  top: 1rem;
  opacity: 0.9;
  color: #ffffff;
  .show_con_item {
    width: 6.45rem;
    height: 0.8rem;
    border-bottom: 1px solid #ffffff;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  .details_show_con {
    width: 100%;
    height: 3rem;
  }
}
.details {
  .details_nav {
    width: 100%;
    height: 1rem;
    background: #fe8101;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .goback {
      display: flex;
      justify-content: start;
      width: 100%;
      height: 1rem;
      display: flex;
      align-items: center;
      background: #fe8101;
      .goback_img {
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 0.3rem;
        img {
          width: 0.19rem;
          height: 0.3rem;
        }
      }
    }
    .details_nav_con {
      width: 2.5rem;
      height: 1rem;
      //background: #999999;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      font-size: 0.3rem;
      position: absolute;
      left: 50%;
      margin-left: -1.25rem;
    }
  }
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: linear-gradient(79deg, #212121 0%, #313131 100%);
  .details_space {
    width: 7.5rem;
    height: 4.57rem;
    background-image: linear-gradient(90deg, #c06025 100%);
    opacity: 0.9;
    display: flex;
    flex-direction: column;
    justify-content: start;
    font-size: 0.3rem;
    color: #ffffff;
    .details_space_bg {
      width: 6rem;
      height: 0.9rem;
      margin: 0 auto;
      background: #f2dbc8;
      border-radius: 0.9rem;
      margin-top: 1rem;
      .details_space_cont {
        background: #f2cc4b;
        border-radius: 0.9rem;
        width: 4rem;
        height: 0.9rem;
      }
    }
    .details_space_text {
      margin-top: 0.5rem;
    }
    .details_space_num {
      margin-top: 0.3rem;
    }
  }
  .details_meun {
    width: 6.25rem;
    height: 1.3rem;
    margin: 0 auto;
    border-bottom: solid 1px #ffffff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .details_meun_item {
      img {
        width: 0.88rem;
        height: 0.88rem;
      }
    }
  }
  .details_li {
    width: 6rem;
    height: auto;
    margin: 0 auto;

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    .details_li_item {
      width: 100%;
      border-bottom: solid 1px #ffffff;
      height: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: left;
      font-size: 0.26rem;
      color: #ffffff;
    }
  }
}
</style>
