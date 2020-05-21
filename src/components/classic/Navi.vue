<template>
  <div class="navi">
    <img @click="onLeft" class="icon" :src="first ? disLeftSrc : leftSrc" />
    <div class="title">{{ title }}</div>
    <img @click="onRight" class="icon" :src="rightSrc" />
  </div>
</template>

<script>
import disLeftSrc from "./images/triangle.dis@left.png";
import leftSrc from "./images/triangle@left.png";
import disRightSrc from "./images/triangle.dis@right.png";
import rightSrc from "./images/triangle@right.png";
export default {
  props: {
    title: String,
    latest: Boolean,
    first: Boolean,
  },
  data() {
    return {
      disLeftSrc, // 禁用左箭头
      leftSrc, // 左箭头
      disRightSrc, // 禁用右箭头
      rightSrc, // 右箭头
    };
  },
  methods: {
    onLeft() {
      console.log("onleft");
    },
    onRight() {
      console.log("onright");
    },
  },
};
</script>

<style>
.navi {
  width: 80%;
  /* height: 36px; */
  background-color: #f9f9f9;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.icon {
  height: 28px;
  width: 28px;
}

.title {
  color: #555;
  font-size: 18px;
}
</style>
