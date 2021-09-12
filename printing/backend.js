
var wsUri = "ws://173.88.82.16:6548"; // Localhost
//var wsUri = "ws://134.228.155.169:12398"; // Max's

class BackendConnection {
	constructor() {
		this.connectionError = false;
		this.websocket = new WebSocket(wsUri);
		var self = this;
		this.websocket.onopen = function(evt) { self.onOpen(evt) };
		this.websocket.onclose = function(evt) { self.onClose(evt) };
		this.websocket.onmessage = function(evt) { self.onMessage(evt) };
		this.websocket.onerror = function(evt) { self.onError(evt) };
	}

	onOpen(evt) {
		console.log("CONNECTED");
		resetEverything();
	}
	onClose(evt) {
		document.getElementById('container').style.display = 'none';
		document.getElementById('loadingDiv').style.display = 'block';
		console.log("DISCONNECTED");
		setTimeout(connect(), 5000);
	}

	onMessage(evt) {
		console.log('<-: ' + evt.data);
		var params = evt.data.split("|");
		if(params[0]=="UUIDSet")
		{
			this.UUID = params[1];
			document.getElementById("formUUID").setAttribute("value", this.UUID); 
			document.getElementById('container').style.display = 'block';
			document.getElementById('loadingDiv').style.display = 'none';
		}
		if(params[0]=="Progression")
		{
			var pcg = Math.floor(Number(params[1]));  
			document.getElementById('progressBar').setAttribute('aria-valuenow',pcg);
			document.getElementById('progressBar').setAttribute('style','width:'+Number(pcg)+'%');
			document.getElementById('progressBar').innerHTML = Number(pcg)+'%';
		}
		if(params[0]=="StartSlice")
		{
			document.getElementById('formDiv').style.display = 'none';
			document.getElementById('progressor').style.display = 'block';
			document.getElementById('quote').style.display = 'none';
			document.getElementById('intro').style.display = 'none';
			document.getElementById('order').style.display = 'none';
			document.getElementById('message').style.display = 'none';
			var pcg = 0;  
			document.getElementById('progressBar').setAttribute('aria-valuenow',pcg);
			document.getElementById('progressBar').setAttribute('style','width:'+Number(pcg)+'%');
			document.getElementById('progressBar').innerHTML = Number(pcg)+'%';
			document.getElementById('statusText').innerHTML = 'Generating Estimate... (may take several minutes for larger files)';
			document.getElementById("progressBar").classList.remove("bg-info");
			document.getElementById("progressBar").classList.add("bg-success");
		}
		if(params[0]=="HideUpload")
		{
			document.getElementById('formDiv').style.display = 'none';
		}
		if(params[0]=="Quote")
		{
			displayQuote();
			document.getElementById('quoteText').innerHTML = 'Quote';
			minGrams = parseFloat(params[1]);
			maxGrams = parseFloat(params[2]);
			updateCalculation(0.1);
		}
		if(params[0]=="Error" || params[0]=="Placed")
		{
			document.getElementById('formDiv').style.display = 'block';
			document.getElementById('progressor').style.display = 'none';
			document.getElementById('message').style.display = 'block';
			document.getElementById('quote').style.display = 'none';
			document.getElementById('intro').style.display = 'none';
			document.getElementById('order').style.display = 'none';
			if(params[0]=="Placed")
			{
				document.getElementById('backPlaced').style.display = 'none';
			}
			else
			{
				document.getElementById('backPlaced').style.display = 'block';
			}
			document.getElementById('messageText').innerHTML = params[1];
			
		}
		if(params[0]=="Order")
		{
			document.getElementById('formDiv').style.display = 'none';
			document.getElementById('progressor').style.display = 'none';
			document.getElementById('intro').style.display = 'none';
			document.getElementById('message').style.display = 'none';
			document.getElementById('quote').style.display = 'none';
			document.getElementById('order').style.display = 'block';
			updateOrder(parseFloat(params[1])/1000, params[2], parseFloat(params[3]), parseFloat(params[4]), params[5]);
		}
		if(params[0]=="Reset")
		{
			resetEverything();
		}
	}

	onError(evt) {
		console.log('ERROR: ' + evt.type);
	}

	send(message) {
		this.websocket.send(message);
		console.log("->: " + message);
	}

	startFile()
	{
		document.forms["uploadform"].submit();
		this.send("FileUpload|"+this.UUID);
	}
	sendOrder(microns,material,color)
	{
		var toSendString = microns+"|"+material+"|"+color;
		this.send("Order|"+this.UUID+"|"+toSendString);
	}
	placeOrder()
	{
		var username = document.getElementById('username').value;
		var dotnumber = document.getElementById('dotnumber').value;
		this.send("PlaceOrder|"+this.UUID+"|"+username+"|"+dotnumber);
	}
}