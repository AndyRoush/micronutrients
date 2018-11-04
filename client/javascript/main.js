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

  // on click to 
  // document.querySelector(".collapsible-header").addEventListener("click", function() {
  //   let bText = document.querySelector(".collapsible-header");
  //   bText.classList.toggle("bText");
  //   console.log("click working")
  // })

  let el = document.querySelectorAll(".collapsible-header");
  for (var i = 0; i < el.length; i++) {
    el[i].addEventListener("click", function() {
      let bText = document.querySelector(".collapsible-header");
      bText.classList.toggle("bText");
      console.log("click working")
    });
  }

  });