<template>
    <div class="container">
      <navBar :title="title" :right-text="title">
        <van-icon name="search" slot="right" />
      </navBar>
      <div class="ranking_con">
                <div class="ranking_con_item" v-for="(item,index) in moneyListdetails" v-bind:key="index">
                    <div class="con_item_l">
                        <div class="item_l_name"><p>{{item.moneyNum}}</p><p class="item_p">POC</p></div>
                        <div class="item_l_No">在线稀有机{{item.moneyOnline}}台 离线稀有机{{item.moneyOffline}}台</div>
                    </div>
                     <div class="con_item_r">
                        <div class="item_r_btn">{{item.moneyTime}}</div>
                        <div class="item_r_img" @click="showList(item)" > 
                            <img src="../../assets/images/evenmore.png">
                        </div>
                    </div>
                    <div class="div_show" v-if="item.showStatus">
                        <div class="show_title">
                            <div>设备名称</div>
                            <div>空间</div>
                            <div>上行宽带</div>
                            <div>时长</div>
                            <div>储存力</div>
                            <div>收益</div>
                        </div>
                        <div class="show_text_con" v-for="(items,indexs) in item.moneyListchild" v-bind:key="indexs">
                            <div class="show_text">
                                <div>{{items.moneyName}}</div>
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
                        <div class="item_l_No">在线稀有机3台 离线稀有机1台</div>
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
               <van-tabbar-item icon="home-o" to='management'>稀有机管理</van-tabbar-item>
            <van-tabbar-item icon="search" to='minemachine'>我的收益</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to='usercenter'>个人中心</van-tabbar-item>
        </van-tabbar>
        
    </div>
</template>

<script>
import navBar from "../../components/navBar";
import { Tabbar, TabbarItem } from "vant";
import { getMoneyListdetails } from "../../common/js/api.js";

export default {
  data() {
    return {
      title: "收益明细",
      active: 1,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      },
      moneyListdetails: [
        // {
        //   moneyId: "1",
        //   moneyNum: "+10000.POC",
        //   moneyOffline: "1",
        //   moneyOnline: "3",
        //   moneyTime: "2019-03-09",
        //   showStatus: false,
        //   testarr: [
        //     {
        //       testname: "稀有机一"
        //     },
        //     {
        //       testname: "稀有机二"
        //     }
        //   ]
        // },
        // {
        //   moneyId: "2",
        //   moneyNum: "+100001.POC",
        //   moneyOffline: "1",
        //   moneyOnline: "3",
        //   moneyTime: "2019-03-010",
        //   showStatus: false,
        //   testarr: [
        //     {
        //       testname: "稀有机01"
        //     },
        //     {
        //       testname: "稀有机01"
        //     }
        //   ]
        // },
        // {
        //   moneyId: "3",
        //   moneyNum: "+100003.POC",
        //   moneyOffline: "1",
        //   moneyOnline: "3",
        //   moneyTime: "2019-03-011",
        //   showStatus: false,
        //   testarr: [
        //     {
        //       testname: "稀有机03"
        //     },
        //     {
        //       testname: "稀有机03"
        //     }
        //   ]
        // }
      ],
   
    };
  },
  mounted: function() {
    let param = new Object();
    param.minerPhoneNum = this.$store.state.token;
    getMoneyListdetails(param)
      .then(response => {
        console.log(response);
        let { data } = response;
        if (data != null) {
          console.log(response.data);
           this.moneyListdetails = response.data.moneyListdetails;
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
    showList(item) {
      this.$router.push({path:"/billdetail"})
      //item.showStatus = !item.showStatus;
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
  background:#222A45;
  .ranking_con {
    width: 100%;
    height: auto;
    .ranking_con_item {
     
      display: flex;
      padding: 0rem 0.2rem;
      box-sizing: border-box;
      justify-content: space-between;
      align-items: center;
      position: relative;
      font-size: 0.28rem;
      width:6.9rem;
      height:1rem;
      background:rgba(41,50,83,1);
      border-radius:0.12rem;
      box-sizing: border-box;
      margin: 0 auto;
      margin-top: 0.1rem;
      // &:hover {
      //   background: #cccccc;
      // }
      .div_show {
        width: 100%;
        height: auto;
        position: absolute;
        background-color: #464d63;
        left: 0;
        top: 1rem;
        z-index: 10000;
        padding: 0.1rem 0;
        .show_title {
          width: 95%;
          height: 0.6rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #ffffff;
          font-size: 0.26rem;
          margin: 0 auto;
        }
        .show_text {
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
        display: flex;
        justify-content: flex-start;
        align-items: center;
        p{
          color: #ffffff;
          &.item_p{
            font-size: 0.2rem;
          }
        }
      }
      .item_l_No{
        color: #9EA9D3;
        font-size: 0.2rem;
      }
    }
    .con_item_r {
      display: flex;
      justify-content: flex-start;
      .item_r_btn {
        width: auto;
        height: 0.4rem;

        display: flex;
        color: #7E869F;

        align-items: center;

        justify-content: center;
        p{
          color: #ffffff;
        }
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
