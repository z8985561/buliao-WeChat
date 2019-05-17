// application/pages/poster/change-img/change-img.js
const app = getApp();
const core = app.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: "",
    list: []
  },
  changeImg(e) {
    var url = e.currentTarget.dataset.url;
    var name = e.currentTarget.dataset.name || "";
    var id = e.currentTarget.dataset.id;
    var pages = getCurrentPages(); //  获取页面栈
    var currPage = pages[pages.length - 1]; // 当前页面
    var prevPage = pages[pages.length - 2]; // 上一个页面
    if (this.data.type == "cloth") {
      prevPage.setData({
        ["morningFigure.img"]: url,
        ["morningFigure.name"]: name
      })
    } else if (this.data.type == "festival") {
      prevPage.setData({
        ["festivalFigure.img"]: url
      })
    }
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var {
      type,
      id
    } = options;
    this.setData({
      type,
      id
    })
    core.get("poster/poster/getPosterImg", { "type": this.data.type,"id":this.data.id},res=>{
      console.log(res)
      if(res.error == 0){
        this.setData({
          list:res.list
        })
      }
    })
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