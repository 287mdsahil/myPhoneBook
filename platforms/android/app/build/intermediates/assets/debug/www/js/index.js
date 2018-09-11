/*function dummy()
{
	window.alert("test");
	console.log("test");
}
*/

function onSuccess(c)
{
	window.alert("contacts found: " + c.length);
}

document.addEventListener("deviceready", onDeviceReady);
function onDeviceReady() 
{
	var fields = [navigator.contacts.fieldType.name];
	navigator.contacts.find(fields, onSuccess);
}
