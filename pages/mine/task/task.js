// pages/mine/task/task.js
var jsonhandle = require('../../../utils/jsonhandle.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    taskLists:[
      {id:'0',templateId:'0',name:'19年国奖填写',intro:'',begin:'',end:''},
      { id: '1', templateId: '1', name: '19年国励填写', intro: '', begin: '', end: '' },
      { id: '2', templateId: '2', name: '19年牵励填写', intro: '', begin: '', end: '' },
    ]
  },
  del: function (e) {
    var id = e.currentTarget.id;
    var lists = this.data.taskLists;
    console.log(id);
    jsonhandle.del(id, lists);
    this.setData({
      taskLists: lists
    })
  },
  onShareAppMessage: function (ops) {
    if(ops.target==null){
        wx.showModal({
          title: '提示',
          content: '请选择要发布的任务',
        })
      }
    else{
      var task = jsonhandle.getbyid(ops.target.id,this.data.taskLists);
      return {
        title: task.name,
        desc: task.intro,
        path: '/pages/mine/manage/fill?id='+task.templateId,
        imageUrl:'http://hbimg.b0.upaiyun.com/e503f148c1f7267c5834d48a522125a8525ad24140f07-lDpKXX_fw658'
      }
    }
    
  }
  
})