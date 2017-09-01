$('.highlight').each(function () {
  var btnHtml = '<a href="javascript:;" class="docs-clipboard tooltip-top" aria-label="Copy code"><i class="icon-alt-clipboard"></i></a>';
  $(this).prepend(btnHtml);
});

new Clipboard('.docs-clipboard', {
  target: function(trigger) {
    return $(trigger).closest('.highlight').find('code').get(0);
  }
});
