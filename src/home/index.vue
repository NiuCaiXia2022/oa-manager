<template>
  <div class="home">
    <!-- 布局容器 -->
    <div class="common-layout">
      <el-container>
        <el-aside width="200px">
          <Aside></Aside>
        </el-aside>
        <el-container>
          <el-header> <Header></Header> </el-header>
          <el-main>
            <Main></Main>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
<script setup>
import Aside from './modules/aside'
import Header from './modules/header'
import Main from './modules/main'
</script>
<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;

  .el-header {
    background-color: #fff;
  }

  .el-aside {
    background-color: #001529;
    height: 100vh;
    border: none;
  }
}

.el-menu {
  border-right: none;
}
</style>
