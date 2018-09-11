/*function dummy()
{
	window.alert("test");
	console.log("test");
}
*/

function onSuccess(c)
{
	window.alert("contacts found: " + c.length);
	var table = document.getElementById("contact_list");
	var i=0;
	for(i=0;i<c.length;i++)
	{
		var row = table.insertRow(i+1);
		
		var name = c[i].displayName;
		
		var cell1 = row.insertCell(0);
		
		cell1.innerHTML = name;
	}
}

//main fucntion========================================================================
document.addEventListener("deviceready", onDeviceReady);
function onDeviceReady() 
{
	var fields = [navigator.contacts.fieldType.displayName];
	navigator.contacts.find(fields, onSuccess);
}
