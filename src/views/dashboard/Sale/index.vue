<template>
  <el-card class="box-card">
    <el-tabs class="tab" v-model="activeName">
      <el-tab-pane label="销售额" name="first"> </el-tab-pane>
      <el-tab-pane label="访问量" name="second"> </el-tab-pane>
    </el-tabs>
    <!-- 因为后期还要和tabheader进行交互，为了方便body就不拆分组件了 -->
    <el-row :gutter="10">
      <el-col :span="18">
        <div class="chart" ref="chart"></div>
      </el-col>
      <el-col :span="6" class="el-col-right">
        <h3>门店{{ activeName == "first" ? "销售额" : "访问量" }}排名</h3>
        <ul>
          <li v-for="tradeMark in rankList" :key="tradeMark.no">
            <span>{{ tradeMark.no }}</span>
            <span>{{ tradeMark.name }}</span>
            <span>{{ tradeMark.money }}</span>
          </li>
        </ul>
      </el-col>
    </el-row>
    <div class="right">
      <span @click="setDate(1)">今日</span>
      <span @click="setDate(2)">本周</span>
      <span @click="setDate(3)">本月</span>
      <span @click="setDate(4)">本年</span>
      <el-date-picker
        type="daterange"
        range-separator="-"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        size="mini"
        class="date"
        v-model="date"
        value-format="yyyy-MM-dd"
      >
      </el-date-picker>
    </div>
  </el-card>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "Sale",
  props: ["list"],
  data() {
    return {
      activeName: "first",
      date: [],
      mychart: null,
    };
  },
  methods: {
    setDate(type) {
      // 获取当前时间
      let now = new Date();
      // 得到时间戳
      let nowStamp = now.getTime();
      // 获取当前年份
      let nowYear = now.getFullYear();
      // 一天的时间戳
      const one = 24 * 60 * 60 * 1000;

      // 今日
      if (type == 1) {
        // 转换成yyyy-MM-dd格式
        let day = now.toISOString().slice(0, 10);
        this.date = [day, day];
      }
      // 本周
      if (type == 2) {
        // 获得星期数
        let weekDay = now.getDay();
        // 获得始末日期时间戳
        let monStamp = nowStamp - (weekDay - 1) * one;
        let sunStamp = nowStamp + (7 - weekDay) * one;
        // 获得始末日期
        let monday = new Date(monStamp);
        let sunday = new Date(sunStamp);
        this.date = [
          monday.toISOString().slice(0, 10),
          sunday.toISOString().slice(0, 10),
        ];
      }
      // 本月
      if (type == 3) {
        // 获取当前月份（js一月是0）
        let nowMonth = now.getMonth() + 1;
        // 获取本月天数
        let day = new Date(nowYear, nowMonth, 0);
        let days = day.getDate();
        this.date = [
          `${nowYear}-${nowMonth}-01`,
          `${nowYear}-${nowMonth}-${days}`,
        ];
      }
      // 本年
      if (type == 4) {
        this.date = [`${nowYear}-01-01`, `${nowYear}-12-31`];
      }
    },
  },
  watch: {
    // 获得list数据后第一时间绘制chart
    list() {
      this.mychart = echarts.init(this.$refs.chart);
      this.mychart.setOption({
        title: {
          text: (this.activeName == "first" ? "销售额" : "访问量") + "趋势",
          textStyle: {
            fontSize: 14,
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: this.list.orderFullYearAxis,
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Direct",
            type: "bar",
            barWidth: "40%",
            data: this.list.orderFullYear,
          },
        ],
      });
    },
    // 改变tab重绘chart
    activeName() {
      this.mychart.setOption({
        title: {
          text: (this.activeName == "first" ? "销售额" : "访问量") + "趋势",
        },
        xAxis: {
          data:
            this.activeName == "first"
              ? this.list.orderFullYearAxis
              : this.list.userFullYearAxis,
        },
        series: [
          {
            name: "Direct",
            type: "bar",
            barWidth: "40%",
            data:
              this.activeName == "first"
                ? this.list.orderFullYear
                : this.list.userFullYear,
          },
        ],
      });
    },
  },
  computed: {
    // 计算应该展示的排名列表
    rankList() {
      return this.activeName == "first"
        ? this.list.orderRank
        : this.list.userRank;
    },
  },
};
</script>

<style scoped>
.box-card {
  margin: 20px 0;
  height: 400px;
  position: relative;
}
.right {
  position: absolute;
  top: 25px;
  right: 20px;
}
.right span {
  margin: 0 10px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
}
.date {
  width: 220px;
}
.chart {
  width: 100%;
  height: 300px;
}
.el-col-right h3 {
  font-size: 14px;
  font-weight: normal;
}
.el-col-right ul {
  list-style: none;
  height: 300px;
  width: 100%;
  padding: 0;
}
.el-col-right li {
  height: 13%;
  display: flex;
  justify-content: space-between;
}
.el-col-right li span:first-child {
  flex: 1;
}
.el-col-right li span:nth-child(2) {
  flex: 3;
}
.el-col-right li span:last-child {
  flex: 2;
  text-align: end;
}
</style>