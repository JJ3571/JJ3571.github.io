console.log("Hello World!");

const blob = document.getElementById("blob");

/* First attempt at following the mouse in Javascript. This works, but the circle does not stay centered on the mouse.*/
document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px` 
    }, {duration:3000, fill: "forwards"});
};

/*
const onMouseMove = (e) => {
    blob.style.left = e.pageX + 'px';
    blob.style.top = e.pageY + 'px';
}
*/


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;
document.querySelector("h1").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);
  }