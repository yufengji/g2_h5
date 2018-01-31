<template>
  <div class="news">
    <m-header>
      <p><img class="logo" src="@/common/image/logo2.png" alt="哥们网H5手游">
          <img class="arrow" src="@/common/image/iconArrow.png">
          <strong>新闻公告</strong>
      </p>
    </m-header>
    <div class="switch">
      <tab :tabs="tabs" @showTab="showTab"></tab>
    </div>
    <div class="tabsContent">
      <div class="ggnews">
        <news-list :news='result_gg' :hasmore='hasmore_gg' @getNewsMore="getNewsMore" @getNewsType='getNewsType'></news-list>
      </div>
      <div class="ggnews" style="display:none">
        <news-list :news='result_gl' :hasmore='hasmore_gl' @getNewsMore="getNewsMore" @getNewsType='getNewsType'></news-list>
      </div>
    </div>

  </div>
</template>
<script>
  import MHeader from '@/components/m-header/m-header'
  import Tab from '@/base/tab/tab'
  import NewsList from '@/components/news-list/news-list'
  import {getNewsList} from '@/api/banner.js'
  import {mapMutations,mapGetters} from 'vuex'
  export default{
    components:{
      MHeader,
      Tab,
      NewsList
    },
    computed:{
      ...mapGetters([
        'ggnewscount',
        'glnewscount'
      ])
    },
    data(){
      return {
        tabs:['新闻公告','攻略心得'],
        newsgg:2,
        newsgl:3,
        limit:5,
        newstype:2,
        ggpage:1,
        glpage:1,
        result_gg:[],
        result_gl:[],
        newsallpage:0,
        hasmore_gg:true,
        hasmore_gl:true,
      }
    },
    created() {
      this._getNewsList()
      var storage=window.localStorage
      this.SET_GG_NEWS_COUNT(storage.getItem('ggcount'))
      this.SET_GL_NEWS_COUNT(storage.getItem('glcount'))
    },
    mounted(){
      document.documentElement.scrollTop = 0
    },
    methods:{
      showTab(index) {
        this.newstype = index + 2
        console.log(this.newstype)
        const _div = document.getElementsByClassName('ggnews')
        for(let i=0;i<_div.length;i++){
          if(i == index){
            _div[i].style.display = "block"
          }
          else{
            _div[i].style.display = "none"
          }
        }
      },
      _getNewsList() {
        getNewsList(this.newsgg,this.limit).then((res) => {
          if(res.status == 1){
            console.log(res.data)
            this.result_gg = res.data
          }
        })
        getNewsList(this.newsgl,this.limit).then((res) => {
          if(res.status == 1){
            this.result_gl = res.data
          }
        })
      },
      getNewsMore() {

        if(this.newstype == 2){
          this.newsallpage = this.ggnewscount
          this.ggpage ++
          if(this.ggpage > Math.ceil(this.newsallpage/5)){
            this.hasmore_gg = false
            return
          }
          getNewsList(this.newstype,this.limit*this.ggpage).then((res) => {
            if(res.status == 1){
              let _new = res.data.slice(this.limit*(this.ggpage-1),res.data.length)
              this.result_gg = this.result_gg.concat(_new)
            }

          })
        }
        else if(this.newstype == 3){
          this.newsallpage = this.glnewscount
          this.glpage ++
          if(this.glpage > Math.ceil(this.newsallpage/5)){
            this.hasmore_gl = false
            return
          }
          getNewsList(this.newstype,this.limit*this.glpage).then((res) => {
            if(res.status == 1){
              let _new = res.data.slice(this.limit*(this.glpage-1),res.data.length)
              this.result_gl = this.result_gl.concat(_new)
            }

          })
        }
      },
      getNewsType(type){
        let _type
        if(type==2){
          _type = '新闻公告'
        }
        else if(type==3){
          _type = '攻略心得'
        }
        this.SET_NEWS_TYPE(_type)
      },

      ...mapMutations({
        SET_GG_NEWS_COUNT:'SET_GG_NEWS_COUNT',
        SET_GL_NEWS_COUNT:'SET_GL_NEWS_COUNT',
        SET_NEWS_TYPE:'SET_NEWS_TYPE'
      })
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .news
    overflow:hidden
    max-width:750px
    margin:0 auto
    .switch
      margin-top:50px
      padding-top:18px
</style>
