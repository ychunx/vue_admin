<template>
  <div>
    <div class="header">
      <span>{{ title }}</span>
      <svg
        t="1654316727325"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2963"
        width="18"
        height="18"
      >
        <path
          d="M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768z m0 707.669333a323.669333 323.669333 0 1 1 0-647.338666 323.669333 323.669333 0 0 1 0 647.338666z m-0.085333-248.106666c5.034667-12.245333 12.16-29.866667 21.333333-52.906667 9.216-23.04 16.682667-42.496 22.485333-58.368 5.802667-15.872 8.704-26.197333 8.704-30.976 0-8.106667-5.162667-12.16-15.488-12.16-11.861333 0-29.354667 6.656-52.565333 19.968-23.168 13.312-48.213333 31.402667-75.221333 54.272l13.994666 12.8 10.24-8.405333c6.272-6.016 13.824-11.690667 22.656-16.981334 8.832-5.290667 15.146667-7.936 18.944-7.936 5.290667 0 7.936 2.56 7.936 7.765334 0 1.450667-6.954667 19.626667-20.821333 54.485333-13.866667 34.858667-21.674667 54.698667-23.466667 59.434667l-27.989333 64.426666c-7.296 18.688-10.965333 32.085333-10.965333 40.192 0 5.376 2.133333 9.813333 6.442666 13.354667 4.266667 3.541333 9.216 5.290667 14.762667 5.290667 13.866667 0 33.536-7.253333 58.965333-21.674667 25.472-14.464 49.664-30.72 72.533334-48.810667l-14.677334-13.44-5.248 3.285334a72.533333 72.533333 0 0 1-5.674666 3.285333c-24.96 17.834667-42.24 26.752-51.797334 26.752-5.077333 0-7.594667-2.56-7.594666-7.765333 0-4.138667 3.797333-15.957333 11.349333-35.498667 7.552-19.498667 14.592-36.266667 21.162667-50.389333zM560.981333 298.666667c-9.258667 0-17.664 2.517333-25.173333 7.552a55.466667 55.466667 0 0 0-17.493333 18.346666c-4.266667 7.253333-6.314667 14.933333-6.314667 23.04 0 9.301333 3.456 17.706667 10.410667 25.173334a32.981333 32.981333 0 0 0 25.088 11.221333c13.013333 0 24.576-5.546667 34.688-16.554667 10.069333-11.008 15.146667-22.912 15.146666-35.669333a30.208 30.208 0 0 0-10.837333-23.552 37.376 37.376 0 0 0-25.557333-9.557333z"
          p-id="2964"
          fill="#8a8a8a"
        ></path>
      </svg>
    </div>
    <div class="main">
      <span>{{ title == "搜索用户数" ? sumUser : avgNum }}</span>
      <span>
        17.1
        <svg
          t="1654317562346"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3989"
          width="14"
          height="14"
        >
          <path
            d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"
            p-id="3990"
            fill="#1afa29"
          ></path>
        </svg>
        <svg
          t="1654317648527"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="8340"
          width="14"
          height="14"
        >
          <path
            d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
            p-id="8341"
            fill="#d81e06"
          ></path>
        </svg>
      </span>
    </div>
    <div class="chart" ref="chart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "LineChart",
  props: ["title", "list"],
  data() {
    return {
      sumUser: 0,
      avgNum: 0,
      userList: [],
      countList: [],
    };
  },
  methods: {
    getSumUser() {
      let sum = 0;
      this.list.forEach((item) => {
        sum += item.user;
      });
      this.sumUser = sum;
    },
    getAvgNum() {
      let num = 0;
      this.list.forEach((item) => {
        num += item.count;
      });
      this.avgNum = (num / this.sumUser).toFixed(2);
    },
    getData() {
      this.list.forEach((item) => {
        this.userList.push(item.user);
        this.countList.push(item.count);
      });
    },
  },
  watch: {
    list() {
      this.getSumUser();
      this.getAvgNum();
      this.getData();

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
            data: this.title == "搜索用户数" ? this.userList : this.countList,
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
          top: 5,
          bottom: 5,
        },
      });
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
}
.header span {
  margin-right: 10px;
  color: #999;
  font-size: 14px;
}

.main {
  padding: 20px 0;
}
.main span:first-child {
  font-size: 22px;
  margin-right: 30px;
}

.chart {
  width: 100%;
  height: 50px;
}
</style>