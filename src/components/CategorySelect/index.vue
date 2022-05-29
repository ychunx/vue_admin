<template>
  <div>
    <el-form :inline="true" :model="categoryForm" class="demo-form-inline">
      <el-form-item label="一级分类">
        <el-select
          placeholder="请选择"
          v-model="categoryForm.category1Id"
          @change="handler1"
          :disabled="!isShowTable"
        >
          <el-option
            v-for="c1 in category1List"
            :label="c1.name"
            :value="c1.id"
            :key="c1.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="二级分类">
        <el-select
          placeholder="请选择"
          v-model="categoryForm.category2Id"
          @change="handler2"
          :disabled="!isShowTable"
        >
          <el-option
            v-for="c2 in category2List"
            :label="c2.name"
            :value="c2.id"
            :key="c2.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="三级分类">
        <el-select
          placeholder="请选择"
          v-model="categoryForm.category3Id"
          @change="handler3"
          :disabled="!isShowTable"
        >
          <el-option
            v-for="c3 in category3List"
            :label="c3.name"
            :value="c3.id"
            :key="c3.id"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "CategorySelect",
  props: ["isShowTable"],
  data() {
    return {
      category1List: [],
      category2List: [],
      category3List: [],

      categoryForm: {
        category1Id: "",
        category2Id: "",
        category3Id: "",
      },
    };
  },
  methods: {
    async getCategory1List() {
      let res = await this.$API.attr.reqCategory1List();
      if (res.code == 200) {
        this.category1List = res.data;
      }
    },
    async handler1() {
      this.category2List = [];
      this.category3List = [];
      this.categoryForm.category2Id = "";
      this.categoryForm.category3Id = "";

      let { category1Id } = this.categoryForm;
      this.$emit("getCategoryIds", {
        category1Id,
        category2Id: "",
        category3Id: "",
      });
      let res = await this.$API.attr.reqCategory2List(category1Id);
      if (res.code == 200) {
        this.category2List = res.data;
      }
    },
    async handler2() {
      this.category3List = [];
      this.categoryForm.category3Id = "";

      let { category1Id, category2Id } = this.categoryForm;
      this.$emit("getCategoryIds", {
        category1Id,
        category2Id,
        category3Id: "",
      });
      let res = await this.$API.attr.reqCategory3List(category2Id);
      if (res.code == 200) {
        this.category3List = res.data;
      }
    },
    handler3() {
      let { category1Id, category2Id, category3Id } = this.categoryForm;
      this.$emit("getCategoryIds", { category1Id, category2Id, category3Id });
    },
  },
  mounted() {
    this.getCategory1List();
  },
};
</script>

<style>
</style>