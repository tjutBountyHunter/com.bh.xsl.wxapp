// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgOn: true
  },
  onGoodTap: function() {
    var that = this;
    if (that.data.imgOn == true) {
      wx.showToast({
        title: '收藏成功',
        icon: 'success',
        duration: 3000
      });
      this.setData({
        imgOn: false
      })
    }
    else if (that.data.imgOn == false){
      wx.showToast({
        title: '取消成功',
        icon: 'success',
        duration: 3000
      });
      this.setData({
        imgOn: true
      })
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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