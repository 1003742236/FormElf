// pages/mine/manage/fill/fill.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //模版中待填充的数据列表
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
  formSubmit: function (e) {
    var myThis = this;
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    wx.request({
      url: 'http://39.96.59.28:8080/FormElf/fill',//给函数传递服务器地址参数 
      method: 'POST',
      data: {
        dataDict: JSON.stringify(e.detail.value)
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success: function (res) {
        console.log(res);//打印出返回的数据
        let downPath = res.data.downFilePath;
        wx.downloadFile({
          url: 'http://39.96.59.28:8080/FormFlt/' + downPath,
          success: function (res) {
            // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
            console.log(res);
            var filePath = res.tempFilePath;
            console.log(filePath);
            wx.saveFile({
              tempFilePath: filePath,
              success: function (res) {
                var savedFilePath = res.savedFilePath;
                console.log(savedFilePath)
              }
            })

          }

        })

      },
    })
  }
})