<template>
    <div class="container">
        <navBar :title="title"></navBar>
        <div class="container_introduction">
            <div class="introduction_text">
               
                <div class="protocol_text">
                    <van-swipe :autoplay="300000000" indicator-color="white" :show-indicators="false" :loop="false">
                       <van-swipe-item v-for="(item,index) in deviceArr" v-bind:key="index">
                            <div class="find_devive">
                                <div class="find_devive_item">
                                     <img src="../../assets/images/product model.png">
                                </div>
                               <div class="find_devive_item">容量：{{item.deviceSpace}}</div>
                               <div class="find_devive_item">序号：{{item.deviceNum}}</div>
                               <div class="find_devive_item">请为矿机取个名字</div>
                               <div class="find_devive_item"><input type="text" placeholder="" v-model="item.deviceName"></div>
                               <div class="find_devive_item">
                                   <div class="find_btn"  @click="bindBtn(item)">立即绑定</div>
                               </div>

                            </div>
                        </van-swipe-item>
                       
                    </van-swipe>  
                </div>   
            </div>
             <div id="show">
                    
                </div>
            <div class="introduction_start" @click="goLink()">绑定完毕</div>
        </div>
        <van-loading type="spinner" color="white" />
    </div>
</template>

<script>
import navBar from "../../components/navBar";
import { Swipe, SwipeItem, Toast } from "vant";
import { bindMiner } from "../../common/js/api.js";

export default {
  data() {
    return {
      title: "绑定",
      nowstaus: true,
      deviceArr: [
        {
          deviceSpace: "1GB",
          deviceNum: "QWERT1",
          deviceName: ""
        },
        {
          deviceSpace: "2GB",
          deviceNum: "QWERT2",
          deviceName: ""
        },
        {
          deviceSpace: "3GB",
          deviceNum: "QWERT3",
          deviceName: ""
        }
      ]
    };
  },
  mounted: function() {
    // Toast.loading({
    //   mask: true,
    //   message: "加载中..."
    // });
    // const toast = Toast.loading({
    //   duration: 10000, // 持续展示 toast
    //   forbidClick: true, // 禁用背景点击
    //   loadingType: "spinner",
    //   message: "搜索中",
    //   mask: true
    // });
    // this.$bridge.callhandler("submitFromWeb", { param: "中文测试" }, data => {
    //   console.log(this.deviceArr.length + "****");
    //   this.deviceArr = [];
    //   console.log(this.deviceArr.length + "&&&");
    //   //document.getElementById("show").innerHTML ="send get responseData from java, data = " + responseData;
    //   var nowarr = JSON.parse(data);
    //   //JSON.stringify()
    //   console.log(nowarr.deviceAddr);
    //   console.log(nowarr.deviceAddr.length);
    //   //alert(nowarr.deviceAddr.length)
    //   if (nowarr.deviceAddr.length > 0) {
    //     this.deviceArr = nowarr.deviceAddr;
    //     console.log(this.deviceArr.length + "%%%%%");
    //   } else {
    //     document.getElementById("show").innerHTML = "没有发现矿机";
    //   }
    // });
  },
  methods: {
    //绑定完毕跳转
    goLink() {
      for (var i = 0; i < this.deviceArr.length; i++) {
        if (this.deviceArr[i].deviceName == "") {
          Toast("还有矿机未取名字");
          return false
        } 
      }   
      this.$router.push({ path: "/username" });          
    },
    //绑定矿机
    bindBtn(item) {
      if (item.deviceName == "") {
        Toast("请为矿机取个名字");
        return false;
      }
      let nowparam = new Object();
      nowparam.minerName = item.deviceName;
      nowparam.minerId = item.deviceNum;
      bindMiner(nowparam).then(response => {
          console.log(response);
          let { code } = response;
          if (code == 200) {
            Toast(`${item.deviceName}已绑定`);
          }
        })
        .catch(error => {
          Toast("网络错误，请重新请求");
        });

      //Toast("已绑定1/3矿机");
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
      .find_devive {
        width: 90%;
        margin: 0 auto;
        overflow: hidden;
        .find_devive_item {
          font-size: 0.3rem;
          margin-top: 0.1rem;

          img {
            width: 1.334rem;
            height: 1.06rem;
          }
          input {
            outline: none;
            height: 0.4rem;
            color: #cccccc;
            margin: 0.02rem;

            border: 1px solid #666666;
          }
          .find_btn {
            width: 2rem;
            height: 0.6rem;
            margin: 0 auto;
            background: #cccccc;
            color: #ffffff;
            font-size: 0.2rem;
            border-radius: 0.3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 0.2rem;
          }
        }
      }
    }
    .introduction_start {
      font-size: 0.4rem;
      color: #ffffff;
      width: 5.6rem;
      margin: 0 auto;
      height: 0.9rem;
      background: #cccccc;
      margin-top: 2.5rem;
      border-radius: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
