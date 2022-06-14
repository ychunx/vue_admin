<template>
  <div>
    <!-- 收集spu信息数据 -->
    <el-form ref="form" label-width="80px">
      <el-form-item label="SPU名称">
        <el-input
          style="width: 30%"
          placeholder="请输入SPU名称"
          v-model="spu.spuName"
        ></el-input>
      </el-form-item>

      <el-form-item label="品牌">
        <el-select placeholder="请选择品牌" v-model="spu.tmId">
          <el-option
            :label="tm.tmName"
            :value="tm.id"
            v-for="tm in tradeMarkList"
            :key="tm.id"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="SPU描述">
        <el-input
          type="textarea"
          rows="4"
          placeholder="请输入SPU描述"
          v-model="spu.description"
        ></el-input>
      </el-form-item>

      <el-form-item label="SPU图片">
        <el-upload
          action="/dev-api/admin/product/fileUpload"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-success="handleSuccess"
          :file-list="spuImageList"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" />
        </el-dialog>
      </el-form-item>

      <el-form-item label="销售属性">
        <el-select
          :placeholder="`还有${unSelectSaleAttr.length}项未选择`"
          v-model="selectingAttr"
        >
          <el-option
            :label="attr.name"
            :value="`${attr.id}:${attr.name}`"
            v-for="attr in unSelectSaleAttr"
            :key="attr.id"
          ></el-option>
        </el-select>
        <el-button
          type="primary"
          icon="el-icon-plus"
          title="添加销售属性"
          style="margin-left: 10px"
          size="small"
          :disabled="!selectingAttr"
          @click="addSaleAttr"
          >添加</el-button
        >
        <el-table
          border
          style="width: 100%; margin-top: 20px"
          :data="spu.spuSaleAttrList"
        >
          <el-table-column
            type="index"
            label="序号"
            width="80px"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="saleAttrName" label="销售属性名" width="120px">
          </el-table-column>
          <el-table-column label="属性值列表" width="width">
            <template slot-scope="{ row, $index }">
              <el-tag
                :key="tag.id"
                v-for="(tag, index) in row.spuSaleAttrValueList"
                closable
                :disable-transitions="true"
                @close="handleClose(row, index)"
              >
                <span @click="clickAttrValue(tag, $index)" v-if="!tag.flag">{{
                  tag.saleAttrValueName
                }}</span>
                <el-input
                  v-model="tag.saleAttrValueName"
                  style="width: 100px"
                  size="mini"
                  :ref="$index"
                  v-else
                  @blur="updateAttrValue(tag)"
                ></el-input>
              </el-tag>
              <el-input
                class="input-new-tag"
                :ref="$index"
                size="small"
                style="display: none"
                v-model="inputString"
                @blur="handleInputConfirm(row, $index)"
              >
              </el-input>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="150px" align="center">
            <template slot-scope="{ row, $index }">
              <el-button
                type="success"
                icon="el-icon-edit"
                size="mini"
                @click="showValueInput($index)"
                title="添加属性值"
                >添加</el-button
              >
              <el-button
                type="danger"
                icon="el-icon-delete"
                size="mini"
                @click="deleteAttr(row, $index)"
                title="删除属性"
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="saveSpu">保存</el-button>
        <el-button @click="$emit('changeScene', 0)">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "SpuForm",
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      spu: {},
      tradeMarkList: [],
      spuImageList: [],
      baseSaleAttrList: [],
      selectingAttr: "",
      // 正在添加的属性值
      inputString: "",
    };
  },
  methods: {
    // 删除图片
    handleRemove(file, fileList) {
      this.spuImageList = fileList;
    },
    // 预览图片
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 当上传图片成功后将图片链接添加到图片列表
    handleSuccess(res, file, fileList) {
      this.spuImageList = fileList;
    },

    // 添加属性
    addSaleAttr() {
      let [baseSaleAttrId, saleAttrName] = this.selectingAttr.split(":");
      // 添加到spu使得表格展示
      if (!this.spu.spuSaleAttrList) {
        this.$set(this.spu, "spuSaleAttrList", []);
      }
      this.spu.spuSaleAttrList.push({
        baseSaleAttrId,
        saleAttrName,
        spuSaleAttrValueList: [],
      });
    },
    // 点击修改属性值
    clickAttrValue(tag, index) {
      this.$set(tag, "flag", true);
      this.$nextTick(() => {
        // 获取input框给予焦点
        this.$refs[index][0].focus();
      });
    },
    // 修改属性值
    updateAttrValue(tag) {
      tag.flag = false;
    },
    // 点击添加属性值
    showValueInput(index) {
      this.inputString = "";
      //控制显示隐藏
      this.$refs[index].$el.style.display = "inline-block";
      this.$nextTick(() => {
        this.$refs[index].focus();
      });
    },
    // 添加属性值
    handleInputConfirm(row, index) {
      //控制显示隐藏
      this.$refs[index].$el.style.display = "none";

      if (this.inputString.trim() == "") {
        this.$message.error("属性值不能为空");
        return;
      }

      let isRepeat = row.spuSaleAttrValueList.some(
        (item) => item.saleAttrValueName == this.inputString
      );
      if (isRepeat) {
        this.$message.error("不能有重复属性值");
        return;
      }

      row.spuSaleAttrValueList.push({
        baseSaleAttrId: row.baseSaleAttrId,
        saleAttrName: row.saleAttrName,
        spuId: row.spuId,
        saleAttrValueName: this.inputString,
      });
    },
    // 删除属性值
    handleClose(row, index) {
      row.spuSaleAttrValueList.splice(index, 1);
    },
    // 删除属性
    deleteAttr(row, index) {
      this.spu.spuSaleAttrList.splice(index, 1);
    },

    // 保存SPU
    async saveSpu() {
      // let a = {
      //   category3Id: 0,
      //   description: "string",
      //   id: 0,
      //   tmId: 0,
      //   spuName: "string",
      //   spuImageList: [
      //     {
      //       id: 0,
      //       imgName: "string",
      //       imgUrl: "string",
      //       spuId: 0,
      //     },
      //   ],
      //   spuSaleAttrList: [
      //     {
      //       baseSaleAttrId: 0,
      //       id: 0,
      //       saleAttrName: "string",
      //       spuId: 0,
      //       spuSaleAttrValueList: [
      //         {
      //           baseSaleAttrId: 0,
      //           id: 0,
      //           isChecked: "string",
      //           saleAttrName: "string",
      //           saleAttrValueName: "string",
      //           spuId: 0,
      //         },
      //       ],
      //     },
      //   ],
      // };
      let data = {};

      if (this.spu.id) {
        data.id = this.spu.id;
      }

      if (this.spu.category3Id) {
        data.category3Id = this.spu.category3Id;
      } else {
        data.category3Id = this.category3Id;
      }

      data.tmId = this.spu.tmId;
      data.description = this.spu.description;
      data.spuName = this.spu.spuName;

      data.spuSaleAttrList = this.spu.spuSaleAttrList;

      if (!data.id) {
        data.spuSaleAttrList.forEach((item) => {
          item.spuSaleAttrValueList.forEach((item1) => {
            delete item1.id;
            delete item1.spuid;
            item1.isChecked = "";
          });
        });
      }

      data.spuImageList = [];

      for (let i = 0; i < this.spuImageList.length; i++) {
        let spuImage = {};

        if (this.spuImageList[i].id) {
          spuImage.id = this.spuImageList[i].id;
        }

        if (this.spu.id) {
          spuImage.spuId = this.spu.id;
        }

        spuImage.imgName = this.spuImageList[i].name;

        if (this.spuImageList[i].imgUrl) {
          spuImage.imgUrl = this.spuImageList[i].imgUrl;
        } else {
          spuImage.imgUrl = this.spuImageList[i].response
            ? this.spuImageList[i].response.data
            : this.spuImageList[i].url;
        }

        data.spuImageList.push(spuImage);
      }

      let res = await this.$API.spu.reqAddOrUpdateSpu(data);
      if (res.code == 200) {
        this.$message.success("保存SPU成功");
      } else {
        this.$message.error("保存SPU失败");
      }
      this.$emit("changeScene", 0, true);
    },
  },
  computed: {
    // 返回没有选择的销售属性
    unSelectSaleAttr() {
      if (this.spu.spuSaleAttrList) {
        return this.baseSaleAttrList.filter((item) => {
          return this.spu.spuSaleAttrList.every((item1) => {
            return item.name != item1.saleAttrName;
          });
        });
      } else {
        // 如果是添加SPU则直接全部
        return this.baseSaleAttrList;
      }
    },
  },
  mounted() {
    // 添加SPU时仅获取品牌和基础销售属性
    this.$bus.$on("addSpuInfo", async (category3Id) => {
      this.spu = {};
      this.tradeMarkList = [];
      this.spuImageList = [];
      this.baseSaleAttrList = [];
      this.category3Id = category3Id;

      let tradeMarkRes = await this.$API.spu.reqTradeMarkList();
      if (tradeMarkRes.code == 200) {
        this.tradeMarkList = tradeMarkRes.data;
      } else {
        this.$message.error("获取品牌数据失败");
      }
      let baseSaleAttrRes = await this.$API.spu.reqBaseSaleAttrList();
      if (baseSaleAttrRes.code == 200) {
        this.baseSaleAttrList = baseSaleAttrRes.data;
        this.$emit("changeScene", 1);
      } else {
        this.$message.error("获取基础属性数据失败");
      }
    });

    // 获取SPU数据
    this.$bus.$on("getSpuInfo", async (spu, category3Id) => {
      this.spu = {};
      this.tradeMarkList = [];
      this.spuImageList = [];
      this.baseSaleAttrList = [];
      this.category3Id = category3Id;

      let spuRes = await this.$API.spu.reqSpuInfo(spu.id);
      if (spuRes.code == 200) {
        this.spu = spuRes.data;
      } else {
        this.$message.error("获取SPU数据失败");
      }

      let tradeMarkRes = await this.$API.spu.reqTradeMarkList();
      if (tradeMarkRes.code == 200) {
        this.tradeMarkList = tradeMarkRes.data;
      } else {
        this.$message.error("获取品牌数据失败");
      }

      let spuImageRes = await this.$API.spu.reqSpuImageList(spu.id);
      if (spuImageRes.code == 200) {
        this.spuImageList = spuImageRes.data;
        this.spuImageList.forEach((item) => {
          item.name = item.imgName;
          item.url = item.imgUrl;
        });
        this.$emit("changeScene", 1);
      } else {
        this.$message.error("获取SPU图片数据失败");
      }

      let baseSaleAttrRes = await this.$API.spu.reqBaseSaleAttrList();
      if (baseSaleAttrRes.code == 200) {
        this.baseSaleAttrList = baseSaleAttrRes.data;
      } else {
        this.$message.error("获取基础属性数据失败");
      }
    });
  },
};
</script>

<style>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>