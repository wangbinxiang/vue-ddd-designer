<template>
  <div id="app">
    <div class="loading-box" v-if="$store.state.masking">
      <div class="loading-back"></div>
      <div class="loading-word">loading...</div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
html,body {
  width: 100%;
}
.loading-box {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 9999;
}
.loading-back {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  background: rgb(119, 189, 221);
  opacity: 0.1;
  z-index: 9999;
  text-align: center;
  vertical-align: middle;
}
.loading-word {
  width: 100px;
  height: 40px;
  margin: 20% auto;
  background: rgb(154, 230, 217);
  border: 3px solid rgb(91, 240, 240);
  opacity: 1 !important;
  text-align: center;
  line-height: 40px;
}
</style>
