/////business logic//////


function translate() {
  var phrase = $('.user-input').val();
  var vowels = ['a','e','i','o','u'];
  console.log(phrase);
  console.log(typeof phrase);
  if (phrase === 'a' || phrase === 'e' || phrase === 'i' || phrase === 'o' || phrase === 'u') {
    $('.output').show()
    $('.output .results').show().append(phrase + 'ay');
  };//if statement

};//function Translate


/////ui logic//////


$(document).ready(function() {
  console.log('jquery is enabled');
  $('button').click(function() {
    $('.output .results').empty();
    translate();
  });//click event





});//jquery
