<template>
  <div id="backtop">
    <img src="~assets/img/common/top.png" alt />
  </div>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {};
  }
};
</script>

<style scoped>

#backtop{
    position: fixed;
    right: 10px;
    bottom: 60px;
}

#backtop img{
    width: 35px;
    height: 35px;
}
</style>
