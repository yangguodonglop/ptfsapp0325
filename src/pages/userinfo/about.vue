<template>
  <div class="container">
    <!-- <navBar :title="title" :right-text="title">
      <van-icon name="search" slot="right"/>
    </navBar> -->
      <navBar :title="title"></navBar>
    <div class="user">
      <div class="user_con">
        <div class="user_con_item">
          <div class="kuang">
            <img src="../../assets/images/slogo.png" alt>
          </div>
          <div class="app_name">
            <span class="app_name_left">西柚APP</span>
            <span class="app_name_right">V 1.0.2</span>
          </div>
          <p>更新于 2019-04-05</p>
        </div>
        <hr>
        <div class="user_con_content">
          <p>1、目前几款硬盘币都有使用POC共识机制，Burst、BTCHD的硬盘稀有机使用POC2进行挖矿计算。</p>
          <p>2、POC 是一种利用本地计算机硬盘驱动器里的闲置空间来进行挖矿的共识算法。大部分加密货币目前要么使用 POW 工作量证明机制，要么使用 POS 权益证明机制，不过也有使用 POC 作为共识机制的币种，比如：Burstcoin 。</p>
          <p>3、优点：它类似于 PoW，只是使用空间替代了计算。因此更加环境友好。 可用于恶意软件检测。通过确定处理器的 L1 缓存是否为空（例如，具有足够空间在没有缓存未命中的情况下计算 PoSpace 过程），或是包含一个拒绝被逐出（evicted）的例程。</p>
          <p>4、可用于反垃圾邮件措施，以及防范拒绝服务（DoS）攻击。</p>
          <p>5、不足： 激励机制可能存在问题。 目前 proof of capacity 存的 plot 文件都是一些没什么用处的信息和数据，除了用来挖矿，就毫无用途。</p>
          <p>6、使用者 Burstcoin、BTCHD、Chia、SpaceMint。</p>
          <p>类型：协同型共识 解释：PoSpace，也称为 PoC，通过分配一定数量的内存或磁盘空间用于解决服务提供者所提供挑战的方式，显示了某个人对某个服务（例如发送邮件）具有合法的兴趣。该理念是由 Dziembowski 等在 2015 年形式化定义的。虽然 Ateniese 等人的论文名称也是“Proof-of-space”，但它事实上一种采用 MHF（Memory Hard Function，一种计算代价取决内存的哈希算法）的 PoW 协议。 PoSpace 非常类似于 PoW，只是使用存储替代了 Pow 中的计算。PoSpace 与 MHF 和可回收性证明（PoR，Proof of Retrievability）有关，但也在很大程度上存在着差异。 PoSpace 是由证明者 (Prover) 发送给验证者 (Verifier) 的一小块数据，该数据确认了证明者已经保留了一定量的空间。出于实用性上的考虑，验证过程需要尽量高效，即消耗尽可能少的空间和时间。出于公平性上的考虑，如果验证者没有保留所声明数量的空间，那么它应该难以通过验证。PoSpace 的一种实现方式是通过使用一个难以实现 Pebbling 的图。验证者请求证明者构建对一个“非 Pebbling 图”标记。证明者提交标记，进而验证者请求证明者在提交中开放多个随机位置。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import navBar from "../../components/barBarActive";
import navBar from "../../components/navBar";

export default {
  data() {
    return {
      title: "关于我们",
      active: 2,
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
  margin: 0 auto;
  overflow: hidden;
  background: rgba(34, 42, 69, 1);
  .user {
    width: 6.9rem;
    background: rgba(41, 50, 83, 1);
    border-radius: 0.12rem;
    height: auto;
    overflow: hidden;
    margin: auto;
    margin: 0.3rem;
    hr {
      width: 6.3rem;
      height: 2px;
      background-color: #222a45;
      color: #222a45;
      border: solid #222a45 1px;
    }
    .user_con {
      width: 95%;
      height: auto;
      margin: 0 auto;
      .user_con_item {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        text-align: left;
        padding: 0rem 0rem;
        box-sizing: border-box;
        margin: 0 auto;
        .kuang {
          margin: auto;
          margin-top: 0.6rem;
          width: 1.52rem;
          height: 1.52rem;
          line-height: 1.52rem;
          text-align: center;
          border-radius: 0.28rem;
          border: 0.04rem solid rgba(255, 70, 124, 1);
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 80%;
            height: 80%;
          }
        }
        .app_name {
          margin: 0 auto;
          margin-top: 0.107rem;
          .app_name_left {
            height: 0.44rem;
            font-size: 0.32rem;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(158, 169, 211, 1);
            line-height: 0.44rem;
          }
          .app_name_right {
            margin-left: 0.2rem;
            height: 0.44rem;
            font-size: 0.32rem;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(255, 70, 124, 1);
            line-height: 0.44rem;
          }
        }
        p {
          display: inline-block;
          text-align: center;
          margin: 0.32rem 0;
          height: 0.34rem;
          font-size: 0.24rem;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(100, 107, 151, 1);
          line-height: 0.34rem;
        }
      }
      .user_con_content {
        font-size: 0.28rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(136, 143, 169, 1);
        line-height: 0.4rem;
        text-align: left;
        padding: 0 0.26rem 0 0.34rem;
      }
    }
  }
}
</style>
