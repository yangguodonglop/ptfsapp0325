<template>
    <div class="container">
      <navBar :title="title" :right-text="title">
        <van-icon name="search" slot="right" />
      </navBar>
        <div class="user_con">
              <div class="user_con_item">
                  <div class="con_item_l">昵称</div>
                  <div class="con_item_r" v-if="setActive" @click="openSetname()">{{device_name}}</div>
                    <div class="con_item_r" v-else ><input type="text" v-model="device_name"><div @click="closeSetname()">确定</div></div>

              </div>
             <div class="user_con_item">
                  <div class="con_item_l">性别</div>
                  <div class="con_item_r" v-if="setActive1" @click="openSetname1()">{{radio1}}</div>
                    <div class="con_item_r" v-else >
                        <van-radio-group v-model="radio1" class="radio_own">
                            <van-radio name="男">男</van-radio>
                            <van-radio name="女">女</van-radio>
                         </van-radio-group>
                    <div @click="closeSetname1()">确定</div></div>

              </div>
               <div class="user_con_item">
                  <div class="con_item_l">手机号</div>
                  <div class="con_item_r"><p>159*****3234</p><img src="../../assets/images/evenmore.png" @click="goSetPhone()"></div>
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

export default {
  data() {
    return {
      title: "个人信息",
      active: 2,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      },
      device_name: "矿机一",
      currentRate: 60,
      setActive: true,
      show: false,
      device_name1: "矿机一",

      setActive1: true,
      show: false,
      radio1: "男"
    };
  },
  mounted: function() {},
  methods: {
    goLink() {
      this.$router.push({ path: "/login" });
    },
    openSetname() {
      this.setActive = false;
    },
    closeSetname() {
      this.setActive = true;
    },
    openSetname1() {
      this.setActive1 = false;
    },
    closeSetname1() {
      this.setActive1 = true;
    },
    goSetPhone(){
      this.$router.push({path:"/changephone"})
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

  .user_con {
    width: 95%;
    height: auto;
    margin: 0 auto;
    .user_con_item {
      width: 100%;
      height: 1rem;
      border-bottom: #cccccc 1px solid;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0rem 0.1rem;
      box-sizing: border-box;
    }
  }
}
.con_item_r {
  display: flex;
  justify-content: flex-start;
  p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  input {
    width: 2rem;
    margin-right: 0.2rem;
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
