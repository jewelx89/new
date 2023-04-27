//国家生产力趋势变化
(function () {
  var myChart = echarts.init(document.getElementById("chart1"));
  var option = {
    tooltip: {
      trigger: "axis",
      formatter: "{a}<br/>{b}:{c}" + "万人",
    },
    grid: {
      left: "6%",
      right: "10%",
      bottom: "10%",
      top: "10%",
      show: true, //显示边框
      borderColor: "#012f4a", //边框颜色
      containLabel: true, //显示刻度和文字
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: [
          "1978年",
          "1979年",
          "1980年",
          "1981年",
          "1982年",
          "1983年",
          "1984年",
          "1985年",
          "1986年",
          "1987年",
          "1988年",
          "1989年",
          "1990年",
          "1991年",
          "1992年",
          "1993年",
          "1994年",
          "1995年",
          "1996年",
          "1997年",
          "1998年",
          "1999年",
          "2000年",
          "2001年",
          "2002年",
          "2003年",
          "2004年",
          "2005年",
          "2006年",
          "2007年",
          "2008年",
          "2009年",
          "2010年",
          "2011年",
          "2012年",
          "2013年",
          "2014年",
          "2015年",
          "2016年",
          "2017年",
          "2018年",
          "2019年",
          "2020年",
          "2021年",
        ],
        axisLabel: {
          textStyle: {
            color: "#bad7df",
          },
          // color: "#4c9bfd",
        },
        axisLine: {
          shwo: false,
        },
      },
    ],
    yAxis: [
      {
        min: 25000,
        max: 55000,
        type: "value",
        axisLabel: {
          color: "#bad7df",
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: "#012f4a",
          },
        },
      },
    ],
    series: [
      {
        name: "乡村生产力",
        type: "line",
        smooth: true,
        lineStyle: {
          color: "#91d877",
          width: 2,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(0,216,135,0.4)", //渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(0,216,125,0.1)", //渐变线的结束颜色
              },
            ],
            false
          ),
          shadowColor: "rgba(0,0,0,0.1)",
        },
        //设置拐点
        symbol: "circle",
        //拐点大小
        symbolsize: 5,
        //设置拐点的颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221,220,107,.1)",
          borderWidth: 12,
        },
        //设置鼠标放上去显示拐点
        showSymbol: false,
        emphasis: {
          focus: "series",
        },
        emphasis: {
          focus: "series",
        },
        data: [
          30638, 31025, 31836, 32672, 33867, 34690, 35968, 37065, 37990, 39000,
          40067, 40939, 47708, 48026, 48291, 48546, 48802, 49025, 49028, 49039,
          49021, 48982, 48934, 48674, 48121, 47506, 46971, 46258, 45348, 44368,
          43461, 42506, 41418, 40193, 38967, 37774, 36646, 35404, 34194, 32850,
          31490, 30198, 28793, 27879,
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

//乡村振兴补贴占比
(function () {
  var myChart = echarts.init(document.getElementById("chart3"));
  var option = {
    tooltip: {
      trigger: "item",
      formatter: "{a}<br/>{b}:{c}" + "亿元" + "({d}%)",
    },

    legend: {
      orient: "vertical", //纵向
      x: "left", //位置
      itemWidth: 20,
      itemHeight: 14,
      data: [
        "河北",
        "山西",
        "内蒙古",
        "辽宁",
        "吉林",
        "黑龙江",
        "安徽",
        "福建",
        "江西",
        "山东",
        "河南",
        "湖北",
        "湖南",
        "广西",
        "海南",
        "重庆",
        "四川",
        "贵州",
        "云南",
        "西藏",
        "陕西",
        "甘肃",
        "青海",
        "宁夏",
        "新疆",
      ],
      textStyle: {
        color: "rgba(200,255,255,0.7)",
        fontsize: "30",
      },
    },
    color: [
      "#8AC6D1",
      "#BBDED6",
      "#FAE3D9",
      "#FFB6B9",
      "#FBD1B7",
      "#FEE9b2",
      "#F9FCE1",
      "#D3F6F3",
      "#C6F1D6",
      "#E0F5B9",
      "#FFBA92",
      "#FF8080",
      "#FDDEDE",
      "#F5FEC0",
      "#CAF2D7",
      "#60A9A6",
    ],
    series: [
      {
        name: "补贴占比",
        type: "pie",
        center: ["55%", "50%"],
        radius: ["38%", "80%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#B6B4C2",
          // borderColor: "#F3DBCf",
          // borderColor: "#C2C4B6",
          borderWidth: 4,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 25,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 42.76, name: "河北" },
          { value: 45.04, name: "山西" },
          { value: 35.26, name: "内蒙古" },
          { value: 9.08, name: "辽宁" },
          { value: 21.81, name: "吉林" },
          { value: 28.3, name: "黑龙江" },
          { value: 45.23, name: "安徽" },
          { value: 6.08, name: "福建" },
          { value: 40.96, name: "江西" },
          { value: 10.7, name: "山东" },
          { value: 66.4, name: "河南" },
          { value: 66.89, name: "湖北	" },
          { value: 68.05, name: "湖南" },
          { value: 112.83, name: "广西" },
          { value: 20.76, name: "海南" },
          { value: 33.76, name: "重庆	" },
          { value: 132.67, name: "四川" },
          { value: 144.22, name: "贵州" },
          { value: 173.64, name: "云南	" },
          { value: 94.61, name: "西藏	" },
          { value: 76.17, name: "陕西	" },
          { value: 126.48, name: "甘肃	" },
          { value: 44.86, name: "青海	" },
          { value: 35.14, name: "宁夏	" },
          { value: 149.1, name: "新疆	" },
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

//柱状折线图
(function () {
  var myChart = echarts.init(document.getElementById("chart2"));

  var option = {
    tooltip: {
      trigger: "item",
      formatter: "{a}<br/>{b}:{c}" + "万吨",
      axisPointer: {
        type: "shadow",
      },
    },
    // legend: {
    //   data: ["line", "bar"],
    //   textStyle: {
    //     color: "#37A2FF",
    //   },
    // },
    grid: {
      left: "6%",
      right: "10%",
      bottom: "10%",
      top: "10%",
      show: true, //显示边框
      borderColor: "#012f4a", //边框颜色
      containLabel: true, //显示刻度和文字
    },
    xAxis: {
      data: [
        "2008年",
        "2009年",
        "2010年",
        "2011年",
        "2012年",
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
      axisLine: {
        lineStyle: {
          color: "#bad7df",
        },
      },
    },
    yAxis: {
      min: 50000,
      max: 70000,
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: "#bad7df",
        },
      },
    },
    series: [
      {
        name: "粮食总产量",
        type: "line",
        smooth: true,
        showAllSymbol: false,
        symbol: "emptyCircle",
        symbolSize: 5,
        data: [
          53434.27, 53940.85, 55911.3, 58849.33, 61222.62, 59952.22, 63964.86,
          66060.27, 66043.5, 66160.73, 65789.23, 66384.32, 66949.14, 68284.77,
          68652.8,
        ],
      },
      // {
      //   name: "bar",
      //   type: "bar",
      //   barWidth: 10,
      //   itemStyle: {
      //     borderRadius: 5,
      //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      //       { offset: 0, color: "#14c8d4" },
      //       { offset: 1, color: "#43eec6" },
      //     ]),
      //   },
      //   data: [
      //     53434.27, 53940.85, 55911.3, 58849.33, 61222.62, 59952.22, 63964.86,
      //     66060.27, 66043.5, 66160.73, 65789.23, 66384.32, 66949.14, 68284.77,
      //     68652.8,
      //   ],
      // },
      {
        name: "粮食总产量",
        type: "bar",
        barGap: "-100%",
        barWidth: 10,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "rgba(10,200,212,1)" },
            { offset: 0.2, color: "rgba(10,200,212,1)" },
            { offset: 1, color: "rgba(10,200,212,1)" },
          ]),
        },
        z: -12,
        data: [
          53434.27, 53940.85, 55911.3, 58849.33, 61222.62, 59952.22, 63964.86,
          66060.27, 66043.5, 66160.73, 65789.23, 66384.32, 66949.14, 68284.77,
          68652.8,
        ],
      },
      {
        name: "粮食总产量",
        type: "pictorialBar",
        symbol: "rect",
        itemStyle: {
          color: "#0f375f",
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: [
          53434.27, 53940.85, 55911.3, 58849.33, 61222.62, 59952.22, 63964.86,
          66060.27, 66043.5, 66160.73, 65789.23, 66384.32, 66949.14, 68284.77,
          68652.8,
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

//粮食产量分布地图
(function () {
  var myChart = echarts.init(document.getElementById("chart_center"));
  var data = [
    {
      name: "北京",
      selected: false,
      value: 45.4,
    },
    {
      name: "天津",
      selected: false,
      value: 256.2,
    },
    {
      name: "上海",
      selected: false,
      value: 95.6,
    },
    {
      name: "重庆",
      selected: false,
      value: 1072.8,
    },
    {
      name: "河北",
      selected: false,
      value: 3865.1,
    },
    {
      name: "河南",
      selected: false,
      value: 6789.4,
    },
    {
      name: "云南",
      selected: false,
      value: 1958.0,
    },
    {
      name: "辽宁",
      selected: false,
      value: 2484.5,
    },
    {
      name: "黑龙江",
      selected: false,
      value: 7763.1,
    },
    {
      name: "湖南",
      selected: false,
      value: 3018.0,
    },
    {
      name: "安徽",
      selected: false,
      value: 4100.1,
    },
    {
      name: "山东",
      selected: false,
      value: 5543.8,
    },
    {
      name: "新疆",
      selected: false,
      value: 1813.5,
    },
    {
      name: "江苏",
      selected: false,
      value: 3769.1,
    },
    {
      name: "浙江",
      selected: false,
      value: 621.0,
    },
    {
      name: "江西",
      selected: false,
      value: 2151.9,
    },
    {
      name: "湖北",
      selected: false,
      value: 2741.1,
    },
    {
      name: "广西",
      selected: false,
      value: 1393.1,
    },
    {
      name: "甘肃",
      selected: false,
      value: 1265.0,
    },
    {
      name: "山西",
      selected: false,
      value: 1464.3,
    },
    {
      name: "内蒙古",
      selected: false,
      value: 3900.6,
    },
    {
      name: "陕西",
      selected: false,
      value: 1297.9,
    },
    {
      name: "吉林",
      selected: false,
      value: 4080.8,
    },
    {
      name: "福建",
      selected: false,
      value: 508.7,
    },
    {
      name: "贵州",
      selected: false,
      value: 1114.6,
    },
    {
      name: "广东",
      selected: false,
      value: 1291.5,
    },
    {
      name: "青海",
      selected: false,
      value: 107.3,
    },
    {
      name: "西藏",
      selected: false,
      value: 107.3,
    },
    {
      name: "四川",
      selected: false,
      value: 3510.5,
    },
    {
      name: "宁夏",
      selected: false,
      value: 375.8,
    },
    {
      name: "海南",
      selected: false,
      value: 146.6,
    },
    {
      name: "台湾",
      selected: false,
      value: 219,
    },
  ]; //各省地图颜色数据依赖value

  option = {
    tooltip: {
      trigger: "item",
      formatter: "{a}<br/>{b}:{c}" + "万吨",
    },
    // 游标
    visualMap: {
      // orient: 'horizontal', //横置
      type: "continuous",
      itemWidth: 16,
      itemHeight: 100,
      seriesIndex: [0],
      min: 40,
      max: 8000,
      calculable: true, //开启游标
      left: 30,
      bottom: 48,
      inRange: {
        color: ["#C6F1D6", "#E0F5B9", "#FFBA92", "#FF8080"],
      },
      textStyle: {
        color: "#ffffff",
        fontSize: 12,
      },
    },

    geo: {
      map: "china",
      roam: false, //开关可移动可放大
    },

    series: [
      {
        name: "粮食总产量",
        type: "map",
        mapType: "china",
        showLegendSymbol: false, //去掉指示点
        itemStyle: {
          normal: {
            borderWidth: 1, //区域边框宽度
            borderColor: "#00a6dc", //区域边框颜色
            areaColor: "#224E7F", //区域颜色
            label: {
              show: false, //是否显示各省名称
              textStyle: {
                color: "#bad7df", //显示各省名称颜色
              },
            },
          },
          emphasis: {
            areaColor: "#f0690f", //区域颜色，鼠标悬停颜色
            label: {
              show: true, //鼠标悬浮时是否显示各省名称
              textStyle: {
                color: "#fdf1f6", //鼠标悬浮时显示各省名称的颜色
              },
            },
          },
        },
        data: data,
      },
    ],
  };

  myChart.setOption(option);
  myChart.on("click", function (params) {
    var province = params.name; //获取选中省市的省市名称
    switch (province) {
      case "新疆":
        window.location.href = "省份页面/新疆.html";
        break;
      case "西藏":
        location.href = "省份页面/西藏.html";
        break;
      case "云南":
        location.href = "省份页面/云南.html";
        break;
      case "广西":
        location.href = "省份页面/广西.html";
        break;
      case "广东":
        location.href = "省份页面/广东.html";
        break;
      case "海南":
        location.href = "省份页面/海南.html";
        break;
      case "福建":
        location.href = "省份页面/福建.html";
        break;
      case "浙江":
        location.href = "省份页面/浙江.html";
        break;
      case "上海":
        location.href = "省份页面/上海.html";
        break;
      case "江苏":
        location.href = "省份页面/江苏.html";
        break;
      case "山东":
        location.href = "省份页面/山东.html";
        break;
      case "天津":
        location.href = "省份页面/天津.html";
        break;
      case "北京":
        location.href = "省份页面/北京.html";
        break;
      case "辽宁":
        location.href = "省份页面/辽宁.html";
        break;
      case "吉林":
        location.href = "省份页面/吉林.html";
        break;
      case "黑龙江":
        location.href = "省份页面/黑龙江.html";
        break;
      case "内蒙古":
        location.href = "省份页面/内蒙古.html";
        break;
      case "宁夏":
        location.href = "省份页面/宁夏.html";
        break;
      case "青海":
        location.href = "省份页面/青海.html";
        break;
      case "甘肃":
        location.href = "省份页面/甘肃.html";
        break;
      case "四川":
        location.href = "省份页面/四川.html";
        break;
      case "重庆":
        location.href = "省份页面/重庆.html";
        break;
      case "贵州":
        location.href = "省份页面/贵州.html";
        break;
      case "湖南":
        location.href = "省份页面/湖南.html";
        break;
      case "湖北":
        location.href = "省份页面/湖北.html";
        break;
      case "河南":
        location.href = "省份页面/河南.html";
        break;
      case "陕西":
        location.href = "省份页面/陕西.html";
        break;
      case "山西":
        location.href = "省份页面/山西.html";
        break;
      case "河北":
        location.href = "省份页面/河北.html";
        break;
      case "安徽":
        location.href = "省份页面/安徽.html";
        break;
      case "江西":
        location.href = "省份页面/江西.html";
        break;
      default:
        break;
    }
  });
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//我国主要粮食占比
(function () {
  var myChart = echarts.init(document.getElementById("chart6"));
  //2、指定配置项和数据
  var datas = [
    {
      name: "玉米",
      value: 2512.89,
    },
    {
      name: "稻谷",
      value: 1734.44,
    },
    {
      name: "小麦",
      value: 1331.56,
    },
    {
      name: "大豆",
      value: 484.82,
    },
    {
      name: "其他",
      value: 757.96,
    },
  ];
  function compare(propertyName) {
    return function (object1, object2) {
      var value1 = object1[propertyName];
      var value2 = object2[propertyName];
      if (value2 < value1) {
        return 1;
      } else if (value2 > value1) {
        return -1;
      } else {
        return 0;
      }
    };
  }
  datas = datas.sort(compare("value")).reverse();
  var seriesData = [];
  var maxValue = datas[0].value;
  var colors = [
    "#49CCFF",
    "#20D3AB",
    "#FDD56A",
    "#49CCFF",
    "#20D3AB",
    "#FDD56A",
    "#49CCFF",
    "#20D3AB",
    "#FDD56A",
    "#49CCFF",
    "#20D3AB",
    "#FDD56A",
  ];
  var colors2 = [
    "#49CCFF88",
    "#20D3AB88",
    "#FDD56A88",
    "#49CCFF88",
    "#20D3AB88",
    "#FDD56A88",
    "#49CCFF88",
    "#20D3AB88",
    "#FDD56A88",
    "#49CCFF88",
    "#20D3AB88",
    "#FDD56A88",
  ];
  for (var i = 0; i < datas.length; i++) {
    var ss = 120;
    if (i < 3) {
      ss = 100 - i * 10;
    } else if (3 <= i < 10) {
      ss = 100 - i * 10;
    } else {
      ss = 100 - i * 4;
    }
    var item = {
      name: datas[i].name,
      value: datas[i].value,
      symbolSize: ss,
      draggable: true,
      label: {
        show: true,
        formatter: ["{title|{b}}", "{name|{c}}"].join("\n"),
        rich: {
          title: {
            fontSize: 12,
            color: "#fff",
            textBorderColor: colors[i],
            textBorderWidth: 2,
            textAlign: "center",
            align: "center",
          },
          name: {
            fontSize: 12,
            color: "#fff",
            textBorderColor: colors[i],
            textBorderWidth: 2,
            textAlign: "center",
            align: "center",
          },
        },
      },
      itemStyle: {
        color: {
          type: "radial",
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [
            {
              offset: 0,
              color: colors[i],
            },
            {
              offset: 1,
              color: colors2[i],
            },
          ],
          global: false,
        },
        borderColor: colors[i],
        shadowBlur: 20,
        shadowColor: colors[i],
        borderWidth: 2,
      },
    };

    seriesData.push(item);
  }
  option = {
    tooltip: {
      formatter: function (params) {
        console.log(params);
        var str =
          params.marker +
          "" +
          params.data.name +
          "</br>" +
          "总产量：" +
          params.data.value +
          "万吨</br>";
        return str;
      },
    },
    animationDurationUpdate: function (idx) {
      // 越往后的数据延迟越大
      return idx * 1;
    },
    animationEasingUpdate: "bounceIn",
    color: ["#fff", "#fff", "#fff"],
    grid: {
      bottom: "2%",
    },
    series: [
      {
        type: "graph",
        layout: "force",
        force: {
          repulsion: 130,
          edgeLength: 10,
        },
        roam: true,
        data: seriesData,
      },
    ],
  };

  //3、配置项给实例对象
  myChart.setOption(option);
  //4、图标适应大小
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//主要产粮省份
(function () {
  var myChart = echarts.init(document.getElementById("chart4"));
  var myColor = ["#1089E7", "#F19034", "#19D0E3", "#FF8080", "#8878F6"];
  var option = {
    // tooltip: {
    //   trigger: "axis",
    //   axisPointer: {
    //     type: "shadow",
    //   },
    // },
    legend: {},
    grid: {
      left: "6%",
      right: "10%",
      bottom: "10%",
      top: "10%",
      containLabel: true,
    },
    xAxis: {
      show: false,
      name: "amount",
    },
    yAxis: [
      {
        type: "category",
        data: ["吉林", "安徽", "山东", "河南", "黑龙江"],
        axisLine: {
          //不显示y轴的线
          show: false,
        },
        axisLabel: {
          //y轴文字变白色
          color: "#FFDAB9",
        },
        axisTick: {
          show: false,
        },
      },
      {
        type: "category",
        data: [
          "4080.8万吨",
          "4100.1万吨",
          "5543.8万吨",
          "6789.4万吨",
          "7748.9万吨",
        ],
        axisLine: {
          //不显示y轴的线
          show: false,
        },
        axisLabel: {
          //y轴文字变白色
          color: "#FFDAB9",
        },
        axisTick: {
          show: false,
        },
      },
    ],
    series: [
      {
        type: "bar",
        data: [5.94, 5.97, 8.08, 9.89, 11.31],
        yAxisIndex: 0,
        itemStyle: {
          barBorderRadius: 20,
          color: "#FFDAB9",
          color: function (params) {
            return myColor[params.dataIndex];
          },
        },
        barCateGoryGap: 50,
        barWidth: 10,
        label: {
          show: true,
          position: "inside",
          formatter: "{c}%",
        },
      },
      {
        type: "bar",
        data: [15, 15, 15, 15, 15],
        yAxisIndex: 1,
        itemStyle: {
          barBorderRadius: 20,
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 2,
          barBorderRadius: 18,
        },
        barCateGoryGap: 50,
        barWidth: 14,
      },
    ],
  };
  //3、配置项给实例对象
  myChart.setOption(option);
  //4、图标适应大小
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//农用机器投入量
(function () {
  var myChart = echarts.init(document.getElementById("chart5"));
  var option = {
    color: ["#59c2f1", "#ce3f75"],
    tooltip: {
      trigger: "axis",
      formatter: "{a}<br/>{b}:{c}" + "万台",
    },
    legend: {
      textStyle: {
        color: "#4c9bfd",
      },
      rigt: "10%",
    },
    grid: {
      left: "4%",
      right: "6%",
      bottom: "14%",
      top: "8%",
      show: true, //显示边框
      borderColor: "#012f4a", //边框颜色
      containLabel: true, //显示刻度和文字
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "2015年",
        "2016年",
        "2017年",
        "2018年",
        "2019年",
        "2020年",
        "2021年",
      ],
      axisLabel: {
        color: "#bad7df",
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        shwo: false,
      },
    },
    yAxis: {
      max: 2500,
      axisLabel: {
        color: "#bad7df",
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        shwo: false,
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a",
        },
      },
      type: "value",
    },
    series: [
      {
        name: "农用大中型拖拉机",
        type: "line",
        smooth: true, //线段变圆滑
        data: [606.65, 644.69, 669.46, 420.46, 443.47, 476.91, 497.7],
      },
      {
        name: "农用小型拖拉机",
        type: "line",
        smooth: true, //线段变圆滑
        data: [1703.04, 1671.61, 1634.24, 1818.26, 1780.42, 1727.6, 1674.99],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//人均粮食消费量
(function () {
  //1、实例化对象
  var myChart = echarts.init(document.getElementById("map"));

  var option = {
    title: {
      top: 0,
      left: 0,
      text: "各省人均粮食消费量",
      subtext: "",
      textStyle: {
        color: "#fff",
      },
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["城镇人均粮食消费", "乡村人均居民消费", "各省粮食生产占比"],
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
          "北京",
          "天津",
          "河北",
          "山西",
          "内蒙古",
          "辽宁",
          "吉林",
          "黑龙江",
          "上海",
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
          "广西",
          "海南",
          "重庆",
          "四川",
          "贵州",
          "云南",
          "西藏",
          "陕西",
          "甘肃",
          "青海",
          "宁夏",
          "新疆",
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
    // dataZoom: [
    //   //滑动条
    //   {
    //     xAxisIndex: 0, //这里是从X轴的0刻度开始
    //     show: true, //是否显示滑动条，不影响使用
    //     type: "slider", // 这个 dataZoom 组件是 slider 型 dataZoom 组件
    //     startValue: 0, // 从头开始。
    //     endValue: 8, // 一次性展示6个
    //     height: 8, //组件高度
    //     bottom: 18,
    //     borderColor: "rgba(43,48,67,.8)",
    //     fillerColor: "#19D4AE",
    //     showDataShadow: false, //是否显示数据阴影 默认auto
    //     backgroundColor: "#f4f6f8",
    //     showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
    //     realtime: false, //是否实时更新
    //     filterMode: "filter",
    //   },
    // ],
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
        min: 100,
        max: 220,
        type: "value",
        nameTextStyle: {
          color: "#fff",
        },
        name: "千克(kg)",
        // min: 0,
        // max: 250,
        interval: 50,
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
        name: "占比率(%)",
        // min: 0,
        // max: 25,
        interval: 5,
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
        name: "城镇人均粮食消费",
        type: "bar",
        itemStyle: {
          normal: {
            color: "#96edc1",
          },
        },
        barMaxWidth: 20,
        data: [
          135.0, 155.8, 189.3, 173.6, 198.3, 193.6, 174.0, 219.6, 168.6, 157.3,
          185.5, 172.5, 171.4, 193.1, 155.4, 158.3, 159.2, 189.3, 150.9, 171.3,
          133.9, 198.2, 174.4, 146.5, 155.7, 171.1, 175.2, 178.6, 140.7, 146.5,
          149.1,
        ],
      },
      {
        name: "乡村人均居民消费",
        itemStyle: {
          normal: {
            color: "#b6c2ff",
            // barBorderRadius: [10, 10, 0, 0]
          },
        },
        barMaxWidth: 20,
        type: "bar",
        data: [
          106.0, 97.2, 159.4, 139.4, 132.9, 145.2, 142.2, 134.8, 111.4, 122.6,
          135.7, 131.4, 103.7, 156.9, 117.5, 133.9, 116.6, 135.5, 94.5, 118.6,
          98.8, 138.0, 118.3, 114.0, 121.4, 134.0, 134.4, 147.5, 104.8, 100.0,
          113.0,
        ],
      },
      {
        name: "各省粮食生产占比",
        type: "line",
        smooth: true,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            color: "#FFE180",
          },
        },
        data: [
          0.0554, 0.366, 5.6017, 2.0813, 5.6239, 3.7178, 5.9152, 11.5218,
          0.9093, 5.9861, 0.7416, 3.2105, 8.0555, 9.5836, 4.0482, 4.5023,
          1.8743, 0.1377, 0.2138, 1.6003, 5.2458, 1.6034, 5.486, 2.0305, 2.8268,
          0.156, 1.8604, 1.8035, 0.1598, 0.5395, 2.542,
        ],
      },
    ],
  };

  // setInterval(function () {
  //   // 每次向后滚动一个，最后一个从头开始。
  //   if (option.dataZoom[0].endValue == 30) {
  //     option.dataZoom[0].endValue = 8;
  //     option.dataZoom[0].startValue = 0;
  //   } else {
  //     option.dataZoom[0].endValue = option.dataZoom[0].endValue + 1;
  //     option.dataZoom[0].startValue = option.dataZoom[0].startValue + 1;
  //   }
  myChart.setOption(option);
  // }, 1000);
  window.addEventListener("resize", () => {
    // 自动渲染echarts
    myChart.resize();
  });
})();
