var t = getApp(), e = t.requirejs("core"), w = t.requirejs("wxParse/wxParse"), a = (t.requirejs("icons"), t.requirejs("jquery"));
Page({
	data : {
    isIpx:"",
		route : "category",
		category : {},
		icons : t.requirejs("icons"),
		selector : 0,
		advimg : "",
		recommands : {},
		level : 0,
		back : 0,
		child : {},
		parent : {},
    currentIndex:0
	},
  /* 这里实现控制中间凸显图片的样式 */
  handleChange: function (e) {
    this.setData({
      currentIndex: e.detail.current
    })
  },
	tabCategory : function (t) {
		this.setData({
			selector : t.target.dataset.id,
			advimg : t.target.dataset.src,
			child : t.target.dataset.child,
			back : 0
		}),
		a.isEmptyObject(t.target.dataset.child) ? this.setData({
			level : 0
		}) : this.setData({
			level : 1
		})
	},
	cateChild : function (t) {
		this.setData({
			parent : t.currentTarget.dataset.parent,
			child : t.currentTarget.dataset.child,
			back : 1
		})
	},
	backParent : function (t) {
		this.setData({
			child : t.currentTarget.dataset.parent,
			back : 0
		})
	},
	getCategory : function () {
		var t = this;
		e.get("shop/get_category", {}, function (e) {
			t.setData({
				category : e.category,
				show : !0,
				set : e.set,
				advimg : e.set.advimg,
				recommands : e.recommands,
				child : e.recommands
			})
		})
	},
  onLoad:function(o){
    this.setData({
      isIpx: t.getCache("isIpx")
    })
    this.getShop()
  },
	onShow : function () {
		this.getCategory()
	},
	onHide:function(){
	this.setData({
	  selector: "",
	  advimg:""
	})
	},
	onShareAppMessage : function () {
		return e.onShareAppMessage()
	},
  getShop: function () {
    var t = this;
    e.get("diypage/index/buliao", {}, function (a) {
      //e.wxParse("wxParseData", "html", a.copyright, t, "5"),
      console.log(a);
      t.setData({
        customer: a.customer,
        customercolor: a.customercolor,
        phone: a.phone,
        phonenumber: a.phonenumber,
        qrcode: a.qrcode,
        qrcodethumb: a.qrcodethumb,
        phonecolor: a.phonecolor
      })
      if (a.diypage.page.title) {
        wx.setNavigationBarTitle({
          title: a.diypage.page.title
        })
      }
      if (a.diypage.page.titlebarbg) {
        wx.setNavigationBarColor({
          frontColor: a.diypage.page.titlebarcolor,
          backgroundColor: a.diypage.page.titlebarbg
        })
      }
      var htmlindex = 0;
      //var htmlArr = [];
      for (var ii in a.diypage.items) {
        //console.log(ii + "for...in用法\t" + a.diypage.items[ii].id);
        if (a.diypage.items[ii].id == 'richtext') {
          //console.log(ii);
          //e.wxParse("wxParseData", "html", a.diypage.items[ii].params.content, t, "5");
          w.wxParse("htmlcontent" + htmlindex, "html", a.diypage.items[ii].params.content, t, "5");
          a.diypage.items[ii].params.htmlindex = htmlindex;
          //console.log(wxParseData);
          htmlindex++;
        }
        if (a.diypage.items[ii].id == 'fixedsearch') { //处理接口返回的icon样式不对问题
          if (a.diypage.items[ii].params.leftnavicon != '') a.diypage.items[ii].params.leftnavicon = a.diypage.items[ii].params.leftnavicon.replace('icon', 'icox');
          if (a.diypage.items[ii].params.rightnavicon != '') a.diypage.items[ii].params.rightnavicon = a.diypage.items[ii].params.rightnavicon.replace('icon', 'icox');
        }
        if (a.diypage.items[ii].id == 'goods') { //处理商品组自定义图标路径问题
          if (a.diypage.items[ii].params.goodsiconsrc && a.diypage.items[ii].params.goodsiconsrc != '' && a.diypage.items[ii].params.goodsiconsrc.indexOf('http://') == -1) {
            a.diypage.items[ii].params.goodsiconsrc = t.data.approot.replace('/addons/ewei_shopv2/', '/attachment/') + a.diypage.items[ii].params.goodsiconsrc;
            //console.log(a.diypage.items[ii].params.goodsiconsrc);
          }
          if (a.diypage.items[ii].params.showicon == 2 && a.diypage.items[ii].params.iconposition && a.diypage.items[ii].params.iconposition != '') { //图标位置参数
            a.diypage.items[ii].params.iconleftname = a.diypage.items[ii].params.iconposition.indexOf('right') == -1 ? 'left' : 'right';
            a.diypage.items[ii].params.icontopname = a.diypage.items[ii].params.iconposition.indexOf('bottom') == -1 ? 'top' : 'bottom';
          }
        }
        if (a.diypage.items[ii].id == 'video') { //处理视频高度
          if (a.diypage.items[ii].params.poster && a.diypage.items[ii].params.poster != '' && a.diypage.items[ii].params.poster.indexOf('http://') == -1) {
            a.diypage.items[ii].params.poster = t.data.approot.replace('/addons/ewei_shopv2/', '/attachment/') + a.diypage.items[ii].params.poster;
          }
          wx.getSystemInfo({
            success: function (st) {
              //console.log(st.windowWidth);
              var videow = st.windowWidth;
              var hei = videow;
              if (a.diypage.items[ii].style.ratio == 1) hei = videow * 3 / 4;
              else if (a.diypage.items[ii].style.ratio == 0) hei = videow * 9 / 16;
              //console.log(hei);
              a.diypage.items[ii].style.height = hei;
            }
          })
        }
      }
      if (htmlindex > 0) w.wxParseTemArray("wxParseData", 'htmlcontent', htmlindex, t);
      //console.log(htmlArr);
      t.setData({
        diydata: a.diypage,
        startadv: a.startadv,
        loading: 0,
        show: 1
      })
    })
  },
  wxParseTagATap: function (t) {
    t.target = '';
    if (t.currentTarget.dataset.src) {
      wx.navigateTo({
        url: t.currentTarget.dataset.src,
      })
    }
  },
})
