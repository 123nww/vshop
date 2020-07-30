<template>
  <div class="cart-bot-bar flex">
    <div>
      <input type="checkbox" class="check" id="check" v-model="isSelectAll" @click="checkButton" />&ensp;&ensp;
      <label for="check">全部</label>
    </div>
    <div>合计：{{totalPrice}}</div>
    <div class="settlement">结算{{checkLength ? '('+checkLength+')' :''}}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CartBotButton",
  props: {
    isSelectAll: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  data() {
    return {
      checked: this.isSelectAll,
    };
  },
  created() {
    console.log(this.checked);
    console.log(this.isSelectAll);
  },
  computed: {
    ...mapGetters(["cartList"]),
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
      console.log(this.isSelectAll)
      //this.$store.dispatch('CHECKBUTTON',this.checked);
      this.CHECKBUTTON(this.isSelectAll);
    },
    // settlementClick(){

    // }
  },
};
</script>

<style lang="less" scoped>
.cart-bot-bar {
  // position: fixed;
  // bottom: 49px;
  // left:0;
  // right: 0;
  position: relative;
  height: 40px;
  padding: 0 0 0px 10px;
  font-size: 13px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid #ececec;
  border-top: 1px solid #ececec;
  .check {
    width: 18px;
    height: 18px;
    overflow: hidden;
    border-radius: 100%;
    vertical-align: bottom;
    border: 1px solid #ececec;
  }
  .check:checked {
    border: 1px solid var(--color-high-text);
    background: url(~assets/img/detail/check_active.png) no-repeat center;
    background-size: cover;
  }
  .settlement {
    background-color: var(--color-high-text);
    line-height: 40px;
    border-radius: 10%;
    width: 80px;
    text-align: center;
  }
}
</style>
