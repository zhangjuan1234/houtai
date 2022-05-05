<template>
  <div class="box">
    我是左侧导航栏
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      background-color="#183555"
      
    >
     <el-menu-item index="index">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
     
      <el-menu-item index="addgoods">
        <i class="el-icon-menu"></i>
        <span slot="title">商品添加</span>
      </el-menu-item>
      <el-menu-item index="products" >
        <i class="el-icon-document"></i>
        <span slot="title">商品列表</span>
      </el-menu-item>
      <el-menu-item index="addment">
        <i class="el-icon-setting"></i>
        <span slot="title">广告参数</span>
      </el-menu-item>
      <el-menu-item index="order">
        <i class="el-icon-setting"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
       <el-menu-item index="xgproducts">
        <i class="el-icon-setting"></i>
        <span slot="title">XG列表页</span>
      </el-menu-item>
        <el-menu-item index="xgadd">
        <i class="el-icon-setting"></i>
        <span slot="title">XG商品添加</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
   methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>

<style lang="scss" scoped>
.box{
  background-color:#183555 ;
}
.el-menu-vertical-demo{
  margin: 10px 5px 0px 18px;
}
</style>
