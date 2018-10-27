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


  });