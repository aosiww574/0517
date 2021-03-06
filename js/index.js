var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  clickable: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // pagination 的style

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // bulletClass: 'my-bullet',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

// 滑鼠覆蓋停止自動切換
swiper.el.onmouseover = function () {
  swiper.autoplay.stop()
}

// 滑鼠離開開始自動切換
swiper.el.onmouseout = function () {
  swiper.autoplay.start()
}

// pagination 點選設定
for (i = 0; i < swiper.pagination.bullets.length; i++) {
  swiper.pagination.bullets[i].onmouseover = function () {
    this.click()
  }
}

// ;(function (defaultFontSize, defaultScreenWidth) {
//   var htmlNode = document.getElementsByTagName('html')[0]
//   function resize() {
//     var screenWidth = document.body.offsetWidth
//     // var fontSize = (screenWidth / defaultScreenWidth) * defaultFontSize;
//     var fontSize = (defaultScreenWidth / screenWidth) * defaultFontSize
//     if (fontSize > 100) fontSize = 100
//     htmlNode.style.fontSize = fontSize + 'px'
//   }
//   document.addEventListener('DOMContentLoaded', function () {
//     resize()
//   })
//   window.addEventListener('resize', resize)
// })(100, 750)
