$('.thumbnails a').on('mousemove', function() {
  var title = $(this).find('.project-desc').text()
  console.log(title)
  $('.cursor').html(title)
  $('.cursor').css({left: event.pageX - 220, top: event.pageY - 100})
})

$('.thumbnails a').on('mouseleave', function() {
  $('.cursor').empty()
})
