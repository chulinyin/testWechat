$(function() {
  var UA = window.navigator.appVersion;
  var isIos = UA.match(/iphone/gi);
  var isAndroid = UA.match(/android/gi);
  var isWeChat = UA.match(/MicroMessenger/gi);

  var UI = {
    $wechat: $('#wechat'),
    $web: $('#web'),
    $android: $('#android'),
    $ios: $('#ios'),
    $wechatTipBrowser: $('.wechat_tip_browser'),
    $iosDownloadBtn: $('#ios .download_btn'),
    $iosDownloadedTip: $('#ios .downloaded_tip_wrapper')
  };

  var Page = {
    init: function () {
      Page.listen()

      if(isWeChat) {
        Page.renderWeChat()
      } else if(isIos) {
        Page.renderIos()
      } else if(isAndroid) {
        Page.renderAndroid()
      } else {
        Page.renderWeb()
      }
    },
    listen: function () {
      UI.$iosDownloadBtn.on('click', 'a', function() {
        UI.$iosDownloadBtn.hide()
        UI.$iosDownloadedTip.show()
      })
    },
    renderWeChat: function () {
      UI.$wechat.show()
      UI.$wechatTipBrowser.html(isIos ? 'Safari' : '浏览器')
    },
    renderIos: function () {
      UI.$ios.show()
    },
    renderAndroid: function () {
      UI.$android.show()
    },
    renderWeb: function () {
      UI.$web.show()
    },
  };

  Page.init();
})