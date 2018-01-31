<template>
  <div class="gift-list">
    <div class="list-container" v-for="item in gift">
      <div class="gift-name">
  			<img class="game-icon" :src="item.icon" alt="">
  			<div class="g-msg">
  				<h5>{{item.name}}</h5>
  				<p class="pTitle">浪漫回合制，尽在梦道！</p>
  			</div>
  			<a class="btnEnter" href="javascript:;">马上玩</a>
  		</div>
      <div class="gift-package">
        <div class="list" v-for="item2 in item.gift.rows">
  				<h5>{{item2.title}}</h5>
  				<p class="p1">{{item2.content}}</p>
  				<div class="schedule">
  					<p class="pSchedule" :data-schedule='_calRemain(item2.remain,item2.total)'><span :style='{width:_calSchdul(item2.remain,item2.total)}'></span></p>
  					<!--data-schedule=>已领取百分比-->
  					<p class="gTip">剩余{{_calRemain(item2.remain,item2.total)}}%</p>
  				</div>
          <router-link to="/login" class="btnGet btnLook">查看</router-link>
  				
  			</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      gift:{
        type:Array,
        default(){
          return []
        }
      }
    },
    computed:{

    },
    mounted(){
    },
    methods:{
      _calRemain(remain,total){
        return `${(remain/total).toFixed(2)*100}`
      },
      _calSchdul(remain,total){

        let _w = 107
        return `${parseInt((remain/total).toFixed(2)*_w)}px`
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .gift-list
    width:100%
    margin:0 auto
    .list-container
      padding:0 5%
      border-bottom: 12.5px solid #f1f1f1
    .btnEnter,.btnLook
      width:65px
      height:28px
      border-radius:30px
      background:#57a0fb
      color:#fff
      font-size:13px
      display:block
      float:right
      text-align:center
      line-height:28px
      margin-top:17px
    .gift-name
      width: 100%
      padding: 10px 0
      margin: 0 auto
      border-bottom: 1px solid #c7c7c7
      overflow:hidden
      .game-icon
        width:71px
        height:71px
        float:left
      .g-msg
        float:left
        margin:10px 0 0 10px
        width:49%
        overflow:hidden
        h5
          width:100%
          font-size:14px
          color:#333
          line-height:14px
          white-space:nowrap
          overflow:hidden
          text-overflow:ellipsis
          margin-bottom:14px
          font-weight:400
        .pTitle
          width: 90%
          font-size: 12px
          color: #999
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
    .gift-package
      padding-bottom:0
      border-bottom:1px solid #f1f1f1
      .list
        position:relative
        padding:17.5px 0
        border-bottom:1px solid #c7c7c7
        h5
          font-size:14px
          color:#333
          line-height:14px
          padding-bottom:8px
          font-weight:400
          width:60%
          white-space:nowrap
          overflow:hidden
          text-overflow:ellipsis
        p.p1
          width:60%
          line-height:18px
          color:#999
          margin-bottom:10px
          font-size:13px
          display: -webkit-box
          -webkit-box-orient: vertical
          -webkit-line-clamp: 2
          overflow: hidden
        .schedule
          position:relative
          .pSchedule
            position:relative
            width:105px
            height:10px
            border:1px solid #57a0fb
            background:#e7f2ff
            border-radius:5px
            span
              display:block
              width:0
              height:100%
              background:#57a0fb
              position:absolute
              top:0
              left:0
              border-radius:5px
              transition:width .3s linear
          .gTip
            position:absolute
            left:115px
            top:0
            font-size:10px
            line-height:10px
            color:#57a0fb
        .btnGet
          position:absolute
          right:0
          top:25px
          width:68px
          height:28px
          border:1px solid #57a0fb
          border-radius:15px
          box-sizing:border-box
          display:block
          font-size:14px
          color:#57a0fb
          text-align:center
          line-height:28px
        .btnGeted
          border:1px solid #999
          color:#999
        .btnLook
          border: 1px solid #ff8f17
          color: #ff8f17
          background: #fff
      .list:last-child
        border-bottom:none



</style>
