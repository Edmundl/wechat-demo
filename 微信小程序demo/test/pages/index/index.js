//index.js
Page({
  data: {
    array:null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that=this
    wx.request({
      url: 'http://localhost/phpProject/wxphp/index.php', //服务器地址
      method:"GET",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          array:res.data
        })
      }
    })
  },
  del: function(e){
    var that=this
    var $data=e.currentTarget.dataset
    wx.request({
      url: 'http://localhost/phpProject/wxphp/del.php', //服务器地址
      method: "GET",
      data:{
        id:$data.id
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        // console.log(res.data)
        // that.setData({
        //    array: res.data
        // })
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
  up:function(e){
    var that = this
    var $data = e.currentTarget.dataset
    wx.navigateTo({
      url: '../update/update?id='+$data.id+'&text='+$data.text,
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
