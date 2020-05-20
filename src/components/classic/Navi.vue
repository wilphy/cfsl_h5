<template>
  <div class="navi">
    <!-- <img @click="onLeft" class="icon" :src="leftSrc" /> -->
    <img @click="onLeft" class="icon" src="./images/triangle.dis@left.png" />
    <div class="title">{{ title }}</div>
    <img @click="onRight" class="icon" src="./images/triangle@right.png" />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    latest: Boolean,
  },
  data() {
    return {
      disLeftSrc: "images/triangle.dis@left.png",
      leftSrc: "images/triangle@left.png",
      disRightSrc: "images/triangle.dis@right.png",
      rightSrc: "images/triangle@right.png",
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
