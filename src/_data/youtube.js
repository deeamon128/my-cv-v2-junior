$('button[data-popup]').click(function(){
  $('.popup[data-popup="' + $(this).data('popup') + '"]').fadeIn('fast');
});
