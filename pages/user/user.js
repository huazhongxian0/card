// pages/user/user.js
Page({
  data: {
  show: false,
  rawData:'',
  signature:'',
  code:'',
  loginposition:{},
  logincondition:false,
  scale:{},
  height:{},
  token:{},
  avatar:'../../iconfonts/头像.png'
  },

  showPopup() {
    this.setData({ show: true });
  },
  test:function(){
    console.log(tesr);
  },
  onClose() {
    this.setData({ show: false });
  },

  onlogin(){
      wx.login({ 
          success: (res) => {
              this.setData({
                  code:res.code
              })
              wx.showModal({
                title: '温馨提示',
                content: '微信授权登录后才能正常使用小程序功能',
                complete: (res) => {
                  if (res.cancel) {}
                  if (res.confirm) {
                      wx.getUserProfile({
                        desc:'您的信息仅作为个人展示噢',
                        success: (res) => {
                            console.log(res);
                            this.setData({
                              rawData: res.rawData,
                              signature: res.signature,
                              avatar: res.userInfo.avatarUrl,
                              wxname: res.userInfo.nickName
                            })
                      //  this.setData({
                      //       avatar: res.userInfo.avatarUrl,
                      //       wxname: res.userInfo.nickName
                      //   })
                           wx.request({
                              url: 'https://hez1.cn:8080/wx/login',
                              method:'POST',
                              data: {
                                  code:this.data.code,
                                  rawData:this.data.rawData,
                                  signature:this.data.signature
                              },
                              header:{
                                  'content-type':'appLication/json',
                              },
                              success:(result)=>{
                                console.log(result);
                                this.setData({
                                    logincondition:true,
                                    token:result.data.data
                                })
                                if(this.data.token == null){
                                    wx.checkSession({
                                      success(){
                                        console.log("未过期");
                                      },
                                      fail(){
                                        this.onlogin()
                                      }
                                    })
                                }else{
                                const app = getApp();
                                app.globalData.logincondition = true;
                                app.globalData.token = result.data.data;
                                console.log(result.data.data);
                                }
                              },
                              fail:()=>{
                                  console.log("发送失败");
                              } 
                            })
                          },
                        fail: (res) =>{
                            console.log('获取用户信息失败',res)
                            wx.showToast({
                              title: '信息授权失败~',
                              duration: 1000,
                              icon: 'error',
                              mask: true
                            })
                        },
                        complete:()=>{
                          wx.hideLoading();
                        }
        })
        }
      }
              })
          },
          fail:(e)=>{
              console.log("失败了",e);
          }
      })
  },
  onlogin2(){
      this.onlogin();
  },

  tosetting:function () {
    wx.navigateTo({
      url: '../setting/setting',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
        const a = getApp();
        this.setData({
          logincondition:a.globalData.logincondition,
          scale :750/a.globalData.screen,
          height:a.globalData.screenHeight
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
    const app = getApp();
      // this.setData({
      //   logincondition : app.globalData.logincondition
      // })
      if(app.globalData.logincondition !== true){
          wx.navigateTo({
            url: '../loginPage/loginPage',
          })
      }
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
  clickonhistory : function(){
   const app = getApp();
    if(app.globalData.logincondition === true){     
    wx.navigateTo({ 
           url: '../history/history',
         })
    }else{
        wx.showModal({
          title: '您没有登录',
          content: '点击确定去登录',
          complete: (res) => {
            if (res.cancel) {}   
            if (res.confirm) {this.onlogin();}
          }
        })
        }

  },
  onclickFeedback:function(){
    const app = getApp();
    if(app.globalData.logincondition === true){     
      wx.navigateTo({ 
             url: '../feedback/feedback',
           })
      }else{
          wx.showModal({
            title: '您没有登录',
            content: '点击确定去登录',
            complete: (res) => {
              if (res.cancel) {}   
              if (res.confirm) {this.onlogin();}
            }
          })
          }
  
  }
})