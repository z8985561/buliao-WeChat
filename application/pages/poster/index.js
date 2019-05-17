// application/pages/poster/index.js
const app = getApp();
const core = app.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    active: 0,
    morningFigure: {
      time: "morning",
      template: "1",
      img: "",
      text: ["1111111111", "222222222", "3333333333", "444444444", "5555555555"]
    },
    festivalFigure:{
      festival:"festival",
      fontColor:"white",
      logo:"default",
      img: "",
      text: ["1111111111", "222222222"],
      id:1
    },
    timeBucket: [{
      type: "morning",
      text: "早安图",
      checked: true
    }, {
      type: "afternoon",
      text: "午安图",
      checked: false
    }, {
      type: "night",
      text: "晚安图",
      checked: false
    }],
    template: [{
      type: "1",
      text: "模板1",
      checked: true
    }, {
      type: "2",
      text: "模板2",
      checked: false
    }, {
      type: "3",
      text: "模板3",
      checked: false
    }, {
      type: "4",
      text: "模板4",
      checked: false
    }, {
      type: "5",
      text: "模板5",
      checked: false
    }, {
      type: "6",
      text: "模板6",
      checked: false
    }, {
      type: "7",
      text: "模板7",
      checked: false
    }],
    festivalType: [{
      type: "festival",
      text: "节日",
      checked: true
    }, {
      type: "solarTerms",
      text: "节气",
      checked: false
    }],
    fontColor: [{
      type: "white",
      text: "白色",
      checked: true
    }, {
      type: "black",
      text: "黑色",
      checked: false
    }],
    logos:[{
      type: "default",
      text: "默认",
      checked: true
    },{
        type: "logo1",
        text: "logo1",
        checked: false
    }],
    festivalList:[
      {
        id: 1,
        name: '春节'
      }, {
        id: 2,
        name: '初一'
      }, {
        id: 3,
        name: '初二'
      }, {
        id: 4,
        name: '初三'
      }, {
        id: 5,
        name: '初四'
      }, {
        id: 6,
        name: '初五'
      }, {
        id: 7,
        name: '初六'
      }, {
        id: 8,
        name: '情人节'
      }, {
        id: 9,
        name: '元宵'
      }, {
        id: 10,
        name: '妇女节'
      }, {
        id: 11,
        name: '植树节'
      }, {
        id: 12,
        name: '清明'
      }, {
        id: 13,
        name: '劳动节'
      }, {
        id: 14,
        name: '青年节'
      }, {
        id: 15,
        name: '母亲节'
      }, {
        id: 16,
        name: '儿童节'
      }, {
        id: 17,
        name: '端午'
      }, {
        id: 18,
        name: '父亲节'
      }, {
        id: 19,
        name: '建军节'
      }, {
        id: 20,
        name: '七夕'
      }, {
        id: 21,
        name: '教师节'
      }, {
        id: 22,
        name: '中秋'
      }, {
        id: 23,
        name: '国庆节'
      }, {
        id: 24,
        name: '重阳'
      }, {
        id: 25,
        name: '感恩节'
      }, {
        id: 26,
        name: '平安夜'
      }, {
        id: 27,
        name: '圣诞节'
      }, {
        id: 28,
        name: '元旦'
      }, {
        id: 29,
        name: '腊八'
      }, {
        id: 30,
        name: '小年'
      }, {
        id: 31,
        name: '除夕'
      },
    ],
    solarTermsList:[
      {
        id: 1,
        name: '立春'
      }, {
        id: 2,
        name: '雨水'
      }, {
        id: 3,
        name: '惊蛰'
      }, {
        id: 4,
        name: '春分'
      }, {
        id: 5,
        name: '清明'
      }, {
        id: 6,
        name: '谷雨'
      }, {
        id: 7,
        name: '立夏'
      }, {
        id: 8,
        name: '小满'
      }, {
        id: 9,
        name: '芒种'
      }, {
        id: 10,
        name: '夏至'
      }, {
        id: 11,
        name: '小暑'
      }, {
        id: 12,
        name: '大暑'
      }, {
        id: 13,
        name: '立秋'
      }, {
        id: 14,
        name: '处暑'
      }, {
        id: 15,
        name: '白露'
      }, {
        id: 16,
        name: '秋分'
      }, {
        id: 17,
        name: '寒露'
      }, {
        id: 18,
        name: '霜降'
      }, {
        id: 19,
        name: '立冬'
      }, {
        id: 20,
        name: '小雪'
      }, {
        id: 21,
        name: '大雪'
      }, {
        id: 22,
        name: '冬至'
      }, {
        id: 23,
        name: '小寒'
      }, {
        id: 24,
        name: '大寒'
      },
    ]
  },
  // 切换头部导航
  changeEvent(e) {
    var {
      index: active
    } = e.currentTarget.dataset;
    this.setData({
      active
    })
  },
  // 选择时间段
  timeBucketChange(e) {
    var type = e.detail.value;
    var timeBucket = this.data.timeBucket;
    timeBucket = this.filtrate(timeBucket,type)
    this.setData({
      timeBucket,
      ["morningFigure.time"]: type
    })
  },
  templateChange(e) {
    var type = e.detail.value;
    var template = this.data.template;
    template = this.filtrate(template, type)
    this.setData({
      template,
      ["morningFigure.template"]: type
    })
  },
  morningFigureChange(e) {
    var value = e.detail.value;
    var {
      index
    } = e.currentTarget.dataset;
    var text = this.data.morningFigure.text;
    text[index] = value;
    this.setData({
      ["morningFigure.text"]: text
    })
  },
  festivalTypeChange(e){
    var type = e.detail.value;
    var festivalType = this.data.festivalType;
    festivalType = this.filtrate(festivalType, type);
    this.setData({
      festivalType,
      index:0,
      ["festivalFigure.festival"]: type
    })
  },
  fontColorChange(e){
    var type = e.detail.value;
    var fontColor = this.data.fontColor;
    fontColor = this.filtrate(fontColor, type);
    this.setData({
      fontColor,
      ["festivalFigure.fontColor"]: type
    })
  },
  logosChange(e){
    var type = e.detail.value;
    var logos = this.data.logos;
    logos = this.filtrate(logos, type);
    this.setData({
      logos,
      ["festivalFigure.logo"]: type
    })
  },
  festivalFigureChange(e) {
    var value = e.detail.value;
    var {
      index
    } = e.currentTarget.dataset;
    var text = this.data.festivalFigure.text;
    text[index] = value;
    this.setData({
      ["festivalFigure.text"]: text
    })
  },
  // 生成图片
  generateImage() {
    if (this.data.active == 0) {
      core.get("url", this.data.morningFigure, res => {
        if (res.error == 0) {

        }
        this.previewImage("http://img2.y01.cn/images/4/2019/05/HirV1L499exirEILPs94xEe93n2NrX.png")
      })
    }
  },
  festivalListChange(e) {
    this.setData({
      index: e.detail.value,
      ["festivalFigure.id"]: this.data.festivalFigure.festival == 'festival' ? this.data.festivalList[e.detail.value].id : this.data.solarTermsList[e.detail.value].id
    })
  },
  // 预览生成的图片
  previewImage(url) {
    wx.previewImage({
      current: url,
      urls: [url]
    })
  },
  // 随机获取文字
  randomText1() {
    var text = this.data.morningFigure.text;
    text[0] = Math.ceil(Math.random() * 10e20);
    text[1] = Math.ceil(Math.random() * 10e20);
    this.setData({
      ["morningFigure.text"]: text
    })
  },
  toChangeImg(e) {
    var {
      type,
      id
    } = e.currentTarget.dataset;
    if (type == "cloth"){
      wx.navigateTo({
        url: `./change-img/change-img?type=${type}`
      })
    } else if (type == "festival"){
      wx.navigateTo({
        url: `./change-img/change-img?type=${type}&id=${id}`
      })
    }
    
  },
  filtrate(arr,type){
    arr.forEach(item => {
      if (type == item.type) {
        item.checked = true
      } else {
        item.checked = false
      }
    })
    return arr;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(app.getCache('isIpx'))
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