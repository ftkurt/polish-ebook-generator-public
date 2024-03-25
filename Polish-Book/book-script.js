var scores = {};

function checkAnswer(questionId, correctAnswer, selectedDivId, chapterId) {
    var selectedFieldset = document.getElementById(selectedDivId).closest('fieldset');

    if (!scores[chapterId]) {
        scores[chapterId] = {"correct": 0, "incorrect": 0};
    }

    var selectedLabel = document.getElementById(selectedDivId);

    selectedFieldset.querySelectorAll('.question').forEach(div => div.style.pointerEvents = 'none');

    if (correctAnswer === selectedLabel.textContent.trim()) {
        selectedLabel.classList.add("correct");
        scores[chapterId]["correct"]++;
    } else {
        selectedLabel.classList.add("incorrect");
        scores[chapterId]["incorrect"]++;
        var allDivs = selectedFieldset.querySelectorAll('.question');
        var correctDiv = Array.from(allDivs).find(div => div.textContent.trim() === correctAnswer);
        correctDiv.classList.add("correct");
    }

    var legend = selectedFieldset.querySelector('legend');
    if (legend) {
        var originalLegend = legend.innerHTML;
        var correct = scores[chapterId].correct;
        var total = scores[chapterId].incorrect + correct;
        var percentage = ((correct / total) * 100).toFixed(2);
        
        legend.innerHTML = `<b>${originalLegend} - ${correct}/${total} [${percentage}%]</b>`;
    }
}

function toggleAudio() {
  var audio = document.getElementById("myAudio");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function updateButtons() {
  var audio = document.getElementById("myAudio");
  var buttons = document.getElementsByClassName("audioControl");
  var newClass = audio.paused ? "paused" : "playing";
  
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].className = "audioControl " + newClass;
  }
}



