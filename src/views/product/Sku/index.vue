<template>
  <div>
    <el-table border :data="skuList">
      <el-table-column
        label="序号"
        type="index"
        align="center"
        width="80px"
      ></el-table-column>
      <el-table-column
        label="名称"
        prop="skuName"
        width="230px"
      ></el-table-column>
      <el-table-column label="描述" prop="skuDesc"></el-table-column>
      <el-table-column label="默认图片" width="130px" align="center">
        <template slot-scope="{ row }">
          <img :src="row.skuDefaultImg" style="width: 100px; height: 100px" />
        </template>
      </el-table-column>
      <el-table-column
        label="重量"
        width="130px"
        align="center"
        prop="weight"
      ></el-table-column>
      <el-table-column
        label="价格"
        width="130px"
        align="center"
        prop="price"
      ></el-table-column>
      <el-table-column label="操作" align="center" width="230px">
        <template slot-scope="{ row }">
          <el-button
            type="success"
            size="mini"
            icon="el-icon-sell"
            title="上架"
            v-if="row.isSale == 0"
            @click="sale(row)"
          ></el-button>
          <el-button
            type="warning"
            size="mini"
            icon="el-icon-sold-out"
            title="下架"
            v-else
            @click="soldOut(row)"
          ></el-button>
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-edit"
            title="修改"
            @click="$message('假的，别按了')"
          ></el-button>
          <el-button
            type="info"
            size="mini"
            icon="el-icon-info"
            title="查看信息"
            @click="getSkuInfo(row)"
          ></el-button>
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
            title="删除"
            @click="deleteSku(row)"
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
      style="text-align: center; margin-top: 20px"
      @current-change="getSkuList"
      @size-change="handleSizeChange"
    ></el-pagination>

    <el-drawer :visible.sync="drawer" :show-close="false" size="50%">
      <br /><br />不做了不做了<br /><br /><br /><br /><br />
      {{ skuInfo }}
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "Sku",
  data() {
    return {
      page: 1,
      limit: 3,
      total: 0,
      skuList: [],
      skuInfo: {},
      drawer: false,
    };
  },
  methods: {
    async getSkuList(pager = 1) {
      this.page = pager;
      const { page, limit } = this;
      let res = await this.$API.sku.reqSkuList(page, limit);
      if (res.code == 200) {
        this.total = res.data.total;
        this.skuList = res.data.records;
      } else {
        this.$message.error("获取SKU数据失败");
      }
    },

    handleSizeChange(limit) {
      this.limit = limit;
      this.getSkuList();
    },

    async sale(sku) {
      let res = await this.$API.sku.reqSale(sku.id);
      if (res.code == 200) {
        sku.isSale = 1;
        this.$message.success("上架成功");
      } else {
        this.$message.error("上架失败");
      }
    },

    async soldOut(sku) {
      let res = await this.$API.sku.reqSoldOut(sku.id);
      if (res.code == 200) {
        sku.isSale = 0;
        this.$message.success("下架成功");
      } else {
        this.$message.error("下架失败");
      }
    },

    async getSkuInfo(sku) {
      let res = await this.$API.sku.reqSkuInfo(sku.id);
      if (res.code == 200) {
        this.skuInfo = res.data;
        this.drawer = true;
      } else {
        this.$message.error("获取sku数据失败");
      }
    },

    async deleteSku(sku) {
      let res = await this.$API.sku.reqDeleteSku(sku.id);
      if (res.code == 200) {
        this.getSkuList(this.skuList.length > 1 ? this.page : this.page - 1);
        this.$message.success("删除SKU成功");
      } else {
        this.$message.error("删除SKU失败");
      }
    },
  },
  mounted() {
    this.getSkuList();
  },
};
</script>

<style>
</style>