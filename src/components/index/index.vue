<template>
  <div class="index">
    <m-header>
      <img class="tLogo" src="@/common/image/logo.png" alt="哥们网H5手游">
    </m-header>
    <div class="slider-wrapper">
      <slider v-if="banner.length">
        <div v-for="item in banner">
          <a href="javascript:;">
            <img :src="item.img" alt="">
          </a>
        </div>
      </slider>
    </div>
    <ul class="menuNav">
			<li><router-link to="/game"><img src="@/common/image/iconNav01.jpg">游戏</router-link></li>
			<li><router-link to="/gift"><img src="@/common/image/iconNav02.jpg">礼包</router-link></li>
			<li><router-link to="/news"><img src="@/common/image/iconNav03.jpg">资讯</router-link></li>
			<li><router-link to="/login"><img src="@/common/image/iconNav04.jpg">充值</router-link></li>
		</ul>
    <div class="swiper-wrap" v-if="boutiquedata.length">
      <div class="game-swiper-content">
        <div class="game-swiper-list">
          <div class="game-swiper-item" v-for="item in boutiquedata">
            <div class="gImg gIcon">
							<img :src="item.flag">
						</div>
						<h5>{{item.name}}</h5>
						<p>{{item.slogan}}</p>
						<a class="btnCommon" href="javascript:;">马上玩</a>
          </div>
        </div>
      </div>
    </div>
    <div class="hotList">
      <h6 class="tCommon">必玩爆款</h6>
      <div class="hotLink">
				<a v-if="explodedata.length" class="btnLink" href="javascript:;"><img :src="explodedata[0].flag"></a>

				<a class="btnCommon" href="javascript:;">马上玩</a>
			</div>
      <m-game :explodedata="explodedata"></m-game>
    </div>
    <div class="topic">
      <h6 class="tCommon">专题推荐</h6>
      <div class="swiper-wrap">
        <div class="game-swiper-content">
          <div class="game-swiper-list">
            <div class="topic-swiper-item" v-for="item in explodedata">
              <a href="#"><img :src="item.flag"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="newGame">
      <tabs @showTab="showTab" :tabs="indextab"></tabs>
      <div class="tabsContent">
        <server-list :gamelist="hasbeenserved"></server-list>
        <server-list :gamelist="notserved" :showTime="true" :btnText="btnText" ref="notserved"></server-list>
      </div>
    </div>
    <div class="news">
      <div class="top">
        <h6 class="tCommon">游戏资讯</h6>
      </div>
      <div class="newsContent">
        <ul>
          <li @click="getNewsType(item.type)" v-for="item in indexnews"><span :class="['s1',{'sh':item.type==3},{'sa':item.type==2},{'sg':item.type==1}]">{{newstype[item.type-1]}}</span><router-link :to="'/news/'+item.id">{{item.title}}</router-link><span class="s2">{{item.create_time}}</span></li>
        </ul>
        <p class="more"><router-link to="/news">查看全部 ></router-link></p>
      </div>
    </div>
    <div class="allgame">
      <div class="top">
				<h6 class="tCommon">全部游戏</h6>
			</div>
      <game-list :gamelist="gamelistindex"></game-list>
      <p class="more"><router-link to="/game">查看全部 ></router-link></p>
    </div>
    <m-footer></m-footer>
  </div>
