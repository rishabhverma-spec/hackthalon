 //Movement Animation to happen
 const card = document.querySelector('.card');
 const container = document.querySelector('.container');
 //Items
 const title = document.querySelector(".title");
 const description = document.querySelector(".info h3");

 //Moving Animation Event
 container.addEventListener("mousemove", (e) => {
         let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
         let yAxis = (window.innerWidth / 2 - e.pageY) / 50;
         card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
         //  card.style.classList.add('rotate');
     })
     //Animate In
 container.addEventListener("mouseenter", (e) => {
     card.style.transition = "none";
     //Popout
     title.style.transform = "translateZ(120px)";
     description.style.transform = "translateZ(110px)";
     //card.style.transform= `rotateY(${180}deg)`;
     // card.style.transition = "all 0.5s ease";
 });
 //Animate Out
 container.addEventListener("mouseleave", (e) => {
     card.style.transform = `rotateY(0deg) rotateX(0deg)`;
     card.style.transition = "all 0.5s ease";
     title.style.transform = "translateZ(0px)";
     description.style.transform = "translateZ(0px)";
 })