<template>
    <div class="container">
      <navBar :title="title" :right-text="title">
        <van-icon name="search" slot="right" />
      </navBar>
      <div class="ranking_con">
                <div class="ranking_con_item" v-for="(item,index) in moneyListdetails" v-bind:key="index">
                    <div class="con_item_l">
                        <div class="item_l_name">{{item.moneyNum}}</div>
                        <div class="item_l_No">在线矿机{{item.moneyOnline}}台 离线矿机{{item.moneyOffline}}台</div>
                    </div>
                     <div class="con_item_r">
                        <div class="item_r_btn">{{item.moneyTime}}</div>
                        <div class="item_r_img" @click="showList(item)" > 
                            <img src="../../assets/images/evenmore.png">
                        </div>
                    </div>
                    <div class="div_show" v-if="showStatus"   >
                        <div class="show_title">
                            <div>设备名称</div>
                            <div>空间</div>
                            <div>上行宽带</div>
                            <div>时长</div>
                            <div>储存力</div>
                            <div>收益</div>
                        </div>
                        <div class="show_text_con">
                            <div class="show_text">
                                <div>矿机一</div>
                                <div>500GB</div>
                                <div>0.1mb/s</div>
                                <div>24h</div>
                                <div>0.1123</div>
                                <div>35.000poc</div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <!-- <div class="ranking_con_item">
                    <div class="con_item_l">
                        <div class="item_l_name">+100.00 poc</div>
                        <div class="item_l_No">在线矿机3台 离线矿机1台</div>
                    </div>
                     <div class="con_item_r">
                        <div class="item_r_btn">2019-03-17</div>
                        <div class="item_r_img"> 
                            <img src="../../assets/images/evenmore.png">
                        </div>
                    </div>
                </div> -->
          
            
              
            </div>
        
        <van-tabbar v-model="active">
               <van-tabbar-item icon="home-o" to='management'>矿机管理</van-tabbar-item>
            <van-tabbar-item icon="search" to='minemachine'>我的收益</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to='usercenter'>个人中心</van-tabbar-item>
        </van-tabbar>
        
    </div>
</template>

<script>
import navBar from "../../components/barBarActive";
import { Tabbar, TabbarItem } from "vant";
import {getMoneyListdetails} from "../../common/js/api.js"

export default {
  data() {
    return {
      title: "收益明细",
      active: 1,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      },
     moneyListdetails:[
       {
         moneyId: "1",
          moneyNum: "+10000.POC",
          moneyOffline: "1",
          moneyOnline: "3",
          moneyTime: "2019-03-09",
          testarr:[
            {
              testname:"矿机一"
            },
             {
              testname:"矿机一"
            }
          ]
       },{
         moneyId: "2",
          moneyNum: "+100001.POC",
          moneyOffline: "1",
          moneyOnline: "3",
          moneyTime: "2019-03-010",
            testarr:[
            {
              testname:"矿机01"
            },
             {
              testname:"矿机01"
            }
          ]
       }
     ],
      showStatus:false,
    };
  },
  mounted: function() {
    let param = new Object();
    param.minerPhoneNum = localStorage.getItem("loginPhone");
    getMoneyListdetails(param)
      .then(response => {
        console.log(response);
        let { data } = response;
        if (data != null) {
          console.log(response.data);
          //this.moneyListdetails = response.data.moneyListdetails;
        
        }
      })
      .catch(error => {
        Toast("网络错误，请重新请求");
      });
  },
  methods: {
    goLink() {
      this.$router.push({ path: "/login" });
    },
    showList(){
        this.showStatus=!this.showStatus
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
  background: #f2f2f2;
  .ranking_con {
    width: 100%;
    height: auto;
    overflow: hidden;
    .ranking_con_item {
      width: 100%;
      height: 1rem;
      display: flex;
      padding: 0rem 0.2rem;
      box-sizing: border-box;
      justify-content: space-between;
      align-items: center;
      position: relative;
      font-size: 0.28rem;
      &:hover {
        background: #cccccc;
      }
      .div_show{
          width: 100%;
          height: 2rem;
          position: absolute;
          background-color: #666666;
          left: 0;
          top:1rem;
          z-index: 10000;
          .show_title{
              width: 95%;
              height: 0.6rem;
              display: flex;
              justify-content: space-between;
              align-items: center;
              color: #ffffff;
              font-size: 0.26rem;
              margin: 0 auto;
          }
          .show_text{
              width: 95%;
              height: 0.4rem;
              display: flex;
              justify-content: space-between;
              color: #ffffff;
              font-size: 0.26rem;
               align-items: center;
              margin: 0 auto;
          }
      }
    }
    .con_item_l {
      display: flex;
      flex-direction: column;
      .item_l_name {
        text-align: left;
      }
    }
    .con_item_r {
      display: flex;
      justify-content: flex-start;
      .item_r_btn {
        width: auto;
        height: 0.4rem;
     
 
        display: flex;
        color: #000;

        align-items: center;

        justify-content: center;
      }
      .item_r_img {
        width: 0.5rem;
        height: 0.4rem;

        display: flex;

        align-items: center;

        justify-content: center;
        img {
          width: 0.12rem;
          height: 0.21rem;
        }
      }
    }
  }
}
</style>
