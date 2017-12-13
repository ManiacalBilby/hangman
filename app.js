$(document).ready(function () {
  console.log("Document ready!");

  //create an array of letters in the alphabet
  //each letter can only be selected once
  //create click event that can be applied to each letter
  //create a word for hidden word that can be selected by letter

let counter = 6

  let word = "BANANA".split('')
console.log(word)
for (let i = 0; i < word.length; i++) {
  $('#hidden_word').append(`<h1>${word[i]}</h1>`)
}
$('div h1').addClass('whiteout')  

$('div h1').addClass('hidden')

  $('span').click(function () {
    $(this).addClass('whiteout')
    $(`div h1:contains('${$(this).text()}')`).removeClass('whiteout')

    if (word.indexOf($(this).text()) === -1) {


    //  parseInt($('h2 span').text()) 
      
    counter -= 1

    console.log(counter)

      console.log("wrong")
    }
      


    console.log(word)
    
    

    console.log($(this).text())
  })







})