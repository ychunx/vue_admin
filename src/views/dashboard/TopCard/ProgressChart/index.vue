<template>
  <div class="chart" ref="chart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "LineChart",
  props: ["rate"],
  watch: {
    rate() {
      let lineChart = echarts.init(this.$refs.chart);
      lineChart.setOption({
        xAxis: {
          show: false,
          min: 0,
          max: 100,
        },
        yAxis: {
          show: false,
          type: "category",
        },
        series: [
          {
            type: "bar",
            data: [this.rate],
            barWidth: 10,
            color: "yellowgreen",
            showBackground: true,
            backgroundStyle: {
              color: "#eee",
            },
            label: {
              show: true,
              formatter: "|",
              position: "right",
              color: "yellowgreen",
            },
          },
        ],
        grid: {
          left: -10,
          right: -10,
          top: 0,
          bottom: 0,
        },
      });
    },
  },
};
</script>

<style scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>