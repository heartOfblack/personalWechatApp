//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    name:'siyuan',
    list:[1,2,3],
    staffA: { firstName: 'Hulk', lastName: 'Hu' },
    staffB: { firstName: 'Shang', lastName: 'You' },
    staffC: { firstName: 'Gideon', lastName: 'Lin' },
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }]
  },
  show:function(e){
console.log('自定义事件触发'+JSON.stringify(e.detail.detail));

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onPullDownRefresh:function(e){
console.log("下拉刷新");
wx.stopPullDownRefresh();
  },
  change:function(e){
this.setData({name:'wei'})

  },
  onLoad: function () {
    console.log(JSON.stringify(getCurrentPages()));
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

    console.log('分享' + this.route);
  
    this.setData({
      name: this.route,
      k: 'k'
    })
    console.log(JSON.stringify(this.data.k));
    return {
      title: '没想到他居然',
      path: '/' + this.route
    }
  },
  scan:function()
  {
    let t=this;
wx.scanCode({
  success:function(res)
  {
 /*  res是一个JSON数据，包括result	所扫码的内容
    scanType	所扫码的类型
    charSet	所扫码的字符集
    path	当所扫的码为当前小程序的合法二维码时，会返回此字段，内容为二维码携带的 path*/
console.log(res);
t.setData({
  name:JSON.stringify(res),
  k:'k'
})
console.log(t.k);
  }
})

  },
  //不可以跳转的到tab目标页面 
  gohref:function(e){
    console.log(1)
/*    wx.navigateTo({
      url: '/pages/logs1/logs1',
      complete: function (res) {
        console.log(res)
      }
    }) */
var target=e.currentTarget.dataset;
    console.log('/' + target.href)
wx.navigateTo({
  url:'/'+target.href
})

  }
})
