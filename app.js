$(document).ready(function () {
  console.log("Document ready!");

  let words = ['HORSE', 'COWBOY', 'CACTUS', 'SNAKE', 'REVOLVER', 'BANDIT', 'CATTLE', 'SADDLE', 'LASSO', 'PRAIRIE', 'FRONTIER']

  let westernWord = words[Math.floor(Math.random() * words.length)].split('')

  let counter = 6

  let gameSetup = function() {
    $('.letter_box span').css('cursor', 'crosshair')
    for (let i = 0; i < westernWord.length; i++) {
      $('#hidden_word').append(`<span class="hidden_letter">${westernWord[i]}</span>`)
    }
    $('.hidden_letter').addClass('whiteout')
  }

  let winner = function() {
    if ($('.hidden_letter.correct_letter').length === $('.hidden_letter').length) {
      setTimeout(function () { alert('You WIN! Close this alert to play again!'), location.reload() }, 75)
    }
  }

  let loser = function() {
    if (counter === 0) {
      $('.hidden_letter').addClass('correct_letter')
      setTimeout(function () { alert('(sad trombone) You lost. Close this alert to play again!'), location.reload() }, 75)
    }
  }

  gameSetup();

  // Letter selected by key press

  $(document).keypress(function(event){
    let keyPressed = String.fromCharCode(event.which).toUpperCase();

    $(`.letter_box span:contains(${keyPressed})`).addClass('change_click')

    if (westernWord.indexOf(keyPressed) >= 0) {
      $(`.hidden_letter:contains(${keyPressed})`).removeClass('whiteout').addClass('correct_letter')
    } 

    else {
      $('#counter').addClass('wrong_letter')
      $('#counter').text(function () { return (counter -= 1) })
    }

  winner();

  loser();

  });

  // Letter selected by mouse click

  $('.letter_box span').on('click', function () {
    $(this).addClass('change_click')
    $(`.hidden_letter:contains('${$(this).text()}')`).removeClass('whiteout').addClass('correct_letter')
    $(this).off()

    if (westernWord.indexOf($(this).text()) === -1) {
      $('#counter').addClass('wrong_letter')
      $('#counter').text(function () { return (counter -= 1) })
    }

    winner();

    loser();

  })
})

