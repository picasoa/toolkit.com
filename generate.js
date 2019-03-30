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
	generate.open("GET","https://dog.ceo/api/breeds/image/random/"+n,false);
	generate.send();
	document.getElementById("clear").style.display="table-cell";
	}
	else{ 
		document.getElementById("gallary").innerHTML="";
		document.getElementById("clear").style.display="none";
	}
	}