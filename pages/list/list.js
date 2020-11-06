// pages/list/list.js

let zy=require('../../datas/profession-data');
console.log('listPage',typeof zy, zy);
let index=0
let total=0
let provinceChange=0;
let ClassChange=0;
let provinceShow="";


Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr:[],
    province: ["江苏5"],
    class:['非师范'],
    provinceShow1:" ",
   
  },

  bindProvinceChange(e){
    console.log('省份发送选择改变，携带值为', e.detail.value)
    this.setData({
      provinceChange: e.detail.value
    })
  },  
  getPickerIndex(e){
    index=e.detail.value
    total=zy.list_data[index].total
    provinceShow=zy.list_data[index].profession
    console.log('筛选',zy.list_data[index])
    console.log('专业发送选择改变，携带值为',index)       
    console.log('college total',zy.list_data[index].total)
    console.log('专业：',provinceShow)
    this.setData({
      provinceShow1 : provinceShow,      
    })
  
    
  },
  bindClassChange(e){
    console.log('类别发送选择改变，携带值为', e.detail.value)
    this.setData({
      ClassChange: e.detail.value      
    })    
  },  


  handleProfession (){
    wx.navigateTo({
      url: '/pages/detail/detail?index='+index+'&total='+total,      
   
    })
  },

  handleProfessionDiagram (){
    wx.navigateTo({
      url: '/pages/diagram/diagram?index='+index, 
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {   
    this.setData({
      listArr:zy.list_data 
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

  }
})