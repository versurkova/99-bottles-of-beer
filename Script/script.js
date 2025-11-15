function song(){
	for(i=99;i>=1;i--){
		if(i>=2){
			
			document.getElementById("main").innerHTML+="<br>"+i+" bottles of beer on the wall, "+i+" bottles of beer";
			document.getElementById("main").innerHTML+="<br>"+"Take one down and pass it around, "+(i-1)+" bottles of beer on the wall";
		}
		else{
			document.getElementById("main").innerHTML+="<br>"+"1 bottle of beer on the wall, 1 bottle of beer";
			document.getElementById("main").innerHTML+="<br>"+"Take one down and pass it around, no more bottles of beer on the wall";
			document.getElementById("main").innerHTML+="<br>"+"No more bottles of beer on the wall, no more bottles of beer";
			document.getElementById("main").innerHTML+="<br>"+"Go to the store and buy some more, 99 bottles of beer on the wall";
		}
	}
}