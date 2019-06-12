/////business logic//////


function translate() {
  var phrase = $('.user-input').val();
  var vowels = ['a','e','i','o','u'];
  console.log(phrase);
  console.log(typeof phrase);
  if (phrase === 'a' || phrase === 'e' || phrase === 'i' || phrase === 'o' || phrase === 'u') {
    $('.output').show()
    $('.output .results').show().append(phrase + 'ay');
  } else if (phrase.charAt(0) === 'a' || phrase.charAt(0) === 'e' || phrase.charAt(0) === 'i' || phrase.charAt(0) === 'o' || phrase.charAt(0) === 'u') {
    $('.output').show()
    $('.output .results').show().append(phrase + 'way');
  }

};//function Translate


/////ui logic//////


$(document).ready(function() {
  console.log('jquery is enabled');
  $('button').click(function() {
    $('.output .results').empty();
    translate();
  });//click event





});//jquery
