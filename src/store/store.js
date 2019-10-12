import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const modulesA = {
  state:{
    ces:'测试1',
    ce1s:'测试1',
    count:102
  },
  mutations:{
    jiaModule1(state,n){
      console.log(state)
      console.log(n)
      state.count+=n
    }
  }

  }
const modulesB = {

}
export default new Vuex.Store({

    state:{
        count:123,
        name:'',
        idlist:[]
    },
    mutations:{
      jia (state,n) {
        console.log(state)
        console.log(n)
        state.count+=n
      },
      jian (state,n) {
        state.count-=n
      },
      setName(state,n){
        state.name = n.name
      },
      setid(state,n){
        state.idlist = n[0].id
      }

    },
    getters:{},
    actions:{
      actionsAddCount(context, n) {
        console.log(context)
        /*
        * {"getters":{},
        * "state":{"count":123,
        * "a":{"ces":"测试1","ce1s":"测试1","count":102},
        * "b":{}},
        * "rootGetters":{},
        * "rootState":{"count":123,
        * "a":{"ces":"测试1","ce1s":"测试1","count":102},
        * "b":{}}}
        * */
        console.log(n)
        context.commit('jia', n)
      },
      actionsReduceCount({ commit }, n = 0) {
        console.log(commit)
        return commit('jian', n)
      },
      actionstestName(context, n = {}) {
         console.log(context)
         context.commit('setName', n)
      },
      asdAsync(context){
        return axios.get('/api/expert/ranking_v2', {
          params: {}
        }).then((res) => {
          console.log(res)
          context.commit('setid',res.data.expertid_l)
        }).catch((error) => {
          console.log(error)
        })
      }
    },
    modules:{
      a:modulesA,
      b:modulesB
    },
})
