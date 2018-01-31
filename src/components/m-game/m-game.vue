<template>
  <div class="gameList">
		<div v-for="item in explodedata">
			<img class="icon" :src="item.icon">
			<h6>{{item.name}}</h6>
			<a class="btnCommon" href="javascript:;">马上玩</a>
		</div>
	</div>
</template>
<script>
  export default {
    props:{
      explodedata: {
        type:Array,
        default: []
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .gameList
    width:90%
    margin:0 auto
    overflow:hidden
    display:flex
    justify-content: space-between
    &>div
      flex:0 0 53px
      margin-right:5.5px;
      .icon
        width:53px
        height:53px
        display:block
        margin:0 auto
      h6
        text-align:center
        font-size:12px
        color:#333
        padding:5px 0 12px
        line-height:12px
        font-weight:400
        width: 50px
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
        a
          color:#333
      .btnCommon
        width:53px
        height:24px
        line-height:24px
        display: block;
        margin: 0 auto;
        text-align: center;
        color: #fff;
        font-size: 12px;
        background: #57a0fb;
        border-radius: 15px;
</style>
