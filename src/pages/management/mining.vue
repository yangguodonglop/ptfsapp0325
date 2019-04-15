<template>
  <div class="container">
    <!--- 头部导航  -->
    <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon name="question-o" slot="right"/>
    </van-nav-bar>

    <!--- 弹窗  -->
    <van-popup v-model="show">
      <van-icon name="close" size="0.48rem"/>
      <div class="bigtext">挖矿和存储力的相关介绍</div>
      <div class="scontent">
        <p>1、目前几款硬盘币都有使用POC共识机制，Burst BTCHD的硬盘稀有机使用POC2进行挖矿计算。</p>
        <p>2、POC 是一种利用本地计算机硬盘驱动器里的闲置空间来进行挖矿的共识算法。大部分加密货币目前要么使用 POW 工作量证明机制，要么使用 POS 权益证明机制，不过也有使用 POC 作为共识机制的币种，比如：Burstcoin 。</p>
        <p>3、优点：它类似于 PoW，只是使用空间替代了计算。因此更加环境友好。 可用于恶意软件检测。通过确定处理器的 L1 缓存是否为空（例如，具有足够空间在没有缓存未命中的情况下计算 PoSpace 过程），或是包含一个拒绝被逐出（evicted）的例程。</p>
        <p>4、可用于反垃圾邮件措施，以及防范拒绝服务（DoS）攻击。</p>
        <p>5、不足：激励机制可能存在问题。 目前 proof of capacity 存的 plot 文件都是一些没什么用处的信息和数据，除了用来挖矿，就毫无用途。</p>
        <p>6、不足：激励机制可能存在问题。 目前 proof of capacity 存的 plot 文件都是一些没什么用处的信息和数据，除了用来挖矿，就毫无用途。</p>
      </div>
    </van-popup>

    <!--- 主体内容  -->
    <div class="mining">
      <div class="mining_title">{{miningMInername}}</div>
      <div class="mining_top">
        <div class="mining_top_l">
          收益
          <img src="../../assets/images/shouyiguize.png" alt>
        </div>
        <div class="mining_top_r" :class="{hong : !isshow,hui: isshow}" @click="qiecunchu()">
          存储力
          <img src="../../assets/images/qiehuan1.png" alt>
        </div>
      </div>
      <div
        class="mining_item"
        :class="{'mining_item_active':index==0}"
        v-for="(item,index) in miningArr"
        v-bind:key="index"
      >
        <div class="message_item_img">
          <div class="mining_item_l">{{item.minerTime}}</div>
          <div class="mining_item_r">
            {{item.minerIncome}}
            <span>POC</span>
          </div>
        </div>
        <div class="mining_item_a" v-if="showa">{{item.minerEarnings}}</div>
        <div class="mining_item_b" v-if="showb">
          <div>空间：{{item.minerSpace}}GB</div>
          <div>上行带宽：{{item.minerBandwidth}}M/s</div>
          <div>在线时间：{{item.minerOnlinetime}}h</div>
        </div>
      </div>

      <!-- <div class="mining_item" :class="{'mining_item_active':index==0}" v-for="(item,index) in miningArr" v-bind:key="index">
                <div class="mining_item_l">{{item.minerTime}}</div>
                <div class="mining_item_r">{{item.minerIncome}}POC</div>
                <div class="mining_item_b">{{item.minerBandwidth}}</div>
      </div>-->
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="management">稀有机管理</van-tabbar-item>
      <van-tabbar-item icon="search" to="minemachine">我的收益</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="usercenter">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import navBar from "../../components/navBar";
import { NavBar, Tabbar, TabbarItem, Popup, Icon } from "vant";
import { mininglist } from "../../common/js/api.js";

