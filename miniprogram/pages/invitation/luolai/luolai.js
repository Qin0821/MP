// miniprogram/pages/invitation/luolai.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logoArray: [false, false, false, false, false],
    isAllComplete: false,
    lightName: false,
  },

  doScan: function() {
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        console.log(res)
        var logoArr = this.data.logoArray
        switch(res.result) {
          case '1': 
            logoArr[0] = true
            break;
          case '2': 
            logoArr[1] = true
            break;
          case '3': 
            logoArr[2] = true
            break;
          case '4': 
            logoArr[3] = true
            break;
          case '5': 
            logoArr[4] = true
            break;
          default:
            break;
        }
        this.setData({
            logoArray: logoArr,
        })
        
        wx.setStorage({
          key: "logoArray",
          data: JSON.stringify(logoArr)
        })

        if (logoArr.indexOf(false) == -1) {
          this.doComplete()
        }
      }
    })
  },

  doComplete: function() {
    var that = this
    var duration = 3000
    var ratate = 1800
    this.animate('.name', [
      { opacity: 1.0, rotate: 0, scaleX: 1, ease: 'ease-in'},
      { opacity: 0, rotate: ratate, scaleX: 0.5, ease: 'ease-in'},
      ], duration, function () {
          that.setData({
            lightName: true
          })
        this.animate('.name', [
          { opacity: 0, rotate: ratate, scaleX: 0.5, ease: 'ease-out'},
          { opacity: 1.0, rotate: ratate * 2, scaleX: 1, ease: 'ease-out'},
          ], duration, function () {
            that.setData({
              isAllComplete: true
            })
            this.animate('.gift', [
              { opacity: 0, scale3d: [0.5, 0.5, 0.5], ease: 'ease-out'},
              { opacity: 1.0, scale3d: [1, 1, 1], ease: 'ease-out'},
              ], 1000, function () {
            }.bind(this))
        }.bind(this))
    }.bind(this))
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '礼遇快闪'
    })

    wx.hideShareMenu({
      success: (res) => {
        console.log('hideShareMenu')
      },
    })

    var that = this
    wx.getStorage({
      key: 'logoArray',
      success(res) {
        console.log(res)
        var logoArr = JSON.parse(res.data)
        that.setData({
          logoArray: logoArr,
          isAllComplete: logoArr.indexOf(false) == -1
        })
      }
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