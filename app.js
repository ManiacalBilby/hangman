$(document).ready(function () {
  console.log("Document ready!");

  //create an array of letters in the alphabet
  //each letter can only be selected once
  //create click event that can be applied to each letter
  //create a word for hidden word that can be selected by letter

  let counter = 6

  let word = "COWBOY".split('')

  for (let i = 0; i < word.length; i++) {
    $('#hidden_word').append(`<span class="hidden_letter">${word[i]}</span>`)
  }

  $('.hidden_letter').addClass('whiteout')

  $('.letter_box span').on('click', function () {
    $(this).addClass('change_click')
    $(`.hidden_letter:contains('${$(this).text()}')`).removeClass('whiteout').addClass('correctLetter')
    $(this).off()

    if (word.indexOf($(this).text()) === -1) {

      $('h2 span').text(function (variable) { return (counter -= 1) })
    }

    if ($('.hidden_letter.correctLetter').length === $('.hidden_letter').length) {
      setTimeout(function () { alert('You WIN!') }, 75)
    }

    if (counter === 0) {
      setTimeout(function () { alert("(sad trombone) you lost. Refresh to try again!") }, 75)
    }

    console.log($(this).text())
  })

})