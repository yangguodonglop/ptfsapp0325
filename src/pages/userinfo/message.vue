<template>
    <div class="container">
      <navBar :title="title" :right-text="title">
        <van-icon name="search" slot="right" />
      </navBar>
       <div class="user">
          <div class="user_con">
              <van-tabs v-model="active_tab">
                    <van-tab title="通知公告">
                        <div class="message_item">
                            <div class="message_item_img">
                                 <img src="../../assets/images/product model.png">
                            </div>
                            <div class="message_item_text">西柚矿机今日全球同步发售！！</div>
                            <div class="message_item_time">2019-03-18</div>
                        </div>
                        <div class="message_item">
                            <div class="message_item_img">
                                 <img src="../../assets/images/product model.png">
                            </div>
                            <div class="message_item_text">西柚矿机今日全球同步发售！！</div>
                            <div class="message_item_time">2019-03-18</div>
                        </div>
                    </van-tab>
                    <van-tab title="常见问题">
                         <div class="message_item">
                            <div class="message_item_img">
                                 <img src="../../assets/images/product model.png">
                            </div>
                            <div class="message_item_text">西柚矿机今日全球同步发售33333！！</div>
                            <div class="message_item_time">2019-03-18</div>
                        </div>
                    </van-tab>
                    <van-tab title="最新资讯">
                        <div class="message_item">
                            <div class="message_item_img">
                                 <img src="../../assets/images/product model.png">
                            </div>
                            <div class="message_item_text">西柚矿机今日全球同步发售111111！！</div>
                            <div class="message_item_time">2019-03-18</div>
                        </div>
                    </van-tab>
                </van-tabs>
             
             
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
      title: "消息中心",
      active: 1,
      active_tab:0,
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
  background: #f2f2f2;
  .user {
    width: 100%;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
    .user_con {
      width: 100%;
      height: auto;
      margin: 0 auto;
      .message_item{
          width: 95%;
          margin: 0 auto;
          
          border: 1px solid #999999;
          background: #ffffff;
          margin-top: 0.1rem;
          .message_item_img{
              background: #cccccc;
              height: 3.1rem;
              display: flex;
              align-items: center;
              justify-content: center;
              img{
                  width: 4.2rem;
                  height: 2.9rem;
              }
          }
           .message_item_text{
             height: 0.7rem;
             display: flex;
             align-items: center;
             text-indent: 0.1rem;
             border-bottom: 1px solid #999999;
          }
          .message_item_time{
             height: 0.7rem;
             display: flex;
             align-items: center;
             text-indent: 0.1rem;
            
          }

      }

      
    }
  }
}

</style>
