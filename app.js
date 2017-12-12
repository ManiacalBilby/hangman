$(document).ready(function () {
  console.log("Document ready!");

//create an array of letters in the alphabet
  //each letter can only be selected once
  //create click event that can be applied to each letter
//create a word for hidden word that can be selected by letter


// $('#hidden_word').append( "<h1 class='whiteout'>BANANA</h1>" );

// $('#hidden_word > h1').click(function() {
//   $(this).removeClass('whiteout')
// })

var word = "BANANA".split().join(' ')

$('#hidden_word').append(`<h1>${word}</h1>`).addClass('whiteout')
console.log(word[0])

$('span').click(function() {
  $(this).addClass('whiteout')
  $('#hidden_word').removeClass('whiteout')
  
  // $('#hidden_word > h1').removeClass('whiteout')
  console.log($(this).attr('id'))
})







})