jQuery(document).ready(function ($) {
  "use strict";

  // Lightbox for portfolio pieces (Magnific Popup is already loaded via plugins.js)
  if ($.fn.magnificPopup) {
    $(".popup-image").magnificPopup({
      type: "image",
      gallery: { enabled: true },
      image: { titleSrc: "alt" },
      closeOnContentClick: true,
      mainClass: "mfp-fade",
    });
  }

  // Portfolio filter (Portafolio page)
  var $filterButtons = $(".portfolio-filter button");
  var $items = $(".nft .row > [data-category]");

  $filterButtons.on("click", function () {
    var cat = $(this).attr("data-filter");
    $filterButtons.removeClass("active");
    $(this).addClass("active");

    $items.each(function () {
      var el = $(this);
      var show = cat === "all" || el.attr("data-category") === cat;
      el.attr("data-hidden", show ? "false" : "true");
    });
  });
});
