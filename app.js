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

window.onload = () => {
  const lazyImages = document.getElementsByClassName('lazyImage');
  const classNames = [
    'parallax_image_second',
    'parallax_image_third',
    'parallax_image_fourth'
  ];
  const lazyImagesLength = lazyImages.length
  for (let i = 0; i < lazyImagesLength; i += 1) {
    lazyImages[0].classList.add(classNames[i]);
    lazyImages[0].classList.remove('lazyImage');
  }
}