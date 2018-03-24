//Variables


let ussdcode = null,
	Airtime,
	Data,
	Balance;

// console.log("perform action");

// ussdCode = document.querySelector("#ussdcode").value;
// conditional if
// if(ussdcode == "*141#"){
// console.log("please select 1 - 3");
// console.log("1. Borrow Airtime");
// console.log("2.Borrow Data");
// console.log("3.Check Balance");
// }else{
// 	console.log("check code and try again"); the code was remove to add a quey selector
// }
function ussd(){
	//document.querySelector
	//console.log("Enter");
	//document.getElementByIid("").innerText = u
	let ussdkey = document.querySelector("#dom_stdin2").value;
	alert(ussdkey);
	switch (ussdkey) {
		case 1:
			document.querySelector('#dom_stdout1').innerText = '1. N100';
			document.querySelector('#dom_stdout2').innerText = '2. N200';
			document.querySelector('#dom_stdout3').innerText = '3. N300';
		break;
		case 2:
			document.querySelector('#dom_stdout1').innerText = '1. 100MB';
			document.querySelector('#dom_stdout2').innerText = '2. 200MB';
			document.querySelector('#dom_stdout3').innerText = '3. 750MB';
		break;
		case 3:
			document.querySelector('#dom_stdout').innerText = 'Your balance is N0.00';
		break;

		default:
			document.querySelector('#dom_stdout').innerText = 'Invalid Option';
		break;
	}
	//conditional if
}
	function ussdkey(){
			ussdCode = document.querySelector("#dom_stdin").value;
			document.querySelector("#btn_click").addEventListener('click',function(){
				if(ussdCode == "*141#"){
					document.querySelector("#dom_stdout1").innerText = 'Please Select 1 -3';
					document.querySelector("#dom_stdout2").innerText = '1. Borrow Airtime';
					document.querySelector("#dom_stdout3").innerText = '2.Borrow Data';
					document.querySelector("#dom_stdout4").innerText = '3.Check Balance';
					document.querySelector("#btn_send").addEventListener('click', function(){
						let ussdkey = document.querySelector("#ussdkey").value;
						ussd(ussdkey)
					})
				}else{
					document.querySelector("#dom_stdin").value;
				}
			})
		};