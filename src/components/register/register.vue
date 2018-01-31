<template>
  <div class="register">
    <m-header>
      <p><img class="logo" src="@/common/image/logo2.png" alt="哥们网H5手游">
          <img class="arrow" src="@/common/image/iconArrow.png">
          <strong>注册</strong>
      </p>
    </m-header>
    <div class="main">
      <div class="head">
        <h3>哥们网账号注册</h3>
      </div>
      <div class="logBox">
        <p class="p1">
          <label>手机号</label>
          <input class="i" id="tel" name="tel" v-validate="'required'" type="text" placeholder="输入手机号">
          <span class="span_error" v-if="errors.has('tel')" @click="errors.remove('tel')">{{ errors.first('tel') }}</span>
          <span class="span_error" v-if="velidateflag" @click="removeError">{{ err_msg }}</span>
        </p>
        <div class="validate">
          <p class="p3">
              <label>短信验证</label>
              <input class="i"  v-validate="'required'" type="text" name="verify" id="verify" placeholder="输入验证码">
              <span class="span_error" v-if="errors.has('verify')" @click="errors.remove('verify')">{{ errors.first('verify') }}</span>
          </p>
         <button type="button" class="msg-button sendMessage">获取验证码</button>
        </div>
        <p class="p2">
          <label>密　码</label>
          <input class="i" type="password"  v-validate="'required'" id="password" name="password" placeholder="至少6位，不能为纯数字">
          <span class="span_error" v-if="errors.has('password')" @click="errors.remove('password')">{{ errors.first('password') }}</span>
        </p>
        <p class="p2">
          <label>重复密码</label>
          <input class="i" type="password"  v-validate="'required'" id="password2" name="password2" placeholder="请输入确认密码">
          <span class="span_error" v-if="errors.has('password2')" @click="errors.remove('password2')">{{ errors.first('password2') }}</span>
        </p>
        <p class="p2">
          <label>真实姓名</label>
          <input class="i" type="text"  v-validate="'required'" id="realname" name="realname" placeholder="请输入真实姓名">
          <span class="span_error" v-if="errors.has('realname')" @click="errors.remove('realname')">{{ errors.first('realname') }}</span>
        </p>
        <p class="p2">
          <label>身份证号</label>
          <input class="i" type="text"  v-validate="'required'" id="idcard" name="idcard" placeholder="请输入身份证号">
          <span class="span_error" v-if="errors.has('idcard')" @click="errors.remove('idcard')">{{ errors.first('idcard') }}</span>
        </p>
        <p class="pCheck">
          <span class="sOn">我已经阅读并同意</span>
          <a class="aX" href="javascript:void(0)">《哥们网用户协议》</a>
        </p>
        <p class="pBtn">
          <a href="javascript:void(0);" class="doRegisterPhone" @click="validateForm">立即注册</a>
        </p>
        <div class="pA"><router-link to="/login">哥们网账号登录</router-link></div>
      </div>
    </div>
  </div>
</template>
<script>
  import MHeader from '@/components/m-header/m-header'
  import { Validator } from 'vee-validate'
  export default{
    components:{
      MHeader
    },
    data() {
      return {
        velidateflag:false,
        err_msg:''
      }
    },
    methods:{
      validateForm(){
        const validator = new Validator()
        let account_val = document.getElementById('tel').value
        let password_val = document.getElementById('password').value
        validator.attach('account', 'required')
        validator.validate('account', account_val).then((res) => {
          if(res == false){
            this.velidateflag = true
            this.err_msg = '请输入手机号'
          }
        })
      },
      removeError() {
        this.velidateflag = false
        this.err_msg = ''
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~@/common/stylus/form.styl'
  .register
    overflow:hidden
    max-width:750px
    margin:0 auto
</style>
