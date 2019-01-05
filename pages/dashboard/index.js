var Bmob = require("../../utils/bmob.js");
var that;
Page({
  data: {
    indicatorDots: true, //是否出现焦点
    autoplay: true, //是否自动播放轮播图
    interval: 4000, //时间间隔
    duration: 1000, //延时时间
    hiddenModal: true,
    /*rec为模版对象两两一组构成的列表 */
    rec:[
       [ 
         { id: 0, menu_logo:'http://hbimg.b0.upaiyun.com/e503f148c1f7267c5834d48a522125a8525ad24140f07-lDpKXX_fw658',menu_name:'国家奖学金',price:0},
      { id: 1, menu_logo: 'http://hbimg.b0.upaiyun.com/e503f148c1f7267c5834d48a522125a8525ad24140f07-lDpKXX_fw658', menu_name: '国家励志奖学金', price: 0 }
      ],
     [
        { id: 2, menu_logo: 'http://hbimg.b0.upaiyun.com/e503f148c1f7267c5834d48a522125a8525ad24140f07-lDpKXX_fw658', menu_name: '牵手奖学金', price: 0 },
      { id: 3, menu_logo: 'http://hbimg.b0.upaiyun.com/e503f148c1f7267c5834d48a522125a8525ad24140f07-lDpKXX_fw658', menu_name: '牵手励志奖学金', price: 0 }
      ]
    ],
  },

  onLoad: function() {},

  onShow: function() {
    //查询出推荐的商品
    const advs = new Bmob.Query(Bmob.Object.extend("adv"));
    // 查询广告数据
    advs.equalTo("is_show", 1); //推荐
    advs.find({
      success: (results) => {
        console.log(results);
        const data = [];
        for (let object of results) {
          data.push({
            id: object.get('good_id'),
            url: object.get('adv')
          })
        }
        this.setData({
          banner: data
        })
      },
      error: (error) => {
        console.log("查询失败: " + error.code + " " + error.message);
      }
    });
  },
  more: function() {
    wx.navigateTo({
      url: '../shop/index'
    })
  },
})