</template>
<script>
  import MHeader from '@/components/m-header/m-header'
  import Slider from '@/base/slider/slider'
  import MGame from '@/components/m-game/m-game'
  import ServerList from '@/components/server-list/server-list'
  import Tabs from '@/base/tab/tab'
  import GameList from '@/components/game-list/game-list'
  import MFooter from '@/components/m-footer/m-footer'
  import {getBanner,getNewsList} from '@/api/banner.js'
  import {recomGame} from '@/api/recomGame.js'
  import {gameDetail} from '@/api/gameDetail.js'
  import {serverAction} from '@/api/serverAction.js'
  import {gameList} from '@/api/gameList.js'
  import {ERR_OK} from '@/api/config.js'
  import Boutique from '@/common/js/boutique.js'
  import {mapMutations,mapGetters} from 'vuex'
  export default {
    components: {
      MHeader,
      Slider,
      MGame,
      ServerList,
      Tabs,
      GameList,
      MFooter
    },
    computed:{
      ...mapGetters([
        'news',
        'gamelist'
      ]),
      gamelistindex() {

        return this.gamelist.rows && this.gamelist.rows.slice(0,10)
      },
      notserved(){
        if(this.servergame.notserved){
          return this.servergame.notserved.slice(0,5)
        }
      },
      hasbeenserved(){
        return this.servergame.hasbeenserved && this.servergame.hasbeenserved.slice(0,5)
      },
      indexnews() {
        let ret = []
        this.news.forEach((item) => {
          let times = []
          times.push(item.create_time.split('-')[1])
          times.push(item.create_time.split('-')[2])
          console.log()
          ret.push({
            create_time:times.join('-'),
            id:item.id,
            title:item.title,
            type:item.type

          })
        })
        return ret.slice(0,5)
      }
    },
    data() {
      return {
        banner:[],
        limit: 5,
        latestlimit:null,
        boutique:'boutique',
        explode:'explode',
        latest:'latest',
        boutiquedata: [],
        explodedata:[],
        explodefirstflag:'',
        servergame:{},
        indextab:['最新开服','新服预告'],
        btnText:'预约',
        newstype:['活动','公告','攻略'],
        gamelimit:10,
        page:0
      }
    },
    created() {
      this._getBanner()
      this._getBoutique()
      this._getExplode()
      this._getServerGame()
      this._getNewsList()
      this._getGameList()

    },
    mounted() {
      this.$refs.notserved.$el.style.display = "none"
    },
    methods: {
      _getBanner() {
        getBanner().then((res) => {
          if(res.status == ERR_OK) {
            this.banner = res.data.rows
          }
        })
      },
      _getBoutique() {
        recomGame(this.limit, this.boutique).then((res) => {
          if(res.status == ERR_OK) {
            this.boutiquedata = this._normallizeBoutique(res.data)
          }
        })
      },
      _getExplode() {
        recomGame(this.limit, this.explode).then((res) => {
          if(res.status == ERR_OK) {
            this.explodedata = this._normallizeBoutique(res.data)
          }
        })
      },
      _getServerGame() {
        serverAction().then((res) => {
          if(res.status == ERR_OK) {
            this.servergame = this._normallizeServerGame(res.data)
          }
        })
      },
      _getNewsList() {
        getNewsList().then((res) => {
          if(res.status == ERR_OK) {
            this.SET_NEWS(res.data)
            this._getNewsTypeCount(res.data)
          }
        })
      },
      _getGameList() {
        gameList(this.gamelimit,this.page).then((res) => {
          if(res.status == ERR_OK){
            this.SET_GAME_LIST(res.data)
            let storage = window.localStorage
            //localStorage只存储字符串
            let obj = JSON.stringify(res.data)
            storage.setItem('gamelist',obj)
          }

        })
      },
      _getNewsTypeCount(data) {

        let ggcount = 0
        let glcount = 0
        data.forEach((item) => {
          if(item.type == 2){
            ggcount ++
          }
          else if(item.type == 3){
            glcount ++
          }
        })
        this.SET_GG_NEWS_COUNT(ggcount)
        this.SET_GL_NEWS_COUNT(glcount)
        let storage = window.localStorage

        storage.setItem('ggcount',ggcount)
        storage.setItem('glcount',glcount)
      },
      _normallizeServerGame(list){
        let gameserve = {
          notserved:[],
          hasbeenserved:[]
        }

        let nowtime = Math.round(new Date().getTime()/1000)
        list.forEach((item) => {
          let servers = item.server.rows
          let iconurl
          if(item.icon.indexOf('http') < 0 ){
            iconurl = `http://h5.anfeng.com${item.icon}`
          }
          else{
            iconurl = item.icon
          }
          servers.forEach((server) => {
            if(server.start_time > nowtime) {
              gameserve.notserved.push({
                server:server.server,
                name:server.game_name,
                label:server.label,
                id:item.id,
                icon:iconurl
              })
            }
            else{
              gameserve.hasbeenserved.push({
                server:server.server,
                name:server.game_name,
                label:server.label,
                id:item.id,
                icon:iconurl
              })
            }
          })
        })
        this.SET_HAS_BEEN_SERVED(gameserve.hasbeenserved)
        this.SET_NOT_SERVED(gameserve.notserved)
        return gameserve
      },
      _normallizeBoutique(data) {
        let ret = []
        data.forEach((item) => {
          gameDetail(item.id).then((res) => {
            if(res.status == ERR_OK){
              let flagurl
              let iconurl
              if(res.data.flag.indexOf('http') < 0 ){
                flagurl = `http://h5.anfeng.com${res.data.flag}`
              }
              else{
                flagurl = res.data.flag
              }
              if(res.data.icon.indexOf('http') < 0 ){
                iconurl = `http://h5.anfeng.com${res.data.icon}`
              }
              else{
                iconurl = res.data.icon
              }
              ret.push(new Boutique({
                id:item.id,
                icon:iconurl,
                name:item.name,
                slogan:item.slogan,
                type:item.type,
                flag:flagurl
              }))
            }
          })
        })
        return ret
      },
      showTab(index) {
        const _div = document.getElementsByClassName('game-server-list')
        for(let i=0;i<_div.length;i++){
          if(i == index){
            _div[i].style.display = "block"
          }
          else{
            _div[i].style.display = "none"
          }
        }
      },
      getNewsType(type){
        let _type
        if(type == 2) {
          _type = '新闻公告'
        }
        else if(type == 3){
          _type = '攻略心得'
        }
        else if(type == 1){
          _type = '活动'
        }
        this.SET_NEWS_TYPE(_type)
      },
      ...mapMutations({
        SET_NEWS:'SET_NEWS',
        SET_GAME_LIST:'SET_GAME_LIST',
        SET_HAS_BEEN_SERVED:'SET_HAS_BEEN_SERVED',
        SET_NOT_SERVED:'SET_NOT_SERVED',
        SET_GG_NEWS_COUNT:'SET_GG_NEWS_COUNT',
        SET_GL_NEWS_COUNT:'SET_GL_NEWS_COUNT',
        SET_NEWS_TYPE:'SET_NEWS_TYPE'
      })
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .index
    max-width:750px
    margin:0 auto
    .more
      text-align: center
      color: #c7c7c7
      font-size: 12px
      padding-bottom: 20px
    .btnCommon
      display: block
      margin: 7.5px auto 0 auto
      height: 24px
      line-height: 24px
      width: 68px
      text-align: center
      color: #fff
      font-size: 12px
      background: #57a0fb
      border-radius: 15px
  .tCommon
    margin: 0 auto
    width: 89px
    height: 15px
    text-align: center
    background: url(../../common/image/titleBg.jpg) no-repeat
    background-size: 100% 100%
    font-size: 14px
    color: #333;
    line-height: 15px
  .slider-wrapper
    width:100%
    max-width:750px
    height:145px
    padding-top:50px
    overflow:hidden
  .menuNav
    max-width:750px
    display:flex
    height:75px
    background:#fff
    padding-bottom: 10px
    li
      flex:1
      a
        display:block
        width:46px
        height:75px
        margin:0 auto
        text-align:center
        color:#333
        font-size:12px
        img
          width:46px
          height:49.5px
          margin-bottom:7px
  .swiper-wrap
    width:100%
    height:auto
    padding-top:20px
    border-top:12px solid #f1f1f1
    padding-bottom:20px
    .game-swiper-content
      position: relative
      box-sizing: border-box
      height: 100%
      width: 100%
      overflow-x: scroll
      overflow-y: hidden
      .game-swiper-list
        position: relative
        box-sizing: border-box
        height: 100%
        width: auto
        white-space: nowrap
        .game-swiper-item
          position: relative
          display: inline-block
          box-sizing: border-box
          width:130px
          height: 172.5px
          margin-left:15px
          overflow: hidden
          border:1px solid #c7c7c7
          border-radius:5px
          .gImg
            position:relative
            img
              width:130px
              height:90px
              margin-bottom:7.5px
          h5
            color: #333
            font-size: 14px
            line-height: 14px
            margin: 0 auto 5px auto
            font-weight: 400
            width: 85%
            text-align:center
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
          p
            text-align: center
            font-size: 10px
            color: #999
            width: 110px
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
            margin:0 auto
        .topic-swiper-item
          position: relative
          display: inline-block
          box-sizing: border-box
          width:207px
          height: 101px
          margin-left:15px
          margin-top:15px
          overflow: hidden
          border-radius:5px
          img
            width:100%
            height:100%
  .hotList
    margin-top: 12.5px
    background: #fff
    padding: 20px 0
    border-top:12px solid #f1f1f1
    .hotLink
      position:relative
      width:90%
      height:120px
      margin:16px auto 18px

      a.btnLink
        display:block
        width:100%
        height:100%
        img
          width:100%
          height:100%
          border-radius:5px
      .btnCommon
        position:absolute
        right:7px
        bottom:10px
  .topic
    padding-top:20px
    border-top:12px solid #f1f1f1
    padding-bottom:20px
    .swiper-wrap
      padding-top:0px
      border-top:none
      padding-bottom:0px
  .newGame
    width: 100%
    border-top:12.5px solid #f1f1f1
    background: #fff
    padding: 20px 0 0
  .news
    width: 90%
    border-top: 12.5px solid #f1f1f1
    background: #fff
    padding: 20px 15px 0
    .top
      height: 28px
      border-bottom: 1px solid #e9e9e9
      margin-bottom: 19px
    ul
      width:100%
      li
        height: 18px
        line-height: 18px
        font-size: 14px
        color: #333
        margin-bottom: 20px
        .s1
          display: inline-block
          float: left
          width: 30px
          height: 18px
          margin-right: 10px
          border-radius: 3px
          box-sizing: border-box
          font-size: 11px
          text-align: center
          line-height: 18px
        .sg
          border: 1px solid #ff8f17
          color: #ff8f17
        .sa
          border:1px solid #3cc56c
          color:#3cc56c
        .sh
          border:1px solid #57a0fb
          color:#57a0fb
        .s2
          float: right
          width: 50px
          color: #999
          text-align: right
        a
          float: left
          color: #333
          display: inline-block
          width: 67%
          white-space: nowrap
          overflow: hidden
          text-overflow: ellipsis
  .allgame
    width: 90%
    border-top: 12.5px solid #f1f1f1
    background: #fff
    padding: 20px 15px 0
    .top
      height: 28px
      border-bottom: 1px solid #e9e9e9
      margin-bottom: 5px



</style>
