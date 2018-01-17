//When content has loaded, fire an event
window.addEventListener('DOMContentLoaded', function () {
	//Add an event to the submit button
        //when clicked, fire requestGif();
	document.getElementById('getGif').addEventListener('submit', requestGif);
	



});

function requestGif(event) {
	//prevent page load
	//event.preventDefault();
	event.preventDefault();
	//create variables after button has been pressed otherwise values will be default
	var q = document.getElementById("queryString").value;

	//Create a new request
	request = new XMLHttpRequest;
	request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true);

	request.onload = function() {
		if (request.status >= 200 && request.status < 400){
			data = JSON.parse(request.responseText).data.image_url;
			console.log(data);
			document.getElementById("gifGoesHere").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
		} else {
			console.log('reached giphy, but API returned an error');
		 }
	};
	//If there is an error, throw error
	request.onerror = function() {
		console.log('connection error');
	};

	request.send();
}
