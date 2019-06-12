///business logic//////



function translate() {
  var phrase = $('.user-input').val();
  var vowels = ['a','e','i','o','u'];
  var consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
  var vowelIndexes = [];
  function getFirstVowel() {
    vowels.forEach(function(x) {
      if (phrase.indexOf(x) >= 1) {
      vowelIndexes.push(phrase.indexOf(x));
      vowelIndexes.sort();
      console.log('index of vowels is: ' + vowelIndexes);

      };
    });
  };

  function getConsonants() {
    for (i = 0; i < vowelIndexes[0]; i++ ) {
    firstConsonants += phrase.charAt(i);
    console.log('first consonants: ' + firstConsonants);
    };
  };

  console.log(phrase);
  console.log(typeof phrase);
  if (phrase === 'a' || phrase === 'e' || phrase === 'i' || phrase === 'o' || phrase === 'u') {
    $('.output').show()
    $('.output .results').show().append(phrase + 'ay');
  } else if (vowels.includes(phrase.charAt(0))) {
    $('.output').show();
    $('.output .results').show().append(phrase + 'way');
  } else if (consonants.includes(phrase.charAt(0))) {
    var firstConsonants = '';
    var indexOfFirstVowel = 0;
    getFirstVowel();
    getConsonants();
    console.log('sliced phrase: ' + phrase.slice(vowelIndexes[0]));
    $('.output').show();
    $('.output .results').show().append(phrase.slice(vowelIndexes[0]) + firstConsonants + 'ay');
  };

};//function Translate



// function translate() {
//   var phraseArray = Array.from($('.user-input').val());
//   var vowels = ['a','e','i','o','u'];
//   var consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
//   console.log(phraseArray);
//   console.log(typeof phraseArray);
//   if (phraseArray === 'a' || phraseArray === 'e' || phraseArray === 'i' || phraseArray === 'o' || phraseArray === 'u') {
//     $('.output').show()
//     $('.output .results').show().append(phraseArray + 'ay');
//   } else if (vowels.includes(phraseArray[0])) {
//     $('.output').show();
//     $('.output .results').show().append(phraseArray + 'way');
//   } else if (consonants.includes(phrase.charAt(0))) {
//     var firstConsonant = phrase.charAt(0);
//     console.log('sliced phrase: ' + phrase.slice(1));
//     $('.output').show();
//     $('.output .results').show().append(phrase.slice(1) + firstConsonant + 'ay');
//   };
// };

/////ui logic//////


$(document).ready(function() {
  console.log('jquery is enabled');
  $('button').click(function() {
    $('.output .results').empty();
    translate();
  });//click event





});//jquery
