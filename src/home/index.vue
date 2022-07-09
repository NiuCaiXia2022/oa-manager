<template>
  <div class="home">
    <!-- 布局容器 -->
    <div class="common-layout">
      <el-container>
        <el-aside width="200px">
          <Aside></Aside>
        </el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
<script setup>
import Aside from './modules/aside'
</script>
<style lang="scss" scoped>
.home {
  width: 100v;
  height: 100vh;
  position: relative;

  .el-aside {
    height: 100vh;
    position: fixed;
    width: 200px;
    background-color: #001529;
    overflow-y: auto;
  }

  .el-header {
    height: 50px;
    // background-color: #fff;
    background-color: rgb(176, 31, 147);
    padding: 0 20px;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    right: 0;
    z-index: 9999;
    left: 200px;
  }

  .el-main {
    // background: #eef0f3;
    background-color: rgb(17, 162, 169);
    height: 100%;
    padding: 20px;
    padding-top: 71px;
  }
}
</style>
