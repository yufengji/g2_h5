<template>
  <div class="tabs">
    <ul>
      <li :class="{'on':index === currentIndex}" v-for="(item,index) in tabs" @click="showTabs(index)">{{item}}</li>
    </ul>
  </div>
</template>
<script>
  export default{
    props:{
      tabs:{
        type: Array
      }
    },
    data() {
      return {
        currentIndex:0
      }
    },
    methods:{
      showTabs(index) {
        this.$emit('showTab',index)
        this.currentIndex = index
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .tabs
    height:25px
    padding:0 15px
    border-bottom: 1px solid #e9e9e9
    ul
      display:flex
      justify-content:center
      li
        padding:0 10px
        font-size:12px
        &.on
          color:#57a0fb
          border-bottom:1px solid #57a0fb
          padding-bottom:13px

</style>
