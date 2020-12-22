// miniprogram/pages/invitation/luolai.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logoArray: [false, false, false, false, false],
    isAllComplete: false
  },

  doScan: function() {
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        console.log(res)
        var logoArr = this.data.logoArray
        switch(res.result) {
          case '1': 
            console.log(1)
            logoArr[0] = true
            break;
          case '2': 
            console.log(2)
            logoArr[1] = true
            break;
          case '3': 
            console.log(3)
            logoArr[2] = true
            break;
          case '4': 
            console.log(4)
            logoArr[3] = true
            break;
          case '5': 
            console.log(5)
            logoArr[4] = true
            break;
          default:
            break;
        }
        this.setData({
            logoArray: logoArr,
            isAllComplete: logoArr.indexOf(false) == -1
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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