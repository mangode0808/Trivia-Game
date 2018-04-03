
// var startScreen;
// var addHTML;
// var number = 30;

// var questions = [{
//     question: "What will void your apple computer any warranty?",
//     answers: ["Water spill", "Smoking", "Virus", "Hack" ],
//     correctAnswer:"Smoking",
//     image: 'https://media.giphy.com/media/wP9jznmj2jbUs/giphy.gif'
//   },{
//     question: "where did Ipod name come from?",
//     answers:  ["food", "coding", "movie", "country"],
//     correctAnswer:"movie",
//     image: 'https://media.giphy.com/media/xBTII1P2oVbxu/giphy.gif'
//   },{
//     question: "Why did Apple pick Apple logo?",
//     answers: ["Cannot find a name for the company", "Eating apple while eating apple", "Steve Wozniak like apple", "Steve Jobs liked apple"],
//     correctAnswer:"Steve Jobs liked apple",
//     image: 'https://media1.tenor.com/images/efa8153bff151de7d1047294de82d529/tenor.gif?itemid=5394587'
//   },{
//     question: "If Apple were a country, how large it would be?",
//     answers: ["101st", "27th", "19th", "smallest country"],
//     correctAnswer:"27th",
//     image: 'https://media0.giphy.com/media/3o85xJohCZUc524lSU/giphy.gif'
//   },{
//     question: "Which country has fake apple store?",
//     answers: ["Mexico", "America", "China", "India"],
//     correctAnswer:"China",
//     image: 'http://media.techeblog.com/images/iphoneclamshellhandset_1.jpg'
//   }];
// // var questions = ["What will void your apple computer any warranty?", "where did Ipod name come from?", "Why did Apple pick Apple logo?", "If Apple were a country, how large it would be?", "Which country has fake apple store?"];
// // var answers = [["Water spill", "Smoking", "Virus", "Hack" ],
// //                 ["food", "coding", "movie", "country"],
// //                 ["Cannot find a name for the company", "Eating apple while eating apple", "Steve Wozniak like apple", "Steve Jobs liked apple"],
// //                 ["101st", "27th", "19th", "smallest country"],
// //                 ["Mexico", "America", "China", "India"],
// //             ];
// // var correctAnswer = ["Smoking", "movie", "Steve Jobs liked apple", "27th", "China"];

// // var images = ["<img src='https://media.giphy.com/media/wP9jznmj2jbUs/giphy.gif', 'https://media.giphy.com/media/xBTII1P2oVbxu/giphy.gif', 'https://media1.tenor.com/images/efa8153bff151de7d1047294de82d529/tenor.gif?itemid=5394587', 'https://media0.giphy.com/media/3o85xJohCZUc524lSU/giphy.gif', 'http://media.techeblog.com/images/iphoneclamshellhandset_1.jpg'>"];
// var questionIndex = 0;
// var selecterAnswer;

// var theClock;

// var correctTally = 0;
// var incorrectTally = 0;
// var unansweredTally = 0;



// $(document).ready(function () {
//     function initialScreen() {
//     startScreen = "<p class='text-center main-button-container'><a class='btn btn-default btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
//     $(".mainSlide").html(startScreen);
// }

//     initialScreen();



// $("body").on("click", ".start-button", function (event) {
//     event.preventDefault();  

//     generateHTML();

//     timerFunction();

// });



//     $("body").on("click", ".answer", function (event) {
//         //answeredQuestion = true;

//         selectedAnswer = $(this).text();
//         if (selectedAnswer === correctAnswer[questionIndex]) {
//             //alert("Yes, You are hired by Apple!");

//             clearInterval(theClock);
//             generateWin();
//         }
//         else {
//             //alert("Wrong! NO MORE IPHONE FOR YOU!");
//             clearInterval(theClock);
//             generateLoss();
//         }
//     }); 

//     $("body").on("click", ".reset-button", function (event) {

//         resetGame();
//     }); 
// });


//     function generateLossDueToTimeOut() {
//         unansweredTally++;
//         addHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + number + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswer[questionIndex] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
//         $(".mainSlide").html(addHTML);
//         setTimeout(wait, 5000);  
//     }

//     function generateWin() {
//         correctTally++;
//         addHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + number + "</span></p>" + "<p class='text-center'>Yes, You are hired by Apple! " + correctAnswer[questionIndex] + "</p>" + images[questionIndex];
//         $(".mainSlide").html(addHTML);
//         setTimeout(wait, 5000);  
//     }

//     function generateLoss() {
//         incorrectTally++;
//         addHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + number + "</span></p>" + "<p class='text-center'>Wrong! NO MORE IPHONE FOR YOU! Correct Answers is: " + correctAnswer[questionIndex] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
//         $(".mainSlide").html(addHTML);
//         setTimeout(wait, 5000); 

//     }



//     function generateHTML() {
//         addHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questions[questionIndex] + "</p><p class='first-answer answer'>A. " + answers[questionIndex][0] + "</p><p class='answer'>B. " + answers[questionIndex][1] + "</p><p class='answer'>C. " + answers[questionIndex][2] + "</p><p class='answer'>D. " + answers[questionIndex][3] + "</p>";
//         $(".mainSlide").html(addHTML);
//     }

