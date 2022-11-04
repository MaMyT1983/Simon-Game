var buttonColours = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;


// Detect Start Button Click

$(".start-button").click(function() {
  if (started === false) {
    setTimeout(function() {
      nextSequence();
    }, 1000);

    started = true;

    $("h1").removeClass("h1-red");

    setTimeout(function() {
      $(".start-button").addClass("start-button-invisible");
    }, 500);
  } else {}

});


// Detect MouseClick

$('.btn').click(function() {
    if (started === true) {
      var userChosenColor = $(this).attr("id");
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

  var audio = new Audio('sounds/' + button + '.mp3');
  audio.play();

}

// Compare User Guess Agains Game Pattern

function checkGuess(userGuess) {
  if (gamePattern[userGuess - 1] !== userClickedPattern[userGuess - 1]) {
    gameOver();
  } else {}

}


// Game Over

function gameOver() {
  $('h1').html("Грешка! Стигнахте до Ниво " + level);
  $('h1').addClass("h1-red");
  started = false;
  level = 0;
  gamePattern = [];
  $('body').addClass('game-over');

  setTimeout(function() {
    $('body').removeClass('game-over');
  }, 200);

  $('.start-button').removeClass("start-button-invisible");

}
