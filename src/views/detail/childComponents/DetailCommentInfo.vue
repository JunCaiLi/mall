<template>
  <div v-if="Object.keys(this.comment).length !== 0 && comment.cRate !== 0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="comment.list[0].user.avatar" alt />
      <span>{{comment.list[0].user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{comment.list[0].content}}</p>
      <div class="info-other">
        <span class="date">{{comment.list[0].created | fomat}}</span>
        <span>{{comment.list[0].style}}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" v-for="(item, index) in comment.list[0].images" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import { formatTime } from "common/utils";
export default {
  name: "DetailCommentInfo",
  data() {
    return {
      isShow: false
    };
  },
  props: {
    comment: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    fomat: function(value) {
      let date = new Date(value * 1000);
      return formatTime(date);
    }
  },
};
</script>

<style scoped>
.comment-info {
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}

.info-header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.header-title {
  float: left;
  font-size: 15px;
}

.header-more {
  float: right;
  margin-right: 10px;
  font-size: 13px;
}

.info-user {
  padding: 10px 0 5px;
}

.info-user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}

.info-user span {
  position: relative;
  font-size: 15px;
  top: -15px;
  margin-left: 10px;
}

.info-detail {
  padding: 0 5px 15px;
}

.info-detail p {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}

.info-detail .info-other {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}

.info-other .date {
  margin-right: 8px;
}

.info-imgs {
  margin-top: 10px;
}

.info-imgs img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>
