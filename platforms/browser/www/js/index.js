document.addEventListener("deviceready", onDeviceReady, false);


function dummy()
{
	window.alert("fuck");
}

function onDeviceReady() 
{
	document.write("success");
	navigator.contacts.find([navigator.contacts.fieldType.displayName],getContacts,errorHandler);
}

function errorHandler(e)
{
	console.log("errorHandler: " + e);
}

function getContacts(c)
{
	console.log("gotContacts, no of results: " + c.length);
}
