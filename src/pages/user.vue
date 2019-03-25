<template>
    <!-- <div class="details">
        <div class="details_nav">
               <div class="goback">
                <div class="goback_img" @click="routerback()">
                    <img src="../assets/images/return.png" alt="">
                </div>
            </div>
            <div class="details_nav_con" @click="openDevice()">
                {{nowDevice}}
            </div>
            <div class="user_set">
                 <img src="../assets/images/settings.png" alt="" id="offCanvasBtn" href="#offCanvasSide" class="mui-icon mui-action-menu mui-icon-bars mui-pull-right">
            </div>
        </div>
        <div class="mining">
            <div class="mining_user">
                <div class="user_item user_item_active1">
                    <img src="../assets/images/head_portrait.png" alt="">
                </div>
                <div class="user_item user_item_active2">我的资产</div>
                <div class="user_item user_item_active4">提币</div>
                <div class="user_btn">
                    <div class="user_btn_item">
                        矿机管理
                    </div>
                    <div class="user_btn_item">
                        联系客服
                    </div>
                </div>
            </div>
        </div>  
        <div class="announcement">
            官方公告
        </div>
         <div class="community">
            社区交流
        </div>
        <aside id="offCanvasSide" class="mui-off-canvas-right">
				<div id="offCanvasSideScroll" class="mui-scroll-wrapper">
					<div class="mui-scroll">
						<div class="title">侧滑导航</div>
						<div class="content">
							<p style="margin: 10px 15px;">
								<button id="offCanvasHide" type="button" class="mui-btn mui-btn-danger mui-btn-block" style="padding: 5px 20px;">关闭侧滑菜单</button>
							</p>
						</div>
					
					</div>
				</div>
			</aside>
    </div> -->
    <div id="offCanvasWrapper" class="mui-off-canvas-wrap mui-draggable mui-slide-in">
			<!--菜单部分-->
			<!-- <aside id="offCanvasSide" class="mui-off-canvas-right">
				<div id="offCanvasSideScroll" class="mui-scroll-wrapper">
					<div class="mui-scroll">
                        <div class="setting">
                            <div class="setting_img">
                                <img src="../assets/images/head_portrait.png" alt="">
                            </div>
                            <div class="setting_username">sdsadsadsd</div>
                        </div>
                        <div class="setting_li">
                            <ul class="mui-table-view mui-table-view-chevron mui-table-view-inverted">
                                <li class="mui-table-view-cell">
                                    <a class="mui-navigate-right">
                                        设置
                                    </a>
                                </li>
                                <li class="mui-table-view-cell">
                                    <a class="mui-navigate-right">
                                        消息
                                    </a>
                                </li>
                                <li class="mui-table-view-cell">
                                    <a class="mui-navigate-right">
                                        退出
                                    </a>
                                </li>
                            </ul>
                        </div>
					</div>
				</div>
			</aside> -->
			<div class="mui-inner-wrap">
				<div id="offCanvasContentScroll" class="mui-content mui-scroll-wrapper">
                            <div class="details">
                                <div class="details_nav">
                                    <div class="goback">
                                        <div class="goback_img" @tap="change(3)">
                                            <img src="../assets/images/return.png" alt="">
                                        </div>
                                    </div>
                                    <div class="details_nav_con" @click="openDevice()">
                                        {{nowDevice}}
                                    </div>
                                    <a id="offCanvasBtn" href="#offCanvasSide" class="user_set   mui-pull-right">
                                        <img src="../assets/images/settings.png" alt="">
                                    </a>
                                </div>
                                <div class="mining">
                                    <div class="mining_user">
                                        <div class="user_item user_item_active1">
                                            <img src="../assets/images/head_portrait.png" alt="">
                                        </div>
                                        <div class="user_item user_item_active2">我的资产</div>
                                        <div class="user_item user_item_active4">提币</div>
                                        <div class="user_btn">
                                            <div class="user_btn_item">
                                                矿机管理
                                            </div>
                                            <div class="user_btn_item">
                                                联系客服
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                                <div class="announcement">
                                    官方公告
                                </div>
                                <div class="community">
                                    社区交流
                                </div>
                            </div>
						</div>
				
				<!-- off-canvas backdrop -->
				<div class="mui-off-canvas-backdrop"></div>
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
  mountod: function() {
    // mui('.goback_img').on('tap','a',function(){
    //   alert("*8")
    // });
  },
  methods: {
    change(){
        this.$router.back(-1);
    },
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
    goLink() {
      this.$router.push({ path: "/management" });
    }
  }
};
</script>

<style lang="less" scoped>
.setting_li{
    margin-top: 0.5rem;
}
    .setting{
         width: 2.86rem;
	height: 0.75rem;
    border-bottom: solid 1px #ffffff;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    padding:0px 0.1rem ;
    margin-top: 0.5rem;
    .setting_img{
        img{
            width: 0.56rem;
            height: 0.56rem;
        }
    }
        }
   
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
.user_btn {
  width: 6rem;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .user_btn_item {
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
}
.announcement {
  width: 4.26rem;
  height: 1.02rem;
  background-color: #c06025;
  border-radius: 0.04rem;
  margin: 0 auto;
  font-size: 0.3rem;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.8rem;
}
.community {
  width: 4.26rem;
  height: 1.02rem;
  background-color: #c06025;
  border-radius: 0.04rem;
  margin: 0 auto;
  font-size: 0.3rem;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.8rem;
}
.user_set {
  width: 1rem;
  img {
    width: 0.33rem;
    height: 0.33rem;
  }
}
</style>
