// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
logincondition:"",
token:'',
history:[],
screenHeight:10
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  const app = new getApp();
  console.log(app.globalData.token);
  this.setData({
    screenHeight:app.globalData.screenHeight,
    token:app.globalData.token
  })
  wx.request({
    url: 'https://hez1.cn:8080/wx/getHistoryMessage',
    method:"POST", 
    header:{
      'content-type':'appLication/json',
       token: this.data.token
    },
    data:{
      pageSize:1000,
      pageNumber:0
    },
    success:(result)=>{
      console.log("历史记录",result);
      const a= [];
      let aindex = 0;
      for (let index =result.data.data.dataList.length-1; index >= 0 ; index--) {
        a[aindex] = result.data.data.dataList[index]
        aindex++;
      }
      this.setData({
        history:a
      })
    },
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

  },
  toshare(r){
    console.log(r.currentTarget.dataset.index);
  wx.navigateTo({
    url: `../share/share?url=${encodeURIComponent(r.currentTarget.dataset.index.imageFrontUrl)}&oppositeurl=${encodeURIComponent(r.currentTarget.dataset.index.imageContraryUrl)}&scale=${encodeURIComponent(r.currentTarget.dataset.index.scale)}&fontSize=${encodeURIComponent(r.currentTarget.dataset.index.fontSize)}&text=${encodeURIComponent(r.currentTarget.dataset.index.text)}&x=${encodeURIComponent(r.currentTarget.dataset.index.x)}&y=${encodeURIComponent(r.currentTarget.dataset.index.y)}&leading=${encodeURIComponent(r.currentTarget.dataset.index.lineMargins)}`,
  })
  },
  tomake(r){
   console.log(r);
    wx.navigateTo({
      url: `../make/make?dir=${1}&url=${encodeURIComponent(r.currentTarget.dataset.index.imageFrontUrl)}&oppositeurl=${encodeURIComponent(r.currentTarget.dataset.index.imageContraryUrl)}&scale=${encodeURIComponent(r.currentTarget.dataset.index.scale)}&fontSize=${encodeURIComponent(r.currentTarget.dataset.index.fontSize)}&text=${encodeURIComponent(r.currentTarget.dataset.index.text)}&x=${encodeURIComponent(r.currentTarget.dataset.index.x)}&y=${encodeURIComponent(r.currentTarget.dataset.index.y)}&leading=${encodeURIComponent(r.currentTarget.dataset.index.lineMargins)}`,
    })
  }
})