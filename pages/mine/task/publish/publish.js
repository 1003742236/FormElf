// pages/mine/task/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shortTexts: [
      { id: 'name', title: '姓名', demo: '谢佳君' }
    ],
    longTexts: [
      {
        id: 'reason', title: '申请理由', demo: '本人在学习上刻苦认真，不仅自己取得了较好的专业成绩，而且积极帮助同学去解决学习上的难题；同时也善于实践，在校团委组织部、理学院勤工助学中心、理学院团委组织部都有任职经历，并运用所掌握的计算机知识，多次为组织解决技术难题；也具有较强的创新能力，不仅在第三届“成栋杯”创新创业大赛中以项目负责人身份获得奖项，还拥有多个自己的创新项目；此外还担任MoHaHu演讲社社长、智圣职业竞争力协会首席顾问等多项职务，注重个人综合能力的提升。', maxLength: '200'
      },
    ],
    options: [
      { id: 'sex', type: 'radio', title: '性别', optionArray: ['男', '女'] }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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