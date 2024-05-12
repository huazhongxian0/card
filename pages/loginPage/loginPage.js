// pages/loginPage/loginPage.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Page({
  // 页面的初始数据
  data: {
      username:'',
      password:'',
      height:0,
      navHeight:0
  },
  submit(){
      
  },
  input(e){
    if(e.currentTarget.id === 'username'){
        this.data.username = e.detail
    }
    if(e.currentTarget.id === 'password'){
        this.data.password = e.detail
   }
  },
  //生命周期函数--监听页面加载
  async onLoad(options) {
    wx.getSystemInfo({
        success:(e)=>{
        this.setData({
          height:e.windowHeight,
          navHeight:e.windowHeight * 0.1
        })
        },
    })
  },
  //生命周期函数--监听页面初次渲染完成
  onReady() {

  },

  // * 生命周期函数--监听页面显示
  onShow() {

  },

  
  // 生命周期函数--监听页面隐藏
  onHide() {

  },


//生命周期函数--监听页面卸载 
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
//取消->登录                
                if (res.cancel) {
                  const a = getApp()
                  a.globalData.logincondition = true
                  wx.switchTab({
                    url: '../user/user',
                  })
                }
                if (res.confirm) {
                    wx.getUserProfile({
                      desc:'您的信息仅作为个人展示噢',
                      success: (res) => {
                          this.setData({
                            rawData: res.rawData,
                            signature: res.signature,
                            avatar: res.userInfo.avatarUrl,
                            wxname: res.userInfo.nickName
                          })
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
                            fail:(e)=>{
                              console.log('后端登录失败'+e);
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
            console.log("请求Code失败",e);
        }
    })
  },
  backToHome(){
    wx.switchTab({
      url: '../index/index',
    })
    
  }
})