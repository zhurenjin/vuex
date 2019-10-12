<template>
    <div class="hello">
      <div style="width: 200px;float: left">
        <div style="margin: 10px"><el-button @click="$store.commit('jia',90)" type="danger">mutations方法-加（$store.commit('jia')）</el-button></div>
        <div style="margin: 10px"><el-button @click="$store.commit('jian',30)" type="info">mutations方法-减</el-button></div>
        <div style="margin: 10px"><el-button @click="mutationsFun(100)" type="danger">mutationsFun</el-button></div>
        <div style="margin: 10px"><el-button @click="handleActionsAdd(10)" type="success">异步增加10 = actions(dispatch)</el-button></div>
        <div style="margin: 10px"><el-button @click="handleActionsReduce(10)" type="success">异步减少10 actions（dispatch）</el-button></div>
        <div style="margin: 10px"><el-button @click="handleActionstest()" type="success">dispath设置名</el-button></div>
        <div style="margin: 10px"><el-button @click="asyncActions()" type="success">异步方法调用接口</el-button></div>
      </div>
      <div style="width: 600px;float: left;margin-left: 50px">
        <h3 style="color: #ff3440">这里显示状态管理</h3>
        <h1>$store.state.count === {{$store.state.count}}</h1>
        <h1> $store.state.a.count === {{$store.state.a.count}}</h1>
        <h1>computed === {{count}}</h1>
        <h1>setName === {{$store.state.name}}</h1>
        <h1>setid === {{$store.state.idlist}}</h1>
        </div>
        <span>
          <span v-for="(item,i) in list" :key="i">
            <span style="display: inline-block;font-size: 20px;color: #3b1cff">{{item.id}}</span>
          </span>
        </span>
        <span>
          <span v-for="(item,i) in listareas" :key="i">
            <span style="display: inline-block;font-size: 20px;color: #3b1cff"> {{item.name}} -- </span>
          </span>
        </span>
      </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msgCount: '',
      list:[],
      listareas:[],
    }
  },
  created(){
  },
  computed:{
    count(){
      return this.$store.state.count
    }
  },
  methods: {
    handleActionstest(){
      this.$store.dispatch('actionstestName',{name:'朱任锦'})
    },

    asyncActions(){
      return new Promise((resolve,reject)=>{
        axios.get('/api/data/intergral.aspx', {
          params: {model:'home'}
        }).then((res) => {
          console.log(res)
          this.listareas = res.data.areas
          this.$store.dispatch('asdAsync')
        }).catch((error) => {
          console.log(error)
        })
      })

    },
    handleActionsAdd(n){
      this.$store.dispatch('actionsAddCount',10)
    },
    handleActionsReduce(n){
      this.$store.dispatch('actionsReduceCount',n)
    },
    //mutations的函数调用方法
    mutationsFun(n){
      this.$store.commit('jiaModule1',n)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">

</style>

