$(() => {
  const $emailWrapper = $('#email-wrapper');
  $('a[href="#email-wrapper"]').click(() => {
    $('html, body').animate({
      scrollTop: $emailWrapper.offset().top
    }, 1100, function() {
      $emailWrapper.fadeOut(500, function() {
        $emailWrapper.fadeIn(500);
      });
    });
  });
});
