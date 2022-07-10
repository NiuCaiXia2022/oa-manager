<template>
  <div class="aside-box">
    <div class="aside-header">
      <img class="asides-img" src="../../../assets/logo.png" />
      <span>Manager</span>
    </div>
    <!-- 菜单 -->
    <div class="menu">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#001529"
        class="el-menu-vertical-demo"
        default-active="{{$router.path}}"
        text-color="#fff"
        router
        unique-opened
      >
        <el-sub-menu index="0">
          <template #title>
            <el-icon><Setting /></el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/system/user">用户管理</el-menu-item>
            <el-menu-item index="/system/menu">菜单管理</el-menu-item>
            <el-menu-item index="/system/role">角色管理</el-menu-item>
            <el-menu-item index="/system/dept">部门管理</el-menu-item>
            <el-menu-item index="/system/staff">员工管理</el-menu-item>
            <el-menu-item index="/system/salary">薪酬管理</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><Setting /></el-icon>
            <span>审批管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/audit/leave">休假审批</el-menu-item>
            <el-menu-item index="/audit/approve">待审批</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </div>

  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.aside-box {
  color: #fff;
  .el-sub-menu .el-icon {
    color: #eee;
  }

  .el-sub-menu__title {
    display: inline-block;
  }
  .aside-header {
    display: flex;
    align-items: center;
    font-size: 18px;
    height: 50px;
  }
  .asides-img {
    margin: 0 16px;
    width: 32px;
    height: 32px;
  }
}
</style>
