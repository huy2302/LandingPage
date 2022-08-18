// slider card

var slideBtnLeft = document.querySelector('.slider-btn-left');
var slideBtnRight = document.querySelector('.slider-btn-right');

var galleryCell = document.getElementById('brand-carousel');
var galleryCells = document.querySelectorAll('.gallery-cell');

// đếm số card
var count = 0;
for (e of galleryCells) {
  count += 1;
}

// click để di chuyển card sang trái phải
var x = 0;
var translateRight = () => {
  return 'translate(' + -(x) + 'px)';
}
var translateLeft = () => {
  return 'translate(' + -(x) + 'px)';
} 

function plusDivs(index) {
  if (index == 1 && x < 380*(count - 1)) {
      x += 380;
      galleryCell.style.transform = translateRight();
  }else if(index == -1 && x != 0) {
      x -= 380;
      galleryCell.style.transform = translateLeft();
  }
}
