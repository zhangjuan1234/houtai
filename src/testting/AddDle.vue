<template>
  <div>
    <div class="he">
      <div class="container">
        <!-- 1楼搜索框 -->
        <div class="header">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
          <el-button type="primary" class="button">查询</el-button>
          <el-button type="primary" class="button">添加</el-button>
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
              align="center"   width="100"
            >
            </el-table-column>
            <el-table-column
              prop="price"
              label="商品价格"
              width="100"
              align="center"
            >
            </el-table-column>
            
            <el-table-column label="操作" width="150" align="center">
              <template slot-scope="scope">
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
          <el-pagination background layout="prev, pager, next" :total="60">
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
      input: "",
      tableData: [
          {
            lid:1,
            title:'苹果',
            price:24

          },
           {
            lid:2,
            title:'香蕉',
            price:244

          },
           {
            lid:3,
            title:'栗子',
            price:524

          },
           {
            lid:4,
            title:'猕猴桃',
            price:724

          },
      ],
    };
  },
  methods: {
      handleEdit(index, row) {
        // console.log(index, row);
        // console.log('row:',row)
      },
      handleDelete(index, row) {
        console.log(index, row);
        console.log('index:',index)
        console.log('row:',row)
        let lid=row.lid
        console.log(lid)
        // 发送请求
        let url=`http://www.codeboy.com:9999/admin/data/product_delete.php?lid=${lid}`
        console.log(url)
        this.axios.get(url).then((res)=>{
            console.log(res.data)
            if(res.data==401){
                // 更新视图，重新加载数据
                // this.getData(1)

            }

        })



        // 删除功能
        //  this.tableData= this.tableData.splice(index,1)
        this.tableData.splice(index,1)

      }
    }
 
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
</style>
