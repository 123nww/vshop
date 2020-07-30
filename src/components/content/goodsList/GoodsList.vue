<template>
  <div id="goodslist">
    <goods-list-item class="goodslistitem" v-for="item in goodslist" :item="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: 'GoodsList',
  props:{
      goodslist:{
          type:Array,
          default(){
              return []
          }
        }
  },
  components:{
      GoodsListItem
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
#goodslist{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    padding: 2px;
}

/* .goodslistitem{
    flex: 1;
} */

</style>