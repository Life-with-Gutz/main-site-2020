const socFixed = document.querySelector('.socials-fixed')
const footer = document.querySelector('.footer-space')
const screenHeight = window.innerHeight;

function socialCheck() {
  if (window.scrollY + screenHeight/2 > footer.offsetTop) {
    socFixed.classList.add('socials-out');
  } else {
    socFixed.classList.remove('socials-out');
  }
}
socialCheck();

window.addEventListener('scroll', socialCheck);



(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {

      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);

function animateIn() {
  $('.animate-in').each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("loader");
    }
  });
}

animateIn();

window.addEventListener('scroll', animateIn);


const navToggle = document.querySelector('.navtoggle');
const header = document.querySelector('.header');

navToggle.addEventListener('click', function(e){
  e.preventDefault();
  header.classList.toggle('open');
})

header.classList.remove('no-js');
