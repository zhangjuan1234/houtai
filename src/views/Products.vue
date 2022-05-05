<template>
  <div>
    
    <div class="he">
      <div class="container">
        <!-- 1楼搜索框 -->
        <div class="header">
          <el-input v-model="input" placeholder="请输入内容" @change="searchInput" ></el-input>
          <el-button type="primary" class="button" @click="getData(pno,input)">
            <router-link to="/products">查询</router-link>
          </el-button>
         
          <el-button type="primary" class="button">
             <router-link to="/addgoods" class="add">添加</router-link> 
          </el-button>
        </div>

        <!-- 2楼：表格主体 -->
        <div class="wtapeer">
          <el-table :data="tableData" style="width: 100%" border>
            <el-table-column
              prop="lid"
              label="商品Id"
              width="70"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="title"
              label="商品名称"
              show-overflow-tooltip
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="price"
              label="商品价格"
              width="100"
              align="center"
            >
            </el-table-column>

            <el-table-column
              prop="sold_count"
              label="商品数量"
              width="100"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="pic"
              label="商品图片"
              width="150"
              align="center"
            >
            </el-table-column>

            <el-table-column label="操作" width="300" align="center">
              <template slot-scope="scope">
              
                  <el-button
                  size="mini"
                  
                  >
                  <router-link :to="`/pdetails?lid=${scope.row.lid}`"> 查看详情</router-link>
                 
                  
                   </el-button
                 >
            
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)"
                  >编辑</el-button
                >
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>

        <!-- 3楼分页条 -->
        <div class="pagers">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            :pageSize="pageSize"
            
            @current-change="changepage"
          >
          </el-pagination> 
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pno: "",
      input: "",
      tableData: [],
      
      total:9,
      pageSize:9
     
    };
  },


  methods: {
   
    //   加载商品列表数据的：1.页面加载时访问数据第一页  2.点击分页条，路由参数发生变化时，发送请求
     //  注意：默认值写法 不传参是1
    getData(pno,kw) {
        // pno=p
      console.log('我是 getData中的搜索关键字：',kw)
      
      console.log('传递的pno和kw分别是:',pno,kw)
      // const url = `http://www.codeboy.com:9999/data/product/list.php?pno=${pno}`
      // const url = 'http://www.codeboy.com:9999/data/product/list.php?pno=2&kw=联想'
       const url = `http://www.codeboy.com:9999/data/product/list.php?pno=${pno}&kw=${kw}`;
      // const url = 'http://www.codeboy.com:9999/data/product/list.php?kw=联想'
      console.log(url);
      this.axios.get(url).then((res) => {
        console.log("res.data:", res.data);
        this.tableData = res.data.data;
        this.total=res.data.pageCount*res.data.pageSize
        if(res.data['data'].length==0){
          this.pno=1;
        }
        this.pageSize=res.data.pageSize
        
      });
    },

    // 3.输入框：仅在输入框失去焦点或用户按下回车时触发
    // searchInput(kw){
    //     console.log('val:',kw)
    //     this.getData(kw)
    // },
    searchInput(val){
      // 先注释
      // console.log('val:',val)
      // const url = `http://www.codeboy.com:9999/data/product/list.php?kw=${val}`
      // console.log(url);
      // this.axios.get(url).then((res) => {
      //   console.log("res.data:", res.data);
      //   this.tableData = res.data.data;
      //   this.total=res.data.pageCount*res.data.pageSize
      //   this.pageSize=res.data.pageSize
      // });
      console.log(val)
      this.pno=1;
      this.getData(1,val);
    

    },

    // 4.点击查询按钮调用搜索，加载数据
    


    // 2.页面改变时发情请求
    changepage(pno){
        console.log('传递的pno是:',pno)
        this.pno=pno;
        this.getData(pno,this.input)

    },

 
    
  },

  mounted() {
    //   1.页面加载时调用方法，发送请求，加载首页
    console.log("页面加载时调用方法  请求数据")
      this.getData(1,'')
      this.pno=1;
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  margin: 20px;
  .button {
    margin-left: 20px;
  }
}
.pagers{
    text-align: center;
    margin-top: 30px;
}
.add{
    color: #FFF;
}
</style>
