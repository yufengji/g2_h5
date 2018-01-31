<template>
  <div class="newslist">
    <ul>
			<li v-for="item in news" @click="getNewsType(item.type)">
				<p><span class="iTip">{{newstype[item.type-2]}}</span><router-link :to="'/news/'+item.id">{{item.title}}</router-link><span class="times">{{item.create_time}}</span></p>
				<img src="images/thumbImg.jpg">
			</li>
		</ul>
    <p class="more" v-if='hasmore' @click="getNewsMore"><a href="javascript:;">点击查看更多</a></p>
  </div>
</template>
<script>
  export default{
    props:{
      news:{
        type:Array,
        default(){
          return []
        }
      },
      hasmore:{
        type:Boolean,
        default:true
      }
    },
    data(){
      return {
        newstype:['公告','攻略']
      }
    },
    methods:{
      getNewsMore(){

        this.$emit('getNewsMore')
      },
      getNewsType(type){
        this.$emit('getNewsType',type)
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .newslist
    width:90%
    padding:18px 5% 0
    min-height:412px
    li
      overflow:hidden
      margin-bottom:20px
      p
        width:62%
        float:left
        line-height:23px
        font-size:12px
        padding-top:3px
        span.iTip
          padding:2px 3px
          box-sizing:border-box
          border:1px solid #3cc56c
          color:#3cc56c
          border-radius:2px
          margin-right:5px
        span.iGL
          border: 1px solid #ff8f17
          color: #ff8f17
        a
          color:#333
          font-size:12px
          text-decoration: none
        span.times
          display:block
          color:#bdbdbd
      img
        float:right
        width:105px
        height:60px
        margin-top:5px
    .more
      text-align:center
      font-size:12px
      color:#c7c7c7
      margin-bottom:30px
</style>
