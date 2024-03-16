// pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    input:"",
    refresh: 0,
    feedbacktext:[],
  },
  refresh(){
    this.setData({
      refresh:1
    });
    this.onLoad();
    this.setData({
      refresh:0
    });
  },
  gotowrite(){
    wx.navigateTo({
      url: './write/write',
    })
  },
  feedback() {
    let a = [this.data.input]
    this.data.feedbacktext =this.data.feedbacktext.concat(a);
    console.log(this.data.feedbacktext);
    wx.request({
      url: 'https://hez1.cn/wx/putComment',
      
      method:'POST',
      header:{
        token:App.globalData.token
      },
      body:{
        commet:this.data.feedbacktext
      },
      success:(e)=>{
        console.log(e);
      },
      fail:(e)=>{
        console.log(e);
      }
    })
},
getfeedbacktext(){
  const b = getApp();
wx.request({
  url: 'https://hez1.cn:8080/wx/getComment',
  method:'POST',
  header:{
token:b.globalData.token
  }, 
  success:(result)=>{
      console.log(10,result);
      this.setData({
        feedbacktext:result.data.data
      })
  }
})
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
    this.getfeedbacktext();
    console.log(1);
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