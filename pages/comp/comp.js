// pages/comp/comp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
name:{
  type:String,
  value:'default name'
}
  },

  /**
   * 组件的初始数据
   */
  data: {
somedata:{a:1}
  },

  /**
   * 组件的方法列表
   */
  methods: {
getData:function(){console.log('getData');
  this.triggerEvent('showEvent',{detail:'detail'},{});

}
  }
})
