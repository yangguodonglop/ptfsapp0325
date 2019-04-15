<template>
  <div class="container">
    <navBar :title="title" :right-text="title">
      <van-icon name="search" slot="right"/>
    </navBar>
    <div class="user">
      <div class="user_con">
        <van-tabs v-model="active_tab">
          <van-tab title="通知公告">
            <div class="message_item">
              <div class="message_item_img">
                <img src="../../assets/images/xiaoxi1.png">
              </div>
              <div class="message_item_text">虚拟币最新资讯：西柚稀有机今日全球同步发售！比特币近日涨势趋于平稳</div>
              <div class="message_item_time">2019-03-08</div>
            </div>
            <div class="message_item">
              <div class="message_item_img">
                <img src="../../assets/images/xiaoxi2.png">
              </div>
              <div class="message_item_text">虚拟币最新资讯：西柚稀有机今日全球同步发售！比特币近日涨势趋于平稳</div>
              <div class="message_item_time">2019-03-08</div>
            </div>
          </van-tab>
          <van-tab title="常见问题">
            <div class="message_item">
              <div class="message_item_img">
                <img src="../../assets/images/xiaoxi1.png">
              </div>
              <div class="message_item_text">虚拟币最新资讯：西柚稀有机今日全球同步发售！比特币近日涨势趋于平稳</div>
              <div class="message_item_time">2019-03-08</div>
            </div>
          </van-tab>
          <van-tab title="最新资讯">
            <div class="message_item">
              <div class="message_item_img">
                <img src="../../assets/images/xiaoxi2.png">
              </div>
              <div class="message_item_text">虚拟币最新资讯：西柚稀有机今日全球同步发售！比特币近日涨势趋于平稳</div>
              <div class="message_item_time">2019-03-18</div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "../../components/navBar";

export default {
  data() {
    return {
      title: "消息中心",
      active: 1,
      active_tab: 0,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      },
      sum_earnings: null
    };
  },
  mounted: function() {},
  methods: {
    goLink() {
      this.$router.push({ path: "/login" });
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
  .user {
    width: 100%;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
    .user_con {
      width: 100%;

      margin: auto;
      .message_item {
        width: 6.9rem;
        height: 5.08rem;
        background: rgba(41, 50, 83, 1);
        border-radius: 0.12rem 0.12rem 0 0;
        margin: auto;
        margin-top: 0.3rem;
        overflow: hidden;
        color: #fff;
        font-size: 0.28rem;
        .message_item_img {
          background: #cccccc;
          height: 3.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .message_item_text {
          height: 1.2rem;
          display: flex;
          align-items: center;
          line-height: 0.42rem;
          text-align: left;
          padding: 0 0.3rem;
          text-indent: 0.1rem;
          border-bottom: 1px solid #999999;
        }
        .message_item_time {
          height: 0.7rem;
          display: flex;
          padding: 0 0.3rem;
          color: #888fa9;
          align-items: center;
          text-indent: 0.1rem;
        }
      }
    }
  }
}
</style>
