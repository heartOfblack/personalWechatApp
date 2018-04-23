// pages/test/test.js
var scrollX=['red','gold','pink'];
Page({
  data: {
  scrollIntoView:'red',
  percent:80,
  obj:[['广东','深圳'],['天河','越秀','番禺'],['岑村','体育西路','林和西']],
  objIndex:[0,0,0]
  },
  bindscrolltoupper:function(e){

    console.log('bindscrolltoupper');

  },
  colChange:function(e)
  {
    var data=this.data.obj;
    var dataIndex=this.data.objIndex;
    dataIndex[e.detail.column]=e.detail.value;
   switch(e.detail.column)
   {
    case 0: //第一列
    switch(dataIndex[0])//第一列，第几项更改， 第一列更改，则第二三列都要更改
    {
    case 0: data[1] = ['天河', '越秀', '番禺']; data[2] = ['岑村', '体育西路', '林和西'];break;//第一列下角标为0的时候，第二列和第三列数据为默认值
    case 1:data[1]=['大梅沙','小梅沙'];data[2]=['小市区1','小市区2'];break;
    }
    ;
    case 1://第二列
       switch (dataIndex[1]) {//第二列第几项更改，第二列更改只需要第三列更改
         case 0: data[2] = ['大梅沙A', '大梅沙B']; break;
         case 1:  data[2] = ['小梅沙A', '小梅沙B']; break;
       };

this.setData({obj:data,objIndex:dataIndex});




   }



  },
  onLoad:function(e)
  {
    console.log('onload');
   

  },
  luanch:function(e){
   var t = this;
    var se=setInterval(function () {
      t.data.percent < 100 && (t.setData({ percent: t.data.percent + 5 }), true) || clearInterval(se);
    }, 1000);
   

  },
  getUser:function(res){
    console.log(JSON.stringify(res))
  }
})