<template>
  <!-- 主页页尾组件 -->
  <el-row :gutter="20">
    <el-col :span="12">
      <Search :list="list.searchWord" />
    </el-col>
    <el-col :span="12">
      <Category :rank="list.saleRank" />
    </el-col>
  </el-row>
</template>

<script>
import Search from "./Search";
import Category from "./Category";
export default {
  name: "FooterCard",
  props: ["list"],
  components: {
    Search,
    Category,
  },
};
</script>

<style>
</style>