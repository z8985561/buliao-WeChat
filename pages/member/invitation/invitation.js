// pages/member/invitation/invitation.js
const app = getApp();
const core = app.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    approot: app.globalData.approot,
    more:true,
    nav: [{
      name: "全部",
      type: "all",
    }, {
      name: "周邀请",
      type: "week",
    }, {
      name: "月邀请",
      type: "month",
    }],
    page:1,
    type:"all",
    pagesize:20,
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //页面加载请求
    this.getList();
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

  },
  getList(){
    core.get("commission/getMyunder", {
      type: this.data.type,
      page: this.data.page++,
      pagesize: this.data.pagesize
    }, res => {
      if (res.error == 0) {
        console.log(res.list)
        var list = this.data.list.concat(res.list);
        this.setData({ list })
      } else {
        this.setData({
          more: false
        })
      }
    })
    console.log(this.data.page)
  },
  changeNav(e){
    let {index:active,type} = e.currentTarget.dataset;
    this.setData({
      active,
      type,
      page:1,
      list:[]
    })
    this.getList()
  }
})