<template>
  <div class="game-list">
    <ul class="aList">
				<li v-for="item in gamelist">
          <strong class="rankTip" v-if="rankflag"></strong>
					<img :src="_autoUrl(item.icon)">
					<div>
						<h6><span>{{item.name}}</span><span class="span_label" :style="{color:item2.colorpicker,border:'1px solid '+item2.colorpicker}" v-for="item2 in item.type">{{item2.label}}</span></h6>
						<p class="p1">传奇类<em>|</em><strong>99.5万</strong>人在玩</p>
						<p>{{item.slogan}}</p>
					</div>
					<a class="btnCommon" href="javascript:;">马上玩</a>
				</li>
			</ul>
  </div>
</template>
<script>
  export default{
    props:{
      gamelist:{
        type:Array,
        default(){
          return []
        }
      },
      rankflag:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      _autoUrl(value){
        let iconurl
        if(value.indexOf('http') < 0){
          iconurl = `http://h5.anfeng.com${value}`
        }
        else{
          iconurl = value
        }
        return iconurl
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .aList
    margin-bottom: 20px
    li
      overflow: hidden
      padding: 10px 0
      border-bottom: 1px solid #e9e9e9
      position:relative
      img
        float: left
        width: 60px
        height: 60px
        border-radius:10px
      >div
        float: left
        margin-left: 10px
        width: 50%
        h6
          width:100%
          font-size: 14px
          color: #333
          font-weight: 400
          white-space: nowrap
          overflow: hidden
          text-overflow: ellipsis
          padding:4px 0
          .span_label
            border-radius:2px
            padding:0 3px
            margin-left:5px
            box-sizing:border-box
        p
          font-size: 10px
          color: #999
          width: 100%
          display: block
          white-space: nowrap
          overflow: hidden
          text-overflow: ellipsis
          a
            color: #999
          em
            padding: 0 5px
          strong
            color: #ff8f17
            font-style: italic
        .p1
          padding: 5px 0
      .btnCommon
        display: block
        margin: 0 auto
        width: 68px
        height: 28px
        text-align: center
        line-height: 28px
        color: #fff
        font-size: 12px
        background: #57a0fb
        border-radius: 15px
        float: right
        margin-top: 18px
      .rankTip
        width:60px
        height:60px
        display:block
        position:absolute
        top:10px
        left:0
        z-index:2
        text-indent:-999em
    li:nth-child(1)
      .rankTip
        background:url(./rankBg1.png)
        background-size:100% 100%
    li:nth-child(2)
      .rankTip
        background:url(./rankBg2.png)
        background-size:100% 100%
    li:nth-child(3)
      .rankTip
        background:url(./rankBg3.png)
        background-size:100% 100%


</style>
