// WATS 3020 Mad Libs Assignment
//
// For this assignment you must fill in the code below so that it functions
// to populate the text of the "Mad Libs" style story in the HTML.
//
//
//
// Using the let variable and prompt() command, populate the following variables:

let honorific = prompt('Please enter an honorific title (e.g. Mister or Colonel).');

let authorName = prompt('What is your full name?');

let adjective1 = prompt('Give me a word to describe something:');

let vehicle = prompt('What is your preferred vehicle for transportation?');

let vehiclePart = prompt('Name a part of your preferred vehicle:');

let parking = prompt('Where do you park your vehicle?');

let precious = prompt('Name a precious object:');

let noiseMaker = prompt('Name something that makes a sound:');

let crowdBehavior = prompt('Name something that people do as a group:');

let adjective2 = prompt('Give me a word to describe something:');

let adjective3 = prompt('Give me a word to describe something:');

let color = prompt('Give me the name of a color:');

let familyMember = prompt('What is a name of a family member?');

let organ = prompt('What is the name of a body organ?');

let bodyPart1 = prompt('What is the name of a body part?');

let bodyPart2 = prompt('What is the name of another body part?');

let bodyPart3 = prompt('What is the name of another body part?');

let thing = prompt('Give me an object:');

let thing2 = prompt('What is an object you might give somebody you love?');

let thing3 = prompt('What is an object you might give somebody you like?');

let adjective4 = prompt('Give me a word to describe your vehicle:')

let adjective5 = prompt('Give me another word to describe your vehicle:');

// Using the let variable and prompt() command, populate the following variable titled userNumber:

let userNumber = prompt('What is your favorite number that is not zero?');

// Using the let variable and prompt() command, populate the following variable to create a number2 and number3 variables

let number2 = userNumber*5;

let number3 = userNumber + number2 - 20;


// DO NOT EDIT BELOW THIS LINE /////////////////////////////////////////
//
// The code below his line handles variable replacement into the HTML file.
// Please do not edit this code unless you are attempting a stretch goal.

let titleText = `O ${honorific}! My ${honorific}! by <small>${authorName}</small>`;
let titleHeading = document.querySelector("#madlib-title");
titleHeading.innerHTML = titleText;

let storyText = `

    ${userNumber}
    O ${honorific}! my ${honorific}! our ${adjective1} trip is done;
    The ${vehicle} has weather'd every rack, the ${precious} we sought is won;
    The ${parking} is near, the ${noiseMaker} I hear, the people all ${crowdBehavior},
    While follow ${bodyPart1} the steady keel, the vessel ${adjective4} and ${adjective5}:
    But O ${organ}! ${organ}! ${organ}!
    O the bleeding drops of ${color},
    Where on the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.

    ${number2}
    O ${honorific}! my ${honorific}! rise up and hear the ${noiseMaker};
    Rise up-for you the ${thing} is flung-for you the bugle trills;
    For you ${thing2} and ribbon'd ${thing3}-for you the shores a-crowding;
    For you they ${crowdBehavior}, the swaying mass, their eager faces turning;
    Here ${honorific}! dear ${familyMember}!
    This ${bodyPart2} beneath your ${bodyPart3};
    It is some dream that on the ${vehiclePart},
    You've fallen ${adjective2} and ${adjective3}.

    ${number3}
    My ${honorific} does not answer, his lips are pale and still;
    My ${familyMember} does not feel my arm, he has no pulse nor will;
    The ${vehicle} is anchor'd safe and sound, its voyage closed and done;
    From fearful trip, the victor ${vehicle}, comes in with ${precious} won;
    Exult, O shores, and ring, O ${noiseMaker}!
    But I, with mournful tread,
    Walk the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.
`;
let storyParagraph = document.querySelector("#madlib-text");
storyParagraph.innerHTML = storyText;