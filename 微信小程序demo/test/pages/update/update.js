// pages/update/update.js
Page({
  data: {
    id:"",
    text:""
  },
  formbindsubmit: function (e) {
    var that = this
    //链接后台
    wx.request({
      url: 'http://localhost/phpProject/wxphp/update.php', //服务器地址
      data: {
        id:that.data.id,
        txt: e.detail.value.txt
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.switchTab({
          url: '../index/index',
          success: function (e) {
            var page = getCurrentPages().pop();
            if (page == undefined || page == null) return;
            page.onLoad();
          } 
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var id=options.id;
      var text=options.text;
      // console.log(text)
      var that=this;
      that.setData({
        id:id,
        text:text
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