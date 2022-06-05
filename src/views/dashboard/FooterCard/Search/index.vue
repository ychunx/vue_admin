<template>
  <el-card>
    <div slot="header" class="header">
      <span>线上热门搜索</span>
      <el-dropdown>
        <span>
          <i class="el-icon-more"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>第一</el-dropdown-item>
          <el-dropdown-item>第二</el-dropdown-item>
          <el-dropdown-item>第三</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div>
      <el-row :gutter="20">
        <el-col :span="12">
          <LineChart title="搜索用户数" :list="list" />
        </el-col>
        <el-col :span="12">
          <LineChart title="人均搜索次数" :list="list" />
        </el-col>
      </el-row>
      <el-table
        :data="list"
        class="table"
        max-height="200"
        style="width: 100%"
        :default-sort="{ prop: 'date', order: 'descending' }"
        border
      >
        <el-table-column label="排名" width="80" type="index" align="center">
        </el-table-column>
        <el-table-column
          label="搜索关键字"
          width="200"
          prop="word"
          align="center"
        >
        </el-table-column>
        <el-table-column label="用户数" sortable prop="user" align="center">
        </el-table-column>
        <el-table-column label="周涨幅" sortable align="center">
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<script>
import LineChart from "./LineChart";
export default {
  name: "Search",
  props: ["list"],
  components: {
    LineChart,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}
.header i {
  cursor: pointer;
}

.table {
  margin: 20px 0;
}
</style>