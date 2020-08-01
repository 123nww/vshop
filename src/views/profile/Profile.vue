<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <div slot="center">我的商城</div>
    </nav-bar>

    <scroll class="procontent">
      <login
        :cur-login="isLogin"
        :username="username"
        :phone="phone"
        ref="login"
        @goLogin="goLogin"
      ></login>
      <pro-money></pro-money>
      <div class="line"></div>
      <pro-file-list @myorder="myorder"></pro-file-list>
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import Login from "./childPro/Prologin";
import ProMoney from "./childPro/ProMoney";
import ProFileList from "./childPro/ProfileList";

import { mapActions } from "vuex";
export default {
  name: "Profiled",
  components: {
    NavBar,
    Scroll,
    Login,
    ProMoney,
    ProFileList,
  },
  data() {
    return {
      isLogin: false,
      username: "",
      phone: "",
    };
  },
  methods: {
    ...mapActions(["ISSHOWMAINTAR"]),
    goLogin() {
      this.$router.push("/login");
    },
    myorder() {
      this.$router.push("/login");
    },
  },
  activated() {
    let shop_login = localStorage.getItem("shop_login");
    let user_pic = localStorage.getItem("user_pic");
    if (shop_login) {
      let login = JSON.parse(shop_login);
      this.username = login.username;
      this.phone = login.phone;
      this.isLogin = true;
    }
    if (user_pic) {
      this.$refs.login.defaultPic = JSON.parse(user_pic);
    }
  },
};
</script>

<style lang="less" scoped>
#profile {
  height: 100vh;
  position: relative;
}
.nav-bar {
  height: 44px;
  line-height: 44px;
  background-color: var(--color-text);
  color: #fff;
  font-weight: 600;
}

.procontent {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
  // height: calc(100% - 44px - 59px);
}

.line {
  width: 100%;
  height: 10px;
  background-color: #eeeeee;
}
</style>
