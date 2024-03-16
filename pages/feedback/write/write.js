// pages/feedback/write/write.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    input:"请输入您的评论",
    token:{}
  },
  yanzheng(a){
  },

  input1(e){
    this.setData({
      input:e.detail.value,
    })
  },
  
  send(){
    if(this.data.input.trim() === ""){
      console.log(1);
    wx.showModal({
      title: '!',
      content: '输入不要为空哦！',
      complete: (res) => {
        if (res.cancel) {
          
        }
        if (res.confirm) {
          
        }
      }
    })
    }else{
      
   wx.request({
     url: 'https://hez1.cn:8080/wx/putComment',
     method:'POST',
     header:{
      'content-type':'appLication/json',
       token:this.data.token
     },
     data:{
     comment:this.data.input
     },
     success:(res)=>{
   console.log(res);
     },
   })
  }
  wx.navigateBack();
},
  on(e){
if(e.detail.value == "请输入您的评论"){
  this.setData({
    input:""
  })
}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      const app = getApp();
      this.setData({
        token:app.globalData.token
      })
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