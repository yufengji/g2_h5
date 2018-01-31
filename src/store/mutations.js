import * as types from './mutation-types.js'
const mutations = {
  [types.SET_HAS_BEEN_SERVED](state,hasserved){
    state.Has_Been_Served = hasserved
  },
  [types.SET_NOT_SERVED](state,notserved){
    state.Not_Served = notserved
  },
  [types.SET_NEWS](state,news){
    state.News = news
  },
  [types.SET_GAME_LIST](state,gamelist){
    state.gamelist = gamelist
  },
  [types.SET_GG_NEWS_COUNT](state,count){
    state.ggnewscount = count
  },
  [types.SET_GL_NEWS_COUNT](state,count){
    state.glnewscount = count
  },
  [types.SET_NEWS_TYPE](state,type){
    state.newstype = type
  },
  [types.SET_GIFT](state,gift) {
    state.gift = gift
  }
}
export default mutations
