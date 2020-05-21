<template>
  <div id="app">
    <router-view></router-view>

    <!-- tab栏-->
    <div class="tab-wrapper">
      <div
        class="tab-box classic"
        :class="activeTabClassic ? 'tab-active' : ''"
        @click="changeTab(0)"
      >
        <img
          :src="activeTabClassic ? tabClassicHighLight : tabClassic"
          alt=""
        />
        <div class="tab-title">流行</div>
      </div>
      <div
        class="tab-box book"
        :class="activeTabBook ? 'tab-active' : ''"
        @click="changeTab(1)"
      >
        <img :src="activeTabBook ? tabBookHighLight : tabBook" alt="" />
        <div class="tab-title">书籍</div>
      </div>
      <div
        class="tab-box my"
        :class="activeTabMy ? 'tab-active' : ''"
        @click="changeTab(2)"
      >
        <img :src="activeTabMy ? tabMyHighLight : tabMy" alt="" />
        <div class="tab-title">我的</div>
      </div>
    </div>
  </div>
</template>

<script>
import tabClassic from "./../public/images/tab/classic.png";
import tabClassicHighLight from "./../public/images/tab/classic@highlight.png";
import tabBook from "./../public/images/tab/book.png";
import tabBookHighLight from "./../public/images/tab/book@highlight.png";
import tabMy from "./../public/images/tab/my.png";
import tabMyHighLight from "./../public/images/tab/my@highlight.png";
export default {
  name: "App",
  components: {},
  data() {
    return {
      tabClassic,
      tabClassicHighLight,
      tabBook,
      tabBookHighLight,
      tabMy,
      tabMyHighLight,
      activeTabClassic: false,
      activeTabBook: false,
      activeTabMy: false,
    };
  },

  mounted() {
    let currentTab = this.$route.path;
    switch (currentTab) {
      case "/classic":
        this.activeTabClassic = true;
        break;
      case "/book":
        this.activeTabBook = true;
        break;
      case "/my":
        this.activeTabMy = true;
        break;
      default:
        break;
    }
  },

  methods: {
    changeTab(num) {
      switch (num) {
        case 0:
          this.$router.push("/classic");
          this.activeTabClassic = true;
          this.activeTabBook = false;
          this.activeTabMy = false;
          break;
        case 1:
          this.$router.push("/book");
          this.activeTabClassic = false;
          this.activeTabBook = true;
          this.activeTabMy = false;
          break;
        case 2:
          this.$router.push("/my");
          this.activeTabClassic = false;
          this.activeTabBook = false;
          this.activeTabMy = true;
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
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
  width: 36px;
  height: 36px;
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
