<template>
  <el-card>
    <div slot="header" class="header">
      <span>销售额类别占比</span>
      <el-radio-group v-model="value" size="mini" class="radio">
        <el-radio-button label="全部渠道"></el-radio-button>
        <el-radio-button label="线上"></el-radio-button>
        <el-radio-button label="门店"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="chart" ref="chart"></div>
  </el-card>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "Category",
  props: ["rank"],
  data() {
    return {
      value: "全部渠道",
      onlineAndShop: [],
      online: [],
      shop: [],
      mychart: null,
    };
  },
  methods: {
    // 计算出全部渠道的数据
    getAllList() {
      const { online, shop } = this.rank;
      for (let i = 0; i < online.name.length; i++) {
        let name = online.name[i];
        let value = online.value[i] + shop.value[i];
        this.onlineAndShop.push({
          name,
          value,
        });
      }
    },
    // 整理返回数据
    fixData() {
      const { online, shop } = this.rank;
      for (let i = 0; i < online.name.length; i++) {
        let name = online.name[i];
        let value = online.value[i];
        this.online.push({
          name,
          value,
        });
      }
      for (let i = 0; i < shop.name.length; i++) {
        let name = shop.name[i];
        let value = shop.value[i];
        this.shop.push({
          name,
          value,
        });
      }
    },
  },
  watch: {
    // 得到数据后整理数据和绘制chart
    rank() {
      this.getAllList();
      this.fixData();

      this.mychart = echarts.init(this.$refs.chart);
      this.mychart.setOption({
        title: {
          // 默认是全部渠道的第一个分类
          text: this.onlineAndShop[0].name,
          textStyle: {
            fontSize: 12,
            fontWeight: "normal",
          },
          subtext: this.onlineAndShop[0].value,
          subtextStyle: {
            fontSize: 26,
            color: "#333",
          },
          left: "center",
          top: "center",
        },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: true,
              position: "outside",
            },
            labelLine: {
              show: true,
            },
            data: this.onlineAndShop,
          },
        ],
      });
      this.mychart.on("mouseover", (params) => {
        const { name, value } = params.data;
        this.mychart.setOption({
          title: {
            text: name,
            subtext: value,
          },
        });
      });
    },
    // 改变查看渠道时重绘chart
    value(newVal) {
      if (newVal == "线上") {
        this.mychart.setOption({
          title: {
            text: this.online[0].name,
            subtext: this.online[0].value,
          },
          series: {
            data: this.online,
          },
        });
      } else if (newVal == "门店") {
        this.mychart.setOption({
          title: {
            text: this.shop[0].name,
            subtext: this.shop[0].value,
          },
          series: {
            data: this.shop,
          },
        });
      } else {
        this.mychart.setOption({
          title: {
            text: this.onlineAndShop[0].name,
            subtext: this.onlineAndShop[0].value,
          },
          series: {
            data: this.onlineAndShop,
          },
        });
      }
    },
  },
};
</script>

<style scoped>
.header {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.radio {
  position: absolute;
  top: -5px;
  right: 0;
}
.chart {
  width: 100%;
  height: 373px;
}
</style>