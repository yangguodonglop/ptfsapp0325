<template>
    <div class="code-con">
        <div class="code-input-main">
            <div class="code-input-main-item">{{code[0]}}</div>
            <div class="code-input-main-item">{{code[1]}}</div>
            <div class="code-input-main-item">{{code[2]}}</div>
            <div class="code-input-main-item">{{code[3]}}</div>
            <div class="code-input-main-item">{{code[4]}}</div>
            <div class="code-input-main-item">{{code[5]}}</div>
        </div>
        <div>
            <input class="code-input-input" v-model="code" maxlength="6" type="number"/>
        </div>
    </div>
</template>
 
<script>
export default {
  name: "CodeInput",
  data() {
    return {
      code: ""
    };
  },
  methods: {
   
  }
};
</script>
<style scoped>
.code-con{
    width: 100%;
    height: auto;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
}
.code-input-input {
  height: 0.44rem;

  outline: none;
  color: transparent;
  text-shadow: 0 0 0 transparent;
  width: 100%;
  opacity: 0;
}
.code-input-main {
  display: flex;
  height: 1rem;
  width: 4rem;
  margin: 0 auto;
  justify-content: space-around;
}
.code-input-main-item {
  width: 0.34rem;
  height: 0.44rem;
  opacity: 0.8;
  border-bottom: solid #9EA9D3 2px;
  margin: 0 0.05rem;
  text-align: center;
  padding-bottom: 0;
  font-size: 30px;
  color: #000;
}
</style>