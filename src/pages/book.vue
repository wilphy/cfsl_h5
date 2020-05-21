<template>
  <!-- 搜索框 -->
  <div class="container">
    <div class="header">
      <div class="box">
        <img src="./../../public/images/icon/search.png" />
        <span>搜索书籍</span>
      </div>
    </div>

    <!-- 图书内容 -->
    <div class="sub-container">
      <img class="head-img" src="./../../public/images/book/quality.png" />
      <div class="books-container"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "book",
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.sub-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  margin-top: 24px;
  width: 100%;
}

.box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #f5f5f5;
  height: 40px;
  width: 98%;
  color: #999999;
}

.header {
  position: fixed;
  background-color: #ffffff;
  height: 24px;
  width: 100%;
  border-top: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 3px 0 #e3e3e3;
  z-index: 99;
}

.head-img {
  width: 70px;
  height: 28px;
  margin-top: 40px;
}

.box img {
  margin-right: 10px;
  width: 14px;
  height: 14px;
  margin-bottom: -2px;
}

.books-container {
  /* width: 100%;
  height: 200px;
  background-color: aquamarine; */
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 90px;
}

.books-container v-book {
  margin-bottom: 10px;
}
</style>
