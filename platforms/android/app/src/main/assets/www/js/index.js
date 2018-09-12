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
		
		//displaying name
		var name = c[i].displayName;
		var cell1 = row.insertCell(0);
		cell1.innerHTML = name;
		
		//displaying contact numbers
		if(c[i].phoneNumbers!=null)
		{
			var number = c[i].phoneNumbers[0];
			var cell2 = row.insertCell(1);
			cell2.innerHTML = number.value;
		}
		
		console.dir(c[i]);
	}
}

//main fucntion========================================================================
document.addEventListener("deviceready", onDeviceReady);
function onDeviceReady() 
{
	var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.phoneNumbers];
	navigator.contacts.find(fields, onSuccess);
}
