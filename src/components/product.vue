<template>
    <div v-if="product">
      <div class="product">
          <div class="product-image">
            <img :src="product.image">
          </div>
          <div class="product-info">
            <h1 class="product-name">{{product.name}}</h1>
            <div class="product-cost">￥{{product.cost}}</div>
            <div class="product-add-cart" @click="handleAddToCart">加入购物车</div>
          </div>
          <div class="product-desc">
            <h2>产品介绍</h2>
            <div><span>颜色：{{product.color}}</span>  &nbsp;<span>品牌：{{product.brand}}</span> &nbsp;<span>销量：{{product.sales}}</span></div>
            <img v-for="n in 1" :src="'http://ordfm6aah.bkt.clouddn.com/shop/'+n+'.jpeg'">
          </div>
      </div>
    </div>
</template>
<script>
  //导入本地数据做匹配用，真实环境不需要
  import product_data from '../product'

  export default {
    data(){
      return {
        //获取路由中的参数
        id:parseInt(this.$route.params.id),
        product:null
      }
    },
    methods:{
      getProduct(){
        //真实环境下通过ajax获取，这里用异步模拟
        setTimeout(()=>{
          this.product =product_data.find(item =>item.id === this.id);
        },500);
      },
      //加入购物车
      handleAddToCart(){
        this.$store.commit('addCart',this.id);
      }
    },
    mounted(){
      //初始化时请求数据
      this.getProduct();
    }
  }
</script>
<style lang="less" scoped>
  .product{
    margin:32px;
    padding:32px;
    background: #fff;
    border:1px solid #dddee1;
    border-radius:10px;
    overflow: hidden;
    .product-image{
      width:50%;
      height: 550px;
      float:left;
      text-align: center;
      img{
        height: 100%;
      }
    }
    .product-info{
      width:50%;
      padding:150px 0 250px;
      height:150px;
      float: left;
      text-align: center;
    }
    .product-cost{
      color:#d2352e;
      margin:8px 0;
    }
    .product-add-cart{
      display: inline-block;
      padding:8px 64px;
      margin:8px 0;
      background: #2d8cf0;
      color:#fff;
      border-radius:4px;
      cursor: pointer;
    }
    .product-desc{
      background: #fff;
      margin:32px;
      padding:32px;
      border:1px solid #dddee1;
      border-radius:10px;
      text-align: center;
      img{
        display: block;
        width:50%;
        margin:32px auto;
        padding:32px;
        border-bottom:1px solid #dddee1;

      }
    }


  }
</style>
