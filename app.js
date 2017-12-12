$(document).ready(function () {
  console.log("Document ready!");

  //create an array of letters in the alphabet
  //each letter can only be selected once
  //create click event that can be applied to each letter
  //create a word for hidden word that can be selected by letter



  let word = "BANANA".split('')
console.log(word)
for (let i = 0; i < word.length; i++) {
  $('#hidden_word').append(`<h1>${word[i]}</h1>`)
}
$('div h1').addClass('whiteout')  
  // console.log($('#hidden_word > h1').text().charAt(0))

  $('span').click(function () {
    $(this).addClass('whiteout')
    $(`div h1:contains('${$(this).text()}')`).removeClass('whiteout')
    
    

    console.log($(this).attr('id'))
  })







})