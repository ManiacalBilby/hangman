$(document).ready(function () {
  console.log("Document ready!");

  //create an array of letters in the alphabet
  //each letter can only be selected once
  //create click event that can be applied to each letter
  //create a word for hidden word that can be selected by letter

  let counter = 6



  let word = "BANANA".split('')

  for (let i = 0; i < word.length; i++) {
    $('#hidden_word').append(`<h1>${word[i]}</h1>`)
  }
  $('div h1').addClass('whiteout')

  $('div h1').addClass('hidden')

  $('span').click(function () {
    $(this).addClass('whiteout')
    $(`div h1:contains('${$(this).text()}')`).removeClass('whiteout').addClass('correct')

    if (word.indexOf($(this).text()) === -1) {

    $('h2 span').text(function (variable) { return (counter -= 1) })

    }

    if ($('div h1.correct').length === $('div h1').length) {
      setTimeout(function() {alert('You WIN!')}, 75)
    }

    if (counter === 0) {
      setTimeout(function() {alert("Womp womp. Refresh to try again!")}, 75)
    }

    console.log($(this).text())
  })

})