<template>
  <div id="tab-bar-item" @click="showRouter">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
      path:String,
      activeColor:{
          type:String,
          default:'#ff8198'
      }
  },
  data() {
    return {
    };
  },
  computed:{
      isActive(){
          return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle(){
          return this.isActive ? {color:this.activeColor} : {};
      }
  },
  methods:{
      showRouter(){
          this.$router.push(this.path)
      }
  }
};
</script>

<style scoped>
#tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
  /*margin: 5px;
   padding: 3px; */
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: space-evenly;
}

#tab-bar-item img {
  height: 24px;
  width: 24px;
  vertical-align: -webkit-baseline-middle;
  /*margin:2px;
  padding-top:3px; */
  
}

</style>
