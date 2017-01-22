function StartPage() {
  
  function init() {
    $(document).on("scroll", function(){
      if ($(this).scrollTop() > 100)
        $(".topbar").addClass("small");
      else
        $(".topbar").removeClass("small");
    });

    $("a.scroller").on("click", function(){
      var id = $(this).data("id");
      $('html, body').animate({
        scrollTop: $("." + id).offset().top
      }, 1000);      
    });

    $("a.imglink").on("click", function(){
      $(this).parents(".bgcontent").addClass("high");
      var src = $(this).find("img").attr("src");
      var target = $(this).data("target");
      $(target).html("<img src='" + src + "' />");
      $(target).slideDown();
    });

    $(".screenshot").on("click", function(){
      $(this).slideUp();
    });

    $(".bgcontent").each(function(){
      if ($(this).outerHeight() + 100 > $(window).height())
        $(this).addClass("high");
    });

  }

  init();
}

jQuery(document).ready(function() {
  new StartPage;
});
