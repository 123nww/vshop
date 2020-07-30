<template>
  <div id="detailnavbar">
    <nav-bar>
      <div slot="left" class="back" @click="imgclick">
        <img src="~assets/img/fanhui.png" alt />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item,index) in titles"
          class="title-item"
          :class="{active:currentIndex === index}"
          @click="itemclick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavbar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    itemclick(index) {
      this.currentIndex = index;
      this.$emit("navBarClick",index)
    },
    imgclick() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
}

.title-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}

.back img {
  margin-top: 8px;
  width: 30px;
  height: 30px;
  vertical-align:top;
}
</style>
