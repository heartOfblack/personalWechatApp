//index.js
//获取应用实例

const app = getApp()
const config=require("./../../config.js")

Page({
  data: {
  play:true,//默认播放状态
  playStyle:'play',
  home:'',
  experience:'',
  skill:'',
  curComponent:'home'//当前展示组件
  },
  onReady(){
    console.log('准备好');
this.audio=wx.createAudioContext('music');
this.audio.play();
  },
  onLoad: function (o) {
  if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShareAppMessage: function () {

  },
  changePlay(e){
const data=e.currentTarget.dataset;
    data.play && (this.setData({ playStyle: '' ,play:false}), this.audio.pause(),true) || (this.setData({ playStyle: 'play',play:true }),this.audio.play())

  },
  musicPlay(){
    this.setData({ play: true, playStyle:'play'})
  }
  ,
  tab(e){
    const data = e.currentTarget;
    this.setData({home:'',experience:'',skill:''});
   switch(data.id)//切换组件
   {
     case 'home': this.setData({ home:'footerBackground'});break;
     case 'experience': this.setData({ experience: 'footerBackground' }); break;
     case 'skill': this.setData({ skill: 'footerBackground' }); break;

   }

  }
})
