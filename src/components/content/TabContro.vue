<template>
  <div id="tab-contro">
    <div
      v-for="(item, index) in titles"
      class="tab-contro-item"
      :class="{active:currentIndex === index}"
      @click="tabContro(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabContro",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    },
    tabIndex:{
      type:Number,
      default(){
        return 0;
      }
    }
  },
  data() {
    return {
      currentIndex: this.tabIndex
    };
  },
  methods:{
      tabContro(index){
          this.currentIndex = index;
          this.$emit("tabClick",index)
      }
  }
};
</script>

<style scoped>
#tab-contro {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}

.tab-contro-item {
  flex: 1;
}
.tab-contro-item span {
  padding: 5px;
}
.active span {
  border-bottom: 2px solid var(--color-text);
}

.active {
  color: var(--color-text);
}
</style>
