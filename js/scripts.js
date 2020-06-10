const translator = function (language, vowels) {
  vowels.forEach(function(vowel) {
    if(language.slice(0, 1) === vowel) {
      language = language.concat("way");
    }
  })
  return language;
}

$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();

    const english = $("input#english").val();
    const vowels = ["a", "e", "i", "o", "u"];
    const pigLatin = translator(english, vowels);
    $("#pig-latin").text(pigLatin);
  });
});