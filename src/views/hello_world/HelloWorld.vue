<template>
  <div>
    {{model.num}}
    <div><button type="button" :disabled="model.isDisabled" @click="changeNum">num++</button></div>
    {{model.msg}}
    <div><button type="button" @click="changeMsg">changeMsg</button></div>
 </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Service from './HellowWorldService';
import { Model } from './HellowWorldDao';


// 控制器
@Component
export default class HelloWorld extends Vue {
  // 注入service，并将vm对象传递给service
  private model: Model = {
    $store: this.$store,
    num: 1,
    msg: '111',
    isDisabled: false,
  };
  private service: Service = new Service(this.model);

  private created(): void {
    this.service.initData();
  }

  private changeNum(): void {
    this.service.changeNum();
  }

  private changeMsg(): void {
    this.service.changeMsg();
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
