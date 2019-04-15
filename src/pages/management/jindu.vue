<template>
  <div class="vue-progress-bar default-theme">
    <div class="vue-progress-bar__outer" v-for="(item,index) in minerInfoArr" v-bind:key="index">
      <div class="vue-progress-bar__inner" v-bind:style="{width:item.activeColor+'%'}">
        <span class="vue-progress-bar__tiplabel">{{item.label}}</span>
        <span class="vue-progress-bar__tiptext">{{item.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minerInfoArr: [
        {
          label: "2019-03-15",
          text: "999POC",
          num: 80,
          activeColor: 80,

          style: {
            width: 80 + "%",
            height: 20 + "px",
            backgroundColor: "#999999"
          }
        },
        {
          label: "2019-03-15",
          text: "999POC",
          num: 60,
          style: {
            width: 60 + "%",
            height: 20 + "px",
            backgroundColor: "#999999"
          }
        },
        {
          label: "2019-03-15",
          text: "999POC",
          num: 40,
          style: {
            width: 40 + "%",
            height: 20 + "px",
            backgroundColor: "#999999"
          }
        }
      ]
    };
  },

  computed: {
    barStyle() {
      const style = {};
      style.width = this.percentage + "%";
      style.height = this.height + "px";
      style.backgroundColor = this.color;
      return style;
    }
  }
};
</script>

<style lang="less" scoped>
.vue-progress-bar.default-theme {
  .vue-progress-bar__outer {
    background: rgb(182, 247, 165);
    margin-top: 10px;

    .vue-progress-bar__inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 10px;
    }
  }
}

.vue-progress-bar {
  .vue-progress-bar__tiptext {
    float: right;
  }
}
</style>
