<template>
    <div class="container">
        <navBar :title="title"></navBar>
        <div class="container_introduction">
            <div class="introduction_text">
               
                <div class="protocol_text" id="protocol_text_con">
                    <van-swipe :autoplay="300000000" indicator-color="white" :show-indicators="false" :loop="false">
                       <van-swipe-item v-for="(item,index) in deviceArr" v-bind:key="index">
                            <div class="find_devive">
                                <div class="find_devive_item item_active">
                                     <img src="../../assets/images/product_model.png">
                                </div>
                               <div class="find_devive_item item_active_one">容量：{{item.deviceSpace}}</div>
                               <div class="find_devive_item">序号：{{item.deviceNum}}</div>
                               <!-- <div class="find_devive_item">请为稀有机取个名字</div> -->
                               <div class="find_devive_item item_active_two"><input type="text" placeholder="请为稀有机取个名字" v-model="item.deviceName"></div>
                               <div class="find_devive_item item_btn">
                                   <div class="find_btn"   @click="bindBtn(item)">立即绑定</div>
                               </div>

                            </div>
                        </van-swipe-item>
                       
                    </van-swipe>  
                </div>   
            </div>
             <div id="show">
                    
                </div>
            <div class="introduction_start" @click="goLink()">绑定完成</div>
        </div>
        <van-loading type="spinner" color="white" />
    </div>
</template>

<script>
import navBar from "../../components/barBarScan";
import { Swipe, SwipeItem, Toast } from "vant";
import { bindMiner, adddevice } from "../../common/js/api.js";

export default {
  data() {
    return {
      ubmitDisabled: false, //提交按钮是否可点击 false是可点击,true不可点击
      title: "绑定",
      nowstaus: true,
      deviceArr: [
        {
          deviceSpace: "1GB",
          deviceNum: "fe:e1:32:43:67:0e",
          deviceName: ""
        },
        {
          deviceSpace: "2GB",
          deviceNum: "QWERT2",
          deviceName: ""
        }
        // {
        //   deviceSpace: "3GB",
        //   deviceNum: "QWERT3",
        //   deviceName: ""
        // }
      ]
    };
  },
  created() {
    this.getParams();
  },
  mounted: function() {
    let param = new Object();
    let nowtoken = this.$store.state.token;
    if (nowtoken == undefined || nowtoken == null) {
      nowtoken = "";
    }
    param.userPhonenum = this.$store.state.userPhonenum;

    param.token = nowtoken;
    adddevice(param)
      .then(res => {
        // console.log(res);
        //let { data } = response;
        //this.getCode = data.code;
        // this.$store.commit("changeLogin", { userPhonenum: "15951813234" });
        // this.$router.push({
        //   path: "/loginCode",
        //   query: { phoneNum: this.phoneNum }
        // });
      })
      .catch(error => {
        Toast("网络错误，请重新请求");
      });

    //alert(this.$store.state.token)
    // Toast.loading({
    //   mask: true,
    //   message: "加载中..."
    // });
    const toast = Toast.loading({
      duration: 10000, // 持续展示 toast
      forbidClick: true, // 禁用背景点击
      loadingType: "spinner",
      message: "搜索中",
      mask: true
    });
    this.$bridge.callhandler("submitFromWeb", { param: "中文测试" }, data => {
      console.log(this.deviceArr.length + "****");
      // this.deviceArr = [];
      console.log(this.deviceArr.length + "&&&");
      var nowarr = JSON.parse(data);

      //判断是否发现稀有机
      if (nowarr.deviceAddr.length > 0) {
        this.deviceArr = nowarr.deviceAddr;
      } else {
        document.getElementById("protocol_text_con").innerHTML = "没有发现稀有机";
      }
    });
  },
  methods: {
    getParams() {
      //获取扫码传回来ISN
      // 取到路由带过来的参数
      let routerParams = this.$route.params.isn;
      console.log(routerParams); //打印的结果
      alert(routerParams);
      this.isn = routerParams;
    },
    //绑定完毕跳转
    goLink() {
      for (var i = 0; i < this.deviceArr.length; i++) {
        if (this.deviceArr[i].deviceName == "") {
          Toast("还有稀有机未取名字");
          return false;
        }
      }
      this.$router.push({ path: "/username" });
    },
    //绑定稀有机
    bindBtn(item) {
      if (item.deviceName == "") {
        Toast("请为稀有机取个名字");
        return false;
      }
      let nowtoken = this.$store.state.token;
      if (nowtoken == undefined || nowtoken == null) {
        nowtoken = "";
      }
      let nowparam = new Object();
      nowparam.minerName = item.deviceName;
      nowparam.minerId = item.deviceNum;
      nowparam.userid = this.$store.state.userPhonenum;
      nowparam.state = "1";
      nowparam.token = nowtoken;
      bindMiner(nowparam)
        .then(res => {
          console.log(res);

          console.log(res.res.errornum);
          //let { co } = response;
          if (res.res.errornum != 1) {
            Toast(`${item.deviceName}绑定失败`);
          } else {
            Toast(`${item.deviceName}绑定成功`);
          }
        })
        .catch(error => {
          Toast("网络错误，请重新请求");
        });

      //Toast("已绑定1/3稀有机");
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
      font-size: 0.4rem;
      color: #cccccc;
      margin: 0 auto;
      background: #ffffff;
      padding: 1rem 0.2rem 0rem 0.2rem;
      width: 6.1rem;
      height: 8.32rem;
      background: rgba(41, 50, 83, 1);
      border-radius: 0.12rem;
      .find_devive {
        width: 90%;
        margin: 0 auto;
        overflow: hidden;
        .find_devive_item {
          font-size: 0.28rem;
          margin-top: 0.1rem;
          color: #9ea9d3;
          &.item_active {
            width: 2.4rem;
            height: 2.4rem;
            background: #222a45;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            img {
              width: 1.64rem;
              height: 1.38rem;
            }
          }
          &.item_btn {
            margin-top: 0.5rem;
          }
          &.item_active_one {
            margin-top: 0.5rem;
          }
          &.item_active_two {
            margin-top: 0.5rem;
          }
          input {
            outline: none;
            height: 0.4rem;
            color: #cccccc;
            margin: 0.02rem;
            border: none;
            border-bottom: 1px solid #38446f;
            background: none;
            text-align: center;
          }
          .find_btn {
            margin: 0 auto;
            color: #ffffff;
            font-size: 0.28rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 0.2rem;
            width: 3.2rem;
            height: 0.88rem;
            background: rgba(255, 70, 124, 1);
            border-radius: 0.12rem;
          }
        }
      }
    }
    .introduction_start {
      font-size: 0.28rem;
      color: #ffffff;
      margin: 0 auto;
      margin-top: 1.36rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5.9rem;
      height: 0.88rem;
      background: rgba(255, 70, 124, 1);
      border-radius: 0.12rem;
      margin-bottom: 1.84rem;
    }
  }
}
</style>
