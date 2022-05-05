<template>
  <div>
    <button @click="getData(1)">请求数据</button>
    <hr>
    <template v-if="data">
      <p>总页数：{{pageCount}}</p>
      <p>当前页：{{nowPage}}</p>
      <button @click="getData(nowPage-1)" :disabled="nowPage==1">上一页</button>
      <button @click="getData(nowPage+1)" :disabled="nowPage==pageCount">下一页</button>
    </template>
    <hr>

    <!-- 3.判断 -->
    <template v-if="data">
         <div class="cell" v-for="v in data.data.list" :key="v.rid">
          <img :src="v.roomSrc" alt="">
          <div>{{v.nickname}}</div>
          <div>{{v.roomName}}</div>
       </div>
    </template>

  </div>
</template>

<script>
  export default {
    // 2.存本地
    data() {
      return {
        data: null,
      }
    },
    methods:{
      getData(page){
        const url=`https://douyu.xin88.top/api/room/list?page=${page}&type=yz`
        //1. 请求数据 
        this.axios.get(url).then(res=>{
          console.log(res)
          // 本地的数据=请求的数据
          this.data=res.data

        })

      }, 
    },
    // 计算属性：作用函数不用（）自动触发---简化代码
    computed: {
      nowPage() {
        return this.data.data.nowPage 
      },
      pageCount() {
        return this.data.data.pageCount
      },
    },
    
  }
</script>

<style lang="scss" scoped>
    .cell{
      display: inline-block;
      margin: 0 10px 10px 0;
      width: 200px;

      img{
        width: 100%;
        height: 100px;
      }
    }

</style>