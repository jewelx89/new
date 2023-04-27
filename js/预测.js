//灌溉面积
(function () {
  var myChart = echarts.init(document.getElementById("radar"));
  var option = {
    color: ["#FAE3D9", "#FFB6B9"],
    title: {
      top: 0,
      left: 0,
      text: "灌溉面积与粮食产量的关系",
      subtext: "",
      textStyle: {
        color: "#fff",
        fontSize: 20,
      },
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["灌溉面积", "粮食产量"],
      right: "0",
      icon: "circle",
      textStyle: {
        color: "#bad7df",
      },
      fontSize: 16,
    },
    grid: {
      left: "2%",
      right: "2%",
      bottom: "10%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: [
          "内蒙古",
          "北京",
          "重庆",
          "上海",
          "天津",
          "河北",
          "辽宁",
          "山西",
          "吉林",
          "黑龙江",
          "江苏",
          "浙江",
          "安徽",
          "福建",
          "江西",
          "山东",
          "河南",
          "湖北",
          "湖南",
          "广东",
          "甘肃",
          "广西",
          "贵州",
          "海南",
          "宁夏",
          "青海",
          "陕西",
          "四川",
          "西藏",
          "新疆",
          "云南",
        ],

        axisPointer: {
          type: "shadow",
        },
        axisLabel: {
          textStyle: {
            color: "#bad7df",
          },
          margin: 18,
        },
        splitLine: {
          show: false,
        },
        axisLine: {
          //  改变x轴颜色
          lineStyle: {
            color: "#fff",
          },
        },
        axisTick: {
          //坐标轴刻度相关设置。
          show: false,
        },
      },
    ],

    dataZoom: [
      {
        type: "slider",
        realtime: false,
        textStyle: {
          color: "#fff",
          fontSize: 14,
        },
        start: 0,
        end: 30,
        height: 16,
        // left: "10%", //左边的距离
        // right: "10%", //右边的距离
        bottom: 2, //右边的距离
      },
    ],
    yAxis: [
      {
        min: 0,
        max: 8220,
        type: "value",
        nameTextStyle: {
          color: "#bad7df",
        },
        name: "单位(千公顷)",
        // min: 0,
        // max: 250,
        interval: 1000,
        axisLabel: {
          formatter: "{value}",
          textStyle: {
            color: "#bad7df",
          },
        },
        splitLine: {
          show: false,
        },
        axisLine: {
          //  改变x轴颜色
          lineStyle: {
            color: "#fff",
          },
        },
        axisTick: {
          //坐标轴刻度相关设置。
          show: false,
        },
      },
      {
        type: "value",
        nameTextStyle: {
          color: "#bad7df",
        },
        name: "单位(万吨)",
        // min: 0,
        // max: 25,
        interval: 5000,
        axisLabel: {
          formatter: "{value}",
          textStyle: {
            color: "#bad7df",
          },
        },
        splitLine: {
          show: false,
        },
        axisLine: {
          //  改变x轴颜色
          lineStyle: {
            color: "#fff",
          },
        },
        axisTick: {
          //坐标轴刻度相关设置。
          show: false,
        },
      },
    ],
    series: [
      {
        name: "灌溉面积",
        type: "bar",
        itemStyle: {
          normal: {
            color: "#FFBA92",
          },
        },
        barMaxWidth: 20,
        data: [
          3199.1, 109.4, 698.3, 165, 299.1, 4470, 1632.5, 1517.4, 1905.4,
          6171.6, 4224.7, 1415.7, 4608.8, 1110.4, 2038.5, 5293.6, 5463.1, 3086,
          3192.9, 1776.5, 1338.6, 1731, 1165.5, 292.2, 552.5, 219.2, 1336.8,
          2992.2, 282.8, 4893.4, 1978.1,
        ],
      },

      {
        name: "粮食产量",
        type: "line",
        smooth: true,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            color: "#FF8080",
          },
        },
        data: [
          3840.3, 37.8, 1092.8, 94, 249.9, 3825.1, 2538.7, 1421.2, 4039.2,
          7867.7, 3746.1, 620.9, 4087.6, 506.4, 2192.3, 5500.7, 6544.2, 2764.3,
          3074.4, 1279.9, 1231.5, 1386.5, 1094.9, 146, 368.4, 109.1, 1270.4,
          3582.1, 106.2, 1735.8, 1930.3,
        ],
      },
    ],
  };

  myChart.setOption(option);
  // 图缩放设置
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//化肥
(function () {
  //1、实例化对象
  var myChart = echarts.init(document.getElementById("graduateyear"));

  var option = {
    title: {
      top: 0,
      left: 0,
      text: "化肥使用与粮食产量的关系",
      subtext: "",
      textStyle: {
        color: "#fff",
        fontSize: 20,
      },
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["化肥使用量", "粮食产量"],
      right: "0",
      icon: "circle",
      textStyle: {
        color: "#bad7df",
      },
      fontSize: 16,
    },
    grid: {
      left: "2%",
      right: "2%",
      bottom: "10%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: [
          "内蒙古",
          "北京",
          "重庆",
          "上海",
          "天津",
          "河北",
          "辽宁",
          "山西",
          "吉林",
          "黑龙江",
          "江苏",
          "浙江",
          "安徽",
          "福建",
          "江西",
          "山东",
          "河南",
          "湖北",
          "湖南",
          "广东",
          "甘肃",
          "广西",
          "贵州",
          "海南",
          "宁夏",
          "青海",
          "陕西",
          "四川",
          "西藏",
          "新疆",
          "云南",
        ],

        axisPointer: {
          type: "shadow",
        },
        axisLabel: {
          textStyle: {
            color: "#bad7df",
          },
          margin: 18,
        },
        splitLine: {
          show: false,
        },
        axisLine: {
          //  改变x轴颜色
          lineStyle: {
            color: "#fff",
          },
        },
        axisTick: {
          //坐标轴刻度相关设置。
          show: false,
        },
      },
    ],
    dataZoom: [
      {
        type: "slider",
        realtime: false,
        textStyle: {
          color: "#fff",
          fontSize: 14,
        },
        start: 0,
        end: 30,
        height: 16,
        // left: "10%", //左边的距离
        // right: "10%", //右边的距离
        bottom: 2, //右边的距离
      },
    ],
    yAxis: [
      {
        min: 0,
        max: 720,
        type: "value",
        nameTextStyle: {
          color: "#bad7df",
        },
        name: "单位(万吨)",
        // min: 0,
        // max: 250,
        interval: 100,
        axisLabel: {
          formatter: "{value}",
          textStyle: {
            color: "#bad7df",
          },
        },
        splitLine: {
          show: false,
        },
        axisLine: {
          //  改变x轴颜色
          lineStyle: {
            color: "#fff",
          },
        },
        axisTick: {
          //坐标轴刻度相关设置。
          show: false,
        },
      },
      {
        type: "value",
        nameTextStyle: {
          color: "#bad7df",
        },
        name: "单位(万吨)",
        // min: 0,
        // max: 25,
        interval: 5000,
        axisLabel: {
          formatter: "{value}",
          textStyle: {
            color: "#bad7df",
          },
        },
        splitLine: {
          show: false,
        },
        axisLine: {
          //  改变x轴颜色
          lineStyle: {
            color: "#fff",
          },
        },
        axisTick: {
          //坐标轴刻度相关设置。
          show: false,
        },
      },
    ],
    series: [
      {
        name: "化肥使用量",
        type: "bar",
        itemStyle: {
          normal: {
            color: "#b6c2ff",
          },
        },
        barMaxWidth: 20,
        data: [
          241.9, 6.3, 89.1, 6.6, 15.7, 276.9, 135, 105.6, 223, 239, 275.6, 68.3,
          284.7, 96.6, 108.6, 371, 624.7, 262.6, 219.1, 212.9, 77.1, 251.9, 76,
          40.8, 37.5, 4.9, 200.7, 207.2, 4.3, 240.7, 187.3,
        ],
      },

      {
        name: "粮食产量",
        type: "line",
        smooth: true,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            color: "#FFE180",
          },
        },
        data: [
          3840.3, 37.8, 1092.8, 94, 249.9, 3825.1, 2538.7, 1421.2, 4039.2,
          7867.7, 3746.1, 620.9, 4087.6, 506.4, 2192.3, 5500.7, 6544.2, 2764.3,
          3074.4, 1279.9, 1231.5, 1386.5, 1094.9, 146, 368.4, 109.1, 1270.4,
          3582.1, 106.2, 1735.8, 1930.3,
        ],
      },
    ],
  };

  myChart.setOption(option);
  // }, 1000);
  window.addEventListener("resize", () => {
    // 自动渲染echarts
    myChart.resize();
  });
})();

