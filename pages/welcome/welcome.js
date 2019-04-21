Page({
  data: {
    inputShowed: false,
    inputVal: "",
    appHeight: '',
    oneChecked: false,
    //tag 标签
    tags: [{
        name: '标签一',
        checked: true,
        color: 'default'
      },
      {
        name: '标签二',
        checked: true,
        color: 'red'
      },
      
      {
        name: '标签三',
        checked: true,
        color: 'blue'
      },
      {
        name: '标签四',
        checked: true,
        color: 'green'
      }
    ],

    // 筛选导航栏数据
    msgList: [{
        key: 1,
        name: '区域'
      },
      {
        key: 2,
        name: '悬赏金'
      },
      {
        key: 3,
        name: '类型'
      }
    ],
    // 判断导航栏列表是否显示
    menuShow: [{
        isShows: true
      },
      {
        isShows: true
      },
      {
        isShows: true
      },

    ],

    // 区域数据
    // 西安市区
    areaLise: [{
        id: 0,
        name: '不限'
      },
      {
        id: 1,
        name: '天津理工大学'
      },
      {
        id: 2,
        name: '天津师范大学'
      },
      {
        id: 3,
        name: '天津工业大学'
      },

    ],
    // 市区街道
    rowLise: {
      0: {
        id: 1,
        name: ['南区', '北区', ]
      },
      1: {
        id: 2,
        name: ['1', '2']
      },
      2: {
        id: 3,
        name: ['3', '4']
      },

    },

    // 区域模块市区街道隐藏/显示
    rowShow: [{
        isShows: true
      },
      {
        isShows: true
      },
      {
        isShows: true
      },
      {
        isShows: true
      }
    ],

    // 区域右侧是否显示
    rigShow: true,

    // 售价
    price: [{
        id: 0,
        name: '不限'
      },
      {
        id: 1,
        name: '1-5元'
      },
      {
        id: 2,
        name: '5-10元'
      },
      {
        id: 3,
        name: '10元以上'
      },

    ],

    // 房间型号
    roomModel: [{
        id: 0,
        name: '不限'
      },
      {
        id: 1,
        name: '快递代取'
      },
      {
        id: 2,
        name: '资料悬赏'
      },
      {
        id: 3,
        name: '其他悬赏'
      },

    ]
  },
  onLoad: function(options) {
    // 获取设备高度
    var res = wx.getSystemInfoSync();
    this.setData({
      appHeight: res.windowHeight
    });
    // wx.request({
    //   url: '',

    // })
    
  },
  // 筛选导航栏事件
  menuClick: function(e) {
    // 获取通过wxml  data-hi="{{ idx }}" 传过来的索引
    var menuNum = e.currentTarget.dataset.hi;

    // 拼接 ，使我们可以获取到menuShow里面每一个isSHows
    var menuSrc = "menuShow[" + menuNum + "].isShows";
    
    // 循环data中设置的menuShow
   
    for (var n = 0; n < this.data.menuShow.length; n++) {
      // 拼接 ，使我们可以获取到menuShow里面每一个isSHows
      var menuSrcs = "menuShow[" + n + "].isShows";
      
      // 解决重复点击不能隐藏的问题
      if (n != menuNum) {
        // 初始化，每次点击时先全部隐藏，但是重复点击不会隐藏
        this.setData({
          [menuSrcs]: true
        });
      };
    };

    // 给当前点击的去反data中设置的menuShow，使之显示， 只写此处只会显示不能隐藏
    this.setData({
      [menuSrc]: !this.data.menuShow[e.currentTarget.dataset.hi].isShows
    });
  },
  // 状态改变时触发
  oneChange(event) {
    this.setData({
      'oneChecked': event.detail.checked
    })
  },
  onChange(event) {
    console.log(event);
    const detail = event.detail;
    this.setData({
      ['tags[' + event.detail.name + '].checked']: detail.checked
    })

  },
  // 区域列表事件
  rowClick: function(e) {
    // 限制第一个 '不限' 不能点击
    if (e.currentTarget.dataset.hi != 0) {
      // 获取wxml  data-hi="{{ index }}" 传过来的索引
      var rowNum = e.currentTarget.dataset.hi;
      
      // 同筛选导航栏事件，因第一个为不限不可点击， 所以减一
      var rowSrc = "rowShow[" + (rowNum - 1) + "].isShows";
      console.log(this.data.areaLise[rowNum].name);
      // 隐藏所有的三级菜单
      for (var m = 0; m < this.data.rowShow.length; m++) {
        var rowSrcs = "rowShow[" + m + "].isShows";

        this.setData({
          [rowSrcs]: true
        });
      };
      // 同上
      this.setData({
        rigShow: false,
        [rowSrc]: !this.data.rowShow[e.currentTarget.dataset.hi].isShows
      });
    } else {

      // var menuShowNum = this.data.menuShow[e.currentTarget.dataset.hi].isShows;
      // console.log(menuShowNum);
      // menuShowNum = true;
      var menuSrcs = "menuShow[" + e.currentTarget.dataset.hi + "].isShows"
      this.setData({
        [menuSrcs]: true
      })
    }
  },
  //小程序搜索框
  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function() {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  //获取详细地址
  getDetailAddress: function(e) {
    console.log(e.currentTarget.dataset.address);
  },
  //获取详细悬赏金额
  getDetailMoney:function(e){
    console.log(e.currentTarget.dataset.money.name);
  },
  //获取详细悬赏类型
  getDetailType:function(e){
    console.log(e.currentTarget.dataset.type.name);
  },
  //任务详情页跳转
  onDetailTap: function(){
    wx.navigateTo({
      url: '../detail/detail',
    })
  }
});