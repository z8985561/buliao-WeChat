// pages/contact/contact.js
const app = getApp();
const core = app.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    route:"contact",
    icons: app.requirejs("icons"),
    list: [{
      bgUrl: "http://img2.y01.cn/images/4/2019/05/rbZKKCJam7M99wCTJ7TX4bCJ8JJbT2.png",
      logo: "http://img2.y01.cn/images/4/2019/05/VRL1iGiRRg34YORbINiWCQ844WR4z4.png",
      name: "布料商城1",
      business: "色丁、珍珠雪纺、皮绒、棉纶、仿麻", //主营
      content: "品牌背书是指某一品牌要素以某种方式出现在包装、标号或者产品外观上，但不直接作为品牌名称的一部分。品牌是人们对一个企业及其产品、售后服务、文化价值的一种评价和认知，是一种信任。",
      phone: "020-88881111",
      wechatGroup: "http://img2.y01.cn/images/4/2019/05/LRfYR8Drf82U55OtF8F8or8OoyzRRz.jpg",
      account: "http://img2.y01.cn/images/4/2019/05/LRfYR8Drf82U55OtF8F8or8OoyzRRz.jpg",
      latitude: "23.1185452694",
      longitude: "113.3218288422"
    }, {
      bgUrl: "http://img2.y01.cn/images/4/2019/05/rbZKKCJam7M99wCTJ7TX4bCJ8JJbT2.png",
      logo: "http://img2.y01.cn/images/4/2019/05/VRL1iGiRRg34YORbINiWCQ844WR4z4.png",
      name: "布料商城2",
      business: "色丁、珍珠雪纺、皮绒、棉纶、仿麻", //主营
      content: "品牌背书是指某一品牌要素以某种方式出现在包装、标号或者产品外观上，但不直接作为品牌名称的一部分。品牌是人们对一个企业及其产品、售后服务、文化价值的一种评价和认知，是一种信任。",
      phone: "020-88882222",
      wechatGroup: "http://img2.y01.cn/images/4/2019/05/LRfYR8Drf82U55OtF8F8or8OoyzRRz.jpg",
      account: "http://img2.y01.cn/images/4/2019/05/LRfYR8Drf82U55OtF8F8or8OoyzRRz.jpg",
      latitude: "23.1338090386",
      longitude: "113.3392095566"
    }, {
      bgUrl: "http://img2.y01.cn/images/4/2019/05/rbZKKCJam7M99wCTJ7TX4bCJ8JJbT2.png",
      logo: "http://img2.y01.cn/images/4/2019/05/VRL1iGiRRg34YORbINiWCQ844WR4z4.png",
      name: "布料商城3",
      business: "色丁、珍珠雪纺、皮绒、棉纶、仿麻", //主营
      content: "品牌背书是指某一品牌要素以某种方式出现在包装、标号或者产品外观上，但不直接作为品牌名称的一部分。品牌是人们对一个企业及其产品、售后服务、文化价值的一种评价和认知，是一种信任。",
      phone: "020-88883333",
      wechatGroup: "http://img2.y01.cn/images/4/2019/05/LRfYR8Drf82U55OtF8F8or8OoyzRRz.jpg",
      account: "http://img2.y01.cn/images/4/2019/05/LRfYR8Drf82U55OtF8F8or8OoyzRRz.jpg",
      latitude: "23.1136600000",
      longitude: "113.4270500000"
    }, {
      bgUrl: "http://img2.y01.cn/images/4/2019/05/rbZKKCJam7M99wCTJ7TX4bCJ8JJbT2.png",
      logo: "http://img2.y01.cn/images/4/2019/05/VRL1iGiRRg34YORbINiWCQ844WR4z4.png",
      name: "布料商城4",
      business: "色丁、珍珠雪纺、皮绒、棉纶、仿麻", //主营
      content: "品牌背书是指某一品牌要素以某种方式出现在包装、标号或者产品外观上，但不直接作为品牌名称的一部分。品牌是人们对一个企业及其产品、售后服务、文化价值的一种评价和认知，是一种信任。",
      phone: "020-88884444",
      wechatGroup: "http://img2.y01.cn/images/4/2019/05/LRfYR8Drf82U55OtF8F8or8OoyzRRz.jpg",
      account: "http://img2.y01.cn/images/4/2019/05/LRfYR8Drf82U55OtF8F8or8OoyzRRz.jpg",
      latitude: "23.1327582918",
      longitude: "113.3302563429"
    }, ],
    active: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      isIpx: app.getCache("isIpx")
    })
    core.get("merch/getList",{},res=>{
      console.log(res)
      if(res.error == 0){
        this.setData({
          list:res.list
        })
      }else{
        core.alert(res.msg||"请求出错啦！！");
      }
    })
  },
  swiperChange(e) {
    var {
      current: active
    } = e.detail;
    this.setData({
      active
    })
  },
  callPhone(e) {
    var {
      phone
    } = e.currentTarget.dataset;
    wx.makePhoneCall({
      phoneNumber: phone
    })
  },
  showAddress(e) {
    var {
      latitude,
      longitude
    } = e.currentTarget.dataset;
    console.log(latitude, longitude);
    wx.openLocation({
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      scale: 18
    })
  },
  previewImage(e){
    var { imgurl } = e.currentTarget.dataset;
    wx.previewImage({
      current: imgurl, 
      urls: [imgurl]
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})