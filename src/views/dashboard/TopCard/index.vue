<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="charts1">
          <Detail title="总销售额" :count="`￥${list.salesTotal}`">
            <template slot="charts">
              <span>
                周同比 {{ list.salesGrowthLastMonth }}%
                <svg
                  t="1654317562346"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="3989"
                  width="14"
                  height="14"
                  v-if="list.salesGrowthLastMonth > 0"
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
                  v-else
                >
                  <path
                    d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
                    p-id="8341"
                    fill="#d81e06"
                  ></path>
                </svg>
              </span>
              <span>
                日同比 {{ list.salesGrowthLastDay }}%
                <svg
                  t="1654317562346"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="3989"
                  width="14"
                  height="14"
                  v-if="list.salesGrowthLastDay > 0"
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
                  v-else
                >
                  <path
                    d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
                    p-id="8341"
                    fill="#d81e06"
                  ></path>
                </svg>
              </span>
            </template>
            <template slot="footer">
              <span>日销售额 ￥{{ list.salesToday }}</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="访问量" :count="list.visitTotal">
            <template slot="charts">
              <LineChart :trend="list.visitTrend" />
            </template>
            <template slot="footer">
              <span>日访问量 {{ list.visitToday }}</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="支付笔数" :count="list.payTotal">
            <template slot="charts">
              <BarChart :trend="list.payTrend" />
            </template>
            <template slot="footer">
              <span>转化率 {{ list.payRate }}%</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="footer4">
          <Detail title="运营活动效果" :count="`${list.activityRate}%`">
            <template slot="charts">
              <ProgressChart :rate="list.activityRate" />
            </template>
            <template slot="footer">
              <span>
                周同比 {{ list.activityGrowthLastMonth }}%
                <svg
                  t="1654317562346"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="3989"
                  width="14"
                  height="14"
                  v-if="list.activityGrowthLastMonth > 0"
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
                  v-else
                >
                  <path
                    d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
                    p-id="8341"
                    fill="#d81e06"
                  ></path>
                </svg>
              </span>
              <span>
                日同比 {{ list.activityGrowthLastDay }}%
                <svg
                  t="1654317562346"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="3989"
                  width="14"
                  height="14"
                  v-if="list.activityGrowthLastDay > 0"
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
                  v-else
                >
                  <path
                    d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
                    p-id="8341"
                    fill="#d81e06"
                  ></path>
                </svg>
              </span>
            </template>
          </Detail>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Detail from "./Detail";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import ProgressChart from "./ProgressChart";
export default {
  name: "TopCard",
  props: ["list"],
  components: {
    Detail,
    LineChart,
    BarChart,
    ProgressChart,
  },
};
</script>

<style>
.charts1 .card-charts,
.footer4 .card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.charts1 .card-charts span,
.footer4 .card-footer span {
  position: relative;
}
.charts1 .card-charts span,
.footer4 .card-footer span {
  padding-right: 14px;
}
.charts1 .card-charts .icon,
.footer4 .card-footer .icon {
  position: absolute;
  top: 2px;
  right: 0px;
}
</style>