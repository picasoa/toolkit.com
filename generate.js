	function randomGenerate(l){
if (l==="generate"){
if(window.XMLHttpRequest)
{
var generate= new XMLHttpRequest();
}
else
{
var generate =new ActiveXObject("Microsoft.XMLHTTP");
}
var n=document.getElementById("number").value;
generate.onreadystatechange=function(){
if(this.readyState== 4 && this.status==200)
{	
var address=(JSON.parse(this.responseText)).message;
console.log(address);
for(var j=0;j<address.length;j++){

var img=document.createElement("img");
img.setAttribute("src",address[j]);
document.getElementById("gallary").appendChild(img);
}
}
};
generate.open("GET","https://dog.ceo/api/breeds/image/random/"+n,true);
generate.send();
}
else{ 
document.getElementById("gallary").innerHTML="";
}
}

function convertCurrency (){
	var howMuch = document.getElementById("howMuch").value;
	var from =document.getElementsByTagName("select")[0].value;
	var to = document.getElementsByTagName("select")[1].value;
	var res= from +"_"+ to;
	var URL="https://free.currencyconverterapi.com/api/v6/convert?q="+from+"_"+to+"&compact=ultra&apiKey=beaebc2cbae14d4dd01f";
	var generate2= new XMLHttpRequest();
		generate2.open("GET",URL,true);
		generate2.send();
		generate2.onreadystatechange= function (){

				if(this.readyState== 4 && this.status==200)
				{
					var restext=JSON.parse(this.responseText);
					if(restext[res]){
					document.getElementsByClassName("money")[0].firstChild.innerHTML=howMuch;
					document.getElementsByClassName("money")[1].firstChild.innerHTML=howMuch*restext[res];
	
					}
					else{
						document.getElementsByClassName("money")[0].firstChild.innerHTML="Can not Convert";
					document.getElementsByClassName("money")[1].firstChild.innerHTML="Can not Convert";

					}
					
				}

		}
}
