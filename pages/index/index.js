Page({
  data:{
  count : 0,
  xiaofenlei:0,
  active:"",
  classification:[{imageFrontUrl:'/pages/index/5.png',imageContraryUrl:'/pages/index/6.png'},],
   carousel:[{imageFrontUrl:'/pages/index/5.png',imageContraryUrl:'/pages/index/6.png'}],
   height:{},
   scale:{}
},
getImage:function(){
  let url = "https://hez1.cn:8080/wx/getImage"
  wx.request({
    url: url,
    method:"POST",
    data:{
      type: 'carousel',
      pageSize:10,
      pageNumber:0,
    },
    header:{
      'content-type':'appLication/json',
    },
    success:(res)=>{
      const statusCode = res.statusCode;
      console.log('响应状态码：', statusCode);
      if (statusCode === 200) {
        console.log("轮播图",res);
        this.setData({
          carousel: res.data.data.dataList
        })
      } else {
        console.error('请求失败');
      }
},
  });
},
getImageClass:function(classification){
  let url = "https://hez1.cn:8080/wx/getImage"
 
  wx.showLoading({
    title: '数据加载中',
  })
  wx.request({
    url: url,
    method:"POST",
    data:{
      type: classification,
      pageSize:10,
     pageNumber:0,
    },
    header:{
      'content-type':'appLication/json',
    },
    success:(res)=>{
      const statusCode = res.statusCode;
      console.log('响应状态码：', statusCode);
      if (statusCode === 200) {
        console.log("分类",res);
        this.setData({
          classification: res.data.data.dataList
        });
      } else {
        console.error('请求失败');
      }
},
complete:()=>{
  wx.hideLoading()
}
  });
  
},
onLoad(){
// this.getImage()
// this.getImageClass("all")
    }, 
onReady(){
      wx.getSystemInfo({
        success:(e)=>{
    console.log("主页",e);
this.setData({
  height:e.windowHeight,
   scale:750/e.screenWidth,
})
        },
      })
    },
 onChange(event) {
// 更改标签可以在这里设置函数
  this.getImageClass(event.detail.name);
   this.setData({
     count: event.detail.index,
   })
  },
   onclick:function () {
  console.log();
   },
   onclickzhuye:function () {
    wx.navigateTo({
      url: '/pages/user/user',
    })
  },
   onclickmake:function (e) {
     const app = getApp();
     if(app.globalData.logincondition == false){
       wx.showModal({
         title: '没有登录',
         content: '您还没有登录，不登录不会记录历史记录的哦，您可以点击确定前去登录页，点击取消继续操作',
         complete: (res) => {
           if (res.cancel) {
            wx.navigateTo({
              url: `/pages/make/make?imagePath=${encodeURIComponent(e.currentTarget.dataset.param1)}&oppositeimagePath=${encodeURIComponent(e.currentTarget.dataset.param2)}&dir=${encodeURIComponent(0)}`,
           })
           }
       
           if (res.confirm) {
             wx.switchTab({
               url: '../user/user',
               success: (res) => {},
               fail: (res) => {},
               complete: (res) => {},
             })
           }
         }
       })
     }else{
      wx.navigateTo({
         url: `/pages/make/make?imagePath=${encodeURIComponent(e.currentTarget.dataset.param1)}&oppositeimagePath=${encodeURIComponent(e.currentTarget.dataset.param2)}&dir=${encodeURIComponent(0)}`,
      })
    }
  },
  onclickpreview:function (e) {
    wx.navigateTo({
       url: `/pages/preview/preview?imagePath=${encodeURIComponent(e.currentTarget.dataset.param1)}&oppositeimagePath=${encodeURIComponent(e.currentTarget.dataset.param2)}`,
    })
  },
  onReachBottom() {
console.log("触发了上啦触底");
  },



})
