<template>
  <div class="welcome">
    <div class="welcome-left">
      <p class="h2">欢迎体验</p>
      <p class="h1">慕课通用后台管理系统</p>
      <p class="h3">- Vue3.0+ElementPlus+Node+Mongo打造通用后台管理系统</p>
    </div>
    <img src="../../assets/images/welcome.png" class="welcome-img" />
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.welcome {
  display: flex;
  position: relative;
  bottom: 40px;
  align-items: center;
  justify-content: center;
  .welcome-left {
    position: relative;
  }
  .h1 {
    font-size: 30px;
    line-height: 62px;
    color: #409eff;
  }
  .h2 {
    font-size: 24px;
  }
  .h3 {
    font-size: 14px;
    color: #999;
  }
  .welcome-img{
    margin-top: 50px;
    width: 371px;
    height: 438px;
    margin-left: 105px;
  }
}
</style>
