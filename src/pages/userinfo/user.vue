<template>
  <div class="container">
    <navBar :title="title" :right-text="title">
      <van-icon name="search" slot="right"/>
    </navBar>
    <div class="user_con">
      <div class="user_con_item">
        <div class="con_item_l">昵称</div>
        <div class="con_item_r" v-if="setActive" @click="openSetname()">{{userName}}</div>
        <div class="con_item_r" v-else>
          <input type="text" v-model="userName">
          <div @click="closeSetname()">确定</div>
        </div>
      </div>
      <div class="user_con_item">
        <div class="con_item_l">性别</div>
        <div class="con_item_r" v-if="setActiveSex" @click="openSetSex()">{{userSex}}</div>
        <div class="con_item_r" v-else>
          <van-radio-group v-model="userSex" class="radio_own">
            <van-radio name="男">男</van-radio>
            <van-radio name="女">女</van-radio>
          </van-radio-group>
          <div @click="closeSetSex()">确定</div>
        </div>
      </div>
      <div class="user_con_item">
        <div class="con_item_l">手机号码</div>
        <div class="con_item_r">
          <p>159*****3234</p>
          <img src="../../assets/images/evenmore.png" @click="goSetPhone()">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "../../components/navBar";
import { Toast } from "vant";
import { userInfo, userInfoChange } from "../../common/js/api.js";

export default {
  data() {
    return {
      title: "个人信息",
      active: 2,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      },
      userName: "",
      userSex: "",
      currentRate: 60,
      setActive: true,
      show: false,
      device_name1: "稀有机一",

      setActiveSex: true,
      show: false,
      radio1: "男"
    };
  },
  mounted: function() {
    //个人中心个人信息
    let param = new Object();
    param.minerPhonenumber = this.$store.state.token;
    userInfo(param)
      .then(response => {
        console.log(response);
        let { data } = response;
        if (data != null) {
          console.log(response.data);
          this.userName = response.data.userInfo[0].userName;
          this.userSex = response.data.userInfo[0].userSex;
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
    openSetname() {
      this.setActive = false;
    },
    closeSetname() {
      //更改名字
      this.setActive = true;
      //个人中心个人信息
      let param = new Object();
      param.minerPhonenumber = this.$store.state.token;
      param.userSex = this.userSex;
      param.userName = this.userName;
      userInfoChange(param)
        .then(response => {
          console.log(response);
          let { data } = response;
          if (data != null) {
            console.log(response.data);
            this.userName = response.data.userInfoList[0].userName;
            this.userSex = response.data.userInfoList[0].userSex;
          }
        })
        .catch(error => {
          Toast("网络错误，请重新请求");
        });
    },
    openSetSex() {
      this.setActiveSex = false;
    },
    //更改性别
    closeSetSex() {
      this.setActiveSex = true;
      //个人中心个人信息
      let param = new Object();
      param.minerPhonenumber = this.$store.state.token;
      param.userSex = this.userSex;
      param.userName = this.userName;
      userInfoChange(param)
        .then(response => {
          console.log(response);
          let { data } = response;
          if (data != null) {
            console.log(response.data);
            this.userName = response.data.userInfoList[0].userName;
            this.userSex = response.data.userInfoList[0].userSex;
          }
        })
        .catch(error => {
          Toast("网络错误，请重新请求");
        });
    },
    goSetPhone() {
      this.$router.push({ path: "/changephone" });
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
  background: rgba(34, 42, 69, 1);
  color: #ffffff;

  .user_con {
    width: 95%;
    height: auto;
    margin: 0 auto;
    margin-top: 0.3rem;
    .user_con_item {
      height: 0.88rem;
      background: rgba(41, 50, 83, 1);
      border-radius: 0.12rem;
      margin-bottom: 0.2rem;
      padding: 0 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      font-size: 0.25rem;
      img {
        width: 0.12rem;
        height: 0.24rem;
      }
    }
  }
}
.con_item_r {
  display: flex;
  justify-content: flex-start;
  color: rgba(97, 108, 138, 1);
  p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 0.12rem;
  }
  input {
    width: 2rem;
    margin-right: 0.12rem;
  }
}
.device_info_img {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 0.4rem;
}
.radio_own {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
