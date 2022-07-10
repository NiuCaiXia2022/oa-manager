<template>
  <div class="header-box">
    <!-- 面包屑 -->
    <div class="header-left">
      <el-icon><Expand /></el-icon>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{$route.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="header-right">
      <div class="right-img">
        <el-icon><ChatLineRound /></el-icon>
      </div>
      <div>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            {{ $store.getters.name }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                >邮箱 :{{ $store.getters.email }}</el-dropdown-item
              >
              <el-dropdown-item command="userOut" @click="userOut">
                退出</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
// 点击下拉菜单
const handleCommand = (command) => {
  if (command === 'userOut') return userOut()
}
// 退出
const userOut = async () => {
  router.push('/login')
}
console.log(userOut)
</script>
<style lang="scss" scoped>
.header-box {
  height: 50px;
  background-color: #fff;
  padding: 0 20px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  right: 0;
  z-index: 9999;
  left: 200px;
  .header-left{
    display: flex;
    justify-content: center;
    align-items: center;
    .el-icon{
      margin-right: 10px;
    }
  }
  .header-right {
    display: flex;
    .right-img {
      margin-right: 10px;
    }
  }
}
</style>
