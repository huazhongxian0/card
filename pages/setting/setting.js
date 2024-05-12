// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {},
  unlogin(){
    const app = getApp();
    console.log(app.globalData.logincondition);
    if(app.globalData.logincondition === false){
    wx.showModal({
      title: '没有登录',
      content: '您还没有登录哦，点击确定可去登录页',
      complete: (res) => {
        if (res.cancel) {}
        if (res.confirm) {
          wx.navigateBack();
        }
      }
    })
    }else{
    app.globalData.logincondition = false;
    wx.navigateBack();
    }
 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})