//播种面积
(function () {
  var myChart = echarts.init(document.getElementById("juniorservice"));

  option = {
    color: ["#0C65F6", "#00D68A"],
    title: {
      top: 0,
      left: 0,
      text: "播种面积与粮食产量的关系",
      subtext: "",
      textStyle: {
        color: "#fff",
        fontSize: 20,
      },
    },
    tooltip: {
      trigger: "axis",
    },
    grid: {
      left: "2%",
      right: "2%",
      top: "10%",
      bottom: "10%",
      containLabel: true,
    },
    legend: {
      icon: "rect",
      orient: "horizontal",
      left: "right",
      itemWidth: 12,
      itemHeight: 12,
      formatter: ["{a|{name}}"].join("\n"),
      textStyle: {
        fontSize: 12,
        color: "#6A93B9",
        height: 8,
        rich: {
          a: {
            verticalAlign: "bottom",
          },
        },
      },
      data: ["播种面积", "粮食产量"],
    },
    xAxis: {
      type: "category",
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.45)",
        },
      },
      axisLabel: {
        // interval:0,
        fontSize: 12,
        color: "#6A93B9",
      },
      axisTick: {
        show: false,
      },
      data: [
        "内蒙古",
        "北京",
        "重庆",
        "上海",
        "天津",
        "河北",
        "辽宁",
        "山西",
        "吉林",
        "黑龙江",
        "江苏",
        "浙江",
        "安徽",
        "福建",
        "江西",
        "山东",
        "河南",
        "湖北",
        "湖南",
        "广东",
        "甘肃",
        "广西",
        "贵州",
        "海南",
        "宁夏",
        "青海",
        "陕西",
        "四川",
        "西藏",
        "新疆",
        "云南",
      ],
    },
    dataZoom: [
      {
        type: "slider",
        realtime: false,
        textStyle: {
          color: "#fff",
          fontSize: 14,
        },
        start: 0,
        end: 30,
        height: 16,
        // left: "10%", //左边的距离
        // right: "10%", //右边的距离
        bottom: 2, //右边的距离
      },
    ],
    yAxis: {
      type: "value",
      min: 0,
      minInterval: 1,
      nameTextStyle: {
        fontSize: 12,
        color: "#BAE7FF",
        align: "center",
      },
      axisLabel: {
        formatter: "{value}",
        textStyle: {
          color: "#bad7df",
        },
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, 0.15)",
          // type: 'dashed', // dotted 虚线
        },
      },
      splitArea: { show: false },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: 12,
        fontFamily: "Bebas",
        color: "#6A93B9",
      },
    },
    series: [
      {
        type: "line",
        // showSymbol: false,
        smooth: true, // 是否曲线
        name: "播种面积", // 图例对应类别
        data: [
          6884.3, 60.9, 2013.2, 117.4, 373.5, 6428.6, 3543.6, 3138.1, 5721.3,
          14551.3, 5427.5, 1006.7, 7309.6, 835.1, 3772.8, 8355.1, 10772.3, 4686,
          4758.4, 2213, 2676.8, 2822.9, 2787.7, 271.4, 689.3, 302.4, 3004.3,
          6357.7, 186.5, 2371.7, 4191.4,
        ], // 纵坐标数据
        areaStyle: {
          // 区域颜色
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(12, 101, 246, 0.6)",
            },
            {
              offset: 1,
              color: "rgba(12, 101, 246, 0.1)",
            },
          ]),
        },
      },
      {
        type: "line",
        smooth: true,
        name: "粮食产量",
        data: [
          3840.3, 37.8, 1092.8, 94, 249.9, 3825.1, 2538.7, 1421.2, 4039.2,
          7867.7, 3746.1, 620.9, 4087.6, 506.4, 2192.3, 5500.7, 6544.2, 2764.3,
          3074.4, 1279.9, 1231.5, 1386.5, 1094.9, 146, 368.4, 109.1, 1270.4,
          3582.1, 106.2, 1735.8, 1930.3,
        ],
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(0, 214, 138, 0.6)",
            },
            {
              offset: 1,
              color: "rgba(0, 214, 138, 0.1)",
            },
          ]),
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
//水土治理面积
(function () {
  //1、实例化对象
  var myChart = echarts.init(document.getElementById("edubalance"));

  option = {
    color: ["#E5B0EA", "#F6F6F6"],
    title: {
      top: 0,
      left: 0,
      text: "水土流失治理面积与粮食产量的关系",
      subtext: "",
      textStyle: {
        color: "#fff",
        fontSize: 20,
      },
    },
    tooltip: {
      trigger: "axis",
    },
    grid: {
      left: "2%",
      right: "2%",
      bottom: "10%",
      containLabel: true,
    },
    legend: {
      icon: "rect",
      orient: "horizontal",
      left: "right",
      top: "10%",
      itemWidth: 12,
      itemHeight: 12,
      formatter: ["{a|{name}}"].join("\n"),
      textStyle: {
        fontSize: 12,
        color: "#6A93B9",
        height: 8,
        rich: {
          a: {
            verticalAlign: "bottom",
          },
        },
      },
      data: ["水土流失治理面积", "粮食产量"],
    },
    xAxis: {
      type: "category",
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.45)",
        },
      },
      axisLabel: {
        // interval:0,
        fontSize: 12,
        color: "#6A93B9",
      },
      axisTick: {
        show: false,
      },
      data: [
        "内蒙古",
        "北京",
        "重庆",
        "上海",
        "天津",
        "河北",
        "辽宁",
        "山西",
        "吉林",
        "黑龙江",
        "江苏",
        "浙江",
        "安徽",
        "福建",
        "江西",
        "山东",
        "河南",
        "湖北",
        "湖南",
        "广东",
        "甘肃",
        "广西",
        "贵州",
        "海南",
        "宁夏",
        "青海",
        "陕西",
        "四川",
        "西藏",
        "新疆",
        "云南",
      ],
    },
    dataZoom: [
      {
        type: "slider",
        realtime: false,
        textStyle: {
          color: "#fff",
          fontSize: 14,
        },
        start: 0,
        end: 30,
        height: 16,
        // left: "10%", //左边的距离
        // right: "10%", //右边的距离
        bottom: 2, //右边的距离
      },
    ],
    yAxis: {
      type: "value",
      min: 0,
      minInterval: 1,
      nameTextStyle: {
        fontSize: 12,
        color: "#BAE7FF",
        align: "center",
      },
      axisLabel: {
        formatter: "{value}",
        textStyle: {
          color: "#bad7df",
        },
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, 0.15)",
          // type: 'dashed', // dotted 虚线
        },
      },
      splitArea: { show: false },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: 12,
        fontFamily: "Bebas",
        color: "#6A93B9",
      },
    },
    series: [
      {
        type: "line",
        // showSymbol: false,
        smooth: true, // 是否曲线
        name: "水土流失治理面积", // 图例对应类别
        data: [
          15959.2, 978, 3947.3, 0, 104, 6147, 5936.1, 7731.9, 3004.1, 6269.7,
          959.9, 3702.6, 2219, 4146.5, 6333.4, 4583.1, 4141.8, 6568.5, 4244.9,
          2034.5, 10829.5, 3237.3, 7899.9, 147.3, 2567.9, 1702.2, 8350.5,
          11501.8, 804.2, 2407.1, 11092.9,
        ], // 纵坐标数据
        areaStyle: {
          // 区域颜色
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(12, 101, 246, 0.6)",
            },
            {
              offset: 1,
              color: "rgba(12, 101, 246, 0.1)",
            },
          ]),
        },
      },
      {
        type: "line",
        smooth: true,
        name: "粮食产量",
        data: [
          3840.3, 37.8, 1092.8, 94, 249.9, 3825.1, 2538.7, 1421.2, 4039.2,
          7867.7, 3746.1, 620.9, 4087.6, 506.4, 2192.3, 5500.7, 6544.2, 2764.3,
          3074.4, 1279.9, 1231.5, 1386.5, 1094.9, 146, 368.4, 109.1, 1270.4,
          3582.1, 106.2, 1735.8, 1930.3,
        ],
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(0, 214, 138, 0.6)",
            },
            {
              offset: 1,
              color: "rgba(0, 214, 138, 0.1)",
            },
          ]),
        },
      },
    ],
  };
  myChart.setOption(option);
  // }, 1000);
  window.addEventListener("resize", () => {
    // 自动渲染echarts
    myChart.resize();
  });
})();
