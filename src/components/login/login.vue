<template>
  <div class="login">
    <m-header>
      <p><img class="logo" src="@/common/image/logo2.png" alt="哥们网H5手游">
          <img class="arrow" src="@/common/image/iconArrow.png">
          <strong>登录</strong>
      </p>
    </m-header>
    <div class="main">
      <div class="head">
        <h3>哥们网账号登录</h3>
      </div>
      <div class="logBox">
        <p class="p1">
          <label>账&nbsp;&nbsp;&nbsp;号</label>
          <input class="i" id="username" name="account" type="text" placeholder="输入登录账号/手机号">

        </p>
        <p class="p2">
          <label>密&nbsp;&nbsp;&nbsp;码</label>
          <input class="i" type="password" id="password" name="password" placeholder="输入密码">

        </p>
        <div class="validate">
          <p class="p3">
              <label>验证码</label>
              <input class="i" type="text" name="verify" id="verify" placeholder="输入验证码">
          </p>
         <img src="http://m.g2.cn/?s=Unlr/verify" @click="" id="chaVerify">
        </div>
        <p class="pBtn">
          <a href="javascript:void(0);" class="doLogin">登 录</a>
        </p>
        <div class="otherLogin" data-init="1">
          <span class="otherLoginLabel">其他登录方式</span>
          <div class="third">
              <a href="javascript:void(0)" title="微信登录" data-code="weixin" class="otherLoginItem icon3 weixin"><i class="iconfont icon-weixin"></i></a>
              <a href="javascript:void(0)" id = "qqLoginBtn" title="QQ登录" data-code="qq" class="otherLoginItem icon3 qq"><i class="iconfont icon-qq"></i></a>
              <a href="javascript:void(0)" title="微博登录" data-code="weibo" class="otherLoginItem icon3 weibo"><i class="iconfont icon-weibo"></i></a>
          </div>
        </div>
        <p class="pCheck">
          <router-link class="aReg" to="/register">注册账号</router-link>
          <a class="aFor" href="javascript:void(0)">忘记密码</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import MHeader from '@/components/m-header/m-header'
  import { Validator } from 'vee-validate'
  export default{
    data(){
      return {
        velidateflag:false,
        err_msg:''
      }
    },
    components:{
      MHeader
    },
    created(){

    },
    methods:{

    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~@/common/stylus/form.styl'

  .login
    overflow:hidden
    max-width:750px
    margin:0 auto
    .otherLogin
      width: 100%
      height: 110px
      margin: 0 auto 8px
      span
        height: 50px
        line-height: 50px
        text-align: center
        font-size: 12px
        display: block
        color: #5e5e5e
        background: url('./../../common/image/line.gif') no-repeat center center
        background-size: 100% 1px
      .third
        text-align:center
        .iconfont
          font-size:40px
        .icon-weixin
          color:#04b010
        .icon-qq
          color:#1780d1
          padding:0 20px
        .icon-weibo
          color:#e72d19

</style>
