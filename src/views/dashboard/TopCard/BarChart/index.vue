<template>
  <div class="chart" ref="chart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "BarChart",
  mounted() {
    let lineChart = echarts.init(this.$refs.chart);
    lineChart.setOption({
      xAxis: {
        show: false,
        type: "category",
      },
      yAxis: {
        show: false,
      },
      series: [
        {
          type: "bar",
          data: [20, 7, 28, 12, 18, 16, 22, 16, 11, 20],
        },
      ],
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
      tooltip: {},
    });
  },
};
</script>

<style scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>