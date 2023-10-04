// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
var buttonnoun1 = document.getElementById("noun1");
var buttonverb = document.getElementById("verb");
var buttonadjective = document.getElementById("adjective");
var buttonnoun2 = document.getElementById("noun2");
var buttonsettings = document.getElementById("setting");
var buttonplayback = document.getElementById("playback");
var buttonrandom = document.getElementById("random");
var buttonresetStory = document.getElementById("resetStory");



// Constants for p tag to display query selectors
var choosenNoun1 = document.getElementById("choosenNoun1");
var choosenVerb = document.getElementById("choosenVerb");
var choosenAdjective = document.getElementById("choosenAdjective");
var choosenSetting = document.getElementById("choosenSetting");
var choosenNoun2 = document.getElementById("choosenNoun2");
var storyFinal = document.getElementById("story");
var studentId = document.getElementById("studentId");


// Constants for final buttons and p tags


// Variables for pre-defined arrays
var nouns1 = ["The Turkey", "Mom", "Dad", "The Dog", "My Teacher", "The Elephant", "the Cat"];
var verbs = ["Sat On ", "Ate", "Danced With", "Saw", "Kissed", "Doesn't Like"];
var adjectives = ["A Scary", "A Funny", "A Goofy", "A Slimy", "A Barking", "A Fat"];
var nouns2 = ["Goat", "Monkey", "Fish", "Cow", "Frog", "Bug", "Worm"];
var settings = ["On the Moon", "On the Chair", "In My Soup", "On the Grass", "In My Shoes", "In my Spaghetti"];


// Variables for count to grab array elements
var noun1Count = 0;
var verbCount = 0;
var adjectiveCount = 0;
var noun2Count = 0;
var settingCount = 0;


/* Functions
-------------------------------------------------- */

function displayStudentId() {
    studentId.textContent = "Student ID: 200531948";
}

function noun1_on_click() {
    // variable to get array element and displaying it
    choosenNoun1.textContent = nouns1[noun1Count];


    // if-else to change count setting
    if (noun1Count < nouns1.length - 1) {
        noun1Count++;
    } else {
        noun1Count = 0; // Reset to the beginning of the array
    }
}

function verb_on_click() {
    choosenVerb.textContent = verbs[verbCount];
    if (verbCount < verbs.length - 1) {
        verbCount++;
    } else {
        verbCount = 0; // Reset to the beginning of the array
    }
}

function adjective_on_click() {
    choosenAdjective.textContent = adjectives[adjectiveCount];
    if (adjectiveCount < adjectives.length - 1) {
        adjectiveCount++;
    } else {
        adjectiveCount = 0;
    }
}

function noun2_on_click() {
    choosenNoun2.textContent = nouns2[noun2Count];
    if (noun2Count < nouns2.length - 1) {
        noun2Count++;
    } else {
        noun2Count = 0;
    }
}

function setting_on_click() {
    choosenSetting.textContent = settings[settingCount];
    if (settingCount < settings.length - 1) {
        settingCount++;
    } else {
        settingCount = 0;
    }
}

// concatenate the user story and display
function playback_on_click() {
    var builtStory = choosenNoun1.textContent + " " + choosenVerb.textContent + " " + choosenAdjective.textContent + " " + choosenNoun2.textContent + " " + choosenSetting.textContent;
    storyFinal.textContent = builtStory;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    choosenNoun1.textContent = nouns1[Math.floor(Math.random() * nouns1.length)];
    choosenVerb.textContent = verbs[Math.floor(Math.random() * verbs.length)];
    choosenAdjective.textContent = adjectives[Math.floor(Math.random() * adjectives.length)];
    choosenNoun2.textContent = nouns2[Math.floor(Math.random() * nouns2.length)];
    choosenSetting.textContent = settings[Math.floor(Math.random() * settings.length)];
}

function reset_on_click() {
    choosenNoun1.textContent = "";
    choosenVerb.textContent = "";
    choosenAdjective.textContent = "";
    choosenNoun2.textContent = "";
    choosenSetting.textContent = "";
    storyFinal.textContent = "";

    noun1Count = 0;
    verbCount = 0;
    adjectiveCount = 0;
    noun2Count = 0;
    settingCount = 0;
}


playback_on_click();

/* Event Listeners
-------------------------------------------------- */
buttonnoun1.addEventListener('click', noun1_on_click);
buttonverb.addEventListener('click', verb_on_click);
buttonadjective.addEventListener('click', adjective_on_click);
buttonnoun2.addEventListener('click', noun2_on_click);
buttonsettings.addEventListener('click', setting_on_click);
buttonplayback.addEventListener('click', playback_on_click);
buttonrandom.addEventListener('click', random_on_click);
buttonresetStory.addEventListener('click', reset_on_click);
document.addEventListener('DOMContentLoaded', displayStudentId);


/* -------------------------------------------------------------------END OF CODE------------------------------------------------------------- */