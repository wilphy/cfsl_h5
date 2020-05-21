<template>
  <div class="container">
    <!-- 头部栏 -->
    <div class="header">
      <!-- 期刊日期 -->
      <episode class="epsoide"></episode>
      <!-- 点赞 -->
      <like class="like"></like>
    </div>

    <!-- 内容 -->
    <movie :img="imgUrl" :content="content"> </movie>

    <!-- 导航 -->
    <navi :title="title" :first="first" :latest="latest"></navi>
  </div>
</template>

<script scoped>
import Like from "./../components/Like";
import Episode from "./../components/Episode";
import Movie from "./../components/classic/Movie";
import Navi from "./../components/classic/Navi";
export default {
  components: {
    Like,
    Episode,
    Movie,
    Navi,
  },
  data() {
    return {
      imgUrl: "",
      content: "",
      title: "",
      first: false, // 是否为第一期刊
      latest: false, // 是否为最新期刊
    };
  },
  mounted() {
    this.getLast();
  },
  methods: {
    getLast() {
      this.axios
        .get("/classic/latest", {
          params: {
            appkey: "RdshydjBvcYZhMZC",
          },
        })
        .then((res) => {
          console.log(res);
          this.imgUrl = res.data.image;
          this.content = res.data.content;
          this.title = res.data.title;
          if (res.data.id === 1) {
            this.first = true;
          }
          this.latest = false;
        });
    },
  },
};
</script>

<style>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  color: #555;
}

.header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
  padding: 10px;
}

.epsoide {
  margin-left: 20px;
  margin-top: 4px;
}

.like {
  margin-top: 6px;
  padding-right: 16px;
}

.navi {
  position: absolute;
  bottom: 126px;
}
</style>
