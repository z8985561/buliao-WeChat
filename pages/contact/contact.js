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
    list: [],
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
      longitude,
      name
    } = e.currentTarget.dataset;
    console.log(latitude, longitude);
    wx.openLocation({
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      name: name,
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