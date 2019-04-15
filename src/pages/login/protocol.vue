<template>
  <div class="container">
    <navBar :title="title"></navBar>
    <div class="container_introduction">
      <div class="introduction_text">
        <div class="protocol_text">
          <h2>pp用户协议</h2>
          <p>《用户注册协议》是制约用户滥用违法的手段干扰网站的运行的手段。</p>
          <p>“法律百科”所提供的各项服务的所有权和运作权属于其运营商。用户必须同意下述所有服务条款并完成注册程序，才能成为“法律百科”的正式会员并使用“法律百科”提供的各项服务。服务条款的修改权归“法律百科”运营商所有。</p>
          <p>会员必须做到：</p>
          <p>1、不得利用本站危害国家安全、泄露国家秘密，不得侵犯国家社会集体的和公民的合法权益，不得利用本站制作、复制和传播下列信息：</p>
          <p>（1）煽动抗拒、破坏宪法和法律、行政法规实施的；</p>
          <p>（2）煽动颠覆国家政权，推翻社会主义制度的；</p>
          <p>（3）煽动分裂国家、破坏国家统一的；</p>
          <p>（4）煽动民族仇恨、民族歧视，破坏民族团结的；</p>
          <p>（5）捏造或者歪曲事实，散布谣言，扰乱社会秩序的；</p>
          <p>（6）宣扬封建迷信、淫秽、色情、赌博、暴力、凶杀、恐怖、教唆犯罪的；</p>
          <p>（7）公然侮辱他人或者捏造事实诽谤他人的，或者进行其他恶意攻击的；</p>
          <p>（8）损害国家机关信誉的；</p>
          <p>（9）其他违反宪法和法律行政法规的；</p>
          <p>（10）进行商业广告行为的。</p>
        </div>
      </div>
      <div class="introduction_start" @click="goLink()">已阅读并同意</div>
    </div>
  </div>
</template>

<script>
import navBar from "../../components/navBar";

export default {
  data() {
    return {
      title: "用户协议"
    };
  },
  mounted: function() {},
  methods: {
    goLink() {
      this.$router.push({ path: "/binding" });
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

      margin: 0 auto;
      background: #ffffff;
      padding: 0.3rem 0.2rem;
      box-sizing: border-box;

      width: 6.9rem;
      height: 9.28rem;
      background: rgba(41, 50, 83, 1);
      border-radius: 0.12rem;
      h2 {
        font-size: 0.28rem;
        color: #9ea9d3;
        margin-bottom: 0.3rem;
      }
      p {
        font-size: 0.24rem;
        color: #888fa9;
        width: 100%;
        text-align: left;
        text-indent: 0.3rem;
        margin-top: 0.05rem;
      }
    }
    .introduction_start {
      font-size: 0.28rem;
      color: #ffffff;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5.9rem;
      height: 0.88rem;
      background: rgba(255, 70, 124, 1);
      border-radius: 0.12rem;
      margin-bottom: 1.84rem;
      margin-top: 0.8rem;
    }
  }
}
</style>
