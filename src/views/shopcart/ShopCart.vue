<template>
  <div id="shopcart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>

    <!-- 商品列表 -->
    <cart-list></cart-list>

    <!-- 底部 -->
    <!-- <cart-bot-button :isSelectAll="isSelectAll"></cart-bot-button> -->

    <!-- 底部订单栏 -->
    <van-submit-bar
      class="bot-bar"
      :button-text="`提交订单(${checkLength})`"
      :price="totalPrice * 100"
      @submit="onSubmit"
    >
      <van-checkbox
        @click="checkButton"
        class="checked-all"
        v-model="isSelectAll"
        checked-color="#ff5777"
      >全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import CartBotButton from "./childComps/CartBotButton";

import { mapGetters,mapActions } from "vuex";

export default {
  name: "Shopcart",
  components: {
    NavBar,
    CartList,
    CartBotButton,
  },
  data() {
    return {
      isChecked: true,
    };
  },
  computed: {
    ...mapGetters({
      length: "cartLength",
      cartList: "cartList",
    }),
    // isSelectAll(){
    //  if(this.cartList.length === 0){
    //    return false;
    //   }else{
    //     console.log(!this.cartList.find( item => !item.checked))
    //     return !this.cartList.find( item => !item.checked)
    //   }
    // },
    isSelectAll: {
      get() {
        if (this.cartList.length === 0) {
          return false;
        } else {
          return !this.cartList.find((item) => !item.checked);
        }
      },
      set() { 
      },
    },
    totalPrice() {
      return this.cartList
        .filter((item) => item.checked)
        .reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    checkLength() {
      return this.cartList.filter((item) => item.checked).length;
    },
  },
  methods: {
    ...mapActions(["CHECKBUTTON"]),
    checkButton() {
      //console.log(this.isSelectAll)
      //this.$store.dispatch('CHECKBUTTON',this.checked);
      this.CHECKBUTTON(this.isSelectAll);
    },
    // 全选
    checkedAllClick() {
      this.cartList.forEach((item) => (item.checked = !this.isChecked));
    },
    // 反选
    itemChange() {
      let result = this.cartList.filter((item) => item.checked === true);
      this.checkedAll =
        result.length > 0 && result.length === this.cartList.length;
    },
    // 按钮提交
    onSubmit() {
      if (this.checkLength === 0) {
        this.$toast({
          type: "fail",
          message: `您还没有选中商品哦`,
          forbidClick: true,
          duration: 1500,
        });
      } else {
        this.$dialog
          .confirm({
            title: "温馨提示",
            message: "您确定要提交订单吗?",
          })
          .then(() => {
            this.$toast({
              type: "success",
              message: `提交 ${this.checkLength} 条数据成功`,
              forbidClick: true,
              duration: 1500,
            });
            // 提交数据清空对应购物车数据
            // setTimeout(() => {
            //   this.clearCartList();
            //   this.checkedAll = false;
            // }, 1500);
          })
          .catch(() => {
            return false;
          });
      }
    },
  },
};
</script>

<style lang="less" scoped>
#shopcart {
  height: 100vh;
}

.nav-bar {
  background-color: var(--color-high-text);
}

// /deep/ .checked-all {
//   margin-left: 10px;
// }

.bot-bar {
  position: fixed;
  bottom: 59px;
  left: 0;
  right: 0;

  height: 49px;
}
</style>
