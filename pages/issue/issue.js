Page({
  data: {
    array: ['天津理工大学', '天津工业大学', '天津师范大学'],
    kuaidi: ["京东", "圆通", "顺丰", "优速", "申通"],
    objectArray: [
      {
        id: 0,
        name: '天津理工大学'
      },
      {
        id: 1,
        name: '天津工业大学'
      },
      {
        id: 2,
        name: '天津师范大学'
      },
     
    ],
    multiArray: [['南区', '北区'], ['1号楼', '2号楼', '3号楼', '4号楼', '5号楼', '6号楼', '7号楼', '8号楼', '9号楼', '10号楼', '11号楼', '12号楼', '13号楼', '14号楼', '15号楼', '16号楼', '17号楼', '18号楼', '19号楼', '20号楼']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '南区'
        },
        {
          id: 1,
          name: '北区'
        }
      ], [
        {
          id: 0,
          name: '1号楼'
        },
        {
          id: 1,
          name: '2号楼'
        },
        {
          id: 2,
          name: '3号楼'
        },
        {
          id: 3,
          name: '4号楼'
        },
        {
          id: 3,
          name: '5号楼'
        },
        {
          id: 3,
          name: '4号楼'
        },
        {
          id: 3,
          name: '5号楼'
        },
        {
          id: 3,
          name: '6号楼'
        },
        {
          id: 3,
          name: '7号楼'
        },
        {
          id: 3,
          name: '8号楼'
        },
        {
          id: 3,
          name: '9号楼'
        },
        {
          id: 3,
          name: '10号楼'
        },
        {
          id: 3,
          name: '11号楼'
        },
        {
          id: 3,
          name: '12号楼'
        },
        {
          id: 3,
          name: '13号楼'
        },
        {
          id: 3,
          name: '14号楼'
        },
        {
          id: 3,
          name: '15号楼'
        },
        {
          id: 3,
          name: '16号楼'
        },
        {
          id: 3,
          name: '17号楼'
        },
        {
          id: 3,
          name: '18号楼'
        },
        {
          id: 3,
          name: '19号楼'
        },
        {
          id: 3,
          name: '20号楼'
        }
        
      ]
    ],
    multiIndex: [0, 0],
    index1: 0,
    index2: 0,
    current: '1',
    tab1: true,
    currentTabsIndex: 0,
    files: [],
    switch1: false,
    issueType: [{
        name: '快递代取'
      },
      {
        name: '物品悬赏'
      }
    ],
    tags: [{
        name: '标签一',
        checked: false,
        color: 'default'
      },
      {
        name: '标签二',
        checked: false,
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
    ]
  },
  //普通选择器
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
  //普通选择器2
  bindExpressPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    console.log(e.detail.column);
    switch (e.detail.column) {
      
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['1号楼', '2号楼', '3号楼', '4号楼', '5号楼', '5号楼', '6号楼', '7号楼', '8号楼', '9号楼', '10号楼', '11号楼', '12号楼', '13号楼', '14号楼', '15号楼', '16号楼', '17号楼', '18号楼', '19号楼', '20号楼'];
            
            break;
          case 1:
            data.multiArray[1] = ['21号楼', '22号楼', '23号楼', '24号楼', '25号楼', '26号楼', '27号楼', '28号楼', '29号楼', '30号楼', '31号楼'];
            
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      
        
    }
    this.setData(data);
  },
  handleChange({ detail }) {
    var index = detail.key
    
    console.log(index);
    this.setData({
      current: detail.key
    });
    if (index == 1) {
      this.setData({
        tab1: true,
        tab2: false
      })
    } else if (index == 2) {
      this.setData({
        tab1: false,
        tab2: true
      })
    }

  },
  onChange(event) {
    const detail = event.detail;
    console.log(detail);
    this.setData({
      'switch1': detail.value
    })

  },
  chooseImage: function(e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    })
  },
  previewImage: function(e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  }

});