<template>
  <div>
    <div>
      <svg width="350" height="350">
        <g>
          <circle />
        </g>
      </svg>
    </div>
    <div id="chart"></div>
  </div>
</template>

<script>
import * as d3 from "d3";
import chart from "tui-chart";

export default {
  data() {
    return {
      data: [
        { value: 3, time: new Date("2020-07-01T03:00:00") },
        { value: 1, time: new Date("2020-07-01T03:05:00") },
        { value: 9, time: new Date("2020-07-01T03:10:00") },
        { value: 6, time: new Date("2020-07-01T03:15:00") },
        { value: 2, time: new Date("2020-07-01T03:20:00") },
        { value: 6, time: new Date("2020-07-01T03:25:00") }
      ]
    };
  },
  methods: {
    generateAxis() {
      const xScale = d3
        .scaleTime()
        .domain([
          new Date("2020-07-01T03:00:00"),
          new Date("2020-07-01T03:25:00")
        ])
        .range([20, 330]);

      const yScale = d3
        .scaleLinear()
        .domain([1, 9])
        .range([330, 20]); // SVG 좌표상에서 y값이 높을수록 아래로 향하기 때문에 뒤집어서 330~20으로 설정.

      const xAxisSVG = d3
        .select("svg")
        .append("g")
        .attr("transform", "translate(0,330)"); //attr속성을 이용해 x축의 위치를 위에서 아래로 바꿔준다.
      const yAxisSVG = d3.select("svg").append("g");

      //축을 만드는 함수를 만든다.
      const xAxis = d3
        .axisBottom(xScale)
        .tickSize(10)
        .ticks(10);
      const yAxis = d3
        .axisRight(yScale)
        .tickSize(10)
        .ticks(10); // 여기서 tick은 축마다 달려있는 막대기를 말한다.
      xAxis(xAxisSVG); //x축을 만드는 함수로 SVG > G 태그에 축을 생성한다.
      yAxis(yAxisSVG); //y축을 만드는 함수로 SVG > G 태그에 축을 생성한다.

      d3.select("svg")
        .selectAll("circle") // 1.SVG 태그 안에 있는 circle을 모두 찾는다.
        .data(this.data) // 2.찾은 요소에 데이터를 씌운다.
        .enter() // 3.찾은 요소에 개수보다 데이터가 더 많을경우..
        .append("circle") // 4.circle 을 추가한다.
        .attr("r", 5) //  - 반지름 5픽셀
        .attr("cx", d => xScale(d.time)) //  - x 위치값 설정.
        .attr("cy", d => yScale(d.value)) //  - y 위치값 설정.
        .style("fill", "black"); //  - 검정색

      //선을 생성하는 함수
      const linearGenerator = d3
        .line()
        .curve(d3.curveNatural)
        .x(d => xScale(d.time))
        .y(d => yScale(d.value));

      const path = d3
        .select("svg")
        .append("path") // SVG 태그 안에 path 속성을 추가한다.
        .attr("d", linearGenerator(this.data)) // - 라인 생성기로 'd' 속성에 들어갈 좌표정보를 얻는다.
        .attr("fill", "none") // - 라인 안쪽 채우지 않음.
        .attr("stroke-width", 2) // - 굵기
        .attr("stroke", "blue"); // - 파랑색

      const pathLength = path.node().getTotalLength();

      const transitionPath = d3
        .transition()
        .ease(d3.easeSin)
        .duration(2500);

      path
        .attr("stroke-dashoffset", pathLength)
        .attr("stroke-dasharray", pathLength)
        .transition(transitionPath)
        .attr("stroke-dashoffset", 0);
    },

    getChart() {
      var container = document.getElementById("chart");
      var rawData = {
        categories: [
          "01/01/2016",
          "02/01/2016",
          "03/01/2016",
          "04/01/2016",
          "05/01/2016",
          "06/01/2016",
          "07/01/2016",
          "08/01/2016",
          "09/01/2016",
          "10/01/2016",
          "11/01/2016",
          "12/01/2016"
        ],
        series: [
          {
            name: "Seoul",
            data: [
              -3.5,
              -1.1,
              4.0,
              11.3,
              17.5,
              21.5,
              24.9,
              25.2,
              20.4,
              13.9,
              6.6,
              -0.6
            ]
          },
          {
            name: "Seattle",
            data: [
              3.8,
              5.6,
              7.0,
              9.1,
              12.4,
              15.3,
              17.5,
              17.8,
              15.0,
              10.6,
              6.4,
              3.7
            ]
          },
          {
            name: "Sydney",
            data: [
              22.1,
              22.0,
              20.9,
              18.3,
              15.2,
              12.8,
              11.8,
              13.0,
              15.2,
              17.6,
              19.4,
              21.2
            ]
          },
          {
            name: "Moskva",
            data: [
              -10.3,
              -9.1,
              -4.1,
              4.4,
              12.2,
              16.3,
              18.5,
              16.7,
              10.9,
              4.2,
              -2.0,
              -7.5
            ]
          },
          {
            name: "Jungfrau",
            data: [
              -13.2,
              -13.7,
              -13.1,
              -10.3,
              -6.1,
              -3.2,
              0.0,
              -0.1,
              -1.8,
              -4.5,
              -9.0,
              -10.9
            ]
          }
        ]
      };
      var options = {
        chart: {
          width: 1160,
          height: 540,
          title: "24-hr Average Temperature"
        },
        yAxis: [
          {
            title: "Temperature (Celsius)",
            pointOnColumn: true
          },
          {
            title: "Percent (%)",
            pointOnColumn: true,
            min: 0,
            max: 100,
            suffix: "%"
          }
        ],
        xAxis: {
          title: "Month",
          type: "datetime",
          dateFormat: "MMM"
        },
        series: {
          showDot: false,
          zoomable: true
        },
        tooltip: {
          suffix: "°C"
        }
      };
      var theme = {
        series: {
          colors: [
            "#83b14e",
            "#458a3f",
            "#295ba0",
            "#2a4175",
            "#289399",
            "#289399",
            "#617178",
            "#8a9a9a",
            "#516f7d",
            "#dddddd"
          ]
        }
      };

      chart.registerTheme("myTheme", theme);
      options.theme = "myTheme";
      chart.lineChart(container, rawData, options);
    }
  },
  mounted() {
    this.generateAxis();

    this.getChart();
  }
};
</script>

<style scoped></style>
