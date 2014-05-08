$(function () {
      $.fn.html580Ads = function (options){
           return this.each(function () {
                      options = $.extend({
                  width: 468,
                  height: 60,
                  minHeight:200,
                  opacity:'0.9',
                  offsetHeight:0,
                  offsetWidth:0,
                  adsDom:'#html580_ads',
                  initShow:true
                      },options||{});
               
              function showAds($img){
                      var $height = $img.height();
              if ($height < options.minHeight) return;
              var $width = $img.width();
              if ($width < options.width) return;
              var $offset = $img.offset();
              var $offsetTop = $offset.top;
              var $offsetLeft = $offset.left;
              var $clientTop = $img[0].clientTop;
              var $clientLeft = $img[0].clientLeft;
              $(options.adsDom).css({
                  "top": ($offsetTop + $height - options.height + options.offsetHeight) + $clientTop + "px",//如果图片有偏移量可以动态调整增加或减小几个像素
                  "left": $offsetLeft + "px",
                  "width": options.width,
                  "height": options.height,
                  "opacity": (options.opacity || "0.8"),
                  "position": "absolute",
                  "margin-left": ($width - options.width) / 2 + options.offsetWidth + $clientLeft + "px"//如果图片有偏移量可以动态调整增加或减小几个像素
              }).show();
              }
              var $initImg =$(this).find("img:eq(0)") ;
          if(options.initShow&&$initImg){
                  showAds($initImg);
          }
          $(this).find("img").hover(function() {
               showAds($(this));
          });
      });
   };
});