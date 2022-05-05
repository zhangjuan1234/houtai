<template>
    <div class="layout">
        <!-- 左侧导航栏 -->
      <my-menu  class="menu"  />
      <!-- 右侧内容 -->
      <con-tent class="content"/>

    </div>
</template>

<script>
import ConTent from './ConTent.vue'
import MyMenu from './MyMenu.vue'
    export default {
  components: { MyMenu, ConTent },
        
    }
</script>

<style lang="scss" scoped>
.layout{
    // display: flex;
    .menu{
        width: 200px;
        // min-height: 500px;
        // background-color: aqua;
        // 固定定位   脱离文档流
        position: fixed;
        top: 0;
        bottom: 0;
    }
    .content{
        // flex: 1;
        margin-left: 210px;
        height: 1400px;
        // width: 1200px;
        // background-color: pink;
    }
}

</style>
