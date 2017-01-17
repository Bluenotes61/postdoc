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

  }

  init();
}

jQuery(document).ready(function() {
  new StartPage;
});
