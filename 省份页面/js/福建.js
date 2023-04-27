//省份主要粮食作物
(function () {
  var myChart = echarts.init(document.getElementById("radar"));
  const pieData = [
    {
      value: 393.18,
      name: "稻谷",
      itemStyle: {
        borderRadius: "50%",
        normal: {
          borderWidth: 1,
          shadowBlur: 50,
          color: "rgba(163,50,233,0.5)",
          borderColor: "#a332e9",
          shadowColor: "#a332e9",
        },
      },
    },
    {
      value: 15.34,
      name: "玉米",
      itemStyle: {
        borderRadius: "50%",
        normal: {
          borderWidth: 1,
          shadowBlur: 50,
          color: "rgba(78,167,255,0.5)",
          borderColor: "#6DA7FF",
          shadowColor: "#6DA7FF",
        },
      },
    },

    {
      value: 84.06,
      name: "薯类",
      itemStyle: {
        borderRadius: "50%",
        normal: {
          borderWidth: 1,
          shadowBlur: 50,
          color: "rgba(78,967,255,0.5)",
          borderColor: "#6DA7FF",
          shadowColor: "#6DA7FF",
        },
      },
    },
  ];
  var option = {
    color: ["#8792FF", "#2B64FF", "#6DA7FF"],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c}" + "万吨 " + "({d}%)",
    },
    grid: {
      left: "6%",
      right: "10%",
      bottom: "10%",
      top: "10%",
      width: "450px",
      height: "200px",
    },
    toolbox: {
      show: true,
    },
    legend: {
      x: "left", //可设定图例在左、右、居中
      y: "top", //可设定图例在上、下、居中
      align: "left", //字在图例的左边或右边【left/right】
      orient: "vertical", //图例方向【horizontal/vertical】
      icon: "circle", //图例形状【circle\rect\roundRect\triangle\diamond\pin\arrow\none】
      itemGap: 14,
      formatter(name) {
        const item = pieData.filter((item) => item.name === name)[0];
        return `{name|${name}}`;
      },
      textStyle: {
        rich: {
          name: {
            color: "#FFB6B9",
            fontSize: 14,
            width: 100,
            fontWeight: 600,
          },
          value: {
            color: "#8AC6D1",
            fontSize: 14,
            width: 100,
            fontWeight: 600,
          },
        },
      },
    },
    series: [
      {
        name: "主产粮食",
        type: "pie",
        radius: [0, 140],
        center: ["50%", "50%"],
        label: {
          normal: {
            show: true,
            position: "inside",
            // formatter: "{b}",
            formatter: (params) => {
              console.log(params);
              let text = params.name;
              if (text.length <= 8) {
                return text;
              } else if (text.length > 8 && text.length <= 16) {
                return (text = `${text.slice(0, 8)}\n${text.slice(8)}`);
              } else if (text.length > 16 && text.length <= 24) {
                return (text = `${text.slice(0, 8)}\n${text.slice(
                  8,
                  16
                )}\n${text.slice(16)}`);
              } else if (text.length > 24 && text.length <= 30) {
                return (text = `${text.slice(0, 8)}\n${text.slice(
                  8,
                  16
                )}\n${text.slice(16, 24)}\n${text.slice(24)}`);
              } else if (text.length > 30) {
                return (text = `${text.slice(0, 8)}\n${text.slice(
                  8,
                  16
                )}\n${text.slice(16, 24)}\n${text.slice(24, 30)}\n${text.slice(
                  30
                )}`);
              }
            },
            textStyle: {
              align: "left",
              baseline: "middle",
              fontSize: 16,
              fontWeight: "100",
              color: "#fff",
            },
          },
        },
        labelLine: {
          show: true,
        },
        data: pieData,
      },
    ],
  };
  myChart.setOption(option);
  // 图缩放设置
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
//粮食播种面积变化
(function () {
  var myChart = echarts.init(document.getElementById("graduateyear"));
  option = {
    tooltip: {
      trigger: "axis",
      formatter: "{a}<br/>{b}:{c}" + "千公顷",
      backgroundColor: "rgba(17,95,182,0.5)",
      textStyle: {
        color: "#fff",
      },
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      top: "10%",
      left: "4%",
      right: "4%",
      bottom: "2%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: [
          "2015年",
          "2016年",
          "2017年",
          "2018年",
          "2019年",
          "2020年",
          "2021年",
        ],
        axisLine: {
          show: false,
          lineStyle: {
            color: "#063374",
            width: 1,
            type: "solid",
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: "rgba(255,255,255,0.8)",
            fontSize: 14,
          },
        },
      },
    ],
    yAxis: [
      {
        min: 800,
        max: 900,
        type: "value",
        axisLabel: {
          formatter: "{value}",
          textStyle: {
            color: "rgba(255,255,255,0.8)",
            fontSize: 14,
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: "#063374",
            width: 1,
            type: "solid",
          },
        },
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "",
        type: "bar",
        data: [874.2, 832.83, 833.22, 833.51, 822.43, 834.43, 835.13],
        barWidth: 14,
        barGap: 1,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#FEC060",
              },
              {
                offset: 1,
                color: "rgba(12, 135, 230, 0.1)",
              },
            ]),
            opacity: 1,
            barBorderRadius: [30, 30, 0, 0],
          },
        },
      },
    ],
  };

  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
