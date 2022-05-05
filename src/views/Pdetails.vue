<template>
    <div>
        <p>
            Lorem  <br> <br>   ipsum  <br> dolor, sit amet &nbsp; consectetur adipisicing elit. Tenetur perspiciatis, natus est rerum mollitia repellendus ipsa voluptate corporis sunt alias suscipit magni assumenda nemo nisi beatae aliquam! A, atque nulla?
        </p>
        <br>
           
            <h1>
                商品详情页 lid是{{$route.query.lid}}
            </h1>
            
           <h1>{{product.lname}}</h1> 
           <h1>{{product.cpu}}</h1>
            
    </div>
</template>

<script>
    export default {
        data() {
            return {
               product:{}
            }
        },
        mounted () {
            // console.log(this)
            const lid=this.$route.query.lid
            // console.log(lid)
            const url='http://www.codeboy.com:9999/data/product/details.php?lid='+lid
            // console.log(url)
            this.axios.get(url).then(res=>{
                console.log(res.data)
                this.product=res.data.product
            })
            
        },
        
    }
</script>

<style lang="scss" scoped>
div{
    display: in;
}


</style>