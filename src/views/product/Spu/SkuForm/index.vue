<template>
  <div>
    <!-- 收集sku信息数据 -->
    <el-form label-width="80px">
      <el-form-item label="SPU名称"> {{ spuInfo.spuName }} </el-form-item>
      <el-form-item label="SKU名称">
        <el-input
          placeholder="请输入SKU名称"
          v-model="skuInfo.skuName"
          style="width: 30%"
        ></el-input>
      </el-form-item>
      <el-form-item label="价格">
        <el-input
          placeholder="请输入价格（元）"
          v-model="skuInfo.price"
          type="number"
          style="width: 15%"
        ></el-input>
      </el-form-item>
      <el-form-item label="重量">
        <el-input
          placeholder="请输入重量（千克）"
          v-model="skuInfo.weight"
          type="number"
          style="width: 15%"
        ></el-input>
      </el-form-item>
      <el-form-item label="规格描述">
        <el-input
          placeholder="请输入SKU规格描述"
          type="textarea"
          rows="4"
          v-model="skuInfo.skuDesc"
          style="width: 70%"
        ></el-input>
      </el-form-item>

      <el-form-item label="平台属性">
        <el-form :inline="true">
          <el-form-item
            :label="attr.attrName"
            v-for="attr in attrInfoList"
            :key="attr.id"
          >
            <el-select placeholder="请选择" v-model="attr.attrInfo">
              <el-option
                :label="attrValue.valueName"
                :value="`${attr.id}:${attrValue.id}`"
                v-for="attrValue in attr.attrValueList"
                :key="attrValue.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-form-item>

      <el-form-item label="销售属性">
        <el-form :inline="true">
          <el-form-item
            :label="saleAttr.saleAttrName"
            v-for="saleAttr in spuSaleAttrList"
            :key="saleAttr.id"
          >
            <el-select placeholder="请选择" v-model="saleAttr.spuSaleAttrInfo">
              <el-option
                :label="saleAttrValue.saleAttrValueName"
                :value="`${saleAttr.id}:${saleAttrValue.id}`"
                v-for="saleAttrValue in saleAttr.spuSaleAttrValueList"
                :key="saleAttrValue.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-form-item>

      <el-form-item label="图片列表" style="width: 70%">
        <el-table
          border
          :data="spuImageList"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            width="65px"
            type="selection"
            align="center"
          ></el-table-column>
          <el-table-column label="图片" width="130px" align="center">
            <template slot-scope="{ row }">
              <img :src="row.imgUrl" style="width: 100px; height: 100px" />
            </template>
          </el-table-column>
          <el-table-column label="名称" prop="imgName"></el-table-column>
          <el-table-column label="操作" width="110px" align="center">
            <template slot-scope="{ row }">
              <el-button
                type="primary"
                size="mini"
                plain
                v-if="row.isDefault == 0"
                @click="selectDefault(row)"
                >设为默认</el-button
              >
              <el-button type="primary" size="mini" v-else>默认图片</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="addSku">保存</el-button>
        <el-button @click="$emit('changeScene', 0)">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "SkuForm",
  data() {
    return {
      spuImageList: [], // spu拥有的图片
      spuSaleAttrList: [], // spu拥有的售卖属性
      attrInfoList: [], // 属性值
      spuInfo: {}, // spu信息
      selectedImageList: [], // sku所勾选的spu图片

      // 上传服务器的sku信息格式
      skuInfo: {
        category3Id: 0,
        spuId: 0,
        tmId: 0,

        skuName: "",
        price: "",
        weight: "",
        skuDesc: "",

        skuDefaultImg: "",
        skuImageList: [
          // {
          //   imgName: "string",
          //   imgUrl: "string",
          //   isDefault: "string",
          //   spuImgId: 0,
          // },
        ],
        skuAttrValueList: [
          // {
          //   attrId: 0,
          //   valueId: 0,
          // },
        ],
        skuSaleAttrValueList: [
          // {
          //   saleAttrId: 0,
          //   saleAttrValueId: 0,
          // },
        ],
      },
    };
  },
  methods: {
    // 选择图片时，获取已选择的图片
    handleSelectionChange(params) {
      this.selectedImageList = params;
    },

    // 设置默认图片
    selectDefault(row) {
      let isSelected = this.selectedImageList.some((item) => {
        return item.imgUrl == row.imgUrl;
      });
      if (!isSelected) {
        this.$message.error("请选择该图片后再将其设为默认图片");
        return;
      }

      this.spuImageList.forEach((item) => {
        item.isDefault = 0;
      });
      row.isDefault = 1;
      // 同时收集数据
      this.skuInfo.skuDefaultImg = row.imgUrl;
    },

    // 添加sku
    async addSku() {
      this.attrInfoList.forEach((item) => {
        if (item.attrInfo) {
          const [attrId, valueId] = item.attrInfo.split(":");
          this.skuInfo.skuAttrValueList.push({
            attrId,
            valueId,
          });
        }
      });

      this.spuSaleAttrList.forEach((item) => {
        if (item.spuSaleAttrInfo) {
          const [saleAttrId, saleAttrValueId] = item.spuSaleAttrInfo.split(":");
          this.skuInfo.skuSaleAttrValueList.push({
            saleAttrId,
            saleAttrValueId,
          });
        }
      });

      this.skuInfo.skuImageList = this.selectedImageList.map((item) => {
        return {
          imgName: item.imgName,
          imgUrl: item.imgUrl,
          isDefault: item.isDefault,
          spuImgId: item.id,
        };
      });

      let res = await this.$API.spu.reqAddSku(this.skuInfo);
      if (res.code == 200) {
        this.$emit("changeScene", 0);
        this.$message.success("添加SKU成功");
      } else {
        this.$message.error("添加SKU失败");
      }
    },
  },
  mounted() {
    this.$bus.$on("getData", async (spu, ids) => {
      this.skuInfo.skuName = "";
      this.skuInfo.price = "";
      this.skuInfo.weight = "";
      this.skuInfo.skuDesc = "";

      this.spuInfo = spu;

      this.spuImageList = [];
      this.spuSaleAttrList = [];
      this.attrInfoList = [];

      let attrInfoListRes = await this.$API.spu.reqAttrInfoList(ids);
      if (attrInfoListRes.code == 200) {
        this.attrInfoList = attrInfoListRes.data;
      } else {
        this.$message.error("获取平台属性数据失败");
      }

      let spuSaleAttrRes = await this.$API.spu.reqSpuSaleAttrList(spu.id);
      if (spuSaleAttrRes.code == 200) {
        this.spuSaleAttrList = spuSaleAttrRes.data;
      } else {
        this.$message.error("获取销售属性数据失败");
      }

      let spuImageRes = await this.$API.spu.reqSpuImageList(spu.id);
      if (spuImageRes.code == 200) {
        this.spuImageList = spuImageRes.data;
        this.spuImageList.forEach((item) => {
          this.$set(item, "isDefault", 0);
        });
        this.$emit("changeScene", 2);
      } else {
        this.$message.error("获取SPU图片数据失败");
      }

      this.skuInfo.category3Id = spu.category3Id;
      this.skuInfo.spuId = spu.id;
      this.skuInfo.tmId = spu.tmId;
    });
  },
};
</script>

<style>
</style>