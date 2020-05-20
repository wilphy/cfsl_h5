<template>
  <div id="app">
    <router-view></router-view>

    <!-- tab栏-->
    <div class="tab-wrapper">
      <div class="tab-box classic tab-active" @click="changeTab(0)">
        <img src="./../public/images/tab/classic.png" alt="" />
        <div class="tab-title">流行</div>
      </div>
      <div class="tab-box book" @click="changeTab(1)">
        <img src="./../public/images/tab/book.png" alt="" />
        <div class="tab-title">书籍</div>
      </div>
      <div class="tab-box my" @click="changeTab(2)">
        <img src="./../public/images/tab/my.png" alt="" />
        <div class="tab-title">我的</div>
      </div>
    </div>
  </div>
</template>

<script>
import classic from "./../public/images/tab/classic.png";
import classicActive from "./../public/images/tab/classic@highlight.png";
export default {
  name: "App",
  components: {},
  data() {
    return {
      tabImgUrl: [
        {
          classic: classic,
        },
        {
          classicActive: classicActive,
        },
      ],
    };
  },

  methods: {
    changeTab(num) {
      switch (num) {
        case 0:
          this.$router.push("/classic");
          break;
        case 1:
          this.$router.push("/book");
          console.log(this.tabImgUrl[0]);
          break;
        case 2:
          this.$router.push("/my");
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.tab-wrapper {
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 1px solid #ccc;
  padding: 5px;
}
.tab-box {
  flex: 1;
  color: #aaa;
}

.tab-box img {
  width: 50px;
  height: 50px;
}
.tab-title {
  font-size: 14px;
  position: relative;
  top: -8px;
}
.tab-active {
  color: #f06;
}
</style>
