const translator = function (language, vowels) {
  let letters = language.slice(0, 1);
  for (let i = 0; i < vowels.length; i++) {
    if(letters !== vowels[i]) {
      language = language.slice(1);
      language = language.concat(letters + "ay");
      break;
    } else {
      language = language.concat("way");
    }
  }
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