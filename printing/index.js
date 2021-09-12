var connection;
var minGrams = -1;
var maxGrams = -1;
var minPrice = -1;
var maxPrice = -1;
var priceMinimum = 2;
var material = "PLA";
var color = "Red";
var microns = 100;
function connect()
{
	connection = new BackendConnection();
}
connect();
function acceptedTAC()
{
	document.getElementById('intro').style.display = 'none';
	document.getElementById('formDiv').style.display = 'block';
}
function clicked50()
{
	microns = 50;
	updateCalculation(0.25);
}
function clicked100()
{
	microns = 100;
	updateCalculation(0.1);
}
function clicked200()
{
	microns = 200;
	updateCalculation(0.05);
}
function clicked300()
{
	microns = 300;
	updateCalculation(0.0333);
}
function clickedPLA()
{
	material = "PLA";
}
function clickedABS()
{
	material = "ABS";
}
function clickedRed()
{
	color = "Red";
}
function clickedGreen()
{
	color = "Green";
}
function clickedBlue()
{
	color = "Blue";
}
function clickedYellow()
{
	color = "Yellow";
}
function clickedBlack()
{
	color = "Black";
}
function clickedWhite()
{
	color = "White";
}
function updateCalculation(pricePerGram)
{
	//console.log(pricePerGram);
	minPrice = priceMinimum+minGrams*pricePerGram;
	maxPrice = priceMinimum+maxGrams*pricePerGram;
	updateQuote();
}
function updateQuote()
{
	var formatter = new Intl.NumberFormat('en-US', {
	  style: 'currency',
	  currency: 'USD',
	});
	document.getElementById('minPrice').innerHTML = 'Likely Price: '+formatter.format(minPrice);
	document.getElementById('maxPrice').innerHTML = 'Maximum Price: '+formatter.format(maxPrice);
}
function orderPressed()
{
	connection.sendOrder(microns,material,color);
}
function updateOrder(layerHeight, material, minPrice, maxPrice, color)
{
	var formatter = new Intl.NumberFormat('en-US', {
	  style: 'currency',
	  currency: 'USD',
	});
	document.getElementById('minimum-cost-order').innerHTML = 'Likely Price: '+formatter.format(minPrice);
	document.getElementById('maximum-cost-order').innerHTML = 'Maximum Price: '+formatter.format(maxPrice);
	document.getElementById('color-box').style = "background-color: "+color+";";
	document.getElementById('material-order').innerHTML = 'Material: '+material;
	document.getElementById('layer-height-order').innerHTML = 'Layer Height: '+layerHeight+"mm";
}
function displayQuote()
{
	document.getElementById('formDiv').style.display = 'none';
	document.getElementById('progressor').style.display = 'none';
	document.getElementById('message').style.display = 'none';
	document.getElementById('order').style.display = 'none';
	document.getElementById('intro').style.display = 'none';
	document.getElementById('quote').style.display = 'block';
}
function displayUploadForm()
{
	document.getElementById('formDiv').style.display = 'block';
	document.getElementById('progressor').style.display = 'none';
	document.getElementById('message').style.display = 'none';
	document.getElementById('order').style.display = 'none';
	document.getElementById('intro').style.display = 'none';
	document.getElementById('quote').style.display = 'none';
}
function validateInputs()
{
	var username = document.getElementById('username').value;
	var dotnumber = document.getElementById('dotnumber').value;
	var checked = document.getElementById('actCheck').checked;
	if(username.length>0 && dotnumber.length>0 && checked)
	{
		document.getElementById('placeOrderButton').removeAttribute("disabled");
	}
	else
	{
		document.getElementById('placeOrderButton').setAttribute("disabled", true);
	}
}
function resetEverything()
{
	//document.getElementById('uploadform').style.display = 'flex';
	document.getElementById('progressor').style.display = 'none';
	document.getElementById('quote').style.display = 'none';
	document.getElementById('intro').style.display = 'block';
	document.getElementById('formDiv').style.display = 'none';
	document.getElementById('message').style.display = 'none';
	document.getElementById('order').style.display = 'none';
	var pcg = 0;  
	document.getElementById('progressBar').setAttribute('aria-valuenow',pcg);
	document.getElementById('progressBar').setAttribute('style','width:'+Number(pcg)+'%');
	document.getElementById('progressBar').innerHTML = Number(pcg)+'%';
	document.getElementById('progressBar')
	document.getElementById('statusText').innerHTML = 'Upload Progress';
	document.getElementById("progressBar").classList.add("bg-info");
	document.getElementById("progressBar").classList.remove("bg-success");
}