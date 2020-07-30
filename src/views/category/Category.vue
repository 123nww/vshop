<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <div slot="center">分类</div>
    </nav-bar>
  </div>
</template>

<script>
//import BScroll from "better-scroll";

import NavBar from "components/common/navbar/NavBar";

export default {
  name: "Category",
  components: {
    NavBar,
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {},
};
</script>

<style scoped>
/* .conent{
  height: 150px;
  background-color: red;

  // overflow-y: scroll;
  overflow: hidden;
} */
.nav-bar {
  background-color: var(--color-high-text);
}
</style>
