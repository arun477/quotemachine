
var myVar = setInterval(function(){ imagechanger() }, 4000);



function imagechanger(){
	
	var imgcontainer =document.getElementById("imgsource");
	var imgurl = imgcount();
	imgcontainer.setAttribute("src",imgurl);
}

// javascript engine for random image generator
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function imgcount(){
	var x = getRandomInt(1,32).toString();
	var source = "images/img"+x+".jpg";

	return source;
}



