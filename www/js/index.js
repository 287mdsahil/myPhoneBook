

var eventStateFlag = 0;
// 0 means the screen in on the home screen
// 1 means the call button is pressed

//onSucces and onError call back functions
function onSuccessCallNumber(result)
{console.log("Success:" + result);}
function onErrorCallNumber(result)
{console.log("Success:" + result);}


//==============================================
function duplicateNumberPresent(phoneNumbers,i)
{
	if(i == phoneNumbers.length-1)
		return false;
		
	num1=phoneNumbers[i].value.replace(/\s/g, "");
	console.dir(num1);
	for(let j=i+1;j<phoneNumbers.length;j++)
	{
		num2=phoneNumbers[j].value.replace(/\s/g, "")
		console.dir(num2);
		if(num1==num2)
			return true;
	}
	return false;
}

//onClick function for the call button on each contact card--------------------------------
function callButtonOnClick(c)
{
	eventStateFlag = 1;
	callMenuDiv = document.createElement("div");
	callMenuDiv.id="callMenuBackground";
	document.body.appendChild(callMenuDiv);
	
	callMenuCard = document.createElement("div");
	callMenuCard.id="callMenuCard";
	callMenuDiv.appendChild(callMenuCard);

	callMenuCardHeading = document.createElement("div");
	callMenuCardHeading.id = "callMenuCardHeading";
	callMenuCardHeading.innerHTML = "Select number:";
	callMenuCard.appendChild(callMenuCardHeading);
	
	
	for(let i=0;i<c.phoneNumbers.length;i++)
	{
		//=====================================================
		if(!duplicateNumberPresent(c.phoneNumbers,i))
		{
			var numberDiv = document.createElement("div");
			numberDiv.innerHTML = c.phoneNumbers[i].value.replace(/\s/g, "");
			numberDiv.classList.add("numberCard");
			callMenuCard.appendChild(numberDiv);
		
			//clicking the numbers performs the phone call
			numberDiv.addEventListener("click",function (){
				window.plugins.CallNumber.callNumber(onSuccessCallNumber,onErrorCallNumber,c.phoneNumbers[i].value);
				callMenuDiv.style.opacity = "0";
				setTimeout(function(){
					callMenuDiv.style.display = "none";
					},300);
				eventStateFlag = 0;
			});
		}
	}
	
	//delayed display of the numbers
	setTimeout(function(){
		callMenuDiv.style.display = "block";
		callMenuDiv.style.opacity = "1";
		callMenuDiv.style.paddingTop = "30vh";
	},300);
	
	
	//backbutton return to the home screen
	document.addEventListener("backbutton",function (){
		if(eventStateFlag==1)
		{
			callMenuDiv.style.paddingTop = "0vh";
			callMenuDiv.style.opacity = "0";
			setTimeout(function(){
				callMenuDiv.style.display = "none";
			},300);
			eventStateFlag = 0;
		}
	});
}
























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

//stores the contacts and displays them the table view--------------------------------------
function onSuccessContactFind(c)
{
	
	//c=contactSort(c);
	c.sort(contactCompare);
	
	//window.alert("contacts found: " + c.length);
	var table = document.getElementById("contact_list");
	for(let i=0;i<c.length;i++)
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
		

		img2.addEventListener("click",function ()
		{
			callButtonOnClick(c[i]);
		});
		cell1.appendChild(img2);
	}
	return c;
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
	
	document.addEventListener("backbutton",function ()
	{
		if(eventStateFlag==0)
			navigator.app.exitApp();
	});
}
