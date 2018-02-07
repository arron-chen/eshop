<template>
  <div>
    <app-header class="header"></app-header>
    <router-view class="content"></router-view>
    <app-footer class="footer"/>
  </div>
</template>

<script>
  import appFooter from '@/components/footer.vue'
  import appHeader from '@/components/header.vue'
export default {
  components:{ appHeader,appFooter},
  data () {
    return {

    }
  },
  computed:{
    cartList(){
      return this.$store.state.cartList;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
  *{
    margin:0;
    padding:0;
  }
  a{
    text-decoration: none;
  }
  body{
    background: #f8f8f9;
  }
  .header{

  }
  .content{
    position:absolute;
    top:48px;
    left:0;right:0;
    bottom:80px;
    overflow:auto;
  }
  .footer{
    position:absolute;
    left:0;
    right: 0;
    bottom:0;
  }

</style>
