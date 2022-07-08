const leftBtn = document.querySelector('.slider__left');
const rightBtn = document.querySelector('.slider__right');
let slides = document.querySelectorAll('.slider__image');
const slidesNum = slides.length;
const slider = document.querySelector('.slider__images');
let slidesArr = [];
slider.style.width = 100 + "%";

slides.forEach((item,index)=>{
   let span = document.createElement('span');
   span.classList.add('slider__button');
   span.setAttribute('value', index);
   slidesArr.push(item);
   rightBtn.before(span);
   item.remove();
})

const points = document.querySelectorAll('.slider__button');
points[0].classList.add('current');

const drow = (num,dir = 'right') => {
   if (num < 0) num+=slidesNum;
   let newSlide = slidesArr[num].cloneNode(true);
   if (dir === "right") {
      slider.append(newSlide);
   } else {
      slider.prepend(newSlide);
   }
}

drow(0);
let current = 0;
const moveSlide = (num, dir) =>{ 
   if (dir === 'right'){
      current += num;
      if (current >= slidesNum) current -= slidesNum;
      drow(current, 'right');
      slider.style.width = 200 + '%';
      slider.style.left = 0 + '%';
      document.querySelector('.current').classList.remove('current');
      points[current].classList.add('current');
      setTimeout(() => {
         const animation = setInterval(() => {
            let value = slider.style.left;
            slider.style.left = +value.slice(0,value.length-1) -4 +'%';
            if (slider.style.left === "-100%"){
               clearInterval(animation);
               document.querySelector('.slider__image').remove();
               slider.style.left = '0%';
               slider.style.width = '100%';
               document.querySelector('.active').classList.remove('active');
            }
         }, 20);
      }, 0);
      
   } else {
      points[current].classList.remove('current');
      current -= num;
      if (current <0) current += slidesNum;
      points[current].classList.add('current');
      drow(current, 'left');
      slider.style.width = 200 + '%';
      slider.style.left = -100 + '%';
      setTimeout(() => {
         const animation = setInterval(() => {
            let value = slider.style.left;
            slider.style.left = +value.slice(0,value.length-1) + 4 +'%';
            if (slider.style.left === "0%"){
               clearInterval(animation);
               document.querySelectorAll('.slider__image')[1].remove();
               slider.style.width = '100%';
               document.querySelector('.active').classList.remove('active');
            }
         }, 20);
      }, 200);
   }
}

rightBtn.addEventListener("click",(event) =>{
   if (!event.target.closest('.active')){
      event.target.closest('.slider__buttons').classList.add('active');
      moveSlide(1,'right');
   }
})

leftBtn.addEventListener("click",(event) =>{
   if (!event.target.closest('.active')){
      event.target.closest('.slider__buttons').classList.add('active');
      moveSlide(1,'left');
   }
})


//кнопки слайдера (не стрелки) через делегирование событий
document.addEventListener('click',(event)=>{
   if (event.target.closest('.slider__button') && !event.target.closest('.active')){
      event.target.closest('.slider__buttons').classList.add('active');
      points[current].classList.remove('current');
      let newCurrent = event.target.closest('.slider__button').getAttribute('value');
      points[newCurrent].classList.add('current');
      if (newCurrent > current){
         moveSlide(newCurrent - current,'right');
      } else if (newCurrent < current){
         moveSlide(current - newCurrent,'left');
      }
   }
})