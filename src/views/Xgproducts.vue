<template>
  <div>
    
    <div class="he">
      <div class="container">
        <!-- 1楼搜索框 -->
        <div class="header">
          <el-input  placeholder="请输入内容"></el-input>
          <el-button type="primary" class="button">
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
              prop="pid"
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
              show-overflow-tooltip
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
              
                  <!-- <el-button
                  size="mini"
                  
                  >
                  <router-link > 查看详情</router-link>
                 
                  
                   </el-button
                 > -->
            
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
            :total="data.pagesize*data.sumpage"
            :pageSize="pageSize"
             @current-change="handleCurrentChange"
           
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
    
      tableData: [],
      data:{},
      
      total:'',
      pageSize:8
     
    };
  },
  methods: {
    // 删除商品接口
      handleDelete(index, row){
        //  console.log(index, row);
        //  console.log('index',index)
        //  console.log('row',row)
        // http://127.0.0.1:3000/v2/product/delete?pid=1
        const url=`http://127.0.0.1:3000/v2/product/delete?pid=${row.pid}`
        console.log(url)
        this.axios.get(url).then(res=>{
          console.log(res.data)
          if(res.data.code==200){
            console.log('删除成功')
            // 删除成功后，更新视图

            this.getData(1)
            // console.log(this.data)

          }else{
            console.log('删除失败')
          }
        })

      },
      getData(num=1) {
        //   //接口地址： http://127.0.0.1:3000/v2/product/getproducts
          const url= `http://127.0.0.1:3000/v2/product/getproducts?num=${num}`
          this.axios.get(url).then(res=>{
              // console.log(res.data)
              this.tableData=res.data.data
              this.data=res.data
          })


      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.getData(val)
      }
  },
  mounted () {
      this.getData()
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
