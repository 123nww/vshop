<template>
  <div class="scroll" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    typeNum: {
      type: Number,
      default: 0
    },
    pullup: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.typeNum,
      pullUpLoad: this.pullup
    });

    if (this.typeNum === 2 || this.typeNum === 3) {
      this.scroll.on("scroll", postiton => {
        this.$emit("contentscroll", postiton);
      });
    }

    if (this.pullup) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingupload");
      });
    }
  },
  methods: {
    scrollBack(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    },
    pullUpLoad() {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
    },
    refreshload() {
      //console.log("---------")
      this.scroll && this.scroll.refresh && this.scroll.refresh();
    },
    contentscroll() {
      //console.log("---------")
      this.scroll && this.scroll.refresh && this.scroll.refresh();
    }
  }
};
</script>

<style scoped>
</style>
