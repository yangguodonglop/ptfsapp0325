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
        <div class="mining">
            <div class="mining_user">
                <div class="user_item user_item_active1" >
                    <img src="../assets/images/potatologo1.png" alt="" @click="goUser()">
                </div>
                <div class="user_item user_item_active2">我的资产</div>
                <div class="user_item user_item_active2">挖矿状态：正在挖矿</div>
                <div class="user_item user_item_active3">0.1365161661poc~=$1.255</div>
                <div class="user_item user_item_active4">提币</div>
            </div>
        </div>  
        <div class="mining_li">
            <div class="mining_li_title">累计收益：2.12464665416POC</div>
            <div class="mining_li_con" @click="goLink()">
                <div class="li_con_item">
                    <div class="con_item_l" >
                      <img src="../assets/images/potatologo2.png" alt="">
                   
                    </div>
                    <div class="con_item_m">
                         0.1235416166166556
                    </div>
                </div>
                    <div class="li_con_itemtime">
                         2018-12-17
                    </div>
            </div>
              <div class="mining_li_con">
                <div class="li_con_item">
                    <div class="con_item_l">
                      <img src="../assets/images/potatologo2.png" alt="">
                   
                    </div>
                    <div class="con_item_m">
                         0.1235416166166556
                    </div>
                </div>
                    <div class="li_con_itemtime">
                         2018-12-17
                    </div>
            </div>
              <div class="mining_li_con">
                <div class="li_con_item">
                    <div class="con_item_l">
                      <img src="../assets/images/potatologo2.png" alt="">
                   
                    </div>
                    <div class="con_item_m">
                         0.1235416166166556
                    </div>
                </div>
                    <div class="li_con_itemtime">
                         2018-12-17
                    </div>
            </div>
        </div>

        <div class="details_show" v-if="showStatus">
                <div class="show_con_item" v-for="(item,index) in device" v-bind:key="index" @click="closeDevice(item)">{{item.deviceName}}</div>
        </div> 
    </div>
    
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
  mountod: function() {},
  methods: {
    openDevice() {
      this.showStatus = true;
    },
    closeDevice(item) {
      this.showStatus = false;
      this.nowDevice = item.deviceName;
    },
    routerback: function() {
      this.$router.back(-1);
    },
    goLink(){
      this.$router.push({path:'/management'})
    },
    goUser(){
            this.$router.push({path:'/user'})

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
}
.mining {
  width: 7.5rem;
  height: 7rem;
  background: url("../assets/images/mining_bg.png");
  background-size: 100% 100%;
  .mining_user {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    font-size: 0.24rem;
    color: #ffffff;
    .user_item {
      font-size: 0.3rem;
      &.user_item_active1 {
        margin-top: 1rem;
      }
      &.user_item_active2 {
        margin-top: 0.4rem;
      }
      &.user_item_active3 {
        margin-top: 0.4rem;
      }
      &.user_item_active4 {
        margin: 0 auto;
        margin-top: 1rem;
        width: 2.48rem;
        height: 0.51rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.32) 100%);
        border-radius: 0.04rem;
        border: solid 1px #ffffff;
      }

      img {
        width: 1.25rem;
        height: 1.25rem;
      }
    }
  }
}
.mining_li {
  width: 100%;
  height: auto;
  overflow: hidden;
  .mining_li_title {
    width: 7.5rem;
    height: 0.73rem;
    background-color: #3d3c3c;
    color: #ffffff;
    font-size: 0.26rem;
    display: flex;
    align-items: center;
    text-indent: 0.3rem;
  }
  .mining_li_con {
    width: 6.54rem;
    height: auto;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ffffff;
  }
  .li_con_item {
    width: auto;
    height: 1rem;
    display: flex;
    align-items: center;
    color: #ffffff;
    .con_item_l {
      margin-left: 0.2rem;
    }
    .con_item_m {
      margin-left: 0.2rem;
    }

    img {
      width: 0.39rem;
      height: 0.39rem;
    }
  }
  .li_con_itemtime {
    float: right;
    color: #ffffff;
    display: flex;
    align-items: center;
  }
}
</style>
