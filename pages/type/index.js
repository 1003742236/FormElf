var Bmob = require("../../utils/bmob.js");
Page({
  data: {
    currentTab: null,
    winHeight: 0,
    good: [ 
      {foodType:'奖助学金',id:0,data:
      [
          { id: 0, menu_logo: 'http://hbimg.b0.upaiyun.com/e503f148c1f7267c5834d48a522125a8525ad24140f07-lDpKXX_fw658', menu_name: '国家奖学金', price: 0 },
          { id: 1, menu_logo: 'http://hbimg.b0.upaiyun.com/e503f148c1f7267c5834d48a522125a8525ad24140f07-lDpKXX_fw658', menu_name: '国家励志奖学金', price: 0 }
      ]},
      {
        foodType: '报名表', id: 1, data:
          [
            { id: 0, menu_logo: 'http://hbimg.b0.upaiyun.com/e503f148c1f7267c5834d48a522125a8525ad24140f07-lDpKXX_fw658', menu_name: '通用报名表', price: 0 }
          ]
      },
    ],
  },
  onShareAppMessage: function() {
    let title = "分类";
    let path = "pages/type/index";
    return {
        title: title,
        path: path
    }
  },

  onLoad: function () {
    wx.getSystemInfo({
      success: res => {
        this.setData({
          winHeight: res.windowHeight
        });
      }
    });
    /*
    let typeArray = [];
    let goodType = new Bmob.Query(Bmob.Object.extend("good_type"));
    goodType.find().then(result => {
      for (let object of result) {
        typeArray.push({
          id: object.id,
          name: object.get('type_name')
        })
      }

      let good = new Bmob.Query(Bmob.Object.extend("good"));
      good.equalTo("is_delete", 0); //上架
      good.include("type");
      return good.find();
    }).then(result => {
      let res = [];
      for (let type of typeArray) {
        let data = [];
        let canGetType = true
        for (let good of result) {
          if (!good.get('type')) {
            canGetType = false
          }
          if (canGetType) {
            if (type.id == good.get('type').objectId) {
              data.push(good);
            }
          }
          canGetType = true
        }
        let goodData = {
          foodType: type.name,
          id: type.id,
          data: data
        };
        res.push(goodData);
        this.setData({
          good: res
        })
      }
      this.setData({
        good: res,
        currentTab: res[0].id,//第一个tab
      })
      console.log(this.data.good);
    });*/
  },

  chooseType: function(event) {
      let foodType = event.target.dataset.foodtype;
      this.setData({
        currentTab: foodType
      })
  },
})