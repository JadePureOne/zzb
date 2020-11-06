// pages/diagram/diagram.js
var wxCharts = require('../../pages/utils/wxcharts.js');
let datas = require('../../datas/profession-data');
console.log(typeof datas, datas);
var app = getApp();
var lineChart = null;
var startPos = null;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    diagramArr:[],
    diagramIndex:null
  },
  touchHandler: function (e) {
      lineChart.scrollStart(e);
  },
  moveHandler: function (e) {
      lineChart.scroll(e);
  },
  touchEndHandler: function (e) {
      lineChart.scrollEnd(e);
      lineChart.showToolTip(e, {
          format: function (item, category) {
              return category + ' ' + item.name + ':' + item.data 
          }
      });        
  },
  createSimulationData: function () {
    
    var categories = [];
    var data = [];

    if(this.data.diagramArr.college_score){
        categories.push(this.data.diagramArr.college.substring(3,13))
        data.push(parseInt(this.data.diagramArr.college_score.substring(3,6)))
    }
    if(this.data.diagramArr.college_score2){
        categories.push(this.data.diagramArr.college2.substring(3,13))
        data.push(parseInt(this.data.diagramArr.college_score2.substring(3,6)))
    }
    if(this.data.diagramArr.college_score3){
        categories.push(this.data.diagramArr.college3.substring(3,13))
        data.push(parseInt(this.data.diagramArr.college_score3.substring(3,6)))
    }
    if(this.data.diagramArr.college_score4){
        categories.push(this.data.diagramArr.college4.substring(3,13))
        data.push(parseInt(this.data.diagramArr.college_score4.substring(3,6)))
    }
    if(this.data.diagramArr.college_score5){
        categories.push(this.data.diagramArr.college5.substring(3,13))
        data.push(parseInt(this.data.diagramArr.college_score5.substring(3,6)))
    }

    console.log(this.data.diagramArr)

    return {
        categories: categories,
        data: data
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let diagramIndex=options.index
    console.log(diagramIndex)
    this.setData({
        diagramArr:datas.list_data[diagramIndex],      
        diagramIndex
    })
    console.log(datas.list_data[diagramIndex])

    var windowWidth = 320;
        try {
            var res = wx.getSystemInfoSync();
            windowWidth = res.windowWidth;
        } catch (e) {
            console.error('getSystemInfoSync failed!');
        }
        
        var simulationData = this.createSimulationData();
        lineChart = new wxCharts({
            canvasId: 'lineCanvas',
            type: 'line',
            categories: simulationData.categories,
            animation: false,
            series: [{
                name: '专业分数线',
                data: simulationData.data,
                format: function (val) {
                    if(val>0){
                        return val.toFixed(1) + '分';
                    }
                    return "未公布";
                }
            }],
            xAxis: {
                disableGrid: false
            },
            yAxis: {
                title: '分',
                format: function (val) {
                    return val.toFixed(2);
                },
                min: 0
            },
            width: windowWidth,
            height: 200,
            dataLabel: true,
            dataPointShape: true,
            enableScroll: true,
            extra: {
                lineStyle: 'curve'
            }
        });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})