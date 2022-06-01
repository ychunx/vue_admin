<template>
  <div>
    <el-card style="margin-bottom: 20px">
      <CategorySelect
        @getCategoryIds="getCategoryIds"
        :isShowTable="isShowTable"
      />
    </el-card>

    <div v-show="scene == 0">
      <el-button
        type="primary"
        plain
        icon="el-icon-plus"
        :disabled="!isAbleClick"
        @click="addOrUpdateSpu"
        >添加SPU</el-button
      >

      <el-table border style="margin: 20px 0" :data="spuList">
        <el-table-column
          label="序号"
          type="index"
          width="80px"
          align="center"
        ></el-table-column>

        <el-table-column
          label="SPU名称"
          prop="spuName"
          width="300px"
        ></el-table-column>

        <el-table-column label="SPU描述" prop="description"></el-table-column>

        <el-table-column label="操作" align="center" width="230px">
          <template slot-scope="{ row }">
            <el-button
              type="success"
              icon="el-icon-plus"
              size="mini"
              title="添加SKU"
              @click="addSku(row)"
            ></el-button>
            <el-button
              type="warning"
              icon="el-icon-edit"
              size="mini"
              title="修改SPU"
              @click="addOrUpdateSpu(row)"
            ></el-button>
            <el-button
              type="info"
              icon="el-icon-info"
              size="mini"
              title="查看SKU列表"
              @click="showSkuListDialog(row)"
            ></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              title="删除SPU"
              @click="deleteSpu(row)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        :total="total"
        :current-page="page"
        :page-size="limit"
        :page-sizes="[3, 5, 10]"
        layout="prev,pager,next,jumper,->,sizes,total"
        style="text-align: center"
        @current-change="getSpuList"
        @size-change="handleSizeChange"
      ></el-pagination>
    </div>

    <el-dialog
      :title="`${spuInfo.spuName}的Sku列表`"
      :visible.sync="dialogTableVisible"
    >
      <el-table :data="skuList" border>
        <el-table-column label="名称" prop="skuName"></el-table-column>
        <el-table-column
          label="价格"
          prop="price"
          align="center"
          width="130px"
        ></el-table-column>
        <el-table-column
          label="重量"
          prop="weight"
          align="center"
          width="130px"
        ></el-table-column>
        <el-table-column label="默认图片" width="130px" align="center">
          <template slot-scope="{ row }">
            <img :src="row.skuDefaultImg" style="width: 100px; height: 100px" />
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>

    <SpuForm v-show="scene == 1" @changeScene="changeScene" />

    <SkuForm v-show="scene == 2" @changeScene="changeScene" />
  </div>
</template>

<script>
import SpuForm from "./SpuForm";
import SkuForm from "./SkuForm";

export default {
  name: "Spu",
  components: {
    SpuForm,
    SkuForm,
  },
  data() {
    return {
      categoryIds: {},
      // 添加SPU是否可按
      isAbleClick: false,
      // 控制显示表格
      isShowTable: true,
      page: 1,
      limit: 3,
      total: 1,
      spuList: [],
      scene: 0, // 0为SPU列表 1为添加/修改SPU 2为添加SKU

      dialogTableVisible: false, // 控制sku列表对话框显示
      spuInfo: {},
      skuList: [],
    };
  },
  methods: {
    handleSizeChange(limit) {
      this.limit = limit;
      this.getSpuList();
    },

    getCategoryIds(categoryIds) {
      this.categoryIds = categoryIds;
      if (categoryIds.category3Id) {
        this.isAbleClick = true;
        this.getSpuList();
      } else {
        this.isAbleClick = false;
      }
    },
    async getSpuList(pager = 1) {
      this.page = pager;
      const { category3Id } = this.categoryIds;
      const { page, limit } = this;
      let res = await this.$API.spu.reqSpuList(page, limit, category3Id);
      if (res.code == 200) {
        this.spuList = res.data.records;
        this.total = res.data.total;
      } else {
        this.$message.error("获取SPU列表失败");
      }
    },

    addOrUpdateSpu(row) {
      // 添加或修改
      row.id
        ? this.$bus.$emit("getSpuInfo", row, this.categoryIds.category3Id)
        : this.$bus.$emit("addSpuInfo", this.categoryIds.category3Id);
    },
    addSku(row) {
      this.$bus.$emit("getData", row, this.categoryIds);
    },

    async deleteSpu(row) {
      let res = await this.$API.spu.reqDeleteSpu(row.id);
      if (res.code == 200) {
        this.getSpuList(this.spuList.length > 1 ? this.page : this.page - 1);
        this.$message.success("删除SPU成功");
      } else {
        this.$message.error("删除SPU失败");
      }
    },

    changeScene(type, act) {
      this.scene = type;
      if (act) {
        this.getSpuList(this.page);
      }
    },

    async showSkuListDialog(spu) {
      let res = await this.$API.sku.reqSkuList(spu.id);
      if (res.code == 200) {
        this.spuInfo = spu;
        this.skuList = res.data;
        this.dialogTableVisible = true;
      } else {
        this.$message.error("获取Sku列表数据失败");
      }
    },
  },
};
</script>

<style>
</style>