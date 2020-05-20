<template>
  <div class="container">
    <!-- 头部栏 -->
    <div class="header">
      <!-- 期刊日期 -->
      <episode></episode>
      <!-- 点赞 -->
      <like></like>
    </div>
  </div>
</template>

<script>
import Like from "./../components/Like";
import Episode from "./../components/Episode";
export default {
  components: {
    Like,
    Episode,
  },
  data() {
    return {};
  },
  mounted() {
    this.getLast();
  },
  methods: {
    getLast() {
      this.axios
        .get("/classic/latest?appkey=RdshydjBvcYZhMZC", {})
        .then((res) => {
          console.log(res);
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
</style>
