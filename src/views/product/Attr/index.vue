<template>
  <div>
    <el-card style="margin-bottom: 20px">
      <CategorySelect
        @getCategoryIds="getCategoryIds"
        :isShowTable="isShowTable"
      />
    </el-card>

    <div v-show="isShowTable">
      <el-button
        type="primary"
        plain
        icon="el-icon-plus"
        style="margin-bottom: 20px"
        :disabled="!isAbleClick"
        @click="addAttrShow"
        v-show="$store.state.user.buttons.indexOf('btn.Attr.add') != -1"
        >添加属性</el-button
      >

      <el-table :data="attrInfoList" border>
        <el-table-column
          label="序号"
          type="index"
          width="80px"
          align="center"
        ></el-table-column>

        <el-table-column label="属性名称" width="120px" align="center">
          <template slot-scope="{ row, $index }">
            <span
              style="display: block"
              @click="clickAttrName(row, $index)"
              v-if="!row.flag"
              >{{ row.attrName }}</span
            >
            <el-input
              v-model="attrInfo.attrName"
              :ref="$index"
              size="mini"
              @blur="updateAttrName(row)"
              v-else
            ></el-input>
          </template>
        </el-table-column>

        <el-table-column label="属性值列表">
          <template slot-scope="{ row, $index }">
            <el-tag
              v-for="(attrValue, index) in row.attrValueList"
              :key="attrValue.id"
              style="margin-right: 10px"
              closable
              :disable-transitions="true"
              @close="handleClose(row, index)"
            >
              <span
                @click="clickAttrValue(row, attrValue, attrValue.id)"
                v-if="!attrValue.flag"
                >{{ attrValue.valueName }}</span
              >
              <el-input
                v-model="attrInfo.attrValueList[index].valueName"
                style="width: 100px"
                size="mini"
                :ref="attrValue.id"
                v-else
                @blur="updateAttrValue(row, attrValue)"
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
              v-show="
                $store.state.user.buttons.indexOf('btn.Attr.update') != -1
              "
              >添加</el-button
            >
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="deleteAttr(row)"
              title="删除属性"
              v-show="
                $store.state.user.buttons.indexOf('btn.Attr.remove') != -1
              "
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div v-show="!isShowTable">
      <el-form :inline="true">
        <el-form-item label="属性名">
          <el-input
            v-model="attrInfo.attrName"
            placeholder="请输入属性名"
          ></el-input>
        </el-form-item>
      </el-form>

      <el-button
        type="primary"
        icon="el-icon-plus"
        @click="addFormAttrValue"
        :disabled="!attrInfo.attrName"
        >添加属性值</el-button
      >

      <el-table
        border
        style="margin: 20px 0; width: 80%"
        :data="attrInfo.attrValueList"
      >
        <el-table-column
          label="序号"
          type="index"
          align="center"
          width="80px"
        ></el-table-column>

        <el-table-column label="属性值">
          <template slot-scope="{ row, $index }">
            <el-input
              v-if="row.flag"
              v-model="row.valueName"
              placeholder="请输入属性值"
              size="mini"
              @blur="row.flag = false"
              :ref="$index"
            ></el-input>
            <span
              v-else
              style="display: block"
              @click="changeFormValue(row, $index)"
              >{{ row.valueName }}</span
            >
          </template>
        </el-table-column>

        <el-table-column label="操作" width="95px">
          <template slot-scope="{ row, $index }">
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="deleteFormAttrValue(row, $index)"
              title="删除属性值"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <el-button
        type="primary"
        :disabled="attrInfo.attrValueList.length < 1 || !attrInfo.attrName"
        @click="addAttr"
        >保存</el-button
      >
      <el-button @click="isShowTable = true">取消</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Attr",
  data() {
    return {
      categoryIds: {},
      // 添加属性是否可按
      isAbleClick: false,
      // 平台属性列表数据
      attrInfoList: [],
      // 新增或修改属性数据
      attrInfo: {
        attrName: "",
        attrValueList: [
          // {
          //   attrId: 0,
          //   valueName: "",
          // },
        ],
        categoryId: 0,
        categoryLevel: 3,
      },
      // 正在输入的文字
      inputString: "",
      // 控制显示表格
      isShowTable: true,
    };
  },
  methods: {
    getCategoryIds(categoryIds) {
      this.categoryIds = categoryIds;
      if (categoryIds.category3Id) {
        this.isAbleClick = true;
        this.getAttrList(categoryIds);
        this.attrInfo.categoryId = categoryIds.category3Id;
      } else {
        this.isAbleClick = false;
        this.attrInfoList = [];
        this.attrInfo.categoryId = "";
      }
    },
    async getAttrList(categoryIds) {
      let res = await this.$API.attr.reqAttrInfoList(categoryIds);
      if (res.code == 200) {
        this.attrInfoList = res.data;
      }
    },

    // 修改属性名
    clickAttrName(row, index) {
      this.attrInfo = { ...row };
      this.$set(row, "flag", true);
      this.$nextTick(() => {
        this.$refs[index].focus();
      });
    },
    updateAttrName(row) {
      row.flag = false;
      this.uploadDate("修改属性名");
    },

    // 修改属性值
    clickAttrValue(row, attrValue, attrValueId) {
      this.attrInfo = { ...row };
      this.$set(attrValue, "flag", true);
      this.$nextTick(() => {
        // 获取input框给予焦点
        this.$refs[attrValueId][0].focus();
      });
    },
    updateAttrValue(row, attrValue) {
      delete attrValue.flag;
      this.uploadDate("修改属性值");
    },
    // 删除属性值
    handleClose(row, index) {
      this.attrInfo = { ...row };
      this.attrInfo.attrValueList.splice(index, 1);
      this.uploadDate("删除属性值");
    },

    // 添加属性值
    showValueInput(index) {
      this.inputString = "";
      //控制显示隐藏
      this.$refs[index].$el.style.display = "inline-block";
      this.$nextTick(() => {
        this.$refs[index].focus();
      });
    },
    handleInputConfirm(row, index) {
      this.attrInfo = { ...row };
      //控制显示隐藏
      this.$refs[index].$el.style.display = "none";

      this.attrInfo.attrValueList.push({
        attrId: this.attrInfo.id,
        valueName: this.inputString,
      });
      this.uploadDate("添加属性值");
    },

    // 删除属性
    async deleteAttr(row) {
      try {
        await this.$API.attr.reqDeleteAttr(row.id);
        this.getAttrList(this.categoryIds);
        this.$message.success("删除属性成功");
      } catch (error) {
        this.$message.error("删除属性失败");
      }
    },

    // 添加属性
    addAttrShow() {
      this.isShowTable = false;
      this.attrInfo = {
        attrName: "",
        attrValueList: [
          // {
          //   attrId: undefined,
          //   valueName: "",
          // },
        ],
        categoryId: this.categoryIds.category3Id,
        categoryLevel: 3,
      };
    },

    // 添加属性页面
    addFormAttrValue() {
      this.attrInfo.attrValueList.push({
        attrId: undefined,
        valueName: "",
        flag: true,
      });
      this.$nextTick(() => {
        this.$refs[this.attrInfo.attrValueList.length - 1].focus();
      });
    },
    changeFormValue(row, index) {
      row.flag = true;
      this.$nextTick(() => {
        this.$refs[index].focus();
      });
    },

    deleteFormAttrValue(row, index) {
      this.attrInfo.attrValueList.splice(index, 1);
    },
    addAttr() {
      // 过滤空白属性值和flag
      this.attrInfo.attrValueList = this.attrInfo.attrValueList.filter(
        (item) => {
          if (item.valueName != "") {
            delete item.flag;
            return true;
          }
        }
      );
      this.uploadDate("添加属性");
      this.isShowTable = true;
    },

    // 上传数据
    async uploadDate(string) {
      try {
        await this.$API.attr.reqAddOrUpdateAttr(this.attrInfo);
        this.getAttrList(this.categoryIds);
        this.$message.success(`${string}成功`);
      } catch (error) {
        this.getAttrList(this.categoryIds);
        this.$message.error(`${string}失败`);
      }
    },
  },
};
</script>

<style>
.input-new-tag {
  width: 90px;
  vertical-align: bottom;
}
</style>