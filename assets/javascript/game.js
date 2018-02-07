
//Begin with the ready funciton that is basically the start if game function..
$( document ).ready(function(){

  var userTotal= 0;
  var wins= 0;
  var losses = 0;
  var randomNumber=Math.floor(Math.random()*120) + 1;

  $("img").each(function () {
    $(this).attr("data-value", Math.floor(Math.random()*12) + 1);
  });

  $("img").on("click", function () {
    var userGuess = parseInt($(this).attr("data-value"));
    console.log(typeof userGuess);
    userTotal += userGuess;
    userScore();
    if (userTotal == randomNumber){
      winner();
    }
    else if (userTotal > randomNumber){
      loser();
    }
  });






//Here I am picking a random number for randomNumber and I am doing it this way becuase... w3 school explained it ! Make sure to ask question to Manny on this.


$('#randomNumber').text(randomNumber);

var blue = Math.floor(Math.random()*11+1)
var green = Math.floor(Math.random()*11+1)
var red = Math.floor(Math.random()*11+1)
var yellow = Math.floor(Math.random()*11+1)

$('#wins').text(wins);
$('#losses').text(losses);

// Functions

//-----------------------

//Random Number:
function reset(){
    randomNumber=Math.floor(Math.random()*101+19);
    console.log(randomNumber)
    $('#randomNumber').text(randomNumber);
    blue = Math.floor(Math.random()*11+1);
    green = Math.floor(Math.random()*11+1);
    red = Math.floor(Math.random()*11+1);
    yellow = Math.floor(Math.random()*11+1);
    userTotal= 0;
    $("#userTotal").text(userTotal);
    }

//------------------------

//Wins:
function winner(){
  alert("Winner!!!!");
  wins++;
  $('#wins').text(wins);
  reset();
  }

//-----------------------


function loser(){
alert ("You lose :( !!!!");
losses++;
$("#losses").text(losses);
reset()
}

function userScore(){
$("#userTotal").text(userTotal)
}


//------------------------
// Blue Gem Functions:

// $("#blue").on ("click", function(){
//     userTotal = userTotal + blue;
//     console.log("newUserTotal= " + userTotal);
//     userScore();
//
        // if (userTotal == randomNumber){
        //   winner();
        // }
        // else if (userTotal > randomNumber){
        //   loser();
        // }
//   })
//
// //--------------------------
//
// //Red Gem Functions:
//   $("#red").on("click", function(){
//     userTotal = userTotal + red;
//     console.log("newUserTotal= " + userTotal);
//     userScore();
//         if (userTotal === randomNumber){
//           winner();
//         }
//         else if (userTotal > randomNumber){
//           loser();
//         }
//   })
//
// //----------------------------
//
// //Green Gem Functions:
//   $("#green").on ("click", function(){
//       userTotal = userTotal + green;
//       console.log("newUserTotal= " + userTotal);
//       userScore();
//
//           if (userTotal == randomNumber){
//             winner();
//           }
//           else if (userTotal > randomNumber){
//             loser();
//           }
//     })
//   //----------------------------
//
//   //Yellow Gem Functions:
//   $("#yellow").on ("click", function(){
//     userTotal = userTotal + yellow;
//     console.log("newUserTotal= " + userTotal);
//     userScore();
//
//           if (userTotal === randomNumber){
//           winner();
//         }
//         else if (userTotal > randomNumber){
//           loser();
//         }
//       })


})  // Document Ready Function
