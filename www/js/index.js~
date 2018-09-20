



//compares the contacts wrt to the displayName---------------------------------------------
function contactCompare(a,b)
{
	if(a.displayName!=null && b.displayName!=null)
	{
		var as = a.displayName.toUpperCase();
		var bs = b.displayName.toUpperCase();
		if(as>bs)
			return 1;
		else if(as<bs)
			return -1;
		else 
			return 0;
	}
	else
	{
		if(a.displayName==null)
			if(b.displayName==null)
				return 0;
			else if(b.displayName!=null)
				return 1;
		else 
			return -1;
	}
}

//OnClick function for the call button on each contact card--------------------------------
function callButtonOnClick()
{
	var callMenuDiv = document.getElementById("callMenuBackground");
	callMenuDiv.style.display = "block";
	//window.alert("call button pressed");
}


//stores the contacts and displays them the table view--------------------------------------
function onSuccessContactFind(c)
{
	
	//c=contactSort(c);
	c.sort(contactCompare);
	
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
		img2.classList.add("callButtonImg");
		img2.src="img/call.png"
		img2.addEventListener("click",callButtonOnClick);
		
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


//error fucntion in dontact find method------------------------------------------------
function onErrorContactFind(e)
{
	window.alert("Error occured: " + e);
}


//main fucntion========================================================================
document.addEventListener("deviceready", onDeviceReady);
function onDeviceReady() 
{
	var fields = 	["*"];
	navigator.contacts.find(fields, onSuccessContactFind, onErrorContactFind);
	
}