//耕地面积与播种面积占比
(function () {
  var myChart = echarts.init(document.getElementById("sexrate"));
  var dataArr = 62;
  var colorSet = {
    color: "#22B95E",
  };
  var color1 = {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      {
        offset: 0,
        color: "rgba(255,255,255,0.1)",
      },
      {
        offset: 1,
        color: "rgba(255,255,255,0.3)",
      },
    ],
    global: false,
  };
  var color2 = {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      {
        offset: 0,
        color: "#30DBBA",
      },
      {
        offset: 1,
        color: "#2DE696",
      },
    ],
    global: false,
  };

  option = {
    series: [
      {
        name: "内部进度条",
        type: "gauge",
        // center: ['20%', '50%'],
        radius: "52%",

        splitNumber: 10,
        axisLine: {
          lineStyle: {
            color: [
              [dataArr / 100, colorSet.color],
              [1, colorSet.color],
            ],
            width: 2,
          },
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        itemStyle: {
          color: "#ffffff",
        },
        detail: {
          show: false,
          formatter: function (value) {
            if (value !== 0) {
              var num = Math.round(value);
              return parseInt(num).toFixed(0) + "%";
            } else {
              return 0;
            }
          },
          offsetCenter: [0, 67],
          textStyle: {
            padding: [0, 0, 0, 0],
            fontSize: 18,
            fontWeight: "700",
            color: "#ffffff",
          },
        },
        title: {
          //标题
          show: false,
          offsetCenter: [0, 46], // x, y，单位px
          textStyle: {
            color: "rgba(0,0,0,0)",
            fontSize: 14, //表盘上的标题文字大小
            fontFamily: "PingFangSC",
          },
        },
        data: [
          {
            name: "数据",
            value: dataArr,
          },
        ],
        pointer: {
          show: true,
          length: "70%",
          radius: "20%",
          width: 4, //指针粗细
        },
        animationDuration: 4000,
      },
      {
        name: "内部阴影",
        type: "gauge",
        radius: "44%",
        splitNumber: 10,
        axisLine: {
          lineStyle: {
            color: [
              [
                dataArr / 100,
                new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(45,230,150,0)",
                  },
                  {
                    offset: 0.5,
                    color: "rgba(45,230,150,0.2)",
                  },
                  {
                    offset: 1,
                    color: "rgba(45,230,150,1)",
                  },
                ]),
              ],
              [1, "rgba(28,128,245,0)"],
            ],
            width: 100,
          },
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        itemStyle: {
          show: false,
        },
      },
      {
        name: "内部小圆",
        type: "gauge",
        // center: ['20%', '50%'],
        radius: "46%",

        splitNumber: 10,
        axisLine: {
          lineStyle: {
            color: [
              [dataArr / 100, color2],
              [1, "rgba(0,0,0,0)"],
            ],
            width: 10,
          },
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        itemStyle: {
          show: false,
        },
      },
      {
        name: "外部刻度",
        type: "gauge",
        //  center: ['20%', '50%'],
        radius: "48%",
        min: 0, //最小刻度
        max: 100, //最大刻度
        splitNumber: 5, //刻度数量
        startAngle: 225,
        endAngle: -45,
        axisLine: {
          show: true,
          lineStyle: {
            width: 1,
            color: [[1, "rgba(0,0,0,0)"]],
          },
        }, //仪表盘轴线
        axisLabel: {
          show: true,
          color: "#ffffff",
          fontSize: 14,
          fontFamily: "SourceHanSansSC-Regular",
          fontWeight: "bold",
          // position: "top",
          distance: -30,
          formatter: function (v) {
            switch (v + "") {
              case "0":
                return "0";
              case "10":
                return "10";
              case "20":
                return "20";
              case "30":
                return "30";
              case "40":
                return "40";
              case "50":
                return "50";
              case "60":
                return "60";
              case "70":
                return "70";
              case "80":
                return "80";
              case "90":
                return "90";
              case "100":
                return "100";
            }
          },
        }, //刻度标签。
        axisTick: {
          show: true,
          splitNumber: 3,
          lineStyle: {
            color: color1, //用颜色渐变函数不起作用
            width: 1,
          },
          length: -6,
        }, //刻度样式
        splitLine: {
          show: true,
          length: -12,
          lineStyle: {
            color: color1, //用颜色渐变函数不起作用
          },
        }, //分隔线样式
        detail: {
          show: false,
        },
      },
      {
        name: "内部进度条",
        type: "gauge",
        // center: ['20%', '50%'],
        radius: "20%",

        splitNumber: 10,
        axisLine: {
          lineStyle: {
            color: [
              [dataArr / 100, colorSet.color],
              [1, colorSet.color],
            ],
            width: 1,
          },
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        itemStyle: {
          color: "#ffffff",
        },
        detail: {
          formatter: function (value) {
            if (value !== 0) {
              var num = Math.round(value);
              return parseInt(num).toFixed(0) + "%";
            } else {
              return 0;
            }
          },
          offsetCenter: [0, 67],
          textStyle: {
            padding: [0, 0, 0, 0],
            fontSize: 18,
            color: "#ffffff",
          },
        },
        title: {
          //标题
          show: true,
          offsetCenter: [0, 46], // x, y，单位px
          textStyle: {
            color: "#fff",
            fontSize: 14, //表盘上的标题文字大小
            fontWeight: 400,
            fontFamily: "MicrosoftYaHei",
          },
        },
        data: [
          {
            name: "播种面积占比",
            value: dataArr,
            itemStyle: {
              color: "#ffffff",
              fontFamily: "MicrosoftYaHei",
              fontSize: 14,
            },
          },
        ],
        pointer: {
          show: true,
          length: "70%",
          radius: "20%",
          width: 3, //指针粗细
        },
        animationDuration: 4000,
      },
      {
        //指针上的圆
        type: "pie",
        tooltip: {
          show: false,
        },
        hoverAnimation: false,
        legendHoverLink: false,
        radius: ["0%", "4%"],
        center: ["50%", "50%"],
        label: {
          normal: {
            show: false,
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: [
          {
            value: 120,
            itemStyle: {
              normal: {
                color: "#ffffff",
              },
            },
          },
        ],
      },
    ],
  };
  myChart.setOption(option);
})();
//省份粮食产量
(function () {
  var myChart = echarts.init(document.getElementById("mapadd"));
  const payload = {
    title: ["粮食总产量", "增长率"],
  };

  option = {
    grid: {
      left: 15,
      right: 15,
      bottom: 14,
      top: 45,
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(9, 30, 60, 0.6)",
      extraCssText: "box-shadow: 0 0 8px rgba(0, 128, 255, 0.27) inset;",
      borderWidth: 0,
      confine: false,
      appendToBody: true,
      textStyle: {
        color: "#fff",
        fontSize: 10,
      },
    },
    legend: {
      width: window.innerWidth < 1600 ? "100%" : "60%",
      icon: "rect",
      top: 7,
      itemWidth: 12,
      itemHeight: 12,
      textStyle: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 16,
      },
      align: "left",
    },
    xAxis: {
      data: [
        "2013年",
        "2014年",
        "2015年",
        "2016年",
        "2017年",
        "2018年",
        "2019年",
        "2020年",
        "2021年",
        "2022年",
      ],
      axisTick: {
        show: false,
      },

      axisLine: {
        lineStyle: {
          color: "rgba(126, 134, 142, 0.5)",
          width: 0.8,
        },
      },

      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,0.8)",
          fontSize: 14,
        },
        interval: 0,
        rotate: 0,
      },
    },
    yAxis: [
      {
        min: 400,
        max: 600,
        tpye: "value",
        name: "万吨",
        nameTextStyle: {
          color: "rgba(255,255,255,0.8)",
          fontSize: 11,
          padding: [0, 0, 0, -40],
        },
        position: "left",
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255, 129, 109, 0.1)",
            width: 1, //这里是为了突出显示加上的
          },
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,0.8)",
            fontSize: 14,
          },
        },
        splitArea: {
          areaStyle: {
            color: "rgba(255,255,255,.5)",
          },
        },

        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(126, 134, 142, 0.24)",
            type: "dotted",
          },
        },
      },
      {
        min: -25,
        max: 20,
        type: "value",
        nameTextStyle: {
          color: "rgba(185, 185, 185, 1)",
        },
        max: 25,
        position: "right",
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: true,
          formatter: "{value} %", //右侧Y轴文字显示
          textStyle: {
            color: "rgba(255,255,255,0.8)",
            fontSize: 14,
          },
        },
      },
    ],
    series: [
      {
        name: payload.title[0],
        type: "pictorialBar",

        barGap: "-20%",
        symbol: "path://M18,3 L46,3 78,68 18,68 46,3 z",

        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(184, 143, 255, 1)",
              },
              {
                offset: 1,
                color: "rgba(184, 143, 255, 0.10)",
              },
            ],
            global: false, //  缺省为  false
          },
        },
        emphasis: {
          itemStyle: {
            opacity: 1,
          },
        },
        data: [
          534.68, 520.43, 500.05, 477.28, 487.15, 498.58, 493.9, 502.32, 506.42,
          508.7,
        ],
      },

      {
        name: payload.title[1],
        type: "line",
        smooth: true,
        yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
        lineStyle: {
          color: " rgba(146, 217, 67, 1)",
          width: 2,
        },
        symbol: "circle",
        symbolSize: 6,
        itemStyle: {
          color: "rgba(146, 217, 67, 1)",
        },
        z: 13,
        areaStyle: {
          origin: 50,
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(146, 217, 67, 0.12)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(146, 217, 67, 0)", //   100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
        data: [-2.31, -2.67, -3.92, -4.55, 2.07, 2.35, -0.94, 1.7, 0.82, 0.45],
      },
    ],
  };

  myChart.setOption(option);
  // 图缩放设置
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
//历年化肥使用数据
(function () {
  var myChart = echarts.init(document.getElementById("changedetail"));

  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      icon: "circle",
      itemWidth: 8,
      itemHeight: 8,
      right: "10%",
      textStyle: {
        fontStyle: "normal",
        fontSize: 16,
        color: "rgba(255,255,255,0.8)",
      },
    },
    xAxis: [
      {
        type: "category",
        axisLabel: {
          color: "rgba(255,255,255,0.8)",
          interval: 0,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#0a3e98",
          },
        },
        axisTick: {
          show: false,
        },
        data: [
          "2015年",
          "2016年",
          "2017年",
          "2018年",
          "2019年",
          "2020年",
          "2021年",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "万吨",
        nameTextStyle: {
          color: "rgba(255,255,255,0.8)",
          fontSize: 12,
        },
        min: 0,
        position: "left",
        nameTextStyle: {
          color: "#fff",
          fontSize: 11,
          padding: [0, 0, 0, -40],
        },
        axisLine: {
          lineStyle: {
            color: "#0a3e98",
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          formatter: "{value}",
          textStyle: {
            color: "rgba(255,255,255,0.8)",
            fontSize: 14,
          },
        },
      },
    ],
    series: [
      {
        name: "氮肥",
        type: "bar",
        // stack: 'one',
        barWidth: 10, //柱子宽度
        barGap: 0.3, //柱子之间间距
        itemStyle: {
          normal: {
            color: "#99DDCC",
            barBorderRadius: 13,
          },
        },
        data: [47.64, 47.53, 44.35, 41.94, 39.93, 36.8, 34.62],
      },
      {
        name: "磷肥",
        type: "bar",
        barWidth: 10, //柱子宽度
        barGap: 0.3, //柱子之间间距
        itemStyle: {
          normal: {
            color: "#FFE2E2",
            barBorderRadius: 13,
          },
        },
        data: [17.72, 17.7, 16.47, 15.53, 14.88, 14.11, 13.51],
      },
      {
        name: "钾肥",
        type: "bar",
        // stack: 'one',
        barWidth: 10, //柱子宽度
        barGap: 0.3, //柱子之间间距
        itemStyle: {
          normal: {
            color: "#F5FEC0",
            barBorderRadius: 13,
          },
        },
        data: [24.86, 24.83, 23.05, 21.91, 20.77, 19.66, 18.89],
      },
      {
        name: "复合肥",
        type: "bar",
        // stack: 'one',
        barWidth: 10, //柱子宽度
        barGap: 0.3, //柱子之间间距
        itemStyle: {
          normal: {
            color: "#FF8080",
            barBorderRadius: 13,
          },
        },
        data: [33.58, 33.79, 32.45, 31.36, 30.68, 30.23, 29.61],
      },
    ],
  };

  myChart.setOption(option);
  // 图缩放设置
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
//机器投入使用
(function () {
  var myChart = echarts.init(document.getElementById("first"));
  option = {
    tooltip: {
      trigger: "axis",
      formatter: "{a}<br/>{b}:{c}" + "万台",
      axisPointer: {
        lineStyle: {
          color: "rgb(126,199,255)",
        },
      },
    },
    legend: {
      show: true,
      itemWidth: 30,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 14,
        padding: [0, 8, 0, 8],
      },
    },
    grid: {
      top: "10%",
      left: "14%",
      right: "7%",
      bottom: "10%",
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgb(41,188,245)",
          },
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,0.8)",
            fontSize: 12,
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        data: [
          "2015年",
          "2016年",
          "2017年",
          "2018年",
          "2019年",
          "2020年",
          "2021年",
        ],
      },
    ],
    yAxis: [
      {
        min: 0,
        max: 15,
        nameTextStyle: {
          color: "#fff",
          fontSize: 12,
          padding: [0, 60, 0, 0],
        },
        // minInterval: 1,
        type: "value",
        splitLine: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "rgb(41,188,245)",
          },
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: "rgba(255,255,255,0.8)",
            fontSize: 12,
          },
        },
        axisTick: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "大中型拖拉机",
        type: "line",
        symbol: "circle",
        smooth: true,
        lineStyle: {
          normal: {
            width: 1,
            color: "#00ffa2", // 线条颜色
          },
        },
        showSymbol: false,
        itemStyle: {
          normal: {
            color: "#00f0ff", //拐点颜色
            label: {
              show: true, //开启显示
              color: "#fff",
              position: "top", //在上方显示
              formatter: function (res) {
                if (res.value) {
                  return res.value;
                } else {
                  return 0;
                }
              },
            },
          },
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              // 渐变颜色
              {
                offset: 0,
                color: "rgba(36, 214, 214, 0.6)",
              },
              {
                offset: 1,
                color: "rgba(36, 214, 214, 0)",
              },
            ],
            global: false,
          },
        },
        data: ["0.39", "0.48", "0.48", "0.53", "0.5452", "0.5837", "0.6089"],
      },
      {
        name: "小型拖拉机",
        type: "line",
        showSymbol: false,
        symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
        smooth: true,
        lineStyle: {
          normal: {
            width: 1,
            color: "#3D84F7", // 线条颜色
          },
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              // 渐变颜色
              {
                offset: 0,
                color: "rgba(61, 132, 247, 0.6)",
              },
              {
                offset: 1,
                color: "rgba(61, 132, 247, 0)",
              },
            ],
            global: false,
          },
        },
        data: ["9.82", "9.77", "9.16", "8.75", "8.473", "8.1347", "7.7978"],
      },
    ],
  };

  myChart.setOption(option);
  // 图缩放设置
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
//农药和柴油投入使用
(function () {
  var myChart = echarts.init(document.getElementById("juniorservice"));
  var obj = {
    ydata: ["2014", "2015", "2016", "2017", "2018", "2019"],
    data: {
      data2: [86.25, 86.23, 86.3, 83.61, 82.37, 81.2],
      data1: [5.64, 5.58, 5.54, 5.22, 4.91, 4.55],
    },
  };
  var accountArr = [];
  obj.data.data1.forEach((item, index) => {
    accountArr.push(item + obj.data.data2[index]);
  });
  var option = {
    //鼠标滑过提示栏
    tooltip: {
      trigger: "axis",
      formatter: "{a}<br/>{c}" + "万吨",
      axisPointer: {
        type: "shadow",
      },
    },
    //图表选择栏
    legend: {
      icon: "square",
      // top: 20,
      bottom: "6%",
      left: "center",
      orient: "horizontal", //图例方向【horizontal/vertical】
      itemHeight: 14, //修改icon图形大小
      itemWidth: 14, //修改icon图形大小
      itemGap: 100,
      textStyle: {
        fontSize: 14,
        color: "#666",
        padding: [0, 8],
      },
      data: ["柴油", "农药"],
    },
    //图标离容器的距离
    grid: {
      left: "10%",
      right: "20%",
      bottom: "18%",
      top: "20",
      //是否包含坐标轴
      containLabel: true,
      //鼠标滑过是否显示信息栏，目前来看最好在grid中配置tooltip鼠标滑过信息栏
    },
    //x坐标轴
    xAxis: [
      {
        type: "value",
        name: "\n\n    (万吨)",
        nameTextStyle: {
          color: "rgba(255,255,255,0.8)",
          fontSize: 14,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgb(41,188,245)",
          },
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,0.8)",
            fontSize: 12,
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        boundaryGap: true,
        axisLine: {
          show: false,
        },
      },
    ],
    dataZoom: [
      // 横向柱状图，y轴超过15条数据就会展示出来
      {
        type: "inside", // 放大和缩小
        orient: "vertical",
        show: obj.ydata.length > 15,
        start: 0,
        end: obj.ydata.length > 15 ? 30 : 100, // 控制初始化时展示的百分比数量
        height: 15,
        left: "5%",
        right: "5%",
        bottom: "2%",
        moveHandleSize: 0, //去掉进度条顶部的横向拉动进度条
      },
    ],
    //y坐标轴
    yAxis: [
      {
        type: "category",
        name: "",
        data: obj.ydata,
        splitLine: {
          show: false,
        },
        inverse: true,
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            // 属性lineStyle控制线条样式
            color: "#ccc",
            width: 1,
            type: "solid",
          },
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,0.8)",
            fontSize: 12,
          },
        },
      },
    ],
    // 数据展示区域
    series: [
      {
        name: "农药",
        type: "bar",
        stack: "Ad",
        color: "#BD83CE",
        barWidth: 18,
        data: obj.data.data1,
        markLine: {
          symbol: "none",
          label: {
            show: true,
            position: "end",
            color: "#FC614C",
          },
          lineStyle: {
            type: "solid",
            color: "#FC614C",
            width: 2,
          },
          data: [
            {
              name: "刻度标线",
              yAxis: 122,
            },
          ],
        },
      },
      {
        name: "柴油",
        type: "bar",
        color: "#F1C6E7",
        stack: "Ad",
        barWidth: 18,
        data: obj.data.data2,
      },
    ],
  };
  myChart.setOption(option);
  // 图缩放设置
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//农用薄膜使用数据
(function () {
  var myChart = echarts.init(document.getElementById("edubalance"));
  option = {
    tooltip: {
      trigger: "axis",
      formatter: "{a}<br/>{c}" + "吨",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      top: 10,
      right: 20,
      bottom: 21,
      left: 30,
      containLabel: true,
    },
    xAxis: {
      axisLabel: {
        color: "#ffffff",
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        textStyle: {
          color: "rgba(255,255,255,0.8)",
          fontSize: 12,
        },
      },
      data: ["2014", "2015", "2016", "2017", "2018", "2019"],
    },
    yAxis: {
      min: 50000,
      max: 70000,
      type: "value",

      splitNumber: 4,
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,0.8)",
          fontSize: 14,
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(42, 236, 255, 0.44)",
          width: 1.5,
        },
      },
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        name: "农用塑料薄膜消耗量",
        data: [60932, 62067, 62424, 62415, 60002, 58507],
        type: "line",
        symbol: "none",
        lineStyle: {
          color: "#ffd918",
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: -0.2,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(255, 230, 0, 0.54)",
              },
              {
                offset: 1,
                color: "rgba(255, 230, 0, 0)",
              },
            ],
          },
        },
      },
    ],
  };

  myChart.setOption(option);
  // 图缩放设置
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
