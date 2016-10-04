$(document).ready(function() {

  var quizQuestions = [{
    question: "If you put a mirror one light year away from Earth and looked at it through a telescope, you would see, how may years into Earth's past?",
    choices: ["Two years", "Three years", "You would not see Earth's past"],
    answer: 0
  }, {
    question: "The steam rising from a cup of coffee contains the same amount of antioxidants as three oranges.",
    choices: ["True", "False", "Now that's insane!"],
    answer: 0
  }, {
    question: "Fifty Barbie dolls are sold on E-bay every _______ .",
    choices: ["Every minute.", "Every hour.", "Every day."],
    answer: 1
  }, {
    question: "The bible is the most _______ book in the world.",
    choices: ["popular", "shoplifted", "purchased"],
    answer: 1
  }, {
    question: "Winston Churchill had a heart attack in ________ while straining to open a window.",
    choices: ["the White House", "his office", "the hospital"],
    answer: 0
  }, {
    question: "The largest human cell is the female ovum. The smallest is the male sperm.",
    choices: ["True", "False", "This makes no sense!"],
    answer: 0
  }, {
    question: "For every person on Earth, there are roughly ________ mosquitos.",
    choices: ["There is no such number!", "144,000", "544,000"],
    answer: 1
  }, {
    question: "Men who kiss their wives in the morning earn ________ salaries than men who don't.",
    choices: ["higher", "lower", "double"],
    answer: 0
  }, {
    question: "In Japan, it is socially acceptable for men to fall asleep on the job. It's a sign they've been  ____________________. ",
    choices: ["working from home", "working really hard", "in danger of burn out"],
    answer: 1
  }, {
    question: "Wombats poop ________ .",
    choices: ["cubes", "sticks", "perfect spheres"],
    answer: 0
  }];

  var questionCounter = 0; //this var will track the number of questions - we have 10 questions
  // var score = 0; // this var should keep the score 
  var selections = []; //array for the user answer
  var quiz = $("#quiz"); //this connects with the quiz div in the html

  displayNext(); //this functions displays initial and all next questions

  // next button click handler
  $("#next").on("click", function(event) {
    event.preventDefault();

    if (quiz.is(":animated")) {
      return false;
    }

    choose();

    if (isNaN(selections[questionCounter])) {
      alert("Please select an answer!");
    } else {
      questionCounter++;
      displayNext();
    }

  });

  //start button click handler
  $("#start").on("click", function(event) {
    
    event.preventDefault();

    if (quiz.is(":animated")) {
      return false;
    }

    questionCounter = 0;
    selections = [];
    
    displayNext();

    $("#start").hide();

  });
  //this func is to create the actual question population on the display
  function createQElement(index) {
    var qElement = $("<div>", {
      id: "question"
    });
    var question = $("<p>").append(quizQuestions[index].question);
    qElement.append(question);

    var radioB = createRB(index);
    qElement.append(radioB);

    return qElement;

  }

  //radio buttons list of answers
  function createRB(index) {
    var radioList = $("<ul>"); //unordered list of radio buttons
    var item; //member of the ul 
    var input = ""; //empty input for future button text
    for (var i = 0; i < quizQuestions[index].choices.length; i++) {
      item = $("<li>");
      input = "<input type='radio' name='answer' value=" + i + "/>";
      input += quizQuestions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }

  // takes the user answer selection and pushes its value to the array
  function choose() {
    selections[questionCounter] = +$("input[name='answer']:checked").val();
  }
  //fade in the next question after fade out the one that has been answered; 
  function displayNext() {
    quiz.fadeOut(function() {
      $("#question").remove();

      if (questionCounter < quizQuestions.length) {
        var nextQuestion = createQElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $("input[value=" + selections[questionCounter] + "]").prop("checked", true);
        }

      }
    });
  }

  //keeping score 
  function displayScore() {
    var score = $("<p>", {
      id: "question"
    });

    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === quizQuestions[i].answer) {
        numCorrect++;
      }
    }
    score.append("You got " + numCorrect + " questions out of " + quizQuestions.length + " right!");
    return score;

  }

})();