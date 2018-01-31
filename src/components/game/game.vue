<template>
  <div class="game">
    <m-header>
      <p><img class="logo" src="@/common/image/logo2.png" alt="哥们网H5手游">
          <img class="arrow" src="@/common/image/iconArrow.png">
          <strong>游戏</strong>
      </p>
    </m-header>
    <div class="switch">
      <tab :tabs="tabs" @showTab="showTab"></tab>
    </div>
    <div class="tabsContent">
      <div class="all list">
        <game-list :gamelist='result_all'></game-list>
        <loading v-if="hasmore_all" :title='title'></loading>
      </div>
      <div class="hot list" style="display:none">
        <game-list :gamelist='result_hot' :rankflag='rankflag'></game-list>
        <loading v-if="hasmore_hot" :title='title'></loading>
      </div>
      <div class="served list" style="display:none">
        <server-list :gamelist='Has_Been_Served' :more='false'></server-list>
      </div>
      <div class="notserved list" style="display:none">
        <server-list :gamelist='Not_Served' :btnText='btnText' :showTime='true' :more='false'></server-list>
      </div>
    </div>
  </div>
</template>
<script>
  import MHeader from '@/components/m-header/m-header'
  import Tab from '@/base/tab/tab'
  import GameList from '@/components/game-list/game-list'
  import {mapMutations,mapGetters} from 'vuex'
  import Loading from '@/base/loading/loading'
  import ServerList from '@/components/server-list/server-list'
  import {isBottom} from '@/common/js/scrollBottom.js'
  import {gameList} from '@/api/gameList'
  import {ERR_OK} from '@/api/config'
  import {serverAction} from '@/api/serverAction.js'
  export default{
    components:{
      MHeader,
      Tab,
      GameList,
      Loading,
      ServerList
    },
    computed:{
      ...mapGetters([
        'gamelist',
        'Has_Been_Served',
        'Not_Served'
      ]),
      allpage() {
        return Math.ceil(this.gamelist.total/10)
      }
    },
    data(){
      return {
        tabs:['全部游戏','热门排行','最新开服','新服预告'],
        btnText:'预约',
        page_all:0,
        page_hot:0,
        limit:10,
        title:'',
        currenttype:0,
        result_all:[],
        result_hot:[],
        hasmore_all:true,
        hasmore_hot:true,
        rankflag:true
      }
    },
    created() {
      var storage=window.localStorage

      this.SET_GAME_LIST(JSON.parse(storage.getItem('gamelist')))
      this.result_all = this.gamelist.rows
      this.result_hot = this.gamelist.rows
      this._getServerGame()
    },
    mounted() {
      document.documentElement.scrollTop = 0
      window.addEventListener('scroll',this.getMore)
    },
    methods:{
      showTab(index) {
        this.currenttype = index
        const _div = document.getElementsByClassName('list')
        for(let i=0;i<_div.length;i++){
          if(i == index){
            _div[i].style.display = "block"
          }
          else{
            _div[i].style.display = "none"
          }
        }
      },
      getMore(){
        if(isBottom()){
          if(this.currenttype == 0) {
            this.page_all ++
            if(this.page_all > this.allpage){
              this.hasmore_all = false
              return
            }
            gameList(this.limit,this.page_all).then((res) => {

              if(res.status == ERR_OK){
                this.result_all = this.result_all.concat(res.data.rows)

              }
            })
          }
          else if(this.currenttype == 1){
            this.page_hot ++
            if(this.page_hot > this.allpage){
              this.hasmore_hot = false
              return
            }
            gameList(this.limit,this.page_hot).then((res) => {

              if(res.status == ERR_OK){
                this.result_hot = this.result_hot.concat(res.data.rows)

              }
            })
          }
        }

      },
      _getServerGame() {
        serverAction().then((res) => {
          if(res.status == ERR_OK) {
            this.servergame = this._normallizeServerGame(res.data)
          }
        })
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
      ...mapMutations({
        SET_GAME_LIST:'SET_GAME_LIST',
        SET_HAS_BEEN_SERVED:'SET_HAS_BEEN_SERVED',
        SET_NOT_SERVED:'SET_NOT_SERVED'
      })
    }

  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .game
    overflow:hidden
    max-width:750px
    margin:0 auto
  .switch
    margin-top:50px
    padding-top:18px
  .tabsContent
    width:90%
    margin:0 auto

</style>
