<template>
    <div class="container">
         <navBar :title="title"></navBar>
         
        <div class="container_introduction">
            <div class="introduction_text">
                <div class="login_input">
                    <input type="text"  placeholder="请输入矿主名称" v-model="userName">
                </div>
            </div>
            <div class="introduction_start" @click="getNext()">完成</div>
        </div>
        
    </div>
</template>

<script>
import navBar from "../../components/navBar";
import { Toast } from "vant";
import { setUserName } from "../../common/js/api.js";

export default {
  data() {
    return {
      title: "矿主名称",
      userName: ""
    };
  },
  mounted: function() {
    //Toast('提示内容');
  },
  methods: {
    //设置昵称完成后跳转
    goLink() {
      this.$router.push({ path: "/management" });
    },
    getNext() {
      //let myreg=/^\d{6}$/
      if (!this.userName) {
        Toast("请输入正确昵称");
        return false;
      }
      let param = new Object();
      param.userName = this.userName;
      setUserName(param) .then(response => {
          console.log(response);
          let { result } = response;
          if ((result = "ok")) {
            Toast("设置完毕，3秒后进入主页");
            //设置3秒后跳转
            setTimeout(() => {
              this.goLink();
            }, 4000);
          }
        })
        .catch(error => {
          Toast("网络错误，请重新请求");
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
      .login_input {
        input {
          border: none;
          color: #cccccc;
          background: #f2f2f2;
          outline: none;
          border-bottom: #cccccc 1px solid;
          padding-bottom: 0.1rem;
          width: 4.6rem;
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
      margin-top: 4.5rem;
      border-radius: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
