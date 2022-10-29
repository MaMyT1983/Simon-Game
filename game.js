var buttonColours = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

// Detect keyPress

$(document).keypress(function() {
  if (started === false) {
    setTimeout(function() {
      nextSequence();
    }, 500);

  } else {}

});


// Detect MouseClick

$('.btn').click(function(event) {
    if (started === true) {
      var userChosenColor = event.target.id;
      userClickedPattern.push(userChosenColor);

      buttonFlash(userChosenColor);
      makeSound(userChosenColor);
      checkGuess(userClickedPattern.length);

      setTimeout(function() {
          if (gamePattern.length === userClickedPattern.length) {
            nextSequence();
          } else {}
      }, 1700);


    } else {}

  }

)


// Create Random Sequence

function nextSequence() {

  level += 1;
  started = true;

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $('h1').text('Ниво ' + level);

  buttonFlash(randomChosenColour);
  makeSound(randomChosenColour);

  userClickedPattern.length = 0;

}


// Flash Randomly Chosen Button

function buttonFlash(currentcolor) {
  var currentColourId = '#' + currentcolor;
  $(currentColourId).addClass('pressed');

  setTimeout(function() {
    $(currentColourId).removeClass('pressed')
  }, 100);

}

// Sound Of Button

function makeSound(button) {

  switch (button) {
    case 'red':
      var red = new Audio('sounds/red.mp3');
      red.play();
      break;

    case 'blue':
      var blue = new Audio('sounds/blue.mp3');
      blue.play();
      break;

    case 'green':
      var green = new Audio('sounds/green.mp3');
      green.play();
      break;

    case 'yellow':
      var yellow = new Audio('sounds/yellow.mp3');
      yellow.play();
      break;

    default:

  }
}

// Compare User Guess Agains Game Pattern

function checkGuess (userGuess) {
  if (gamePattern[userGuess - 1] !== userClickedPattern[userGuess - 1]) {
    gameOver();
  } else {}

}


// Game Over

function gameOver() {
  $('h1').html("Грешка! Стигнахте до Ниво " + level + "." + "<br>" + "Натиснете клавиатурата, за да започнете отново.");
  started = false;
  level = 0;
  gamePattern = [];
  $('body').addClass('game-over');

  setTimeout(function() {
    $('body').removeClass('game-over');
  }, 200);

}
