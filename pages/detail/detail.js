// pages/detail/detail.js

let datas = require('../../datas/profession-data');
console.log(typeof datas, datas);
let index=[];

Page({

  /**
   * 页面的初始数据
   */
  data: {
     detailArr:[],
     proIndex:null,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    //获取list传的下标
    let proIndex=options.index   
    let collegeTotal=options.total
    console.log('index=',proIndex)
    console.log('collegeTotal=',collegeTotal)
    //更新data数据
    this.setData ({
      detailArr:datas.list_data[proIndex],
      proIndex
    })

    
    

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

  },

  //处理点击分享功能
  handleShare(){
    wx.showActionSheet({
      itemList:[
        '分享到朋友圈','分享给qq好友','分享到qq空间'
      ]
    })
  }

})