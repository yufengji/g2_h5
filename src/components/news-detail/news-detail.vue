<template>
  <div class="newsdetail">
    <m-header>
      <p><img class="logo" src="@/common/image/logo2.png" alt="哥们网H5手游">
        <img class="arrow" src="@/common/image/iconArrow.png">
        <strong>资讯</strong>
        <img class="arrow" src="@/common/image/iconArrow.png">
        <strong>{{newstype}}</strong>
      </p>
    </m-header>
    <div class="newsContent">
      <h3>{{newsdetail.title}}</h3>
      <p class="publishtime">{{newsdetail.create_time}}</p>
      <div class="cont">
				<p v-html="newsdetail.content"></p>
			</div>
    </div>
  </div>
</template>
<script>
  import MHeader from '@/components/m-header/m-header'
  import {getNewsDetail} from '@/api/banner.js'
  import {mapGetters} from 'vuex'
  export default{
    components:{
      MHeader
    },
    computed:{
      ...mapGetters([
        'newstype'
      ])
    },
    created(){
      this._getNewsDetail(this.$route.params.id)
    },
    mounted(){
      document.documentElement.scrollTop = 0
    },
    data() {
      return {
        newsdetail:{}
      }
    },
    methods:{
      _getNewsDetail(id){
        getNewsDetail(id).then((res) => {
          if(res.status == 1) {
            this.newsdetail = res.data
          }
        })
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .newsdetail
    width:100%
    max-width:750px
    margin:0 auto
    overflow:hidden
    .newsContent
      width:90%
      margin:50px auto 0 auto
      padding: 18px 0
      h3
        width:90%
        margin:0 auto
        text-align:center
        font-size:15px
        color:#333
      p.publishtime
        text-align:center
        font-size:12px
        color:#999
        padding-top:8px
      div.cont
        margin-top:15px
        p
          font-size:12px
          color:#666
          line-height:20px
        img
          display:inline-block
          margin:0 auto


</style>
