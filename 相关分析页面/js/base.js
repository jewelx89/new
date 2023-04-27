$(function () {
  echart_map();
  echart_4();
  echart_13();
  echart_6();
  echart_3();
  echart_10();
  echart_11();
  echart_12();
  echart_2();

  // chart_map  日照时长对作物生长影响
  function echart_map() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("chart_map"));
    var option = setOption();

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    function setOption() {
      let option;

      var data = [
        [8, 12, "#8AC6D1"],
        [9, 18, "#BBDED6"],
        [8, 12, "#FAE3D9"],
        [8, 9, "#FFB6B9"],
        [8, 12, "#FBD1B7"],
      ];

      var base = [];
      var min = [];
      var max = [];

      function format(data) {
        data.forEach(function (item) {
          base.push(item[0]);

          min.push({
            value: 0,
            label: {
              show: item[0] ? true : false,
              formatter: "" + item[0] + "",
            },
          });

          max.push({
            value: item[1],
            label: {
              show: item[1],
              formatter: "" + item[1] + "",
              color: "#fff",
            },
            itemStyle: {
              color: item[2],
            },
          });
        });
      }
      format(data);
      console.log(base, min, max);

      option = {
        title: {
          text: "不同粮食作物的适宜日照时长",
          left: "center",
          top: "8%",
          textStyle: {
            color: "#2AD2FB",
            fontSize: 20,
            fontWeight: "bolder",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function (params) {
            var [min, max] = params;
            return min.name + " : " + min.value + "-" + max.value + "小时";
          },
        },
        grid: {
          left: "12%",
          right: "12%",
          bottom: "8%",
          top: "15%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          axisLabel: {
            textStyle: {
              fontSize: 18,
            },
          },
          axisLine: {
            lineStyle: {
              color: "#bad7df",
            },
          },
          splitLine: {
            show: false,
          },
          data: ["稻谷", "大豆", "玉米", "薯类", "小麦"],
        },
        yAxis: {
          min: 6,
          max: 30,
          type: "value",
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false, //暗藏或显示
            lineStyle: {
              type: "solid",
              color: "#012f4a",
            },
          },
          axisLabel: {
            show: false,
          },
          // axisLine: {
          //   lineStyle: {
          //     color: "#bad7df",
          //   },
          // },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            name: "",
            type: "bar",
            stack: "总量",
            // 透明
            itemStyle: {
              barBorderColor: "rgba(0,0,0,0)",
              color: "rgba(0,0,0,0)",
            },
            emphasis: {
              itemStyle: {
                barBorderColor: "rgba(0,0,0,0)",
                color: "rgba(0,0,0,0)",
              },
            },
            data: base,
          },
          {
            name: "",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "bottom",
              color: "#fff",
              textStyle: {
                fontSize: 16,
              },
            },

            tooltip: {
              show: false,
            },
            data: min,
          },
          {
            name: "",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "top",
              color: "#fff",
              textStyle: {
                fontSize: 16,
              },
            },
            itemStyle: {
              color: "dodgerblue",
            },
            data: max,
          },
        ],
      };

      return option;
    }
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  //chart_4 降水量对于粮食作物生长的影响
  function echart_4() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("chart_4"));
    myChart.clear();
    var option = setOption();

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    function setOption() {
      let option;

      var data = [
        [700, 1200, "#C6F1D6"],
        [400, 700, "#E0F5B9"],
        [410, 600, "#FFBA92"],
        [356, 500, "#FF8080"],
        [150, 400, "#FBD1B7"],
      ];

      var base = [];
      var min = [];
      var max = [];

      function format(data) {
        data.forEach(function (item) {
          base.push(item[0]);

          min.push({
            value: 0,
            label: {
              show: item[0] ? true : false,
              formatter: "" + item[0] + "",
            },
          });

          max.push({
            value: item[1],
            label: {
              show: item[1],
              formatter: "" + item[1] + "",
              color: "#fff",
            },
            itemStyle: {
              color: item[2],
            },
          });
        });
      }
      format(data);
      console.log(base, min, max);

      option = {
        title: {
          text: "不同粮食作物的适宜降水量",
          left: "center",
          top: "8%",
          textStyle: {
            color: "#2AD2FB",
            fontSize: 20,
            fontWeight: "bolder",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function (params) {
            var [min, max] = params;
            return min.name + " : " + min.value + "-" + max.value + "毫米";
          },
        },
        grid: {
          left: "12%",
          right: "12%",
          bottom: "8%",
          top: "15%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          axisLabel: {
            textStyle: {
              fontSize: 18,
            },
          },
          axisLine: {
            lineStyle: {
              color: "#bad7df",
            },
          },
          splitLine: {
            show: false,
          },
          data: ["稻谷", "大豆", "玉米", "薯类", "小麦"],
        },
        yAxis: {
          min: 0,
          max: 2000,
          type: "value",
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false, //暗藏或显示
            lineStyle: {
              type: "solid",
              color: "#012f4a",
            },
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            name: "",
            type: "bar",
            stack: "总量",
            // 透明
            itemStyle: {
              barBorderColor: "rgba(0,0,0,0)",
              color: "rgba(0,0,0,0)",
            },
            emphasis: {
              itemStyle: {
                barBorderColor: "rgba(0,0,0,0)",
                color: "rgba(0,0,0,0)",
              },
            },
            data: base,
          },
          {
            name: "",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "bottom",
              color: "#fff",
              textStyle: {
                fontSize: 16,
              },
            },

            tooltip: {
              show: false,
            },
            data: min,
          },
          {
            name: "",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "top",
              color: "#fff",
              textStyle: {
                fontSize: 16,
              },
            },
            itemStyle: {
              color: "dodgerblue",
            },
            data: max,
          },
        ],
      };

      return option;
    }
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  //chrat_6 PH影响
  function echart_6() {
    var myChart = echarts.init(document.getElementById("chart_6"));
    myChart.clear();
    var option = setOption();

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    function setOption() {
      let option;

      var data = [
        [5.2, 6.8, "#BD83CE"],
        [6.5, 7.5, "#E5B0EA"],
        [6.5, 7.0, "#F1C6E7"],
        [5.5, 6.5, "#F7E8F6"],
        [6.3, 7.5, "#99DDCC"],
      ];

      var base = [];
      var min = [];
      var max = [];

      function format(data) {
        data.forEach(function (item) {
          base.push(item[0]);

          min.push({
            value: 0,
            label: {
              show: item[0] ? true : false,
              formatter: "" + item[0] + "",
            },
          });

          max.push({
            value: item[1],
            label: {
              show: item[1],
              formatter: "" + item[1] + "",
              color: "#fff",
            },
            itemStyle: {
              color: item[2],
            },
          });
        });
      }
      format(data);
      console.log(base, min, max);

      option = {
        title: {
          text: "不同粮食作物的适宜土壤PH",
          left: "center",
          top: "8%",
          textStyle: {
            color: "#2AD2FB",
            fontSize: 20,
            fontWeight: "bolder",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function (params) {
            var [min, max] = params;
            return min.name + " : " + min.value + "-" + max.value;
          },
        },
        grid: {
          left: "12%",
          right: "12%",
          bottom: "8%",
          top: "15%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          axisLabel: {
            textStyle: {
              fontSize: 18,
            },
          },
          axisLine: {
            lineStyle: {
              color: "#bad7df",
            },
          },
          splitLine: {
            show: false,
          },
          data: ["稻谷", "大豆", "玉米", "薯类", "小麦"],
        },
        yAxis: {
          min: 0,
          max: 20,
          type: "value",
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false, //暗藏或显示
            lineStyle: {
              type: "solid",
              color: "#012f4a",
            },
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            name: "",
            type: "bar",
            stack: "总量",
            // 透明
            itemStyle: {
              barBorderColor: "rgba(0,0,0,0)",
              color: "rgba(0,0,0,0)",
            },
            emphasis: {
              itemStyle: {
                barBorderColor: "rgba(0,0,0,0)",
                color: "rgba(0,0,0,0)",
              },
            },
            data: base,
          },
          {
            name: "",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "bottom",
              color: "#fff",
              textStyle: {
                fontSize: 16,
              },
            },

            tooltip: {
              show: false,
            },
            data: min,
          },
          {
            name: "",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "top",
              color: "#fff",
              textStyle: {
                fontSize: 16,
              },
            },
            itemStyle: {
              color: "dodgerblue",
            },
            data: max,
          },
        ],
      };

      return option;
    }
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  // chart_13 温度影响因素
  function echart_13() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("chart_13"));
    myChart.clear();
    var option = setOption();

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    function setOption() {
      let option;

      var data = [
        [18, 25, "#FBD1B7"],
        [20, 25, "#FEE9b2"],
        [22, 30, "#F9FCE1"],
        [20, 30, "#FFB6B9"],
        [23, 28, "#D3F6F3"],
      ];

      var base = [];
      var min = [];
      var max = [];

      function format(data) {
        data.forEach(function (item) {
          base.push(item[0]);

          min.push({
            value: 0,
            label: {
              show: item[0] ? true : false,
              formatter: "" + item[0] + "",
            },
          });

          max.push({
            value: item[1],
            label: {
              show: item[1],
              formatter: "" + item[1] + "",
              color: "#fff",
            },
            itemStyle: {
              color: item[2],
            },
          });
        });
      }
      format(data);
      console.log(base, min, max);

      option = {
        title: {
          text: "不同粮食作物的适宜日均温度",
          left: "center",
          top: "8%",
          textStyle: {
            color: "#2AD2FB",
            fontSize: 20,
            fontWeight: "bolder",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function (params) {
            var [min, max] = params;
            return min.name + " : " + min.value + "-" + max.value + "度";
          },
        },
        grid: {
          left: "12%",
          right: "12%",
          bottom: "8%",
          top: "15%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          axisLabel: {
            textStyle: {
              fontSize: 18,
            },
          },
          axisLine: {
            lineStyle: {
              color: "#bad7df",
            },
          },
          splitLine: {
            show: false,
          },
          data: ["稻谷", "大豆", "玉米", "薯类", "小麦"],
        },
        yAxis: {
          min: 0,
          max: 80,
          type: "value",
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false, //暗藏或显示
            lineStyle: {
              type: "solid",
              color: "#012f4a",
            },
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            name: "",
            type: "bar",
            stack: "总量",
            // 透明
            itemStyle: {
              barBorderColor: "rgba(0,0,0,0)",
              color: "rgba(0,0,0,0)",
            },
            emphasis: {
              itemStyle: {
                barBorderColor: "rgba(0,0,0,0)",
                color: "rgba(0,0,0,0)",
              },
            },
            data: base,
          },
          {
            name: "",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "bottom",
              color: "#fff",
              textStyle: {
                fontSize: 16,
              },
            },

            tooltip: {
              show: false,
            },
            data: min,
          },
          {
            name: "",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "top",
              color: "#fff",
              textStyle: {
                fontSize: 16,
              },
            },
            itemStyle: {
              color: "dodgerblue",
            },
            data: max,
          },
        ],
      };

      return option;
    }
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  //echart_2 影响粮食产量的因素分析
  function echart_2() {
    var myChart = echarts.init(document.getElementById("chart_2"));
    myChart.clear();
    // prettier-ignore
    const hours = [
  '北京', '天津',  '重庆', 
];
    // prettier-ignore
    const days = [
  '平均气温', '平均湿度', '降水量','日照时长','水土流失治理面积', '灌溉面积','化肥使用量', '播种面积','拖拉机使用量'
];
    // prettier-ignore
    const data = [[0, 0, 0.5767], [0, 1, 0.6586],  [0, 2, 0.7105],
     [1, 0, 0.5140],[1,1,0.6586],[1,2,0.7031],
     [2,0,0.5401],[2,1,0.6332],[2,2,0.7320],
     [3,0,0.6968],[3,1,0.6852],[3,2,0.6115],
     [4,0,0.6428],[4,1,0.5311],[4,2,0.6867],
     [5,0,0.9303],[5,1,0.7067],[5,2,0.9103],
     [6,0,0.7539],[6,1,0.5052],[6,2,0.8204],
     [7,0,0.5034],[7,1,0.9325],[7,2,0.4154],
     [8,0,0.6797],[8,1,0.5545],[8,2,0.3721] ]
  .map(function (item) {
  return [item[1], item[0], item[2] || '-'];
});
    option = {
      tooltip: {
        position: "top",
      },
      grid: {
        height: "80%",
        left: "20%",
        top: "10%",
      },
      xAxis: {
        type: "category",
        data: hours,
        axisLabel: {
          color: "#fff",
          fontSize: 20,
          fontWeight: "bolder",
        },
        splitArea: {
          show: true,
        },
      },
      yAxis: {
        type: "category",
        data: days,
        splitArea: {
          show: true,
        },
        axisLabel: {
          color: "#fff",
          fontSize: 20,
          fontWeight: "bolder",
        },
      },
      visualMap: {
        min: 0.5,
        max: 1,
        calculable: true,
        orient: "horizontal",
        left: "center",
        bottom: "0%",
      },
      series: [
        {
          name: "Correlation",
          type: "heatmap",
          data: data,
          label: {
            show: true,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    myChart.setOption(option);
  }
  //灾害1
  function echart_3() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("chart_3"));

    // 设置最高图表
    const dataUrl1 =
      "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAUqSURBVEiJxZZbiJVVFMd/a3/7+75zzozZYFM52mSaFtikSGF2J0jCQrpAPUSF5FtSL0JPvQRB+RJETz10e4mkAsMoJIMuZCaV2FXNdEIZdRw7jtM5323v3cPe55IRZhAt2PDNMHv9//u/1vqvEaabjv8xNEDy7ifQypB2huQFFCUUFWIMVAasA2fBOTgbXQFEQBQoAR3hoggSDUmMSxNcvQaNGsXamz0BWhnSaiOtDNo5UhSeQFkFAh5cOgTc37AQAQEn4r+VAh1BrCHRuCRBKgPOdd+hASTLkXbuCbQyJCugKAIBC8Z4cBuuOYdnIiFN+Bb/syjxJKIItAoEEqh58C65DgGyHFp5UCJDshzyEilLKA0YC84iDq9GB/NM6QGUwiUaEQU2hziCOO4q6TxDiPoISFEhRYFk/tDOydff47/7a+88sks0jWdf7ZEQcB0FBPKH7iManyD+aBeUGhKLsxYhvDzWUMR9ClQVlBWUJRQlkpeYhfOov/CGL4HtkLDgoL3xYcgKAMyi+WSP3d9jIuCGzqO6fhnlTSuC3B44eXs7cvKUx6qqPgUqg5QVUpogewUO7NBsML5uYl23+QSQovQJfjzI4IbnMItHMYtHuyqgpCu1nGiifjkCjRQ30AgETJ8CNrzS+HqLMaipJmbscrA2dH9vBOX4SZ+kL8rrl0GaoHd+G8AFFymqlWO4ZUuo7X8LZwJGB69HwHWPueRizNjlRN/sRUwFxoUS9LpfHzlO9ujdxB9/RbRvPDSBw4xeDHnRp4LCzr/Q95K1f8LpTJQ+o5dRzdPYVptqbDHpGx9gF4xQXbuU9PWt4VJvFGWq6VvoqoVE+8dRR0+EJB0jUsjkb0hlMEtGUYcnz4QLBJR0ZZPpGdShCdzqVZSrV+GGZiEnmmTr78ENn+/ljyLs3As4764nAGg/s4F466dhFHu5Os1no4jy9pUMbHy+7/d+bv0wKhVcS3nzUAo5eoJ4+5foXT+ACPVNr6GOTjG4YRPxh196++7cA2ovb0HKCnvZCG7uMHbuMGbhPGSySbp5m39ux5j67mnAe3UUedvsnEYNO28YOzwESlDHp1DjE7SffARzxQIGHt8Euq+CscYsGCHe+gl6z35QiuKOG7Dzhv3ci+B05E8U9kO3BHFYFnGMHZ1NecsK7PmzqK5dir1oDm5oFubKy4j2jtPe+BDxx1/jIgWpv+5EcImGSFE8uIZyzWkP2EjRu/fiEm86pLF3xUR7zC6BJIY0xpUJbqCOOnwcvfM7ovGj2DmzqW5aTrZuLTL9O4Prn6a89Rp+f+kpai++6V8rAmlKvH0X6tgUcmrGW63W3qg2PICaOuU3YS3xRAIpYbrp0lfeRWZayEwbaYeNmBeQl36LDdSRyabfE2GGndZ+SVmLnTMbdXLa74Ez+snF2j8uTaCe4uo13GAdN9ggX7c29EAt6ToeSrrsSUrvkKdbEGvcYN0vJlxYUNrvwazAzWoA3nyIopAjEIhjXC2GWoqrh1NL+krQqOEIazLq7O8i7Afjfdv0nBIXCPRHpLru1yOgcbHP59IEQglcI4VGrVeCv7jD34W1JO98hN6976//lIhQLV9Cce9t3RH7JyFn/5O+2LlnFaPD2/TXPw3GX3zbIyFCed0Y1YorZ/h1cjUrr97x3xAA+OCzpVy96D11+Nil8We7AShvXI6df9E4ew7cyR03fn/OOc85tmwb4cjEDtl3wMnPvziOTOxgy7aR/x64PzZ/XpeDh96Xg4feZ/Pn9X+b5g/AMXoVWZPppgAAAABJRU5ErkJggg==";
    const dataUrl2 =
      "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAUqSURBVEiJxZZNbFRVFMd/5747rzOdtkALttDyHaKAfEMUDST1CxOiibhR2btRF7gjLlxo4g4W6kZ3bnQBGqMYMPEjGEAWYC02RIICQgFFSwttpzPz7j0u7p3XFl1YE+NNzkzezNxz/ud/zvmfkb79vcr/eCzAkbOGSh0m6kI1U2pOqDtwPpjXYAqgoMjfOhMUBAQwEiwxwQoJpInSZIViQSkVYMdKHwBUajBeJwdRy6DuoJ4DEFQVRdDI1520SXwVCUBEBCMagjcAWCGLCTUcWICJTJioByCVOlQzqDmoOwksKKgKqiGMqqJ3kCAKIhGGBEtEYvZKmkDmQRUEwcgUANUsZF6pawQgVCMLmQfnGwwQGQjP0wDEYD5UIT4r1kAhESQFH++Y+F0OoO6g6pRqFoJX6rB7i6OWxdpPo10oJMqbX9u8DAK0FpW9jzle+dRiELralOVzlZVdytoFntNXhC9+TDCi2ERJ3RQGMgdZbLxapH9Ju/Lu8QTnJkF4QgO+sC1jIptegh1LPccvCNuXe55a5xgcFm6Ow5IOePUzi1MoWbBGYrzIBgSaM69kPjRe5kK2c0owpxnmlIO1NwdrsNawNFGeWOP55ExCW1H54FTCa4ctB/oSRqswUglB6356rJwBr5Mj52LNh8aEezp9HL/J7gflxmhw2DjPbfbUnDBSkXxknYebFaFoQxM7Lziv00Y7B6CRWq/QPVtZ1en54erkyGjUgDAFyrVbwnNbPMcvGBa0edZ0h3S8KqqwslNBPUZgXouybZnHJnD5pjBWiwkxpQRTz62KMF6H5fOUgeuG8Zpwd6fSP2joHxS+HzT0Dxq+HxSGxqGtBK8fLhCnHwVai3BXK8xrVYyBuS1KR1lpKtwZLTIg8boR4VYVLg8beldkPLTC0VaCoTFh9xZHR1n5fTSMW2ersvu9lEMDSa6LEjXy5EXhy3MGa2B9j/LNT4bb1aCALenk73IGGpJpDFgBI8qvt4Wj5w19VwwiyttHLb/dFvZ+Yjl63nDkbIKJDkyDTkNUwEl/l4aERe1KIhp8R2luCJGByQ9srt1CqQBds6CjHNDeGIUrw8KL2x2P3uP5uN9gjWJNkFshjJgRDb4M7FztuTQkrOpS5pRh40IfEwxxcgA2gdQGyeyZrTyw1DGrpGzo9qzrVjYuVFbMU87fEB652zM4LBgT7jQMUdIkgOkoK70rPIvbldtV2LzIs77bM7clyrINMXMAadTqJgvNKVwdEQ72JXx0JuHAdwlnrgnPbHJsXqTsOWgZHIF9uzLWd/v8nhDeN/Yo63qU2c3KsZ8NyzqUL88ZnlzjOXdDaLKQxs0IIH37e/X9U4axqjBea2zEIMk1F7ZYOYU/xsLG9HEv2LhcGtrf3gzDlSDTjX6w0QJIpViAUiEkWW5Snt0U13HRBnFQwhYzJpbFKXUnjFbDc1nA+zDBXoNz4p2ag3KqeZMlQr4JC4mQ2hCnWIhmp4xhqQBh2wuJhKyricZtqGQu/CdwHrwPO8HnyhhrKXEi8i4PLNkIokF9k4VSGv6Q5AAeX+X/qhB/c7zCoR8MA9ckV8+p8796vrLzXp+P2D85M/gpfLj34a1ds/3n/Vel5dQvZto63rTIs3aBjl4fNo/teuOLE/8JAIB39vSuXt3FoWsjsvjkxdAE9y3xzJ+llwaus/P5/V8NzMTfjAEAvPnigws2LkwPjlW5XwSaU749fbn29EtvHbs6U1//CgDAvj1bSxs6ih8CfPfHxK6X95+o/Bs/fwIleHxCHzUwBQAAAABJRU5ErkJggg==";
    const data = {
      xdata: [
        " 北京",
        " 天津",
        " 河北",
        " 山西",
        " 内蒙古 ",
        " 辽宁",
        " 吉林",
        " 黑龙江 ",
        " 上海",
        " 江苏",
        " 浙江",
        " 安徽",
        " 福建",
        " 江西",
        " 山东",
        " 河南",
        " 湖北",
        " 湖南",
        " 广东",
        " 广西",
        " 海南",
        " 重庆",
        " 四川",
        " 贵州",
        " 云南",
        " 西藏",
        " 陕西",
        " 甘肃",
        " 青海",
        " 宁夏",
        " 新疆",
      ],
      valList1: [
        0, 0, 112.24, 613.698, 1309.22, 617.682, 348.938, 737.57, 0, 8.62,
        5.604, 214.8, 19.574, 202.29, 167.28, 227.722, 459.04, 240.016, 8.566,
        53.314, 6.562, 28.31, 92.322, 39.056, 546.404, 0.086, 322.008, 199.306,
        49.792, 98.776, 57.556,
      ],
      valList2: [
        0, 0, 15.42, 93.168, 170.806, 117.884, 30.116, 17.66, 0, 0.82, 0.342,
        26.5, 1.174, 26.916, 20.34, 27.08, 52.42, 26.6, 0.266, 2.218, 0.38,
        2.364, 6.18, 6.734, 30.992, 0.004, 60.77, 25.258, 3.46, 19.938, 5.594,
      ],
    };

    option = {
      title: [
        {
          top: "2%",
          left: "center",
          text: "旱灾对粮食作物的影响",
          textStyle: {
            color: "#2AD2FB",
            fontSize: 20,
            fontWeight: "bolder",
            // fontWeight: "600",
          },
        },
        {
          subtext: "单位:千公顷", //副标题
          // itemGap: 6, //主副标题间距
          left: "4%", //标题的位置 默认是left，其余还有center、right属性
          top: "6%",
          subtextStyle: {
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: "600",
            textAlign: "center",
          },
        },
      ],
      tooltip: {
        trigger: "axis",
        backgroundColor: "#1B366A",
        borderWidth: 0,

        // axisPointer: {
        //   type: "shadow",
        //   shadowStyle: {
        //     color: "rgba(68, 140, 246, .2)",
        //   },
        // },
        // valueFormatter: function (p) {
        //   // console.log(p);
        //   let value = "";
        //   if (p > 0) {
        //     value = p;
        //     if (value > 999) {
        //       // 数值加千分号
        //       let parts = value.toString().split(".");
        //       parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        //       value = parts.join(".");
        //     }
        //   }
        //   return value + " 千公顷";
        // },
        textStyle: {
          color: "#fff",
        },
      },
      color: ["#65B765", "#448CF6"],
      legend: {
        top: "10%",
        right: "10%",
        icon: "rect",
        itemHeight: 2,
        itemWidth: 24,
        itemGap: 20,
        data: ["受灾面积", "绝收面积"],
        textStyle: {
          color: "#fff",
          fontSize: 16,
        },
      },
      grid: {
        top: "20%",
        left: "5%",
        right: "10%",
        bottom: "20%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        boundaryGap: true,
        axisLabel: {
          align: "center",
          interval: 0,
          textStyle: {
            color: "#bad7df",
            fontSize: 16,
          },
        },
        axisLine: {
          //不显示坐标轴线
          show: false,
        },
        axisTick: {
          //不显示坐标轴刻度线
          show: false,
        },
        data: data.xdata,
      },
      yAxis: {
        type: "value",
        min: function (value) {
          return parseInt(Math.floor(value.min * 0.99));
        },
        axisTick: {
          //不显示坐标轴刻度线
          show: true,
        },
        axisLine: {
          show: false, //暗藏或显示
          lineStyle: {
            type: "solid",
            color: "#012f4a",
          },
        },
        axisLabel: {
          textStyle: {
            color: "#bad7df",
            fontSize: 16,
          },
        },
        splitLine: {
          //网格线
          lineStyle: {
            type: "dashed", //设置网格线类型 dotted：虚线   solid:实线
            width: 1,
          },
          show: true, //暗藏或显示
        },
      },
      dataZoom: [
        {
          show: true,
          height: 30,
          xAxisIndex: [0],
          bottom: 30,
          start: 0,
          end: 40,
          handleIcon:
            "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
          handleSize: "110%",
          handleStyle: {
            color: "#d3dee5",
          },
          textStyle: {
            color: "#fff",
          },
          borderColor: "#90979c",
        },
        {
          type: "inside",
          show: true,
          height: 15,
          start: 1,
          end: 35,
        },
      ],
      series: [
        {
          name: "受灾面积",
          type: "line",
          showSymbol: false,
          itemStyle: {
            normal: {
              lineStyle: {
                width: 4,
              },
            },
          },

          data: data.valList1,
        },
        {
          name: "绝收面积",
          type: "line",
          showSymbol: false,
          itemStyle: {
            normal: {
              lineStyle: {
                width: 4,
              },
            },
          },
          data: data.valList2,
          markPoint: {
            data: [
              {
                type: "max",
                symbol: dataUrl1,
              },
              {
                type: "min",
                symbol: dataUrl2,
              },
            ],
            symbol: "none",
            label: {
              show: true,
              position: "bottom", // 显示位置
              textStyle: {
                fontSize: 16,
                color: "#fff",
              },
            },
            symbolSize: [32, 20],
            symbolOffset: [0, -40],
          },
        },
      ],
    };
    myChart.setOption(option);
  }
  //灾害2
  function echart_10() {
    var myChart = echarts.init(document.getElementById("chart_10"));
    myChart.clear();

    option = {
      title: [
        {
          top: "2%",
          left: "center",
          text: "洪涝、地质灾害和台风灾害对粮食作物影响",
          textStyle: {
            color: "#2AD2FB",
            fontSize: 20,
            fontWeight: "bolder",
          },
        },
        {
          subtext: "单位:千公顷", //副标题
          // itemGap: 6, //主副标题间距
          left: "4%", //标题的位置 默认是left，其余还有center、right属性
          top: "16%",
          subtextStyle: {
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: "600",
            textAlign: "center",
          },
        },
      ],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
          textStyle: {
            color: "#fff",
          },
        },
      },
      grid: {
        top: 110,
        bottom: 95,
        textStyle: {
          color: "#fff",
        },
      },
      legend: {
        x: "500px",
        top: "8%",
        textStyle: {
          color: "#fff",
          fontSize: 16,
        },
        data: ["受灾面积", "绝收面积"],
      },

      calculable: true,
      xAxis: [
        {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#90979c",
            },
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitArea: {
            show: false,
          },
          axisLabel: {
            align: "center",
            interval: 0,
            textStyle: {
              color: "#bad7df",
              fontSize: 16,
            },
          },
          data: [
            " 北京",
            " 天津",
            " 河北",
            " 山西",
            " 内蒙古",
            " 辽宁",
            " 吉林",
            " 黑龙江",
            " 上海",
            " 江苏",
            " 浙江",
            " 安徽",
            " 福建",
            " 江西",
            " 山东",
            " 河南",
            " 湖北",
            " 湖南",
            " 广东",
            " 广西",
            " 海南",
            " 重庆",
            " 四川",
            " 贵州",
            " 云南",
            " 西藏",
            " 陕西",
            " 甘肃",
            " 青海",
            " 宁夏",
            " 新疆",
          ],
        },
      ],
      yAxis: [
        {
          type: "value",
          splitLine: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "#90979c",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: "#bad7df",
              fontSize: 16,
            },
          },
          splitArea: {
            show: false,
          },
        },
      ],
      dataZoom: [
        {
          show: true,
          height: 30,
          xAxisIndex: [0],
          bottom: 30,
          start: 0,
          end: 40,
          handleIcon:
            "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
          handleSize: "110%",
          handleStyle: {
            color: "#d3dee5",
          },
          textStyle: {
            color: "#fff",
          },
          borderColor: "#90979c",
        },
        {
          type: "inside",
          show: true,
          height: 15,
          start: 1,
          end: 35,
        },
      ],
      series: [
        {
          name: "受灾面积",
          type: "bar",
          stack: "总量",
          barMaxWidth: 35,
          barGap: "10%",
          itemStyle: {
            normal: {
              color: "rgba(255,144,128,1)",
              label: {
                show: false,
                textStyle: {
                  color: "#fff",
                },
                position: "inside",
                formatter: "{a}<br/>{b}:{c}" + "千公顷",
              },
            },
          },
          data: [
            1.32, 3.322, 126.774, 131.824, 409.538, 167.026, 415.48, 1585.338,
            9.12, 120.428, 146.87, 447.048, 47.056, 461.754, 426.098, 725,
            586.792, 523.822, 210.506, 146.728, 17.226, 56.168, 268.358,
            112.212, 144.498, 5.734, 126.37, 109.46, 15.478, 20.28, 24.964,
          ],
        },

        {
          name: "绝收面积",
          type: "bar",
          stack: "总量",
          itemStyle: {
            normal: {
              color: "rgba(0,191,183,1)",
              barBorderRadius: 0,
              label: {
                show: false,
                position: "inside",
                formatter: function (p) {
                  return p.value > 0 ? p.value : "";
                },
              },
            },
          },
          data: [
            0.12, 0.242, 17.392, 18.496, 57.542, 19.596, 36.71, 264.088, 0.5,
            13.48, 15.064, 109.11, 6.144, 83.128, 53.258, 94.894, 100.002,
            77.254, 10.692, 13.658, 1.398, 11.128, 41.348, 19.51, 23.99, 1.398,
            24.06, 13.934, 1.538, 1.998, 2.962,
          ],
        },
        // {
        //   name: "总数",
        //   type: "line",
        //   symbolSize: 10,
        //   symbol: "circle",
        //   itemStyle: {
        //     normal: {
        //       color: "rgba(252,230,48,1)",
        //       barBorderRadius: 0,
        //       label: {
        //         show: false,
        //         position: "top",
        //         formatter: function (p) {
        //           return p.value > 0 ? p.value : "";
        //         },
        //       },
        //     },
        //   },
        //   data: [1.44,3.564,144.166,150.32,467.08,186.622,452.19,1849.426,9.62,133.908,161.934,556.158,53.2,544.882,479.356,819.894,686.794,601.076,221.198,160.386,18.624,67.296,309.706,131.722,168.488,7.132,150.43,123.394,17.016,22.278],
        // },
      ],
    };

    myChart.setOption(option);
  }
  //灾害3
  function echart_11() {
    var myChart = echarts.init(document.getElementById("chart_11"));
    myChart.clear();

    option = {
      title: [
        {
          top: "2%",
          left: "center",
          text: "低温冷冻和雪灾对粮食作物的影响",
          textStyle: {
            color: "#2AD2FB",
            fontSize: 20,
            fontWeight: "bolder",
          },
        },
        {
          subtext: "单位:千公顷", //副标题
          // itemGap: 6, //主副标题间距
          left: "4%", //标题的位置 默认是left，其余还有center、right属性
          top: "16%",
          subtextStyle: {
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: "600",
            textAlign: "center",
          },
        },
      ],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
          textStyle: {
            color: "#fff",
          },
        },
      },
      grid: {
        borderWidth: 0,
        top: 110,
        bottom: 95,
        textStyle: {
          color: "#fff",
          fontSize: 30,
        },
      },
      legend: {
        x: "500px",
        top: "11%",
        textStyle: {
          color: "#fff",
          fontSize: 16,
        },
        data: ["受灾面积", "绝收面积"],
      },

      calculable: true,
      xAxis: [
        {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "rgba(204,187,225,0.5)",
            },
          },
          axisLabel: {
            align: "center",
            interval: 0,
            textStyle: {
              color: "#bad7df",
              fontSize: 16,
            },
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          data: [
            " 北京",
            " 天津",
            " 河北",
            " 山西",
            " 内蒙古",
            " 辽宁",
            " 吉林",
            " 黑龙江",
            " 上海",
            " 江苏",
            " 浙江",
            " 安徽",
            " 福建",
            " 江西",
            " 山东",
            " 河南",
            " 湖北",
            " 湖南",
            " 广东",
            " 广西",
            " 海南",
            " 重庆",
            " 四川",
            " 贵州",
            " 云南",
            " 西藏",
            " 陕西",
            " 甘肃",
            " 青海",
            " 宁夏",
            " 新疆",
          ],
        },
      ],

      yAxis: [
        {
          type: "value",
          splitLine: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: "#bad7df",
              fontSize: 16,
            },
          },
          axisLine: {
            lineStyle: {
              color: "rgba(204,187,225,0.5)",
            },
          },
        },
      ],
      dataZoom: [
        {
          show: true,
          height: 30,
          xAxisIndex: [0],
          bottom: 30,

          start: 10,
          end: 40,
          handleIcon:
            "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
          handleSize: "110%",
          handleStyle: {
            color: "#5B3AAE",
          },
          textStyle: {
            color: "rgba(204,187,225,0.5)",
          },
          fillerColor: "rgba(67,55,160,0.4)",
          borderColor: "rgba(204,187,225,0.5)",
        },
        {
          type: "inside",
          show: true,
          height: 15,
          start: 1,
          end: 35,
        },
      ],
      series: [
        {
          name: "受灾面积",
          type: "line",
          symbolSize: 10,
          symbol: "circle",
          itemStyle: {
            color: "#6f7de3",
          },
          markPoint: {
            label: {
              normal: {
                textStyle: {
                  color: "#fff",
                },
              },
            },
            data: [
              {
                type: "max",
                name: "最大值",
              },
              {
                type: "min",
                name: "最小值",
              },
            ],
          },
          data: [
            0.1, 0.646, 67.006, 192.528, 180.862, 2.1, 0.284, 93.772, 0.094,
            3.38, 25.192, 55.52, 4.846, 14.422, 5.68, 56.32, 97.49, 35.96,
            7.342, 1.326, 0, 1.356, 5.304, 11.194, 34.816, 0.41, 87.916, 117.32,
            3.166, 40.262, 44.02,
          ],
        },
        {
          name: "绝收面积",
          type: "line",
          symbolSize: 10,
          symbol: "circle",
          itemStyle: {
            color: "#c257F6",
          },
          markPoint: {
            label: {
              normal: {
                textStyle: {
                  color: "#fff",
                },
              },
            },
            data: [
              {
                type: "max",
                name: "最大值",
              },
              {
                type: "min",
                name: "最小值",
              },
            ],
          },
          data: [
            0, 0.004, 16.34, 57.168, 13.896, 0.218, 0.01, 4.562, 0.014, 0.04,
            0.04, 2.26, 0.296, 1.792, 0.802, 5.936, 4.474, 4.9, 1.888, 0.204, 0,
            0.132, 0.208, 1.08, 3.51, 0.086, 16.192, 20.66, 0.146, 4.114, 5.516,
          ],
        },
      ],
    };
    myChart.setOption(option);
  }
  //灾害4
  function echart_12() {
    var myChart = echarts.init(document.getElementById("chart_12"));
    myChart.clear();

    option = {
      title: [
        {
          top: "2%",
          left: "center",
          text: "风雹灾害对各省份粮食作物的影响",
          textStyle: {
            color: "#2AD2FB",
            fontSize: 20,
            fontWeight: "bolder",
          },
        },
        {
          subtext: "单位:千公顷", //副标题
          // itemGap: 6, //主副标题间距
          left: "4%", //标题的位置 默认是left，其余还有center、right属性
          top: "16%",
          subtextStyle: {
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: "600",
            textAlign: "center",
          },
        },
      ],
      tooltip: {
        trigger: "null",
        axisPointer: {
          type: "shadow",
          textStyle: {
            color: "#fff",
          },
        },
      },
      legend: {
        x: "500px",
        top: "8%",
        textStyle: {
          color: "#fff",
          fontSize: 16,
        },
        data: ["受灾面积", "绝收面积"],
      },
      grid: {
        borderWidth: 0,
        top: 110,
        bottom: 95,
        textStyle: {
          color: "#fff",
        },
      },
      calculable: true,
      xAxis: [
        {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.5)",
            },
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitArea: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            color: "#bad7df",
            fontSize: 18,
          },
          data: [
            " 北京",
            " 天津",
            " 河北",
            " 山西",
            " 内蒙古",
            " 辽宁",
            " 吉林",
            " 黑龙江",
            " 上海",
            " 江苏",
            " 浙江",
            " 安徽",
            " 福建",
            " 江西",
            " 山东",
            " 河南",
            " 湖北",
            " 湖南",
            " 广东",
            " 广西",
            " 海南",
            " 重庆",
            " 四川",
            " 贵州",
            " 云南",
            " 西藏",
            " 陕西",
            " 甘肃",
            " 青海",
            " 宁夏",
            " 新疆",
          ],
        },
      ],
      yAxis: [
        {
          type: "value",
          splitLine: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "#90979c",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            formatter: (m) => {
              return Math.abs(m);
            },
            textStyle: {
              color: "#bad7df",
              fontSize: 16,
            },
          },
          splitArea: {
            show: false,
          },
        },
      ],
      dataZoom: [
        {
          show: true,
          height: 30,
          xAxisIndex: [0],
          bottom: 30,
          start: 0,
          end: 40,
          handleIcon:
            "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
          handleSize: "110%",
          handleStyle: {
            color: "#d3dee5",
          },
          textStyle: {
            color: "#fff",
          },
          borderColor: "#90979c",
        },
        {
          type: "inside",
          show: true,
          height: 15,
          start: 1,
          end: 35,
        },
      ],
      series: [
        {
          name: "受灾面积",
          type: "bar",
          barWidth: 20,
          gridIndex: 0,
          yAxisIndex: 0,
          label: {
            show: true,
            position: "top",
            color: "#fff",
          },
          itemStyle: {
            normal: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(35, 157, 250, 1)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(35, 157, 250, 0)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
          data: [
            4.678, 3.638, 163.972, 125.764, 430.306, 75.622, 96.016, 234.564, 0,
            51.322, 0.962, 33.634, 2.852, 28.954, 135.396, 119.564, 72.982,
            19.076, 0.708, 3.722, 0.04, 12.8, 18.078, 53.006, 73.24, 2.62,
            100.466, 103.79, 28.092, 21.238, 458.978,
          ],
        },

        {
          name: "绝收面积",
          type: "bar",
          barWidth: 20,
          barGap: "-100%",
          gridIndex: 0,
          yAxisIndex: 0,
          label: {
            color: "#fff",
            show: true,
            position: "bottom",
            formatter: (m) => {
              return Math.abs(m.value);
            },
          },
          itemStyle: {
            normal: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 1,
                    color: "rgba(35, 250, 187, 1)", // 0% 处的颜色
                  },
                  {
                    offset: 0,
                    color: "rgba(35, 250, 187, 0)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
              barBorderRadius: 0,
            },
          },
          data: [
            -0.322, -1.7, -13.464, -10.892, -31.518, -4.212, -8.772, -16.308, 0,
            -2.374, -0.04, -1.546, -0.402, -1.532, -9.42, -5.31, -6.056, -2.772,
            -0.138, -0.478, 0, -2.144, -2.072, -11.808, -12.978, -0.294, -12.36,
            -11.264, -3.61, -2.724, -41.43,
          ],
        },
      ],
    };

    myChart.setOption(option);
  }
  //操作按钮
  $(".t_btn0").click(function () {
    $(".center_text").css("display", "none");
    $(".t_cos0").css("display", "block");
    echart_map();
  });
  $(".t_btn1").click(function () {
    $(".center_text").css("display", "none");
    $(".t_cos1").css("display", "block");
    echart_2();
  });
  $(".t_btn6").click(function () {
    $(".center_text").css("display", "none");
    $(".t_cos5").css("display", "block");
    echart_3();
  });

  //获取地址栏参数
  $(function () {
    function getUrlParms(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }
    var id = getUrlParms("id");
    if (id == 2) {
      $(".center_text").css("display", "none");
      $(".t_cos10").css("display", "block");
      echart_10();
    }
    if (id == 3) {
      $(".center_text").css("display", "none");
      $(".t_cos11").css("display", "block");
      echart_11();
    }
    if (id == 4) {
      $(".center_text").css("display", "none");
      $(".t_cos1").css("display", "block");
      echart_2();
    }
    if (id == 5) {
      $(".center_text").css("display", "none");
      $(".t_cos6").css("display", "block");
      echart_6();
    }
    if (id == 6) {
      $(".center_text").css("display", "none");
      $(".t_cos4").css("display", "block");
      echart_1();
    }
    if (id == 7) {
      $(".center_text").css("display", "none");
      $(".t_cos8").css("display", "block");
      echart_8();
    }
    if (id == 8) {
      $(".center_text").css("display", "none");
      $(".t_cos12").css("display", "block");
      echart_12();
    }
    if (id == 9) {
      $(".center_text").css("display", "none");
      $(".t_cos13").css("display", "block");
      echart_13();
    }
  });
});
