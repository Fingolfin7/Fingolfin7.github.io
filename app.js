 var images = ["\'images/feathers.jpg\'", "\'images/red-flowers.jpg\'", "\'images/rabbits.jpg\'", "\'images/betterBirds.jpg\'",
               "\'images/NissaKauppila04_19_32.jpg\'"];
 var i = 0;

function slideshow(){
  var time = 10000;//10 seconds

  //change background image
  document.body.setAttribute("style", "background-image: url(" + images[i] + ");background-color: rgba(255, 255, 255, 0.18); background-blend-mode: overlay; background-reapeat: no-repeat; background-size: cover;");

  if(i < images.length -1){
    i++;
  }
  else{
    i = 0;
  }

  setTimeout("slideshow()", time);

}

window.onload = slideshow;
