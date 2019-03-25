<template>
    <div class="container">
      <navBar :title="title" :right-text="title">
        <van-icon name="search" slot="right" />
      </navBar>
        <div class="my_income" >
            <div class="income_t" v-for="(item,index) in incomeArr.listInfoText" v-bind:key="index">
                <div class="income_t_item income_t_img">
                    <img src="../../assets/images/potatologo2.png">
                  </div> 
                    <div class="income_t_item">我的余额：{{item.incomeBalance}} </div> 
                    <div class="income_t_item">可兑换={{item.incomeRmb}} </div> 
                    <div class="income_t_item income_t_item_active ">
                      <div class="income_t_btn" @click="goTomoney()">提现</div>
                      <div class="income_t_btn" @click="recording()">提币记录</div>
                    </div> 
            </div>
            <div class="income_b">
                <div class="income_b_title" v-for="(item,index) in incomeArr.listInfoText" v-bind:key="index">截止{{item.incomeTime}}号累计收益：{{item.incomeAll}}</div>
                <div class="income_b_tab">
                    <div class="tab_item" @click="goBill()">收益明细</div>
                    <div class="tab_item" @click="goRanking()">收益排名</div>
                </div>
                <div class="income_b_echars">
                  <div id="sum_earnings" style="width:100%; height:4rem;"></div>
                </div>
            </div>
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
import echarts from "echarts";
import { myIncome } from "../../common/js/api.js";

export default {
  data() {
    return {
      title: "我的收益111",
      active: 1,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      },
      sum_earnings: null,
      incomeArr: [],
      incomeArrText: []
    };
  },
  mounted: function() {
    let param = new Object();
    param.minerPhoneNum = localStorage.getItem("loginPhone");
    myIncome(param)
      .then(response => {
        console.log(response);
        let { data } = response;
        if (data != null) {
          console.log(response.data);
          this.incomeArr = response.data.incomeArr;
          //echarts初始化
          let sum_earnings = this.$echarts.init(
            document.getElementById("sum_earnings")
          );
          this.drawLine(sum_earnings);
        }
      })
      .catch(error => {
        Toast("网络错误，请重新请求");
      });
    // alert(this.$store.state.token)
    //this.drawColumnChart();
  },
  methods: {
    goLink() {
      this.$router.push({ path: "/login" });
    },
    //收益明细
    goBill() {
      this.$router.push({ path: "/bill" });
    },
    //收益排名
    goRanking() {
      this.$router.push({ path: "/ranking" });
    },
    //提现
    goTomoney() {
      this.$router.push({ path: "/tomoney" });
    },
    recording() {
      this.$router.push({ path: "/recording" });
    },
    drawLine: function(name) {
      // 绘制图表
      name.setOption({
        // 提示框
        tooltip: {
          trigger: "axis" // 坐标触发
        },
        // 图表的标注
        legend: {
          // 标注前面的形状这个是圆形
          icon: "circle",
          // 数据名称
          data: ["收益明细"],
          // y轴的位置 可选 top center bottom x轴同理
          y: "bottom"
        },
        // 图形在画布的距离
        grid: {
          top: 10
        },
        // x轴的数据
        xAxis: {
          type: "category",
          boundaryGap: false,
          //data: ["2018-09-01", "2018-09-02", "2018-09-03", "2018-09-04", "2018-09-05", "2018-09-06", "2018-09-07"]
          data: this.incomeArr.listInfoTime
        },
        // y轴的数据
        yAxis: {
          type: "value"
        },
        // 折线图 （写几条折线图就写几个对象；是这个{}对象）
        series: [
          {
            name: "收益明细",
            type: "line",
            stack: "总量",
            //data: [12, 13, 10, 13, 9, 23, 21],
            data: this.incomeArr.listInfoNum,

            
            color: "#ffb54c"
          }
        ]
      });
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
      font-size: 0.4rem;
      color: #cccccc;
      margin-top: 2.5rem;
    }
    .introduction_start {
      font-size: 0.4rem;
      color: #ffffff;
      width: 5.6rem;
      margin: 0 auto;
      height: 0.9rem;
      background: #cccccc;
      margin-top: 4.5rem;
      border-radius: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.my_income {
  width: 100%;
  height: auto;
  overflow: hidden;
  .income_t {
    width: 100%;
    height: auto;
    overflow: hidden;
    background: #f2f2f2;
    padding-bottom: 0.5rem;
    .income_t_item {
      font-size: 0.3rem;
      &.income_t_item_active {
        width: 70%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        .income_t_btn {
          width: 2rem;
          height: 0.6rem;
          background: #cccccc;
          color: #ffffff;
          font-size: 0.2rem;
          border-radius: 0.3rem;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          margin-top: 0.2rem;
        }
      }

      &.income_t_img {
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .income_b {
    width: 100%;
    height: auto;
    overflow: hidden;
    background: #ffffff;
    .income_b_title {
      height: 1rem;
      font-size: 0.32rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90%;
      border-bottom: 1px solid #999;
      margin: 0 auto;
    }
    .income_b_tab {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 90%;
      margin: 0.3rem auto;
      .tab_item {
        margin-right: 0.2rem;
        &:nth-child(2) {
          border-left: 1px solid #999;
          padding-left: 0.2rem;
        }
      }
    }
    .income_b_echars {
      width: 90%;
      height: auto;
      overflow: hidden;
      margin: 0 auto;
    }
  }
}
</style>
