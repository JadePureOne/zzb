// pages/index/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"gsy",
    userInfo: {},
    isShow:false,
    countDown:0,
    time:0
  },

  handleClick(){
    //跳转到list界面
    wx.switchTab({
      url: '/pages/list/list',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //做一些初始化工作，发送请求
    console.log("onLoad页面加载")
    console.log(this)
    this.getUserInfo()
    this.setData({
      time:this.getTime()
    })

  },

  getTime(){
    var timeTamp = Date.parse(new Date());
    var testTamp = Date.parse(new Date("2021-04-18"));      
    var countTamp= testTamp/1000-timeTamp/1000;
    var countDay=parseInt(countTamp/86400)
    //console.log("countDay：" + countDay+"/second");  
    return countDay    
  },

  getUserInfo(){
        //判断用户是否授权
        wx.getSetting({//获取用户的当前设置
          success: (data) => {
            console.log(data);
            if(data.authSetting["scope.address"]){
            //用户已经授权
            this.setData({
              isShow:true
            })
            }else{
            //用户未授权
            this.setData({
              isShow:false
            })
            }
          }
        })
    
        // 获取登录用户信息
        wx.getUserInfo({
          success: (data) => {//作为方法的箭头函数this指向全局window对象，而普通函数则指向调用它的对象
            console.log(data);
            //updata userInfo of data
            this.setData({userInfo: data.userInfo});//函数用于将数据从逻辑层发送到视图层 
          }
        })
  },

  handleGetUserInfo(data){
     console.log("用户点击了",data)
     //判断用户是否点击了允许
     if(data.detail.rawData){
       //当前用户点击的是允许
       this.getUserInfo();

     }
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