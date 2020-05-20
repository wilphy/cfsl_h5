<template>
  <div class="episode">
    <div class="index-container">
      <span class="plain">No.</span>
      <span class="index">08</span>
      <div class="line"></div>
    </div>
    <div class="date-container">
      <span class="month">五月</span>
      <span class="year">2020</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.episode {
  height: 30px;
  display: inline-flex;
  flex-direction: row;
  margin-left: 20px;
  margin-top: 4px;
}

.index-container {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}

.plain {
  font-size: 16px;
}

.index {
  font-size: 30px;
  line-height: 30px;
  font-weight: 500;
  margin-right: 14px;
}

.line {
  height: 30px;
  margin-right: 14px;
  border-left: 1px solid #000;
}

.date-container {
  display: flex;
  flex-direction: column;
  margin-top: 5px;
}

.month {
  font-size: 12px;
  line-height: 12px;
  padding-bottom: 1px;
}

.year {
  font-size: 10px;
}
</style>
