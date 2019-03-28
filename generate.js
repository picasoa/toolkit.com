	function randomGenerate(){
		if(window.XMLHttpRequest)
			{
			var generate= new XMLHttpRequest();
		}
		else
			{
			var generate =new ActiveXObject("Microsoft.XMLHTTP");
		}
		var n=document.getElementById("number").value;
		for(var i=0;i<n;i++){
			generate.onreadystatechange=function(){
				if(this.readyState== 4 && this.status==200)
					{	
						var param=JSON.parse(this.responseText);
			 			var img=document.createElement("img");
			 			img.setAttribute("src",param["message"])
			 			document.getElementById("gallary").appendChild(img);
			 	}

			};
	generate.open("GET","https://dog.ceo/api/breeds/image/random",false);
	generate.send();
	}
	}