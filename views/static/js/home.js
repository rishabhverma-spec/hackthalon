//Movement Animation to happen
const card = document.querySelectorAll('.card-jee-neet')
const container = document.querySelector('.jee-neet')
//Items
const title = document.querySelector('.title-card-jee-neet h1')
const description = document.querySelector('.info-card-jee-neet h3')

//Moving Animation Event
container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 40
  let yAxis = (window.innerWidth / 2 - e.pageY) / 40
  card.forEach(cardElement => {
    cardElement.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
  });
})
//Animate In
container.addEventListener('mouseenter', (e) => {
  //Popout
  title.style.transform = 'translateZ(90px)'
  description.style.transform = 'translateZ(110px)'
  card.forEach(cardElement => {
    cardElement.style.transition = 'none'
    cardElement.style.transition = 'all 0.5s ease'
  });
})
//Animate Out
container.addEventListener('mouseleave', (e) => {
  card.forEach(cardElement => {
  cardElement.style.transform = `rotateY(0deg) rotateX(0deg)`
  cardElement.style.transition = 'all 0.5s ease'
  });
  title.style.transform = 'translateZ(0px)'
  description.style.transform = 'translateZ(0px)'
})