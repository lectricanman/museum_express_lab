'use strict'

$(function() {
  console.log('lol scripting noob');
  let renderTemplate_painting = Handlebars.compile($('template#painting-template').html());

  $('.paintings-link').click(function(e){
    console.log('clicked paintings-link');
    e.preventDefault()

    $.get('/paintings', renderPaintings, 'json')
  })

  let renderPaintings = function(data) {
    let $list = $('.results-div')

    let compiledTemplate = renderTemplate_painting({painting: data})
    $list.html('').append(compiledTemplate)
  }









});
