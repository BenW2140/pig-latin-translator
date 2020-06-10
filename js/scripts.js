const translator = function (language, vowels) {
  for (let i = 1; i <= language.length; i++) {
    const letters = language.slice(0, i);
    for (let j = 0; j < vowels.length; j++) {
      if(letters !== vowels[j] && j === vowels.length - 1) {
        language = language.slice(i);
        language = language.concat(letters + "ay");
        return language;
      } else if (letters === vowels[j]) {
        language = language.concat("way");
        return language;
      }
    }
  }
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