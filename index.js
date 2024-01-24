let slideIndex = 1;

function currentSlide(n) {
    showSlides(slideIndex = n);
  }

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
        // ข้อมูลกะดอท
    // console.log(slides);
    // console.log(dots);

if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
    slides[slideIndex-1].style.display = 'grid';
    dots[slideIndex-1].className += " active";
  }
  showSlides();

function changeColor(cardId) {
    var card = document.getElementById(cardId);
    var icon = document.querySelector('.icon-sec3 i');
    card.style.color = '#fff'; // Change the color when hovering
    icon.style.backgroundColor = '#ff5a5f';
}

function resetColor(cardId) {
    var card = document.getElementById(cardId);
    var icon = document.querySelector('.icon-sec3 i');
    card.style.color = '#ff5a5f';
    icon.style.backgroundColor = '#ffffff';
}

// function ChangeBackgroundColor(){
//     var icon = document.querySelector('.icon-sec3 i');
//     icon.style.background-color = '#ff5a5f';
// }