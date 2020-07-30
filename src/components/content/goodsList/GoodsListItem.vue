<template>
  <div id="goodslistitem" @click="itemclick">
    <img v-lazy="showImg"  alt @load="imgload" />
    <div class="goodsinfo">
      <p>{{item.title}}</p>
      <span class="price">{{item.price}}</span>
      <span class="collect">{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed:{
    showImg(){
      return this.item.image || this.item.show.img
    }
  },
  methods: {
    imgload() {
      this.$bus.$emit("imgload");
    },
    itemclick() {
      // if(this.item.item_id){
      //   console.log("item_id:"+this.item.item_id)
      //   this.$router.push("/detail/" + this.item.item_id)
      // }

      if(this.item.iid){
        this.$router.push("/detail/" + this.item.iid)
      }
        
    }
  }
};
</script>

<style scoped>
#goodslistitem {
  padding-bottom: 44px;
  position: relative;

  width: 48%;
}

#goodslistitem img {
  width: 100%;
  border-radius: 5px;
}
.goodsinfo {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goodsinfo p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goodsinfo .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goodsinfo .collect {
  position: relative;
}

.goodsinfo .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  right: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
