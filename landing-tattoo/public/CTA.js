document.addEventListener("mousemove", function(event) {       
  let movable = document.getElementById("movableElement");        
  let x = event.clientX;
  let y = event.clientY;
  try{
    movable.style.top = y + "px";
    movable.style.left = x + "px";
  }catch(e){
    console.log(e);
  }
});
