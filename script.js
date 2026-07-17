document.querySelectorAll('.faq-q').forEach(function (question) {
  question.addEventListener('click', function () {
    question.parentElement.classList.toggle('open');
  });
});

const book=document.querySelector(".cover-img");

book.addEventListener("mousemove",e=>{

const x=e.offsetX/book.clientWidth-.5;

const y=e.offsetY/book.clientHeight-.5;

book.style.transform=
`perspective(1200px)
rotateY(${x*18}deg)
rotateX(${-y*18}deg)
translateY(-10px)`;

});

book.addEventListener("mouseleave",()=>{

book.style.transform=
"perspective(1200px) rotateY(-12deg)";

});