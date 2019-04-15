<template>
  <van-tabbar :value="value" class="active_tab">
    <van-tabbar-item
      v-for="(item,index) in tabbars"
      :key="index"
      @click="tab(index,item.name)"
    >
      <span :class="currIndex == index ? 'active':''">{{item.title}}</span>
      <template slot="icon" slot-scope="props">
        <img :src="props.active ? item.active : item.normal">
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "tabbar",
  props:{
    value:{
      type:Number
    }
  },
  data() {
    return {
      currIndex: 0,
      tabbars: [
        {
          name: "management",
          title: "首页",
          normal: require("../assets/images/shezhib.png"),
          active: require("../assets/images/shezhia.png")
        },
        {
          name: "minemachine",
          title: "分类",
          normal: require("../assets/images/shouyib.png"),
          active: require("../assets/images/shouyia.png")
        },
        {
          name: "usercenter",
          title: "我的",
          normal: require("../assets/images/geren.png"),
          active: require("../assets/images/geren.png")
        }
      ]
    };
  },
  methods: {
    tab(index, val) {
      this.currIndex = index;
      this.$router.push(val);
      console.log(index,val)
    }
  }
};
</script>

<style lang="less" scoped>
.active_tab img {
  width: 0.4rem;
  height: 0.4rem;
}

.van-tabbar-item--active {
  color: #ff467c;
}
</style>