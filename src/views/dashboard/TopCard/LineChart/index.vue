<template>
  <div class="chart" ref="chart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "LineChart",
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
          type: "line",
          data: [20, 7, 28, 12, 18, 16, 22, 16, 11, 20],
          smooth: true,
          itemStyle: {
            opacity: 0,
          },
          areaStyle: {
            color: {
              type: "linner",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#5772C7",
                },
                {
                  offset: 1,
                  color: "#fff",
                },
              ],
              global: false,
            },
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
};
</script>

<style scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>