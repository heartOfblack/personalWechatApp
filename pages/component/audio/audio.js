// pages/component/audio/audio.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
name:{
type:String,
value:'name properties'
},
play:{
type:String,
observer:function(newV,oldV){
console.log(newV+'新值');

//console.log(JSON.stringify(this.audio));
this.play();

}
}
  }
  ,
  /**
   * 组件的初始数据
   */
  data: {
    audioData:{
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
  },
  audioAction: {
    method: 'pause'
  },
  cur:'未播放'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    go:function(){
console.log(this.data.name)

    },
    play:function(){
this.setData({cur:'播放中'});
this.audio = wx.createAudioContext('myaudio');
console.log('音频内容'+JSON.stringify(this.audio));
this.audio.autoPlay=true;
this.audio.play();


    },
    pause: function () {
      this.setData({ cur: '暂停播放' });
      this.audio.pause();


    }

  }
})
