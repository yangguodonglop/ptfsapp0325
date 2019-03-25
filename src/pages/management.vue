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
                <div class="user_item user_item_active1">
                    <img src="../assets/images/potatologo1.png" alt="">
                </div>
                <div class="management">
                    <div class="management_item">
                        <div class="management_item_child">2</div>
                        <div class="management_item_child">全部</div>
                    </div>
                    <div class="management_item">
                        <div class="management_item_child">1</div>
                        <div class="management_item_child">开启</div>
                    </div>
                    <div class="management_item">
                         <div class="management_item_child">1</div>
                        <div class="management_item_child">停工</div>
                    </div>
                </div> 
            </div>
        </div>  
        <div class="management_con">
            <div class="management_con_li">
                <div class="management_li_l">
                    <div class="item_l_t">XX123</div>
                    <div class="item_l_b">SN:13465646SAD</div>
                </div>
                <div class="management_li_r">
                    暂停
                </div>
            </div>
            <div class="management_con_li">
                <div class="management_li_l">
                    <div class="item_l_t">XX123</div>
                    <div class="item_l_b">SN:13465646SAD</div>
                </div>
                <div class="management_li_r">
                    暂停
                </div>
            </div>
            <div class="management_con_li">
                <div class="management_li_l">
                    <div class="item_l_t">XX123</div>
                    <div class="item_l_b">SN:13465646SAD</div>
                </div>
                <div class="management_li_r">
                    开启
                </div>
            </div>

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
      nowDevice: "矿机管理"
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
  height: 5rem;
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
.management {
  width: 3.5rem;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.8rem;
  .management_item {
    height: 0.8rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    .management_item_child {
      width: 100%;
      font-size: 0.24rem;
    }
  }
}
.management_con {
  width: 100%;
  height: auto;
  background-color: #3d3c3c;

  .management_con_li {
    width: 90%;
    height: 1.15rem;
    margin: 0 auto;
    color: #ffffff;
    border-bottom: 1px solid #212121;

    display: flex;
    justify-content: space-between;
    align-items: center;
    .management_li_l {
      display: flex;
      flex-direction: column;
      text-align: left;
    }
    .management_li_r {
      width: 1.03rem;
      height: 0.45rem;
      display: flex;
      border-radius: 0.02rem;
      border: solid 1px #b25b26;
      align-items: center;
      overflow: hidden;
      justify-content: center;
    }
  }
}
</style>
