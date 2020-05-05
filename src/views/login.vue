<template>
    <div class="loginBlock">
        <div class="loginBg" :style="note"></div>
        <div class="loginContainer">
            <h1>家庭记账小助手</h1>
            <el-form ref="form" :model="form" label-width="15px" style="marginTop:40px;">
            <el-form-item>
                <el-input v-model="form.userName" :rules="[{ required: true, message: '用户名不能为空'}]" placeholder="输入用户名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="form.password" :rules="[{ required: true, message: '密码不能为空'}]" placeholder="输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="form.verifiCode" :rules="[{ required: true, message: '密码不能为空'}]" placeholder="输入验证码" style="width:200px"></el-input>
                <img :src="codeSrc" width="100px" height="20px" v-if="hasVerifiCode"/>
                <el-button @click="getVerifiCodes">获取验证码</el-button>
            </el-form-item>
            <el-form-item>
                <el-button @click="submit" class="submitBtn">马上登录</el-button>
            </el-form-item>
            <el-form-item>
                <el-button @click="signUp" class="signUpBtn btn">没有账号，立即注册</el-button>
                <el-button @click="forget" class="forgetBtn btn">忘记密码</el-button>
            </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import getVerifiCode from '../assets/js/api'
export default {
  data () {
    return {
      note: {
        backgroundImage: 'url(' + require('../assets/imgs/bg1.jpg') + ')',
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      },
      form: {
        userName: '',
        password: '',
        verifiCode: '',
        codeSrc: '',
        hasVerifiCode: true
      }
    }
  },
  methods: {
    getVerifiCodes(){
        getVerifiCode().then(
            res => {
                if (res.status ==200) {
                    this.hasVerifiCode = true;
                    thos.codeSrc = res.code;
                }
            }
        )
    },
    submit () {
    }
  }
}
</script>
<style scoped>
.loginBlock .loginBg{
    width:60%;
    height:600px;
    float: left
}
.loginBlock .loginContainer{
    margin-top: 20px;
    width: 35%;
    padding-right: 10px;
    float: right
}
.submitBtn{
    width:150px;
    height:50px;
    padding: 10px;
    margin-top: 35px;
    background-color: rgb(0, 204, 255);
    color: azure;
    font-size: 18px;
}
.btn{
    margin-top: 30px;
    width:200px;
    height: 60px;
    border: none;
    font-size: 18px;
    color: rgb(0, 204, 255);
}
.signUpBtn{
    float: left;
}
.forgetBtn{
    float: right;
}
</style>
