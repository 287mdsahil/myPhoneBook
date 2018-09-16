/*contents of this multiline comment is not working

//sorts the contacts in alphabetical order of the displayName-------------------------------(bugged, whats the problem i guess???????)
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

//compares the contacts wrt to the displayName---------------------------------------------
function contactCompare(a,b)
{
	if(a.name.formatted<b.name.formatted)
		return -1;
	else if(a.name.formatted>b.name.formatted)
		return 1;
	else 
		return 0;
}


*/

//stores the contacts and displays them the table view--------------------------------------
function onSuccess(c)
{
	
	//c=contactSort(c);
	//c.sort(contactCompare);
	
	//window.alert("contacts found: " + c.length);
	var table = document.getElementById("contact_list");
	var i=0;
	for(i=0;i<c.length;i++)
	{
		var row = table.insertRow(i);
		
		//displaying name
		var name = c[i].displayName;
		var cell1 = row.insertCell(0);
		var img1 = document.createElement('img');
		img1.classList.add("profilePic");
		
		if(c[i].photos!=null)
			img1.src=c[i].photos[0].value;
		else
			img1.src="img/default-user-img.png";
		
		
		cell1.appendChild(img1);
		var nameDiv = document.createElement('div');
		nameDiv.innerHTML = name;
		cell1.appendChild(nameDiv);
		
		var img2 = document.createElement('img');
		img2.classList.add("menuDots");
		img2.src="img/call.png"
		
		cell1.appendChild(img2);
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
	var fields = 	["*"];
					
	navigator.contacts.find(fields, onSuccess);
}
