// pages/mine/manage/create/creat.js
var jsonhandle = require('../../../../utils/jsonhandle.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
        index:0,
        examples:[
          {id:0,name:'国家奖学金',time:'',type:''},
          { id: 1, name: '国家励志奖学金', time: '',type: ''},
          { id: 2, name: '牵手奖学金', time: '',type:'' },
        ],
        exampleId:0,
        count: 0,
        shortTexts:[
           {id:'name',title:'姓名',demo:'谢佳君'}
        ],
        longTexts:[
          { id: 'reason', title: '申请理由', demo:'本人在学习上刻苦认真，不仅自己取得了较好的专业成绩，而且积极帮助同学去解决学习上的难题；同时也善于实践，在校团委组织部、理学院勤工助学中心、理学院团委组织部都有任职经历，并运用所掌握的计算机知识，多次为组织解决技术难题；也具有较强的创新能力，不仅在第三届“成栋杯”创新创业大赛中以项目负责人身份获得奖项，还拥有多个自己的创新项目；此外还担任MoHaHu演讲社社长、智圣职业竞争力协会首席顾问等多项职务，注重个人综合能力的提升。',maxLength:'200'
          },
        ],
        options:[
          { id: 'sex', title: '性别', optionArray: ['男', '女'] }
        ]
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var index = e.detail.value;
    this.setData({
      index: index,
      exampleId:this.data.examples[index].id
    })
  },

  //对不同数据的增加
  add: function (e) {
    var count = this.data.count;
    var type = e.currentTarget.id;
    var lists = e.currentTarget.dataset.lists;
    var newData = jsonhandle.newjson(type,count);
    lists.push(newData);//实质是添加lists数组内容，使for循环多一次
    if(type == 'shortTexts'){
      this.setData({
        shortTexts: lists,
        count: count + 1
      })
    }else if(type == 'longTexts'){
      this.setData({
        longTexts: lists,
        count: count + 1
      })
    }else if(type == 'options'){
      this.setData({
        options: lists,
        count: count + 1
      })
    }
  },
  //对不同数据的删除
  del:function(e){
    var id = e.currentTarget.id;
    var type = e.currentTarget.dataset.type;
    var lists = e.currentTarget.dataset.lists;
    jsonhandle.del(id, lists);
    if(type == 'shortTexts'){
      this.setData({
        shortTexts:lists
      })
    }else if(type ==  'longTexts'){
      this.setData({
        longTexts: lists
      })
    } else if (type == 'options'){
      this.setData({
        options: lists
      })
    }
  },
  monitor:function(e){
    var type = e.currentTarget.dataset.type;
    var lists = e.currentTarget.dataset.lists;
    var key = e.currentTarget.dataset.key;
    var temp = e.detail.value;
    var id = e.target.id;
    for(var i = 0,len = lists.length;i < len;i ++){
      if(lists[i].id == id){
        if(key == 'title'){
          lists[i].title = temp;
        }
        else if(key == 'demo'){
          lists[i].demo = temp;
        }else if(key == 'optionArray'){
          lists[i].optionArray = temp;
        }
      }
    }
    if (type == 'shortTexts') {
      this.setData({
        shortTexts: lists
      })
    } else if (type == 'longTexts') {
      this.setData({
        longTexts: lists
      })
    } else if (type == 'options') {
      this.setData({
        options: lists
      })
    }
  },

  //生成模版的点击事件
  formSubmit:function(e){
    var templateDescription = {
      'shortTexts': this.data.shortTexts,
      'longTexts': this.data.longTexts,
      'options': this.data.options,
      'count': this.data.count,
    }
    wx.request({
      url: '',
      method: 'POST',
      data: {
        templateDescription: JSON.stringify(templateDescription),
        exampleId:0,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  
})