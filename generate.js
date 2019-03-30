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
document.getElementById("clear").style.display="table-cell";
}
else{ 
document.getElementById("gallary").innerHTML="";
document.getElementById("clear").style.display="none";
}
}

function convertCurrency (){
	var URL="https://free.currencyconverterapi.com/api/v6/convert?q=USD_PHP&compact=ultra&apiKey=beaebc2cbae14d4dd01f"
	var generate2= new XMLHttpRequest();
		generate2.open("GET",URL,true);
		generate2.send();
		generate2.onreadystatechange= function (){

				if(this.readyState== 4 && this.status==200)
				{
					var restext=JSON.parse(this.responseText);
					console.log(restext);
				}
				else if(this.readyState==0)
				{
					console.log("initialized");
				}
				else if(this.readyState==1)
				{
					console.log("connection established");
				}
				else if(this.readyState==2)
				{
					console.log("request recived");
				}
				else if(this.readyState==3)
				{
					console.log("processing");
				}

		}
}