//     function wait() {
//         if (questionIndex < 5) {
//             questionIndex++;
//             generateHTML();
//             number = 30;
//             timerFunction();
//         }
//         else {
//             finalSlide();
//         }
//     }


//     function timerFunction() {
//         theClock = setInterval(thirtySeconds, 1000);
//         function thirtySeconds() {
//             if (number === 0) {
//                 clearInterval(theClock);
//                 generateLossDueToTimeOut();
//             }
//             if (number > 0) {
//                 number--;
//             }
//             $(".timer").html(number);
//         }
//     }
//     function finalSlide() {
//         addHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + number + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
//         $(".mainSlide").html(addHTML);
//     }

//     function resetGame() {
//         questionIndex = 0;
//         correctTally = 0;
//         incorrectTally = 0;
//         unansweredTally = 0;
//         number = 30;
//         generateHTML();
//         timerFunction();
//     }



var panel = $("#quiz-area");
var countStartNumber = 30;

var questions = [{
    question: "What will void your apple computer any warranty?",
    answers: ["Water spill", "Smoking", "Virus", "Hack" ],
    correctAnswer:"Smoking",
    image: 'https://media.giphy.com/media/wP9jznmj2jbUs/giphy.gif'
  },{
    question: "where did Ipod name come from?",
    answers:  ["food", "coding", "movie", "country"],
    correctAnswer:"movie",
    image: 'https://media.giphy.com/media/xBTII1P2oVbxu/giphy.gif'
  },{
    question: "Why did Apple pick Apple logo?",
    answers: ["Cannot find a name for the company", "Eating apple while eating apple", "Steve Wozniak like apple", "Steve Jobs liked apple"],
    correctAnswer:"Steve Jobs liked apple",
    image: 'https://media1.tenor.com/images/efa8153bff151de7d1047294de82d529/tenor.gif?itemid=5394587'
  },{
    question: "If Apple were a country, how large it would be?",
    answers: ["101st", "27th", "19th", "smallest country"],
    correctAnswer:"27th",
    image: 'https://media0.giphy.com/media/3o85xJohCZUc524lSU/giphy.gif'
  },{
    question: "Which country has fake apple store?",
    answers: ["Mexico", "America", "China", "India"],
    correctAnswer:"China",
    image: 'http://media.techeblog.com/images/iphoneclamshellhandset_1.jpg'
  }];

var timer;

var game = {

  questions: questions,
  currentQuestion: 0,
  counter: countStartNumber,
  correct: 0,
  incorrect: 0,

  countdown: function() {
    this.counter--;
    $("#counter-number").text(this.counter);
    if (this.counter === 0) {
      console.log("TIME UP");
      this.timeUp();
    }
  },

  loadQuestion: function() {

    timer = setInterval(this.countdown.bind(this), 1000);

    panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

    for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
      panel.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
      + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
    }
  },

  nextQuestion: function() {
    this.counter = window.countStartNumber;
    $("#counter-number").text(this.counter);
    this.currentQuestion++;
    this.loadQuestion.bind(this)();
  },

  timeUp: function() {

    clearInterval(window.timer);

    $("#counter-number").text(this.counter);

    panel.html("<h2>Out of Time!</h2>");
    panel.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
    panel.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (this.currentQuestion === questions.length - 1) {
      setTimeout(this.results, 3 * 1000);
    }
    else {
      setTimeout(this.nextQuestion, 3 * 1000);
    }
  },

  results: function() {

    clearInterval(window.timer);

    panel.html("<h2>All done, heres how you did!</h2>");

    $("#counter-number").text(this.counter);

    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    panel.append("<br><button id='start-over'>Start Over?</button>");
  },

  clicked: function(e) {
    clearInterval(window.timer);
    if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
      this.answeredCorrectly();
    }
    else {
      this.answeredIncorrectly();
    }
  },

  answeredIncorrectly: function() {

    this.incorrect++;

    clearInterval(window.timer);

    panel.html("<h2>Nope!</h2>");
    panel.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer + "</h3>");
    panel.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (this.currentQuestion === questions.length - 1) {
      setTimeout(this.results.bind(this), 3 * 1000);
    }
    else {
      setTimeout(this.nextQuestion.bind(this), 3 * 1000);
    }
  },

  answeredCorrectly: function() {

    clearInterval(window.timer);

    this.correct++;

    panel.html("<h2>Correct!</h2>");
    panel.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (this.currentQuestion === questions.length - 1) {
      setTimeout(this.results.bind(this), 3 * 1000);
    }
    else {
      setTimeout(this.nextQuestion.bind(this), 3 * 1000);
    }
  },

  reset: function() {
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};

$(document).on("click", "#start-over", game.reset.bind(game));

$(document).on("click", ".answer-button", function(e) {
  game.clicked.bind(game, e)();
});

$(document).on("click", "#start", function() {
  $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
  game.loadQuestion.bind(game)();
});