<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
	<!-- <meta http-equiv="refresh" content="5"> -->
	<title>cute puppies</title>
	<link rel="stylesheet" type="text/css" href="index.css"> 
</head>
<body class="wrapper dog-body">
	<header class="wrapper">
		<h1>I LOVE DOGS!!!</h1>
	</header>
		<div class="wrapper " id="gallary"></div>
		<table>
				<td id="clear" onclick="randomGenerate('clear')"><button onclick="randomGenerate()" >Clear</button></td>
				<td style="color: white;"><h2>No. of PUPPIES you want</h2></td>
				<td><input type="number"  min="4" max="50" id="number" value=4 name="quantity"></td>
				<td><button onclick="randomGenerate('generate')" id="generate">Generate New</button></td>
		</table>
</body>

<script type="text/javascript" src="generate.js">

</script>
</html>