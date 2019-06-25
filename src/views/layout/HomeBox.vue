<template>
  <div class="home-box">
    <div class="header-bar">
      <el-button @click="toggleSideBar">toggle</el-button>
    </div>
    <div class="side-bar" :style="'width:' + model.sideWidth + 'px'">
      <ul>
        <li v-for="(item,index) in model.routers" :key="index">
          <router-link :to="item">{{item}}</router-link>
        </li>
      </ul>
    </div>
    <div class="tags-bar" :style="'margin-left:' + model.sideWidth + 'px'">

    </div>
    <div class="main-page" :style="'margin-left:' + model.sideWidth + 'px'">
        <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Service from './HomeBoxService';
import { Model } from './HomeBoxDao';

@Component
export default class Home extends Vue {
  private model: Model = {
    $store: this.$store,
    sideWidth: 80,
    routers: ['/page_table', '/hello'],
  };
  private service: Service = new Service(this.model);

  private toggleSideBar(): void {
    this.service.toggleSideBar();
  }
}
</script>

<style lang="scss" scoped>
.home-box {
  width: 100%;
  .header-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 80px;
    width: 100%;
    background: gray;
  }
  .side-bar {
    position: fixed;
    margin-top: 80px; 
    top: 0;
    left: 0;
    bottom: 0;
    background:lightgray;
  }
  .tags-bar {
    position: fixed;
    margin-top: 80px;
    height: 50px;
    width: 100%;
    top: 0;
    left: 0;
    background: rgb(195, 223, 224);
  }
  .main-page {
    margin-top: 130px; 
    overflow: hidden;
    padding-right: 50px;
  }
  
}
</style>

