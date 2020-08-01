<template>
  <div id="silder-bar">
    <scroll class="content" :typeNum="3">
      <div v-for="(item, index) in categoryList">
        <div
          class="silder-bar-item"
          :key="index"
          @click="slideBarItemClick(item, index)"
          :class="currentindex === index ? 'active' : ''"
        >{{ item.title }}</div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "SilderBar",
  props: {
    categoryList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Scroll,
  },
  data() {
    return {
      currentindex: 0,
    };
  },
  methods: {
    slideBarItemClick(item, index) {
      this.currentindex = index;
      const obj = {
        maitKey: item.maitKey,
        miniWallkey: item.miniWallkey,
        index,
      };
      this.$emit("slideBarItemClick", obj);
    },
  },
};
</script>

<style lang="less" scoped>
#silder-bar {
  height: calc(100% - 44px - 49px);
}

.content {
  height: 100%;
  width: 100px;
  background-color: #f6f6f6;
  overflow: hidden;
}

.silder-bar-item {
  width: 100px;
  height: 45px;
  font-size: 14px;
  color: #666666;
  text-align: center;
  line-height: 45px;
}

.silder-bar-item.active {
  border-left: 3px solid #ff5777;
  font-weight: 700;
  color: #ff5777;
  background-color: #ffffff;
}
</style>
