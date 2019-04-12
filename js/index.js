function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}




/*document.querySelector('.fetch-html')
    .addEventListener('click', fetchHtml);

function fetchHtml() {
    fetch('thanks.html')
        .then( response => response.text() )
        .then( html => document.querySelector('.html-placeholder').innerHTML = html)
        .catch( error => document.querySelector('.html-placeholder').innerHTML = error.message );
}*/

