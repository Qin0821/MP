// miniprogram/pages/work/clock.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    minLa: 31305076,
    maxLa: 31305906,
    minLo: 121464034,
    maxLo: 121467744,
    clockResponse: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  doLogin: function() {
    console.log('doClock')
    wx.request({
      url: 'https://apifxr.fooww.com/api/Login/GetLoginInfo',
      data: {
        userName: 'liuqin',
        password: 'AOlq1314fx'
      },
      method: 'GET',
      dataType: 'json',
      success: function(response) {
        console.log(response)
      },
      fail: function(error) {
        console.log(error)
      }
    })
  },

  doClock: function() {
    console.log('doClock')
    var la = this.next(this.data.minLa, this.data.maxLa)
    var lo = this.next(this.data.minLo, this.data.maxLo)
    
    var that = this

    wx.request({
      url: 'https://apifxr.fooww.com/api/Attendance/ClockIn',
      data: {
        FoowwUserID: 720,
        AMStatus: 2,
        AMLeaveType: 0,
        PMStatus: 2,
        PMLeaveType: 0,
        ClockInWay: 1,
        ClockInAddress: "静安区江场路1290号",
        DeviceName: "samsungSM-G8870",
        DeviceOS: "Android 10",
        Latitude: String(la).replace('31', '31.'),
        Longitude: String(lo).replace('121', '121.')
      },
      method: 'POST',
      dataType: 'json',
      success: function(response) {
        console.log(response)
        that.setData({
          clockResponse: JSON.stringify(response)
        })
      },
      fail: function(error) {
        console.log(error)
      }
    })
  },

  next: function(min, max) {
    var range = max - min
    var rand = Math.random()
    return min + Math.round(rand * range)
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