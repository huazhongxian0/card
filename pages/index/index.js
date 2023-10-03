
Page({
  data:{
  info:'nihao',
  count : 0,
  xiaofenlei:0,
  con:[{ 
    id:1,
    url:"../iconfonts/wx_20230925201544.jpg", 
    oppositeurl:"../iconfonts/wx_20230925201558.jpg",
  },
  {id:2, url:"../iconfonts/wx_20230925201558.jpg",oppositeurl:"../iconfonts/wx_20230925201544.jpg"},
  {id:3,  url:"../iconfonts/wx_20230925201558.jpg",oppositeurl:"../iconfonts/wx_20230925201544.jpg"},
  {id:4,  url:"../iconfonts/wx_20230925201558.jpg",oppositeurl:"../iconfonts/wx_20230925201544.jpg"},
]
  },
  onChange(event) {
// 更改标签可以在这里设置函数
  },
  setDataxiaofenleito0:function () {
    this.setData({
   xiaofenlei:0   
    })
   },
   setcon:function() {
     wx.request({
       url: 'http://169.254.75.192:8080/img ',
     success:function () {
       console.log("成功了")
     },
     fail : function () {
      console.log("失败了")
    }
      })
     
   },
  setDataxiaofenleito1:function () {
   this.setData({
  xiaofenlei:1   
   })
  },
  setDataxiaofenleito2:function () {
    this.setData({
   xiaofenlei:2   
    })
   },
   setDataxiaofenleito3:function () {
    this.setData({
   xiaofenlei:3   
    })
    document.write('你好');
   },
   setDataxiaofenleito4:function () {
    this.setData({
   xiaofenlei:4
    })
   },
   setDataxiaofenleito5:function () {
    this.setData({
   xiaofenlei:5 
    })
   },
   setDataxiaofenleito6:function () {
    this.setData({
   xiaofenlei:6
    })
   },
   setDataxiaofenleito7:function () {
    this.setData({
   xiaofenlei:7   
    })
   },
   setDataxiaofenleito8:function () {
    this.setData({
   xiaofenlei:8
    })
   },
   setDataxiaofenleito9:function () {
    this.setData({
   xiaofenlei:9
    })
   },
   onclick:function () {
     wx.navigateTo({
       url: '../dafenlei/dafenlei',
     })
   },
   onclickzhuye:function () {
    wx.navigateTo({
      url: '/pages/user/user',
    })
  },
   onclickmake:function (e) {
      wx.navigateTo({
         url: `/pages/make/make?imagePath=${encodeURIComponent(e.currentTarget.dataset.param1)}&oppositeimagePath=${encodeURIComponent(e.currentTarget.dataset.param2)}`,
      })

  }
   
})
