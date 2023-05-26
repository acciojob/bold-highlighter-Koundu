function highlight(){
	var x=document.getElementById("p").querySelectorAll("strong")
	for(let i=0;i<x.length;i++){
	x[i].style.color="green";
	}
}

function return_normal(){	
	var x=document.getElementById("p").querySelectorAll("strong");
	// x[0].style.color = "black";
	for(let j=0;j<x.length;j++){
	x[j].style.color="black";
	}
	console.log(x);
	console.log("Inside Return Normal")

}