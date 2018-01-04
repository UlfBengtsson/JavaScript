var bigbox = document.getElementById("bigbox");

var num = 1;

function AddRedCube ()
{
	var elem = document.createElement("div");
	elem.id = num++;
	
	elem.classList.add("cube");
	elem.classList.add("redcube");
	//elem.classList.contains(redcube) 
	
	bigbox.appendChild(elem);
}

function AddBlueCube ()
{
	var elem = document.createElement("div");
	elem.id = num++;
	elem.className = "cube bluecube";
	bigbox.appendChild(elem);
}

function AddToggleCube ()
{
	var elem = document.createElement("div");
	
	if (num % 2 == 0)
	{
		elem.className = "cube bluecube";
	}
	else
	{
		elem.className = "cube redcube";
	}
	

	elem.id = num++;
	bigbox.appendChild(elem);
}

function WhatKey(event)
{
	event.keyCode;
	if (event.keyCode == 37)
	{
		AddBlueCube();
	}
	else if (event.keyCode == 39)
	{
		AddRedCube();
	}
			
}