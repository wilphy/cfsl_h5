<template>
  <div class="like">
    <img class="img" src="./../../public/images/like/like.png" />
    <span class="text">99</span>
  </div>
</template>

<script>
export default {};
</script>

<style>
.like {
  display: inline-flex;
  flex-direction: row;
  padding: 5px;
  width: 45px;
}

.img {
  width: 26px;
  height: 22px;
}

.text {
  font-weight: 200;
  font-size: 12px;
  line-height: 12px;
  color: #aaa;
  position: relative;
  bottom: 10px;
  left: 6px;
}
</style>
