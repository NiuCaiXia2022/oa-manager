<template>
  <div class="user-login">
    <div class="login-box">
      <p class="title">火星</p>
      <el-form ref="loginFormRef" :model="userLoginForm" status-icon :rules="rules" class="demo-userLoginForm">
        <el-form-item prop="userName">
          <el-input placeholder="请输入用户名" v-model.trim="userLoginForm.userName" autocomplete="off" />
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input placeholder="请输入密码" v-model.trim="userLoginForm.userPwd" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="buttom" @click="handleClickSunmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useStore()
// 表单
const userLoginForm = reactive({
  userName: 'admin',
  userPwd: '123456'
  // userName: '',
  // userPwd: ''
})

// 表单效验
const loginFormRef = ref('ref')
// 验证规则
const rules = reactive({
  userName: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
  userPwd: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
})

// 点击登录
const handleClickSunmit = async () => {
  if (!loginFormRef.value) return
  await loginFormRef.value.validate(async (valid) => {
    if (valid) {
      // console.log('userLoginForm登录', userLoginForm)
      await store.dispatch('user/getLogin', userLoginForm)
      await store.dispatch('user/getPermissionList')
      // console.log('登录res', presponse)
      router.push('/')
    } else {
      console.log('error submit!')
    }
  })
}
</script>
<style lang="scss" scoped>
.user-login {
  width: 100vw;
  height: 100vh;

  .title {
    font-size: 50px;
    text-align: center;
    margin-bottom: 30px;
  }

  .buttom {
    width: 100%;
  }

  .login-box {
    box-sizing: border-box;
    width: 500px;
    padding: 50px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px 5px rgb(199 201 203 / 30%);
    margin: 50px auto;
  }
}
</style>
