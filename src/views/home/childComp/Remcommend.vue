<template>
  <div class='recommend'>
      <div class="recommend-item" v-for="item in recommend">
          <a :href="item.link">
              <img :src="item.image" alt="">
          </a>
          <div>{{item.title}}</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props:{
      recommend:{
          type:Array,
          default(){
              return []
          }
      }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.recommend{
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;

    border-bottom: 8px solid #eee;
}

.recommend-item{
    flex: 1;
} 

.recommend-item img{
    width: 65px;
    height: 65px;
    margin-bottom: 8px;
}
</style>
