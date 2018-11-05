$(document).ready(function(){
  
  // materialize parallax init
  $('.parallax').parallax();

  // materialize tabs init
  $('.tabs').tabs();

  // materialize collapsible init
  $('.collapsible').collapsible();

  // on click function that opens the souces page from the corresponding info page
  document.querySelector(".b1btn").onclick = function () {
    window.open("../pages/SourcesPages/b1.html")
  }

  // onClick to 
  let bList = document.querySelectorAll('.collapsible-header');
  for (var i = 0; i < bList.length; i++) {
    let bText = bList[i];
    bText.addEventListener('click', function() {
      bText.classList.toggle('bText');
    })
  }

  });