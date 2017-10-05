// Smooth Scrolling script from css-tricks.com
// https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(() => {
  $('a[href*="#"]:not([href="#"])').click(() => {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1100);
        return false;
      }
    }
  });
});
