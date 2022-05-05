<template>
    <div class="box">
      <h3>商品添加</h3>
      <!-- 输入框主体 -->
      <div class="form-group">
        <label for="">商品名称</label>
        <input type="text"  v-model="title">
      </div>
      <div class="form-group">
        <label for="">商品价格</label>
        <input type="text"  v-model="price">
      </div>
      <div class="form-group">
        <label for="">商品图片</label>
        <input type="text" v-model="pic"  >
      </div>
      <div class="bottom">
          <div class="button" @click="addProduct">添加</div>
          <div class="button">重置</div>
        
      </div>
      
    
</div>
</template>

<script>
    export default {
        data() {
            return {
                title:'',
                price:'',
                pic:''
            }
        },
        methods: {
            addProduct() {
                // console.log(this.title,this.price,this.pic)
                // 接口地址:http://127.0.0.1:3000/v2/product/addProduct
                // 解构
                 //   post请求：路径和参数必须分开传
                const url='http://127.0.0.1:3000/v2/product/addProduct'  //路径
                const {title,price,pic}=this                 //参数结构
                const params=`title=${title}&price=${price}&pic=${pic}`
                this.axios.post(url,params).then(res=>{
                    console.log(res.data)
                    if (res.data.code==200){
                        // 编程式跳转
                        // const path='/'
                        // const path='xgadd'
                        
                        this.$router.push({name:'xgproducts'})
                    }
                })


            }
        },
        
    }
</script>

<style lang="scss" scoped>
input{
    margin-left: 10px;
    margin-top: 10px;
}
.bottom{
    display: flex;
    >.button{
         border: 1px solid gray;
         margin-left: 50px;
         margin-top: 20px;
         width: 60px;
         text-align: center;
         height: 40px;
         line-height: 40px;
         background-color: pink;
         color: white;
         font-size: 20px;
         user-select: none;
    }
}

</style>