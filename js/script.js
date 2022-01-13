const container = document.querySelector('.container');
let offset = 0;

window.addEventListener('wheel', e => {
  offset += Math.sign(e.deltaY) * 60;

  if (offset < 0) {
    offset = 0;
  } else if (offset > 11700 - window.innerWidth) {
    offset = 11700 - window.innerWidth;
  }

  container.style.transform = `translateX(-${offset}px`;

  console.log(offset);
  document.getElementById('position').innerHTML=offset;  //offset값 표시
  
});


