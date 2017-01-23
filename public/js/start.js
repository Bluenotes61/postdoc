function StartPage() {
  
  function init() {
    $(document).on("scroll", function(){
      if ($(this).scrollTop() > 100)
        $(".topbar").addClass("small");
      else
        $(".topbar").removeClass("small");
    });

    $(".topitems .hamburger").on("click", function(){
      $(".topitems .hamburgeritems").slideToggle();
    });

    $("a.scroller").on("click", function(){
      var id = $(this).data("id");
      $('html, body').animate({
        scrollTop: $("." + id).offset().top
      }, 1000);      
      $(".topitems .hamburgeritems").slideUp();
    });

    $("a.imglink").on("click", function(){
      var src = $(this).find("img").attr("src");
      var target = $(this).data("target");
      var header = $(this).find(".header").text();
      $(target).find("img").attr("src", src);
      $(target).find(".header").text(header);
      $(target).slideDown(function(){
        $('html, body').animate({
          scrollTop: $(target).offset().top - 80
        }, 500);      
      });
    });

    $(".screenshot").on("click", function(){
      var bg = $(this).parents(".background");
      $(this).slideUp();
      $('html, body').animate({
        scrollTop: bg.offset().top
      }, 500);      
    });

  }

  init();
}

jQuery(document).ready(function() {
  new StartPage;
});
