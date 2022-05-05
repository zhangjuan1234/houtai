<template>
  <div>
    
    <el-form
      :model="goodsForm"
      :rules="rules"
      ref="goodsForm"
      label-width="100px"
      class="demo-ruleForm"
    >
    <el-form-item label="商品添加" >
       
    </el-form-item>

  

      <el-form-item label="商品名称" prop="title">
        <el-input v-model="goodsForm.title"></el-input>
      </el-form-item>
      <el-form-item label="商品价格" prop="price">
        <el-input v-model="goodsForm.price"></el-input>
      </el-form-item>

      <el-form-item label="商品图片" prop="pic">
        <el-input v-model="goodsForm.pic"></el-input>
      </el-form-item>
      <el-form-item label="商品数量" prop="sold_count">
        <el-input v-model="goodsForm.sold_count"></el-input>
      </el-form-item>
      <!-- 富文本编辑器 -->
  
      <!-- 

       -->
      <!--富文本编译器  -->
      <el-form-item>
        <wang-eidtor />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">确定</el-button>
        <el-button type="info">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import WangEidtor from "@/components/WangEidtor.vue";
export default {
  components: { WangEidtor },
  data() {
    return {
      goodsForm: {
        pid: "",
        title: "",
        price: "",
      },
      rules: {
        title: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          {
            min: 3,
            max: 100,
            message: "长度在 3 到 100个字符",
            trigger: "blur",
          },
        ],
        price: [{ required: true, message: "请输入商品价格", trigger: "blur" }],
        pic: [{ required: true, message: "请选输入商品图片", trigger: "blur" }],
        sold_count: [
          { required: false, message: "请选择商品状态", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
.demo-ruleForm {
  margin: 30px 100px;
}
.input {
  width: 200px;
  // height: 100px;
}
.biaoti{
  
  font-size: 16px ;
  font-weight: bold;
  color: #fff;
  background-color:pink;
  width: 120px;
  text-align: center;
}
</style>
