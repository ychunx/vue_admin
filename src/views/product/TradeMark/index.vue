<template>
  <div>
    <el-button
      type="primary"
      plain
      icon="el-icon-plus"
      style="margin-bottom: 20px"
      @click="showDialog"
      v-show="$store.state.user.buttons.indexOf('btn.Trademark.add') != -1"
      >添加</el-button
    >

    <el-table border :data="list">
      <el-table-column
        label="序号"
        width="80px"
        align="center"
        type="index"
      ></el-table-column>

      <el-table-column label="品牌" prop="tmName"></el-table-column>

      <el-table-column label="LOGO" width="121px">
        <template slot-scope="{ row }">
          <img :src="row.logoUrl" style="width: 100px; height: 100px" />
        </template>
      </el-table-column>

      <el-table-column label="操作" width="180px">
        <template slot-scope="{ row }">
          <el-button
            type="warning"
            icon="el-icon-edit"
            size="mini"
            @click="showDialog(row)"
            v-show="
              $store.state.user.buttons.indexOf('btn.Trademark.update') != -1
            "
            >修改</el-button
          >
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="mini"
            @click="deleteTradeMark(row)"
            v-show="
              $store.state.user.buttons.indexOf('btn.Trademark.remove') != -1
            "
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      style="margin-top: 20px; text-align: center"
      :total="total"
      :current-page="page"
      :page-size="limit"
      :page-sizes="[3, 5, 10]"
      :page-count="7"
      layout="prev, pager, next, jumper, ->, sizes, total"
      @current-change="getPageList"
      @size-change="handleSizeChange"
    ></el-pagination>

    <el-dialog
      :title="tmForm.id ? '修改品牌' : '添加品牌'"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="tmForm" style="width: 80%" :rules="rules" ref="dialog">
        <el-form-item label="品牌名称" label-width="100px" prop="tmName">
          <el-input autocomplete="off" v-model="tmForm.tmName"></el-input>
        </el-form-item>
        <el-form-item label="品牌LOGO" label-width="100px" prop="logoUrl">
          <el-upload
            class="avatar-uploader"
            action="/dev-api/admin/product/fileUpload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="logoImg" :src="tmForm.logoUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <div slot="tip" class="el-upload__tip">
              只能上传 JPG 文件，且不超过 2MB
            </div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addOrUpdateTradeMark"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "TradeMark",
  data() {
    return {
      page: 1,
      limit: 3,
      total: 0,
      list: [],
      dialogFormVisible: false,
      logoImg: "",
      tmForm: {
        tmName: "",
        logoUrl: "",
      },
      rules: {
        tmName: [
          { required: true, message: "请输入品牌名称", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "change",
          },
        ],
        logoUrl: [{ required: true, message: "请选择品牌LOGO" }],
      },
    };
  },
  methods: {
    async getPageList(pager = 1) {
      this.page = pager;
      const { page, limit } = this;
      let res = await this.$API.trademark.reqTradeMarkList(page, limit);
      if (res.code == 200) {
        this.total = res.data.total;
        this.list = res.data.records;
      } else {
      }
    },
    handleSizeChange(limit) {
      this.limit = limit;
      this.getPageList();
    },
    showDialog(row) {
      this.tmForm.tmName = "";
      this.tmForm.logoUrl = "";

      if (row) {
        this.tmForm = { ...row };
      }

      this.dialogFormVisible = true;
    },

    handleAvatarSuccess(res) {
      this.tmForm.logoUrl = res.data;
      // 奇怪，vue不能主动检测到对象内属性变化
      this.logoImg = res.data;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },

    addOrUpdateTradeMark() {
      this.$refs.dialog.validate(async (valid) => {
        if (valid) {
          this.dialogFormVisible = false;

          let res = await this.$API.trademark.reqAddOrUpdareTradeMark(
            this.tmForm
          );
          if (res.code == 200) {
            this.$message.success(
              this.tmForm.id ? "修改品牌成功" : "添加品牌成功"
            );
            this.getPageList(this.tmForm.id ? this.page : 1);
          } else {
            this.$message.error(
              this.tmForm.id ? "修改品牌失败" : "添加品牌失败"
            );
            this.getPageList(this.tmForm.id ? this.page : 1);
          }
        } else {
          return false;
        }
      });
    },
    deleteTradeMark(row) {
      this.$confirm(`此操作将永久删除${row.tmName}品牌, 是否继续?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          let res = await this.$API.trademark.reqDeleteTradeMark(row.id);
          if (res.code == 200) {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.getPageList(this.list.length > 1 ? this.page : this.page - 1);
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  mounted() {
    this.getPageList();
  },
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>