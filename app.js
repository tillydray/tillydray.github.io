$(() => {
  const $emailWrapper = $('#email-wrapper');
  $('a[href="#email-wrapper"]').click(() => {
    $('[src="http://www.seguridad.gob.sv/wp-content/uploads/2015/08/icono-email.png"]').addClass('pulse-color');
    $('html, body').animate({
      scrollTop: $emailWrapper.offset().top
    }, 1100);
  });
});
