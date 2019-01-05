var Zan = require('../../dist/index');
var common = require('../../utils/common.js');
const WxParse = require('../../utils/wxParse/wxParse.js');
var app = getApp()
var Bmob = require("../../utils/bmob.js");
Page(Object.assign({}, Zan.Quantity, {
  data: {
    indicatorDots: true, //是否出现焦点
    autoplay: true, //是否自动播放轮播图
    interval: 4000, //时间间隔
    duration: 1000, //延时时间
    imgUrls:[
      'http://hbimg.b0.upaiyun.com/e503f148c1f7267c5834d48a522125a8525ad24140f07-lDpKXX_fw658'
    ],
    detail:{
      menu_logo: 'http://hbimg.b0.upaiyun.com/e503f148c1f7267c5834d48a522125a8525ad24140f07-lDpKXX_fw658', 
      menu_name: '国家奖学金', 
      price: 0 
    },//页面数据
    hiddenModal: true,
    goodId:0,
    price:0,//商品价格
    actionType: 'payOrder',
    cartResult:false,
  },


  onLoad: function (options) {
    if (!options.id) {
      common.showModal("获取商品信息失败", '', false, () => {
        wx.navigateBack({
          delta: 1
        })
      });
      return false;
    }

    this.setData({
      goodId: options.id
    })

    //this.getData();//获取页面数据
    this.getCartResult();//购物车是否有商品
  },

  getData: function () {
    wx.showLoading({
      title: '加载中',
    })
    //查询商品详情
    let goodId = this.data.goodId;
    let good = new Bmob.Query(Bmob.Object.extend("good"));
    good.equalTo("is_delete", 0);

    let cover = '';
    good.get(goodId).then(result => {
      

      cover = result.get("menu_logo");//商品封面
      let fare = result.get("fare") ? result.get("fare").toFixed(2) : 0.00;
      this.setData({
        goodNum: result.get("good_number"),
        price: result.get("price"),
        detail: result,
      })
      let goodPic = new Bmob.Query(Bmob.Object.extend("good_pic"));
      goodPic.equalTo("good_id", goodId);
      return goodPic.find();
    }).then(result => {
      //**********商品图片 ************/
      let pic_attr = new Array();
      for (let object of result) {
        pic_attr.push(object.get('good_pic'))
      }
      pic_attr.unshift(cover)
      this.setData({
        imgUrls: pic_attr
      })

    }).then(result => {
      wx.hideLoading();
    }, error => {
      console.log(error);
      wx.hideLoading();
      common.showTip('系统出错请重试', 'loading');
    });
  },
  placeOrder: function(event) {
    var name = event.target.dataset.name;
    this.setData({
      actionType: name
    })
    this.showModal();
  },
  showModal: function() {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  hideModal: function() {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },
  click_cancel: function(){
    this.hideModal()
  },
  payOrder: function() {
    //获取传递过来的数量，商品名称，价格
    let detailArray = {
      price: this.data.detail.price,
      name: this.data.detail.menu_name,
      pic: this.data.detail.menu_logo
    };
    let orderResult = new Array();
    orderResult.push(detailArray);
    wx.setStorage({
      key: "orderResult",
      data: orderResult
    })
    wx.redirectTo({
      url: '../payorder/index'
    })
  },
  addCart: function() {
    //购物车数据放进本地缓存
    let detailArray = {
      id: this.data.detail.id,
      price: this.data.price,
      name: this.data.detail.menu_name,
      pic: this.data.detail.menu_logo,
      active: true
    };
    let cartResult = wx.getStorageSync('cartResult') || [];
    cartResult.push(detailArray);
    wx.setStorage({
      key: "cartResult",
      data: cartResult
    })
    this.hideModal();
    this.getCartResult();
    common.showTip("加入购物车成功");
  },
  getCartResult: function(){
    wx.getStorage({
      key: 'cartResult',
      success: res => {
        if (res.data.length > 0){
          this.setData({
            cartResult: true
          });
        }
      },
    })
  },
  index: function() {
    wx.switchTab({
      url: '../dashboard/index'
    })
  },
  cart: function() {
    wx.switchTab({
      url: '../cart/index'
    })
  },
}))