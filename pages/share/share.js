// pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:{},
    oppositeurl:{},
    scale:{},
    fontSize:{},
    text:{},
    x:{},
    y:{},
    styleUrl:{},
    styleText:{},
    leading:{},
    urlRotate:0,
    oppositeUrlRotate:180,
    oppositeUrlZindex:1,
    UrlZindex:1,
    switch:0,
    buttonText:"查看背面"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
   this.setData({
   url:decodeURIComponent(options.url),
   oppositeurl:decodeURIComponent(options.oppositeurl),
   scale:decodeURIComponent(options.scale)*1.171875,   
   fontSize:decodeURIComponent(options.fontSize),
   text:decodeURIComponent(options.text),
   x:decodeURIComponent(options.x),
   y:decodeURIComponent(options.y),
   leading:decodeURIComponent(options.leading),
  })
  const a = getApp();
  let b = 750/a.globalData.screen;
  console.log(b,a.globalData.screen);
  this.setData({
   styleText:`width:${200*this.data.scale}rpx;height:${200*this.data.scale}rpx;font-size:${this.data.fontSize*this.data.scale}rpx;line-height:${this.data.leading*this.data.scale}rpx;left:${this.data.x*b*1.171875}rpx;top:${this.data.y*b*1.171875}rpx;border: ${1*this.data.scale}rpx solid rgba(5, 5, 5,0);`
  })
  // height:${this.data.y*b*1.171875}
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
  onShareAppMessage: function( options ){
    var that = this;
    // 设置菜单中的转发按钮触发转发事件时的转发内容
    let shareObj = {
      title: "您收到一张贺卡",    // 默认是小程序的名称(可以写slogan等)
      path: `/share/share?url=${encodeURIComponent(this.data.url)}&oppositeurl=${encodeURIComponent(this.data.oppositeurl)}&scale=${encodeURIComponent(this.data.scale)}&fontSize=${encodeURIComponent(this.data.fontSize)}&text=${encodeURIComponent(this.data.text)}&x=${encodeURIComponent(this.data.x)}&y=${encodeURIComponent(this.data.y)}&leading=${encodeURIComponent(this.data.leading)}`,   // 默认是当前页面，必须是以‘/'开头的完整路径
   //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
      success: function(res){// 转发成功之后的回调
        console.log('转发成功');
      },
      fail: function(){
        // 转发失败之后的回调
        if(res.errMsg == 'shareAppMessage:fail cancel'){
          // 用户取消转发
        }else if(res.errMsg == 'shareAppMessage:fail'){
          // 转发失败，其中 detail message 为详细失败信息
        }
      },

    };
    // 来自页面内的按钮的转发
    if ( options.from == 'button' ){
      var eData = options.target.dataset;
     return{
       title:"您收到一张贺卡",
       path: `pages/share/share?url=${encodeURIComponent(this.data.url)}&oppositeurl=${encodeURIComponent(this.data.oppositeurl)}&scale=${encodeURIComponent(this.data.scale)}&fontSize=${encodeURIComponent(this.data.fontSize)}&text=${encodeURIComponent(this.data.text)}&x=${encodeURIComponent(this.data.x)}&y=${encodeURIComponent(this.data.y)}&leading=${encodeURIComponent(this.data.leading)}`,
     }
  
    }

    return shareObj;
  },
  turnOver(){
       this.setData({
         urlRotate:this.data.urlRotate+180,
         oppositeUrlRotate:this.data.oppositeUrlRotate+180,
       })
       if(this.data.switch == 0){
     this.setData({
       UrlZindex:0,
       switch:1,
       buttonText:"返回正面"
     })
      }else{
        this.setData({
          UrlZindex: 1,
          switch:0,
          buttonText:"查看背面"
        })
      }
    }
})