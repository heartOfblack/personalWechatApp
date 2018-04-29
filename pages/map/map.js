
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lat: 0,
    lon: 0,
    markers:[],
    markersIcon:'/imgs/newMark.png',
    location:{lon:'',lat:''},
    controls: [{
      id: 10, position: {
        left: 20,
        top:  20,
        width:20,
        height:20

      }, iconPath: '/imgs/tab.jpg', clickable:true}],
    polyline:[]
    


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  regionchange(){},
  getLocation(e){
console.log('点击控件');
    this.map.moveToLocation();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
this.getCurLocation();
//加载地图控件
this.map=wx.createMapContext('myMap');

  },
  getCurLocation(){
    let t = this;
    let data = t.data;
    wx.getLocation({
      success(res) {
        t.setData({ lon: res.longitude });
        t.setData({ lat: res.latitude });
        // t.pushMarkers(data.lat,data.lon);
      }
    })
  }
  ,
  pushMarkers(lat,lon){
    let t = this;
    let data = t.data;
    data.markers.push({ id: data.markers.length, latitude: lat, longitude: lon, iconPath: data.markersIcon });
    t.setData({ markers: data.markers })

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})