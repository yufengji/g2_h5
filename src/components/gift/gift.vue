<template>
  <div class="gift">
    <m-header>
      <p><img class="logo" src="@/common/image/logo2.png" alt="哥们网H5手游">
          <img class="arrow" src="@/common/image/iconArrow.png">
          <strong>礼包</strong>
      </p>
    </m-header>
    <div class="gift-container">
      <gift-list :gift='giftList'></gift-list>
      <loading v-if="hasmore" :title='title'></loading>
    </div>
  </div>
</template>
<script>
  import MHeader from '@/components/m-header/m-header'
  import GiftList from '@/components/gift-list/gift-list'
  import {ERR_OK} from '@/api/config.js'
  import {giftAction} from '@/api/giftAction.js'
  import {mapMutations,mapGetters} from 'vuex'
  import {isBottom} from '@/common/js/scrollBottom.js'
  import Loading from '@/base/loading/loading'
  export default{
    components:{
      MHeader,
      GiftList,
      Loading
    },
    computed: {
      ...mapGetters([
        'gift'
      ])
    },
    data(){
      return {
        page:1,
        pageSize:5,
        giftList:[],
        hasmore:true,
        title:''
      }
    },
    created() {
      this._getGift()
    },
    mounted() {
      document.documentElement.scrollTop = 0
      window.addEventListener('scroll',this.getMoreGift)
    },
    methods:{
      _getGift(){
        giftAction().then((res) => {
          if(res.status == ERR_OK){
            this.giftList = res.data.slice(0,5)
            this.SET_GIFT(res.data)
          }
        })
      },
      getMoreGift(){
        if(isBottom()){
          this.page ++
          if(this.page > Math.ceil(this.gift.length/this.pageSize)){
            this.hasmore = false
            return
          }
          else{
            giftAction().then((res) => {
              if(res.status == ERR_OK) {
                this.giftList = this.giftList.concat(res.data.slice((this.page-1)*this.pageSize,this.page*this.pageSize))
              }
            })
          }
        }
      },
      ...mapMutations({
        SET_GIFT: 'SET_GIFT'
      })
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .gift
    width:100%
    max-width:750px
    margin:0 auto
    overflow:hidden
    .gift-container
      margin-top:50px

</style>
