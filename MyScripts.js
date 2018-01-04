var bigbox = document.getElementById("bigbox");

var num = 1;

function AddRedCube ()
{
	var elem = document.createElement("div");
	elem.id = num++;
	elem.className = "cube redcube";
	bigbox.appendChild(elem);
}

function AddBlueCube ()
{
	var elem = document.createElement("div");
	elem.id = num++;
	elem.className = "cube bluecube";
	bigbox.appendChild(elem);
}