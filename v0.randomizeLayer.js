var randomizeLayer = function(selector, z) {
  $(selector).each(function(){
    var layer = Math.ceil(Math.random() * 99);
    $(this).css('z-index', layer);
  });
}
