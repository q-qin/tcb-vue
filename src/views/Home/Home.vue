<template>
  <div class="home">
    <a-skeleton v-show="!loaded" />
    <div v-show="loaded">
      <div
        ref="line"
        class="g2"
        :style="{ height: '300px', width: '800px' }"
      ></div>
      <div class="flex justify-around">
        <a-statistic
          title="今日订单数"
          :value="29"
          style="margin-right: 50px"
        ></a-statistic>

        <a-statistic
          title="本月订单数"
          :value="280"
          :value-style="{ color: '#cf1322' }"
          style="margin-right: 50px"
        >
          <template #prefix>
            <a-icon type="arrow-down" />
          </template>
        </a-statistic>

        <a-statistic
          title="本月销售额"
          :value="90000"
          :precision="2"
          suffix="￥"
          :value-style="{ color: '#3f8600' }"
        >
          <template #prefix>
            <a-icon type="arrow-up" />
          </template>
        </a-statistic>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import * as echarts from "echarts";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  loaded = false;

  // created
  private async mounted() {
    setTimeout(() => {
      this.loaded = true;
      let myChart = echarts.init(this.$refs.line as HTMLCanvasElement);
      const option = {
        xAxis: {
          type: "category" as "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value" as "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line" as "line",
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener(
        "resize",
        () => {
          setTimeout(() => {
            myChart.resize();
          }, 1e2);
        },
        { passive: true }
      );
    }, 1e3);
  }
}
</script>
