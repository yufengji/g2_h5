<template>
  <div class="m-header">
    <div class="flexBar">
			<slot></slot>
			<aside class="header-aside" ref='headerAside'>
        <div class="aside-item">
          <em class="guide-icon-nav" ref="guideIconNav" @click='showAside'>
            <i></i>
            <i></i>
            <i></i>
          </em>
        </div>
      </aside>
		</div>
    <asides ref='asides'></asides>
    <div v-if='mask' class="zzcs"></div>
  </div>
</template>
<script>
  import Asides from '@/components/aside/aside'
  import {addClass,hasClass,removeClass} from '@/common/js/dom.js'
  export default {
    components:{
      Asides
    },
    data(){
      return {
        mask:false
      }
    },
    methods:{
      showAside(){
        if(hasClass(this.$refs.asides.$el,'show')){
          this.mask = false
          removeClass(this.$refs.asides.$el,'show')
          removeClass(this.$refs.headerAside,'on')
        }
        else{
          this.mask = true
          addClass(this.$refs.asides.$el,'show')
          addClass(this.$refs.headerAside,'on')
        }

      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

  .zzcs
    width:100%
    height:100%
    position:fixed
    top:0
    left:0
    background:#000000
    opacity:0.8
    z-index:9
  .flexBar
    width:100%
    max-width:750px
    height:53px
    position:fixed
    left:50%
    margin-left:-50%
    background:url(./topBarBg.png) no-repeat
    background-size:100% 100%
    z-index:99
    a
      text-decoration:none
    p
      float:left
      margin-top:10px
      width: 70%
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      color: #57a0fb
      strong
        font-size:18px
        color:#57a0fb
        font-weight:400
        vertical-align:middle
    .tLogo
      width:130px
      height:32px
      margin:10px 0 0 5px
      float:left
    .logo
      width:30.5px
      height:32px
      margin:0 0 0 5px
      vertical-align:middle
    .arrow
      width:13.5px
      height:25.5px
      margin:0px 10px 0 5px
      vertical-align:middle
    .header-aside
      width:50px
      float:right
      display:-webkit-box
      z-index:1
      .aside-item
        display:block
        -webkit-box-sizing:border-box
        height:50px
        -webkit-box-flex:0
        .guide-icon-nav
          width:50px
          height:50px
          position:relative
          display:block
          ^[-2]
            i
              display:block
              -webkit-box-sizing:border-box
              width:25px
              height:2px
              overflow:hidden
              background:url(./nav_i.png) no-repeat center
              background-size:100% 100%
              content:''
              position:absolute
              left:10px
              -webkit-transform-origin:21px
              transform-origin:21px
              -webkit-transition:background .5s cubic-bezier(0.77,.2,.05,1),opacity .55s ease,-webkit-transform .5s cubic-bezier(0.77,.2,.05,1)
              transition:background .5s cubic-bezier(0.77,.2,.05,1),opacity .55s ease,-webkit-transform .5s cubic-bezier(0.77,.2,.05,1)
              transition:transform .5s cubic-bezier(0.77,.2,.05,1),background .5s cubic-bezier(0.77,.2,.05,1),opacity .55s ease
              transition:transform .5s cubic-bezier(0.77,.2,.05,1),background .5s cubic-bezier(0.77,.2,.05,1),opacity .55s ease,-webkit-transform .5s cubic-bezier(0.77,.2,.05,1)
            i:nth-of-type(1)
              top:16.5px
            i:nth-of-type(2)
              top:23px
            i:nth-of-type(3)
              top:30px
          ^[-2].on
            i
              background:url(./nav_iOn.jpg) no-repeat
              background-size:100% 100%
              &:nth-of-type(1)
                opacity:1
                -webkit-transform:rotate(-45deg)
                transform:rotate(-45deg)
              &:nth-of-type(2)
                opacity:0
              &:nth-of-type(3)
                opacity:1
                -webkit-transform:rotate(45deg)
                transform:rotate(45deg)
  @media only screen and (min-width:750px)
    .flexBar
      margin-left:-375px
</style>
