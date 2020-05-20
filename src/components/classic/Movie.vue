<template>
  <div class="classic-container">
    <img class="classic-img" :src="img" />
    <img class="tag" src="./images/movie@tag.png" />
    <div class="content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    content: String,
  },
  data() {
    return {};
  },
};
</script>

<style>
.classic-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.classic-img {
  width: 100%;
  height: 250px;
}

.tag {
  width: 30px;
  height: 100px;
  position: relative;
  right: 131px;
  bottom: 42px;
}

.content {
  font-size: 24px;
  max-width: 550px;
  text-align: center;
}
</style>
