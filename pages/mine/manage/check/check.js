// pages/mine/manage/check/check.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //模版中带填充的数据列表
    shortTexts:[
           {id:'name',title:'姓名',demo:'谢佳君'}
        ],
      longTexts:[
          { id: 'reason', title: '申请理由', demo:'本人在学习上刻苦认真，不仅自己取得了较好的专业成绩，而且积极帮助同学去解决学习上的难题；同时也善于实践，在校团委组织部、理学院勤工助学中心、理学院团委组织部都有任职经历，并运用所掌握的计算机知识，多次为组织解决技术难题；也具有较强的创新能力，不仅在第三届“成栋杯”创新创业大赛中以项目负责人身份获得奖项，还拥有多个自己的创新项目；此外还担任MoHaHu演讲社社长、智圣职业竞争力协会首席顾问等多项职务，注重个人综合能力的提升。',maxLength:'200'
          },
        ],
      options:[
          { id: 'sex', type: 'radio', title: '性别', optionArray: ['男', '女'] }
        ]
    },
  /**
* 生命周期函数--监听页面加载
* 根据templateDescribePath拿到模版信息
*/
  onLoad: function (options) {
    //myThis用于之后调用setData
    var myThis = this;
    wx.request({
      url: 'http://39.96.59.28:8080/FormElf/getTemplate',//给函数传递服务器地址参数 
      method: 'POST',
      data: {
        templateDescribePath: options.templateDescribePath
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success: function (res) {
        console.log(res);//打印出返回的数据
        //拿到返回的模版信息准备加载页面
        var result = res.data;
        for (var i = 0; i < result.options.length; i++) {
          //选项列表中每一项的js字符串转为json对象
          result.options[i] = JSON.parse(result.options[i]);
          var dataRow = result.options[i];
          //修改字符串中的数组类型
          dataRow.optionArray = dataRow.optionArray.split(",");
        }
        //短文本列表中每一项的js字符串转为json对象
        for (var i = 0; i < result.shortTexts.length; i++) {
          result.shortTexts[i] = JSON.parse(result.shortTexts[i]);
        }
        for (var i = 0; i < result.longTexts.length; i++) {
          //长文本列表中每一项的js字符串转为json对象
          result.longTexts[i] = JSON.parse(result.longTexts[i]);
        }
        myThis.setData({
          shortTexts:result.shortTexts,
          longTexts:result.longTexts,
          options:result.options
        })
      },
    })
  },
})