//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },

  onShareAppMessage: function () {

    console.log('分享' + JSON.stringify(getCurrentPages()[0].route));
    return {
      title: '没想到他居然',
      path: '/' + getCurrentPages()[0].route
    }
  },
})
