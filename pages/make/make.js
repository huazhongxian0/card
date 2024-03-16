// pages/make/make.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
url:{},
count:"",
oppositeurl:{},
input: "请输入，我可以拖动和缩放哦~~~",
x:0,
x1:0,
y:0,
y1:0,
active:0,
active1:0,
fontSize:30,
fontSizeactive:30,
buttonIf:0,
text1:"请输入一个数字",
font:"字体大小",
scale:1,
leadingText:"行间距",
leadingText1:"请输入一个数字",
leading:50,
leading1:1,
leading1Active:50,
styleText:{}
  },
onmy(){
this.setData({
  font:"返回",
  buttonIf:1,
})
},
onmy1(){
  this.setData({
    characterSpaceText:"返回",
    buttonIf:2,
  })
  },
  onmy2(){
    this.setData({
      leadingText:"返回",
      buttonIf:3,
    })
    },
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setData({
      active: event.detail,
      buttonIf:0,
      font:"字体大小",
      leadingText:"行间距",
      characterSpaceText:"字间距"
    })
    console.log(event.detail);
  },
  scale1:function(e){
    this.setData({
      scale:e.detail.scale,
    })  
  },
  scale2:function(e){
    let t = parseInt(e.target.dataset.index);
    this.setData({
      fontSizeactive:this.data.fontSize*t
    })
  },
  leading:function(e) {
    let t = parseInt(e.target.dataset.index);
console.log(this.data.leading1Active);
    this.setData({
      leading1Active:this.data.leading*t
    })
    console.log(this.data.leading1Active);
  },
  onchange:function(){
    console.log(1052);
   this.setData({
     input:""
   })
},
onchange12:function(e){
   this.setData({
     x:e.detail.x,
     y:e.detail.y,
   })
   console.log(this.data.x);
},
onclear:function(){
  this.setData({
    input:"",
  })
},
onclear1:function(){
  this.setData({
    text1:"",
  })
},
onclickon(){
  const app = getApp();
 if(app.globalData.token == false){}else{
console.log(app.globalData.token);
console.log("你好",this.data.leading1Active);
wx.request({
  url: 'https://hez1.cn:8080/wx/setHistoryMessage',
  method:'POST',
  header:{
    token:app.globalData.token,
  },
  data:{
    imageFrontUrl:this.data.url,
    imageContraryUrl:this.data.oppositeurl,
    scale:this.data.scale,
    lineMargins:this.data.leading1Active,
    fontSize:this.data.fontSizeactive,
    text:this.data.input,
    x:this.data.x,
    y:this.data.y,
  },
  success:(res)=>{
console.log(res);
  }
})
}

  wx.navigateTo({
    url: `../share/share?url=${encodeURIComponent(this.data.url)}&oppositeurl=${encodeURIComponent(this.data.oppositeurl)}&scale=${encodeURIComponent(this.data.scale)}&fontSize=${encodeURIComponent(this.data.fontSizeactive)}&text=${encodeURIComponent(this.data.input)}&x=${encodeURIComponent(this.data.x)}&y=${encodeURIComponent(this.data.y)}&leading=${encodeURIComponent(this.data.leading1Active)}`,
  })

},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options);
   if (options.dir=="0") {
    let imagePath = decodeURIComponent(options.imagePath);
    let oppsiteimagePath = decodeURIComponent(options.oppositeimagePath);
      this.setData({
        url: imagePath,
        oppositeurl: oppsiteimagePath
      });
   }else{
   console.log(options);
   const a = getApp();
   let b = 750/a.globalData.screen;
this.setData({
    url: decodeURIComponent(options.url),
    oppositeurl: decodeURIComponent(options.oppositeurl),
  styleText:`width:${options.scale*200}rpx;height:${200*options.scale}rpx;font-size:${options.fontSize*options.scale}rpx;line-height:${options.leading*options.scale}rpx;`,
    input:decodeURIComponent(options.text),
    x1:decodeURIComponent(options.x),
    y1:decodeURIComponent(options.y)
})
   }
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
    console.log(options);
    if (options.dir=="0") {
     let imagePath = decodeURIComponent(options.imagePath);
     let oppsiteimagePath = decodeURIComponent(options.oppositeimagePath);
       this.setData({
         url: imagePath,
         oppositeurl: oppsiteimagePath
       });
    }else{
    console.log(options);
    const a = getApp();
    let b = 750/a.globalData.screen;
 this.setData({
     url: decodeURIComponent(options.url),
     oppositeurl: decodeURIComponent(options.oppositeurl),
   styleText:`width:${options.scale*200}rpx;height:${200*options.scale}rpx;font-size:${options.fontSize*options.scale}rpx;line-height:${options.leading*options.scale}rpx;`,
     input:decodeURIComponent(options.text),
     x:decodeURIComponent(options.x),
     y:decodeURIComponent(options.y)
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
  onchange(){
    if(this.data.input == "请输入，我可以拖动和缩放哦~~~")
    this.setData({
      input:""
    })
  },
  onchange1(){
    if(this.data.text1 == "请输入一个数字"){
    this.setData({
      text1:""
    })
  }
},
onchange2(){
  if(this.data.characterSpaceText1 == "请输入一个数字")
  {
  this.setData({
    characterSpaceText1:""
  })
}
},
onchange3(){
  if(this.data.leadingText1 == "请输入一个数字"){
  this.setData({
    leadingText1:""
  })
}
},
oninput1(e){
  this.setData({
    input: e.detail.value,
  })
},
oninput(e){
  this.setData({
    text1: e.detail.value,
  })
},
oninput2(e){
  this.setData({
    characterSpaceText1:e.detail.value,
  })
},
oninput3(e){
  this.setData({
    leadingText1: e.detail.value,
  })
  
},
submit1(){
  let t = parseFloat(this.data.text1)
  this.setData({
    fontSizeactive:this.data.fontSize*t
  })
  console.log(this.data.font);
},
submit2(){
  let t = parseFloat(this.data.characterSpaceText1)
  this.setData({
  characterSpace1Active : this.data.characterSpace*t
  })
  console.log(this.data.characterSpace1Active);
},
submit3(){
  let t = parseFloat(this.data.leadingText1)
  this.setData({
    leading1Active:this.data.leading*t
  })
  console.log(this.data.leading1Active);
}
})
