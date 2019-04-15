<template>
    <div class="container">
      <navBar :title="title" :right-text="title">
        <van-icon name="search" slot="right" />
      </navBar>
      <div class="tomoney">
          <div class="tomoney_con" v-for="(item,index) in toMoneyArr" v-bind:key="index">
              <div class="tomoney_con_item">提币地址</div>
              <div class="tomoney_con_item con_item_active">{{item.toMoneyAddress}}</div>
              <div class="tomoney_con_item item_active_01">提取币额<p>（当日挖矿收益在7日后解锁）</p></div>
              <div class="tomoney_con_item con_item_active item_active_02"><input type="text" v-model="toMoneyText"></div>
              <div class="tomoney_con_item"><p>可提币额 {{item.toMoneyNum}}</p></div>
              <div class="tomoney_con_item"><p class="active_p">手续费（1%）：0.01POC</p></div>
              <div class="tomoney_con_item con_item_active con_item_input"><input type="text" placeholder="请输入六位数交易密码" maxlength="6" @focus='test()' @keydown="delNum()" @keyup="getNum()" v-model="realInput"></div>
              <div class="tomoney_btn" @click="toMoneyBack()">
                提现
              </div>

          </div>
        </div>      
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" to='management'>稀有机管理</van-tabbar-item>
            <van-tabbar-item icon="search" to='minemachine'>我的收益</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to='usercenter'>个人中心</van-tabbar-item>
        </van-tabbar>
        <van-dialog
        v-model="show"
        title="请输入六位交易密码"
        show-cancel-button
         :beforeClose="beforeClose"
        >
        <div class="code-con">
              <div class="code-input-main">
                  <div class="code-input-main-item" v-for="(disInput,index) in disInputs" v-bind:key="index">{{disInput.value}}</div>
              </div>
          </div>
    </van-dialog>
        
    </div>
</template>

<script>
import navBar from "../../components/navBar";
// import payPassword from "../../components/payPassword";

import { Tabbar, TabbarItem, Toast, Dialog } from "vant";
// Vue.use(Dialog)
import { toMoney, toMoneyInfo } from "../../common/js/api.js";

export default {
  data() {
    return {
      code: "123",
      show: false,
      title: "我的提现",
      active: 1,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      },
      toMoneyArr: [],
      minerAddress: "",
      toMoneyText: "",
      realInput: "",
      disInputs: [
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" }
      ]
    };
  },
  mounted: function() {
    let param = new Object();
    param.minerPhoneNum = this.$store.state.token;
    toMoney(param)
      .then(response => {
        console.log(response);
        let { data } = response;
        if (data != null) {
          console.log(response.data);
          this.toMoneyArr = response.data.toMoneyArr;
          this.minerAddress = response.data.toMoneyArr[0].toMoneyAddress;
        }
      })
      .catch(error => {
        Toast("网络错误，请重新请求");
      });
  },
  methods: {
    test() {
      this.show = true;
    },
    beforeClose(action, done) {
      if (action === "confirm") {
        setTimeout(done, 0);
      } else if (action === "cancel") {
      }
    },
    getNum() {
      for (var i = 0; i < this.realInput.length; i++) {
        this.disInputs[i].value = this.realInput.charAt(i);
        // 表示字符串中某个位置的数字，即字符在字符串中的下标。
      }
    },
    delNum() {
      var oEvent = window.event;
      if (oEvent.keyCode == 8) {
        if (this.realInput.length > 0) {
          this.disInputs[this.realInput.length - 1].value = "";
        }
      }
    },
    goLink() {
      this.$router.push({ path: "/login" });
    },
    toMoneyBack() {
      var myreg = /^[0-9a-zA-Z]+$/;
      if (!myreg.test(this.toMoneyText)) {
        Toast("请输入正确提取币额");
        return false;
      }
      var myregPassword = new RegExp(/^\d{6}$/);
      if (!myregPassword.test(this.toMoneyPassword)) {
        Toast("请输入正确密码");
        return false;
      }
      let nowparam = new Object();
      nowparam.minerPhone = this.$store.state.token;
      nowparam.minerAddress = this.minerAddress;
      nowparam.minerMoney = this.toMoneyText;
      nowparam.minerPassword = this.toMoneyPassword;

      toMoneyInfo(nowparam)
        .then(response => {
          console.log(response);
          let { data, result } = response;
          if (result == "ok") {
            console.log(response.data);
            //this.toMoneyArr = response.data.toMoneyArr;
            Toast("提现成功");
          }
        })
        .catch(error => {
          Toast("网络错误，请重新请求");
        });
    }
  },
  components: {
    navBar: navBar
    // payPassword:payPassword
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
  .tomoney {
    overflow: hidden;
    width: 6.9rem;
    height: 7.44rem;
    background: rgba(41, 50, 83, 1);
    border-radius: 0.12rem;
    margin: 0 auto;
    .tomoney_con {
      width: 95%;
      height: auto;
      margin: 0 auto;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      //text-align: left;
      .tomoney_con_item {
        &:nth-child(1) {
          margin-top: 0.3rem;
        }
        display: flex;
        justify-content: flex-start;
        height: 0.6rem;
        align-items: center;
        color: #7e869f;
        font-size: 0.3rem;
        p {
          font-size: 0.2rem;
        }
        .active_p {
          color: #ff467c;
          font-size: 0.24rem;
        }
        font-size: 0.3rem;
        &.con_item_active {
          border-bottom: 1px solid #999999;
          font-size: 0.24rem;
          color: #ffffff;
          input {
            border: none;
            background: none;
            font-size: 0.26rem;
          }
        }
        &.item_active_01 {
          margin-top: 0.4rem;
        }
        &.item_active_02 {
          height: 0.3rem;
          border-bottom: 2px solid #568fff;
        }
        &.con_item_input {
          width: 100%;
          margin: 0 auto;
          margin-top: 0.6rem;
          input {
            width: 100%;
            color: #ffffff;
          }
        }
      }
      .tomoney_btn {
        background: #cccccc;
        color: #ffffff;
        font-size: 0.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        margin-top: 0.2rem;
        width: 5.9rem;
        height: 0.88rem;
        background: rgba(255, 70, 124, 1);
        border-radius: 0.12rem;
      }
    }
  }
}
.code-con {
  width: 100%;
  height: auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
}
.code-input-input {
  height: 0.44rem;

  outline: none;
  color: transparent;
  text-shadow: 0 0 0 transparent;
  width: 100%;
  color: red;
}
.code-input-main {
  display: flex;
  height: 1rem;
  width: 4rem;
  margin: 0 auto;
  justify-content: space-around;
}
.code-input-main-item {
  width: 0.34rem;
  height: 0.44rem;
  opacity: 0.8;
  border-bottom: solid #9ea9d3 2px;
  margin: 0 0.05rem;
  text-align: center;
  //padding-bottom: 0.1rem;
  font-size: 0.3rem;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
