<template>
  <div class="page-table">
    <el-table
      :data="model.persons"
      border
      style="width: 99.99%">
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <div>
      <el-pagination
        @current-change="handleCurrentChange"
        :page-size="model.pageSize"
        :current-page="model.pageNum"
        layout="prev, pager, next"
        :total="11">
      </el-pagination>
    </div>
 </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Service from './PageTableService';
import { Model } from './PageTableDao';


// 控制器
@Component
export default class PageTable extends Vue {
  private model: Model = {
    $store: this.$store,
    persons: [],
    pageNum: 1,
    pageSize: 10,
  };
  private service: Service = new Service(this.model);

  private created() {
    this.service.requireAndRenderDataByPageNo(1);
  }

  private handleCurrentChange(val: number) {
      this.service.requireAndRenderDataByPageNo(val);
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-table{
    text-align: center;
    padding: 20px;
    width: 100%;
}

</style>
