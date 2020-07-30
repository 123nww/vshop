<template>
  <div class="comment-info-wrap" v-if="Object.keys(detailComment).length !== 0">
    <div class="comment-title flex">
      <div>用户评价</div>
      <div>更多</div>
    </div>
    <!-- <div v-for="item in detailComment"> -->
    <div class="comment-user-info">
      <span>
        <img :src="detailComment.user.avatar" alt class="avatar" />
      </span>
      <span>{{detailComment.user.uname}}</span>
    </div>
    <div class="comment-text">{{detailComment.content}}</div>
    <div class="comment-goods-info">
      <span class="comment-time">{{detailComment.created | showDate}}</span>
      <span>{{detailComment.style}}</span>
    </div>
    <div class="flex">
      <div class="comment-info-images" v-for="item in detailComment.images">
        <img :src="item" alt @load="commentimgload"/>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import { formatDate } from "common/tools/untils.js";
export default {
  name: "Detailcomment",
  props: {
    detailComment: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  filters: {
    showDate(value) {
      //将时间戳转换成date对象
      const date = new Date(value * 1000);
      //将date进行格式化
      return formatDate(date, "yyyy-MM-dd");
    }
  },
  methods:{
    commentimgload(){
      this.$emit('commentimgload')
    }
  }
};
</script>

<style lang="less" scoped>
.comment-info-wrap {
  border-bottom: 4px solid #ececec;
  padding: 0 8px;
  font-size: 14px;
  .comment-title {
    justify-content: space-between;
    border-bottom: 1px solid #ececec;
    padding: 10px 4px;
  }
  .comment-user-info {
    padding: 10px 0;
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      margin-right: 10px;
      vertical-align: middle;
    }
  }
  .comment-text {
    line-height: 20px;
  }
  .comment-goods-info {
    color: #999;
    margin: 4px 0;
    .comment-time {
      margin-right: 10px;
    }
  }
  .comment-info-images {
    img {
      width: 60px;
      height: 60px;
      margin-right: 6px;
    }
  }
}
</style>
