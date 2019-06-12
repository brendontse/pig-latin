///business logic//////
if (phrase.contains(' ')) {
  var sentence = Array.from(phrase);
  sentence.Foreach() {
    translate();
  }
}


function translate() {
  var phrase = $('.user-input').val();
  var vowels = ['a','e','i','o','u','y'];
  var consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z'];
  var vowelIndexes = [];
  var firstConsonants = '';
  function getFirstVowel() {
    vowels.forEach(function(x) {
      if (phrase.indexOf(x) >= 1) {
      vowelIndexes.push(phrase.indexOf(x));
      vowelIndexes.sort();
      };
    });
    console.log('index of vowels is: ' + vowelIndexes);
  };
  var indexQU = phrase.indexOf('qu');
  console.log('indexQU: ' + indexQU);

  function getConsonants() {
    for (i = 0; i < vowelIndexes[0]; i++ ) {
    firstConsonants += phrase.charAt(i);
    console.log('first consonants: ' + firstConsonants);
    };
  };

  getFirstVowel();

  console.log(phrase);
  console.log(typeof phrase);
  if (phrase === 'a' || phrase === 'e' || phrase === 'i' || phrase === 'o' || phrase === 'u') {
    console.log('first condition fired');
    $('.output').show()
    $('.output .results').show().append(phrase + 'ay');
  } else if (vowels.includes(phrase.charAt(0)) && phrase.charAt(0) !== 'y') {
    console.log('second condition fired');
    $('.output').show();
    $('.output .results').show().append(phrase + 'way');
  } else if (indexQU < vowelIndexes[0] && phrase.includes('qu')) {
    console.log('third condition fired');
    var consonantsBeforeQU = phrase.slice(0,(indexQU + 2));
    console.log(consonantsBeforeQU);
    $('.output').show();
    $('.output .results').show().append(phrase.slice(indexQU + 2) + consonantsBeforeQU + 'ay');
  } else if (consonants.includes(phrase.charAt(0)) || phrase.charAt(0) === 'y' ) {
    console.log('fourth condition fired');
    getConsonants();
    console.log('firstConsonants: ' + firstConsonants);
    console.log('sliced phrase: ' + phrase.slice(vowelIndexes[0]));
    $('.output').show();
    $('.output .results').show().append(phrase.slice(vowelIndexes[0]) + firstConsonants + 'ay');
  } else {
    $('.output').show();
    $('.output .results').show().append('PLEASE ENTER A WORD');
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
