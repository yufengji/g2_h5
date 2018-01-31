<template>

  <div class="game-server-list">
    <div v-if='gamelist.length'>
      <div class="game" v-for="item in gamelist">
  			<div class="gLeft">
  				<img :src="item.icon" alt="">
  				<div>
  					<h6>{{item.name}}</h6>
  					<p>{{item.server}}</p>
  				</div>
  			</div>
  			<div class="gRight">
  				<router-link class="btnCommon" to="/login">{{btnText}}</router-link>
  				<p v-if="showTime"><span>{{item.label}}</span></p>
  			</div>
  		</div>
  		<p class="more" v-if="more"><router-link to="/game">查看全部 ></router-link></p>
    </div>

    <div class="noCommon" v-if="!gamelist.length">
			<img src="@/common/image/img03.png">
			<p>当前无新开服的游戏<br/>我们正在努力补充中</p>
		</div>
	</div>

</template>
<script>
  export default{
    props:{
      btnText:{
        type:String,
        default:'马上玩'
      },
      more:{
        type:Boolean,
        default:true
      },
      showTime:{
        type:Boolean,
        default:false
      },
      gamelist:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .game-server-list
    width: 90%
    padding: 20px 15px 0
    .game
      overflow: hidden
      padding: 10px 0
      .gLeft
        float: left
        width: 70%
        img
          width: 60px
          height: 60px
          float: left
          margin-right: 13px
        &>div
          float: left
          width: 58%
          h6
            font-size: 12px;
            color: #333;
            padding: 15px 0 7.5px;
            line-height: 12px;
            font-weight: 400;
            width: 60%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          p
            font-size: 11px
            color: #ff8f17
            font-weight: 700
            width: 80%
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
      .gRight
        width: 30%
        float: right
        height: 60px
        display: flex
        -webkit-box-orient: vertical
        -webkit-box-direction: normal
        -webkit-flex-direction: column
        -ms-flex-direction: column
        flex-direction: column
        -webkit-justify-content: space-around
        -ms-flex-pack: distribute
        justify-content: space-around
        .btnCommon
          display: block
          margin: 0 auto
          width: 58px
          height: 25px
          text-align: center
          line-height: 25px
          color: #fff
          font-size: 12px
          background: #57a0fb
          border-radius: 15px
        p
          font-size: 10px
          color: #999
          text-align: center
          span
            color: #ff8f17
    .more
      text-align: center;
      color: #c7c7c7;
      font-size: 12px;
      padding-bottom: 20px;
    .noCommon
      img
        width:246px
        height:104px
        display:block
        margin:0 auto
      p
        font-size:14px
        color: #e5e5e5
        text-align: center
        padding-top: 30px
        padding-bottom: 20px

</style>
