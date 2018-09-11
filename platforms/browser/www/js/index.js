function dummy()
{
	window.alert("test");
	console.log("test");
}



document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() 
{
	window.alert("ready");
}
