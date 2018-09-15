
//sorts the contacts in alphabetical order of the displayName-------------------------------
function contactSort(c)
{
	for(var i=0;i<c.length-1;i++)
	{
		var m=i;
		for(var j=i+1;j<c.length;j++)
		{
			if(c[j].displayName>c[m].displayName)
				m=j;
				console.log(c[j].displayName + "<" + c[m].displayName);
		}
		
		var dummy = navigator.contacts.create();
		dummy=c[m];
		c[m]=c[i];
		c[i]=c[m];
	}
	return c;
}


//stores the contacts and displays them the table view--------------------------------------
function onSuccess(c)
{
	console.dir(c);
	//c=contactSort(c);
	console.dir(c);
	//window.alert("contacts found: " + c.length);
	var table = document.getElementById("contact_list");
	var i=0;
	for(i=0;i<c.length;i++)
	{
		var row = table.insertRow(i);
		
		//displaying name
		var name = c[i].displayName;
		var cell1 = row.insertCell(0);
		var img = document.createElement('img');
		
		if(c[i].photos!=null)
			img.src=c[i].photos[0].value;
		else
			img.src="img/default-user-img.png";
		
		
		cell1.appendChild(img);
		var nameDiv = document.createElement('div');
		nameDiv.innerHTML = name;
		cell1.appendChild(nameDiv);
		
		//displaying contact numbers
		/*
		if(c[i].phoneNumbers!=null)
		{
			var number = c[i].phoneNumbers[0];
			var cell2 = row.insertCell(1);
			cell2.innerHTML = number.value;
		}
		*/
		
		
		
		//console.dir(c[i]);
	}
}

//main fucntion========================================================================
document.addEventListener("deviceready", onDeviceReady);
function onDeviceReady() 
{
	var fields = 	[navigator.contacts.fieldType.displayName, 
					navigator.contacts.fieldType.phoneNumbers, 
					navigator.contacts.fieldType.photos];
					
	navigator.contacts.find(fields, onSuccess);
}
