$(document).ready(function () {
  console.log("Document ready!");

  let words = ['HORSE', 'COWBOY', 'CACTUS', 'SNAKE', 'REVOLVER', 'BANDIT,', 'CATTLE']

  let westernWord = words[Math.floor(Math.random() * words.length)]

  let counter = 6

  let word = westernWord.split('')

$('.letter_box span').css('cursor', 'crosshair')

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