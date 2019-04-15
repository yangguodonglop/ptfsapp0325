<template>
    <div class="container">
      <navBar :title="title" :right-text="title">
        <van-icon name="search" slot="right" />
      </navBar>
        <div class="my_income" >
            <div class="income_t" v-for="(item,index) in incomeArr.listInfoText" v-bind:key="index">
                <!-- <div class="income_t_item income_t_img">
                    <img src="../../assets/images/potatologo2.png">
                  </div>  -->
                      <div class="income_t_item income_t_btn" @click="recording()"><p> <img src="../../assets/images/tomoney.png"></p><P>提币记录</P></div>
                    <div class="income_t_item item_active_p"><p class="item_p_title">我的余额：</p><p>{{item.incomeBalance}}</p><p class="item_p_title">POC</p> </div> 
                    <div class="income_t_item">可兑换={{item.incomeRmb}} </div> 
                   
            </div>
             <div class="income_t_item income_t_item_active ">
                      <div class="income_t_btn" @click="goTomoney()">提现</div>
                    </div> 
            <div class="income_b">
                <div class="income_b_tab">
                    <div class="tab_item" @click="goBill()"><p><img src="../../assets/images/detail.png"></p><p>收益明细</p></div>
                    <div class="tab_item" @click="goRanking()"><p><img src="../../assets/images/ranking.png"></p><p>收益排名</p></div>
                </div>
                <div class="income_b_title" v-for="(item,index) in incomeArr.listInfoText" v-bind:key="index">截止{{item.incomeTime}}号累计收益：{{item.incomeAll}}</div>

                <div class="income_b_echars">
                  <div id="sum_earnings" style="width:100%; height:4rem;"></div>
                </div>
            </div>
        </div>
        <!-- <van-tabbar v-model="active">
               <van-tabbar-item icon="home-o" to='management'>稀有机管理</van-tabbar-item>
            <van-tabbar-item icon="search" to='minemachine'>我的收益</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to='usercenter'>个人中心</van-tabbar-item>
        </van-tabbar> -->
    <tabbar v-model="active"></tabbar>
        
    </div>
</template>

<script>
import navBar from "../../components/barBarActive";
import { Tabbar, TabbarItem, Toast } from "vant";
import echarts from "echarts";
import { myIncome } from "../../common/js/api.js";
import tabbar from "../../components/foot";

export default {
  data() {
    return {
      title: "我的收益",
      active: 1,
      icon: {
        active: 1
      },
      sum_earnings: null,
      incomeArr: [],
      incomeArrText: []
    };
  },
  mounted: function() {
    let param = new Object();
    param.minerPhoneNum = this.$store.state.token;
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

        // 图形在画布的距离
        grid: {
          top: 30,
          left: "2%",
          right: "2%",
          bottom: "3%",
          containLabel: true
        },
        // x轴的数据
        xAxis: {
          type: "category",
          boundaryGap: false,
          splitLine: {
            show: false,
            lineStyle: {
              color: ["#888FA9"],
              width: 1,
              type: "solid"
            }
          },

          axisLine: {
            lineStyle: {
              color: "#888FA9"
            }
          },
          axisLabel: {
            interval: 0,
            rotate: 70
          },
          //data: ["2018-09-01", "2018-09-02", "2018-09-03", "2018-09-04", "2018-09-05", "2018-09-06", "2018-09-07"]
          data: this.incomeArr.listInfoTime
        },
        // y轴的数据
        yAxis: {
          type: "value",
      
          splitLine: {
            show: false,
            lineStyle: {
              color: ["#888FA9"],
              width: 1,
              type: "solid"
            }
          },
          axisLine: {
            lineStyle: {
              color: "#888FA9"
            }
          }
        },
        // 折线图 （写几条折线图就写几个对象；是这个{}对象）
        series: [
          {
            name: "收益明细",
            type: "line",
            stack: "总量",
            smooth: true,
            //data: [12, 13, 10, 13, 9, 23, 21],
            data: this.incomeArr.listInfoNum,

            color: "#56376D",
            symbol: 'circle', // 拐点类型
                symbolSize: 0, // 拐点圆的大小
                itemStyle: {
                    normal: {
                        color: '#ff467c', // 折线条的颜色
                        borderColor: '#289df5', // 拐点边框颜色
                        areaStyle: {
                            type: 'default',
                            opacity: 0.1
                        }
                    }
                },

          }
        ]
      });
    }
  },
  components: {
    navBar: navBar,
    tabbar:tabbar
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
    height: auto;
    overflow: hidden;
    background: #222a45;

    width: 6.9rem;
    height: 3.28rem;
    background: rgba(41, 50, 83, 1);
    border-radius: 0.12rem;
    margin: 0 auto;
    .income_t_item {
      font-size: 0.28rem;
      color: #888fa9;
      &.income_t_btn {
        justify-content: flex-end;
        text-align: right;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 0.2rem;
        height: 0.6rem;
        p {
          margin-right: 0.2rem;
        }
        img {
          width: 0.3rem;
          height: 0.3rem;
        }
        p {
          font-size: 0.28rem;
          color: #ff467c;
        }
      }
      &.item_active_p {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      p {
        font-size: 0.8rem;
        color: #ffffff;
        &.item_p_title {
          font-size: 0.28rem;
          color: #888fa9;
          margin-left: 0.1rem;
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
    background: #293253;
    margin-top: 0.5rem;
    padding-bottom: 1.3rem;
    .income_b_title {
      height: 0.6rem;
      font-size: 0.24rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 0 auto;
      color: #888fa9;
    
    }
    .income_b_tab {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 0.88rem;
      margin: 0 auto;
      background: #293253;
      .tab_item {
        color: #ff467c;
        font-size: 0.28rem;
        margin-right: 0.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-left: 0.1rem;
          img {
            width: 0.24rem;
            height: 0.26rem;
            margin-left: 0.2rem;
          }
        }
        &:nth-child(2) {
          padding-left: 0.2rem;
        }
      }
    }
    .income_b_echars {
      width: 95%;
      height: auto;
      overflow: hidden;
      margin: 0 auto;
    }
  }
}
&.income_t_item_active {
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  width: 5.9rem;
  height: 0.88rem;
  background: rgba(255, 70, 124, 1);
  border-radius: 0.12rem;
  margin-top: -0.5rem;
  .income_t_btn {
    color: #ffffff;
    font-size: 0.28rem;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;

    width: 5.9rem;
    height: 0.88rem;
    background: rgba(255, 70, 124, 1);
    border-radius: 0.12rem;
  }
}
</style>
