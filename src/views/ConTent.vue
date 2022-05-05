<template>
    <div class="box">
     
     <!-- f1:顶部面包屑 -->
     <div class="header">
         顶部面包屑
     </div>
     <!-- f2:中间内容：路由出口 -->
     <div class="content">
         <!-- 中间路由跳转页面 -->
         <router-view/>
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
}
.header{
    height: 80px;
    background-color:#183555;
    color: #fff;
}
.content{
    margin: 10px 50px 0px 0px;
}

</style>