export default {
  data() {
    return {
      title: "挖矿",
      active: 0,
      showa: true,
      showb: false,
      isshow: true,
      show: false,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      },
      miningArr: [
        {
          minerTime: "2019-04-04",
          minerIncome: "1.093",
          minerEarnings: "0.93S/d",
          minerSpace: "509.908",
          minerBandwidth: "19.32",
          minerOnlinetime: "3"
        },
        {
          minerTime: "2019-04-03",
          minerIncome: "1.092",
          minerEarnings: "0.283S/d",
          minerSpace: "509.908",
          minerBandwidth: "45.19",
          minerOnlinetime: "24"
        },
        {
          minerTime: "2019-04-02",
          minerIncome: "19.392",
          minerEarnings: "0.483S/d",
          minerSpace: "509.908",
          minerBandwidth: "0.14",
          minerOnlinetime: "24"
        },
        {
          minerTime: "2019-04-01",
          minerIncome: "1.08",
          minerEarnings: "1.983S/d",
          minerSpace: "100",
          minerBandwidth: "6.14",
          minerOnlinetime: "124"
        },
        {
          minerTime: "2019-03-31",
          minerIncome: "9.903",
          minerEarnings: "56.983S/d",
          minerSpace: "509.908",
          minerBandwidth: "3.14",
          minerOnlinetime: "24"
        },
        {
          minerTime: "2019-03-30",
          minerIncome: "9.093",
          minerEarnings: "27.983S/d",
          minerSpace: "509.908",
          minerBandwidth: "4.14",
          minerOnlinetime: "2.4"
        }
      ],
      miningMInername: "稀有机一"
    };
  },
  mounted: function() {
    let param = new Object();
    param.minerNumber = this.$route.query.minerId;
    mininglist(param)
      .then(response => {
        console.log(response);
        let { data } = response;
        if (data != null) {
          console.log(response.data);

          // this.miningArr = response.data.miningArr;
          // this.miningMInername = response.data.minerName;
          console.log(this.miningArr);
        }
      })
      .catch(error => {
        Toast("网络错误，请重新请求");
      });
  },
  methods: {
    onClickLeft() {
      this.$router.back(-1);
    },
    onClickRight() {
      // this.$router.push({path:"/message"});
      this.show = !this.show;
    },
    goLink() {
      this.$router.push({ path: "/login" });
    },
    //稀有机详情
    goInfo() {
      this.$router.push({ path: "/managementinfo" });
    },
    //绑定新稀有机
    goBind() {
      this.$router.push({ path: "/binding" });
    },
    //排行榜
    goRanking() {
      this.$router.push({ path: "/allranking" });
    },
    //切换收益显示
    // qieshouyi() {
    //   this.showa = !this.showa;
    //   this.showb = !this.showb;
    //   this.isshow = !this.isshow; //改变字体的大小和颜色
    // },
    //切换存储力显示
    qiecunchu() {
      this.showb = !this.showb;
      this.showa = !this.showa;
      this.isshow = !this.isshow; //改变字体的大小和颜色
    }
  },
  components: {
    navBar: navBar
  }
};
</script>
 
<style lang="less" scoped >
.van-tabs__wrap/deep/.van-tabs__line {
  background-clip: #222a45;
}
.container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  // overflow: hidden;
  background: rgba(34, 42, 69, 1);
  .mining {
    width: 100%;
    // height: auto;
    // overflow: hidden;
    margin-bottom: 1rem;
    .mining_title {
      width: 100%;
      height: 0.8rem;
      display: flex;
      align-items: center;
      font-size: 0.3rem;
      color: #ffffff;
      font-weight: bold;
      margin: auto;
      padding-left: 0.3rem;
      box-sizing: border-box;
    }
    .mining_top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: rgba(255, 70, 124, 1);
      font-size: 0.3rem;
      padding: 0 0.3rem;
      line-height: 0.6rem;
      // .mining_top_l {
      //   width: 1.1rem;
      //   position: relative;
      img {
        width: 0.32rem;
        height: 0.3rem;
        // position: absolute;
        // bottom: 0.2rem;
        // right: -0.2rem;
      }
      // }
      .mining_top_r {
        width: 1.5rem;
        position: relative;
        img {
          width: 0.5rem;
          height: 0.42rem;
          position: absolute;
          bottom: 0.1rem;
          right: -0.15rem;
        }
      }
    }
    .mining_item {
      color: rgba(136, 143, 169, 1);
      font-size: 0.24rem;
      width: 6.6rem;
      height: 1.64rem;
      background: rgba(41, 50, 83, 1);
      border-radius: 0.12rem;
      margin: auto;
      padding: 0 0.3rem;
      position: relative;
      // width: 100%;
      // height: auto;
      // height: 0.6rem;
      // display: flex;
      // justify-content: space-between;
      // align-items: center;
      // background: #cccccc;
      // padding: 0 0.1rem;
      // box-sizing: border-box;
      margin-top: 0.1rem;
      // color: #ffffff;
      // &.mining_item_active {
      // margin-top: 0rem;
      // background: #ffcc43;
      //  }
      .message_item_img {
        height: 0.96rem;
        line-height: 0.96rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 0.02rem solid #252e4d;
        .mining_item_r {
          font-size: 0.4rem;
          font-family: PingFangSC-Light;
          font-weight: 300;
          color: rgba(255, 70, 124, 1);

          span {
            font-size: 0.24rem;
            color: rgba(136, 143, 169, 1);
            display: inline-table;
            margin-left: 0.1rem;
          }
        }
      }
      .mining_item_a {
        width: 100%;
        height: 0.66rem;
        text-align: center;
        line-height: 0.4rem;
        position: relative;
        top: 0.15rem;
      }
      .mining_item_b {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 0.66em;
        line-height: 0.46rem;
        position: absolute;
        text-align: left;
        top: 1.2rem;
        div {
          width: 32%;
          margin-right: 0.1rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
.bigtext {
  color: #9ea9d3;
  font-size: 0.28rem;
  margin-bottom: 0.3rem;
}
.scontent {
  text-align: left;
}
//切换字体的大小和颜色
.hong {
  color: #ff467c;
  font-size: 0.3rem;
}
.hui {
  color: #616c8a;
  font-size: 0.24rem;
}
</style>
