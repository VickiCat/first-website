function updateClock ()
{
  var currentTime = new Date();
  
  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();

  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;

  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



document.querySelector('.fetch-html')
    .addEventListener('click', fetchHtml);

function fetchHtml() {
    fetch('thanks.html')
        .then( response => response.text() )
        .then( html => document.querySelector('.html-placeholder').innerHTML = html)
        .catch( error => document.querySelector('.html-placeholder').innerHTML = error.message );
}

