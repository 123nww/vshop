<template>
  <div id='profileList'>
      <div class="profile-list-item" @click="myorder">
          <img src="~assets/img/profile/order.svg" alt="">
          <span>我的订单</span>
      </div>
      <!-- <div class="profile-list-item">
          <img src="~assets/img/profile/message.png" alt="">
          <span>我的消息</span>
      </div> -->
     <div class="profile-list-item">
          <img src="~assets/img/profile/gouwuche.png" alt="">
          <span>我的购物车</span>
      </div>
      <div class="profile-list-item">
          <img src="~assets/img/profile/address.svg" alt="">
          <span>我的地址</span>
      </div>
      <div class="line"></div>
       <div class="profile-list-item">
          <img src="~assets/img/profile/jifen.png" alt="">
          <span>积分商城</span>
      </div>
      <div class="profile-list-item">
          <img src="~assets/img/profile/vip.png" alt="">
          <span>会员卡</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileList',
  data() {
    return {

    }
  },
  methods:{
      myorder(){
          this.$emit("myorder");
      }
  }
}
</script>

<style scoped>
.line{
    width: 100%;
    height: 10px;
    background-color:#eeeeee;
}

#profileList{
    width: 100%;
}

.profile-list-item{
    display: flex;
    align-items: center;
    height: 45px;
    padding-left: 20px;
}

.profile-list-item img{
    margin-right: 10px;
    width: 24px;
    height: 24px;
}

.profile-list-item span{
    width: 100%;
     line-height: 45px;
    font-size: 15px;
    border-bottom: 1px solid #eeeeee;
}

.profile-list-item span:nth-of-type(3){
    border-bottom: 0;
}
</style>
