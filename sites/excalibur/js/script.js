// Navigation start
const btn = document.getElementById("toggle");

btn.addEventListener("click", (event) => {
    event.target.parentNode.parentNode.classList.toggle("active");
});
// Navigation end

// til topppen knap start
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    mybutton.style.display = "none"; //ændre dette igen til block
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// til topppen knap end

// troll start 
let images = [
    'troll1fedora.png',
    'troll3fedora.png',
    'troll1fedora.png',
    'troll3fedora.png',
];
 
document.getElementById('container').innerHTML = `<img src="img/forside/troll1fedora.png" class="troll"/>`;

let scrollCycle = 0;
window.addEventListener('scroll', () => {
  
    console.log('Scrolling', scrollCycle, images.length)

    if(scrollCycle < images.length - 1) {

        console.log('Test', scrollCycle)
        scrollCycle++;
     
    } else {
        scrollCycle = 0;
    }

    document.getElementById('container').innerHTML = `<img src="img/forside/${images[scrollCycle]}" class="troll"/>`

});
// troll end
