<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
	<!-- <meta http-equiv="refresh" content="5"> -->
	<title>cute puppies</title>
	<link rel="stylesheet" type="text/css" href="index.css"> 
</head>
<body class="wrapper">
		<div class="wrapper" id="gallary"></div>
		<table>
				<td id="clear" onclick="randomGenerate('clear')"><button onclick="randomGenerate()" >Clear</button></td>
				<td><h2>No. of PUPPIES you want</h2></td>
				<td><input type="number"  min="4" max="1000" id="number" value=4 name="quantity"></td>
				<td><button onclick="randomGenerate('generate')" id="generate">Generate New</button></td>
		</table>
		<h1 style="color : red;">THE GREATER THE NUMBER THE GREATER THE LOAD TIME</h1>
</body>

<script type="text/javascript" src="generate.js">

</script>
</html>