<template>
  <div class="asides">
    <!--未登录-->
    <div class="toplogin" style="display: block"><a href=""><i></i></a><p><router-link to="/login">登录</router-link></p></div>
    <!--end -->
    <!--已登录-->
    <div class="toplogon" style="display: none">
    	<a href="javascript:;"><i></i></a>
    	<p>15521042144</p>
    	<p class="bindIcon"><em class="bind"></em><em class="bind"></em><em class="bind"></em></p>
    	<!--若已绑定手机号跟实名认证则em标签加个class=‘bind’-->
    </div>
    <!--end -->
    <ul class="cf side-nav">
        <li><router-link to="/login">充值中心  <i><img src="@/common/image/i01.png"></i><span></span></router-link></li>
        <li><router-link to="/login">我玩过的  <i><img src="@/common/image/i02.png"></i><span></span></router-link></li>
        <li><router-link to="/login">我的预约  <i><img src="@/common/image/i03.png"></i><span></span></router-link></li>
        <li><router-link to="/login">我的礼包  <i><img src="@/common/image/i04.png"></i><span></span></router-link></li>
        <li><a href="">联系客服 <i><img src="@/common/image/i05.png"></i><span></span></a></li>
    </ul>
  </div>
</template>
<script>
  export default{

  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .asides
    position:fixed
    top:50px
    right:-100%
    z-index:999
    margin-top:0
    width:60%
    height:100%
    border-top:1px solid #fff
    background:#fdfdfd
    -webkit-transition:all .25s ease
    transition:all .25s ease
    padding:0 15px
    .toplogin,.toplogon
      padding:20px 0 24px
      border-bottom:1px solid #bcbcbc
      text-align:center
      a
        color:#333
        text-decoration:none
        font-size:12px
        i
          display:block
          margin:0 auto
          width:72px
          height:72px
      p
        margin-top:20px
    .toplogin
      a
        i

          background:url(./../../common/image/ld_icon.png)
          background-size:100% 100%
      p
        a
          text-decoration:none
          font-size:12px
          width:82px
          height:25px
          display:block
          margin:20px auto 0
          border-radius:15px
          background:#57a0fb
          text-align:center
          line-height:25px
          color:#fff
    .toplogon
      a
        i
          background:url(./../../common/image/ld_icon2.png)
          background-size:100% 100%
      p.bindIcon
        margin-top:12.5px
        em
          display:inline-block
          width:28.5px
          height:29px
        em:nth-child(1)
          background:url(./../../common/image/icon10.png) no-repeat
          background-size:100% 100%
        em:nth-child(2)
          background:url(./../../common/image/icon12.png) no-repeat
          background-size:100% 100%
          margin:0 10px
        em:nth-child(3)
          background:url(./../../common/image/icon15.png) no-repeat
          background-size:100% 100%
          margin-right:10px
        em:nth-child(4)
          background:url(./../../common/image/icon13.png) no-repeat
          background-size:100% 100%
        em.bind:nth-child(1)
          background:url(./../../common/image/icon09.png) no-repeat
          background-size:100% 100%
        em.bind:nth-child(2)
          background:url(./../../common/image/icon11.png) no-repeat
          background-size:100% 100%
          margin:0 10px 0 7.5px
        em.bind:nth-child(4)
          background:url(./../../common/image/icon13.png) no-repeat
          background-size:100% 100%
    .side-nav
      li
        a
          background:#fdfdfd url(./../../common/image/icon14.png) no-repeat right 18.5px
          background-size:5px 9px
          position:relative
          display:block
          padding:7px 10px 7px 33px
          height:30px
          line-height:30px
          border-bottom:1px solid #ddd
          color:#333
          text-decoration:none
          font-size:16px
        i
          position:absolute
          top:3px
          left:0
          width:25px
          height:37px
          background-position:right center
          background-repeat:no-repeat
          content:''
          background-size:100% 100%
          img
            width:100%
            height:100%
        span
          color:#3cc56c
          font-size:16px
          float:right
          margin-right:5px
          line-height:32px
  .show
    right:0
</style>
