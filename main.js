function makeMadlib() {

    // get inputs by id
    var nounOneInput = document.getElementById('noun-one');
    var nounTwoInput = document.getElementById('noun-two');
    var verbInput = document.getElementById('verb');
    var adjectiveInput = document.getElementById('adjective');
    var pluralNounInput = document.getElementById('plural-noun');

    // get values from input
    var nounOne = nounOneInput.value;
    var nounTwo = nounTwoInput.value;
    var verb = verbInput.value;
    var adjective = adjectiveInput.value;
    var pluralNoun = pluralNounInput.value;

    // make the string of the madlib
    var madlibText = 'The other day I rode my ' + nounOne + ' to the ' + nounTwo + ' to ' + verb + ' some ' + adjective + ' ' + pluralNoun + '.';
    console.log(madlibText);

    // display madlib
    var madlibDisplay = document.getElementById('madlib');
    madlibDisplay.textContent = madlibText;

}