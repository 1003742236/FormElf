// pages/mine/manage/manage.js
var jsonhandle = require('../../../utils/jsonhandle.js');
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    myTemplateLists: [
      { id:'0',title: "国家奖学金", intro:'',formmat:'',time:'',permissions:''},
      { id: '1', title: "国家励志奖学金", intro: '', formmat: '' ,time:'',permissions:''},
      { id: '2', title: "牵手奖学金", intro: '', formmat: '' ,time:'',permissions:''},
      { id: '3', title: "牵手励志奖学金", intro: '', formmat: '' ,time:'',permissions:''},
      { id: '4', title: "南航十分关爱奖学金", intro: '', formmat: '',time:'',permissions:''}
    ]
  },
  del:function(e){
    var id = e.currentTarget.id;
    var lists = this.data.myTemplateLists;
    console.log(id);
    jsonhandle.del(id, lists);
    this.setData({
      myTemplateLists: lists
    })
    wx.request({
      url: '',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: '',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  }
})