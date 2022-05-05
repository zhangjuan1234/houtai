// src/utils/axios.js
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// use:  用于把第三方模块   注入到vue对象里
Vue.use(VueAxios, axios)

// 代码写完需要执行：在main.js中引入当前文件

