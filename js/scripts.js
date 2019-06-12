// /////business logic//////
//
//
// function translate() {
//   var phrase = $('.user-input').val();
//   var vowels = ['a','e','i','o','u'];
//   console.log(phrase);
//   console.log(typeof phrase);
//   if (phrase === 'a' || phrase === 'e' || phrase === 'i' || phrase === 'o' || phrase === 'u') {
//     $('.output').show()
//     $('.output .results').show().append(phrase + 'ay');
//   } else if (vowels.includes(phrase.charAt(0)) === 'a' || phrase.charAt(0) === 'e' || phrase.charAt(0) === 'i' || phrase.charAt(0) === 'o' || phrase.charAt(0) === 'u') {
//     $('.output').show();
//     $('.output .results').show().append(phrase + 'way');
//   } else if (phrase.charAt(0) === )
//
// };//function Translate
//
//
// /////ui logic//////
//
//
// $(document).ready(function() {
//   console.log('jquery is enabled');
//   $('button').click(function() {
//     $('.output .results').empty();
//     translate();
//   });//click event
//
//
//
//
//
// });//jquery




/////business logic//////


function translate() {
  var phrase = $('.user-input').val();
  var vowels = ['a','e','i','o','u'];
  var consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
  console.log(phrase);
  console.log(typeof phrase);
  if (phrase === 'a' || phrase === 'e' || phrase === 'i' || phrase === 'o' || phrase === 'u') {
    $('.output').show()
    $('.output .results').show().append(phrase + 'ay');
  } else if (vowels.includes(phrase.charAt(0))) {
    $('.output').show();
    $('.output .results').show().append(phrase + 'way');
  } else if (consonants.includes(phrase.charAt(0))) {
    var firstConsonant = phrase.charAt(0);
    console.log('sliced phrase: ' + phrase.slice(1));
    $('.output').show();
    $('.output .results').show().append(phrase.slice(1) + firstConsonant + 'ay');

  };

};//function Translate


/////ui logic//////


$(document).ready(function() {
  console.log('jquery is enabled');
  $('button').click(function() {
    $('.output .results').empty();
    translate();
  });//click event





});//jquery
