function dummy()
{
	window.alert("test");
	console.log("test");
}


document.addEventListener("deviceready", onDeviceReady);
function onDeviceReady() 
{
	window.alert("ready");
}
