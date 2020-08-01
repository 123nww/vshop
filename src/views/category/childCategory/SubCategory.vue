<template>
  <div id="subcategory">
    <div class="category-detail-item" v-for="(item,index) in subcategoryList">
      <!-- <a :href="item.link">
        <img :src="item.image" alt @load="imgload" />
      </a> -->
      <img :src="item.image" alt @load="imgload" />
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubCategory",
  props: {
    subcategoryList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    imgload() {
      this.$emit("subImgLoad");
    },
  },
};
</script>

<style scoped>
#subcategory {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 3px;
}

.category-detail-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 100px;
  margin-bottom: 10px;
}

.category-detail-item img {
  width: 65px;
  margin-bottom: 7px;
}

.category-detail-item p {
  font-size: 14px;
}
</style>
