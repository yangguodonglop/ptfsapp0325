<template>
<div>
  <div class="mui-content">
    <!-- <div id="s_header">
          <div id="s_left" @click="_left">返回</div>
          <div id="s_content" @click="gofind">扫码</div>
          <div id="s_right" @click="gallery">相册</div>
    </div>-->

    <!-- 头部导航 -->
    <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="_left"
      @click-right="gallery"
    >
      <van-icon name="photo" slot="right"/>
    </van-nav-bar>
    <!-- 提示框 -->
    <!-- <div class="tishi">
      <div>1、保证手机正常联网</div>
      <div>2、扫码确认关联后即可使用</div>
    </div>-->
    <!-- 扫码框 -->
    <div class="scan">
      <div id="bcid">
        <div class="content" style="height:40%"></div>
        <p class="tip" v-html="message">{{message}}</p>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
import navBar from "../../components/navBar";
import { NavBar } from "vant";
let scan = null;
//点手机虚拟返回键
document.addEventListener("plusready", function() {
  // 注册返回按键事件
  plus.key.addEventListener(
    "backbutton",
    function() {
      // 事件处理
      scan.close(); //关闭条码识别控件
      window.history.back();
    },
    false
  );
});

export default {
  data() {
    return {
        title: "扫码绑定",
      codeUrl: "",
      message: "载入中......"
    };
  },
  // components:{
  //       topbar
  //   },
  mounted() {
    this.startScan(); //进入页面就调取扫一扫
  },
  created() {
    this.startRecognize();
    this.startScan();
  },
  methods: {
    //点击返回
    _left() {
      this.$router.back(-1);
      // scan.cancel(); //关闭扫描
      scan.close(); //关闭条码识别控件
    },
    gofind(result) {
      this.$router.push({
        path: "/find",
        name: "find",
        params: { isn: result }
      });
      //跳转find页面将序列号ISN传过去，find页面通过this.$route.params获取参数
    },
    //创建扫描控件
    startRecognize() {
      let that = this;
      if (!window.plus) return;
      scan = new plus.barcode.Barcode("bcid");
      // 条码识别成功
      scan.onmarked = onmarked;
      function onmarked(type, result, file) {
        switch (type) {
          case plus.barcode.QR:
            type = "QR";
            break;
          case plus.barcode.EAN13:
            type = "EAN13";
            break;
          case plus.barcode.EAN8:
            type = "EAN8";
            break;
          default:
            type = "其它" + type;
            break;
        }
        result = result.replace(/\n/g, "");
        that.codeUrl = result; //扫描后返回值
        alert(result); //显示扫码结果
        scan.cancel(); //关闭扫描
        scan.close(); //关闭条码识别控件
        that.message = result; //把结果放在页面中
        that.gofind(result);
      }
    },
    //开始扫描
    startScan() {
      if (!window.plus) return;
      this.startRecognize(); //创建控件
      scan.start();
    },
    cancelScan() {
      scan.cancel(); //关闭扫描
      scan.close(); //关闭条码识别控件
    },
    gallery() {
      //打开相册扫码

      let that = this;
      if (!window.plus) return;
      plus.gallery.pick(
        function(path) {
          scan.cancel(); //关闭扫描
          scan.close(); //关闭条码识别控件
          plus.barcode.scan(
            path,
            function(type, result) {
              alert(result); //输出的是扫描结果
              that.gofind(result);
            },
            function(error) {
              alert(error.message);
            }
          );
        },
        function(e) {
          console.log("取消选择图片");
        },
        { filter: "image" }
      );
    }
  }
};
</script>
<style lang="less" scoped>
.mui-content {
  height: 100%;
  // box-sizing: border-box;
  background: rgba(34, 42, 69, 1);
  // .tishi {
  //   width: 6.9rem;
  //   height: 1.2rem;
  //   background: rgba(41, 50, 83, 1);
  //   border-radius: 0.12rem;
  //   margin: auto;
  //   margin-top: 0.3rem;
  //   color: #888fa9;
  //   text-align: left;
  //   div {
  //     width: 100%;
  //     height: 1.6em;
  //     padding-left: 0.3rem;
  //     line-height: 0.82rem;
  //   }
  // }
}
.scan {
  height: 100%;
  background: rgba(34, 42, 69, 1);
  #bcid {
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0.8rem;
    bottom: 0;
    text-align: center;
    color: #d9e4dd;
    font-size: 0.4rem;
    background: rgba(253, 253, 253, 0);
  }
}

// #s_header {
//   display: flex;
//   width: 100%;
//   height: 1rem;
//   font-size: 0.33rem;
//   justify-content: space-around;
//   line-height: 1rem;
//   color: green;
//   background: rgba(253, 253, 253, 1);
// }
// #s_left {
//   width: 15%;
// }
// #s_content {
//   width: 70%;
// }
// #s_right {
//   width: 15%;
// }
</style>