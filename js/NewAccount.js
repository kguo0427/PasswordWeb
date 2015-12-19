
//creates a new account.

document.getElementById("create").onclick = function () {
	createAccount();
};

//going back
document.getElementById("back").onclick = function () {
	location.href = "login.html";
};

//function for creating a new account and update it in the database
function createAccount(){
	var obj = [{a:1}, {a:2}];
	var stringed = JSON.stringify(obj);
	var reparsed = JSON.parse(stringed);
	alert(stringed);

}