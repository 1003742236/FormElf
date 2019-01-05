var common = require('../../utils/common.js');
var Bmob = require("../../utils/bmob.js");
var util = require("../../utils/util.js");
var that;
Page({
  data: {
    totalMoney: 0,
    goodMoney:0,
    price:0,
    allOrder: []
  },
  onShow() {
    let totalMoney = null;
    let total =null;
    wx.getStorage({
      key: 'orderResult',
      success: res => {
        console.log(res.data);
        let len = res.data.length;
        let goodMoney = 0;
        for (let i = 0; i < len; i++) {
          goodMoney +=  res.data[i].price;
        }
        total = goodMoney;
        this.setData({
          totalMoney: total.toFixed(2),
          goodMoney: goodMoney.toFixed(2),
          detail: res.data
        })
      }
    })
  },
  placeOrder: function(event) {
    var that = this;
    // 发起支付
    var orderDetail = this.data.detail;
    var totalPrice = parseFloat(this.data.totalMoney);
    var remarks = event.detail.value.remark;
  }

});