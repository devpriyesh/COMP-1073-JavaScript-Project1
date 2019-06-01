//JavaScript File

console.log("Connected !");
let position = document.getElementById('manan'); 
let para   = document.getElementById('priyesh');


let names = [ 'Amir', 'Paul', 'Ritik', 'Himanshi', 'Sanoop Sha', 'Dikshant', 'Liam', 
             'Thales', 'Priyesh', 'Daehan', 'Sherin', 'Gurmeet', 'Jashanpreet', 
             'Ranpreet', 'Simranjot', 'Seunghwan', 'Toms', 'Amrit', 'Jeel', 'Nihar',
              'Aryananda', 'Krutarthkumar', 'Jonathan', 'Saloni', 'Arjun', 'Shawn', 
              'Bikramjit', 'Bikramjit', 'Gurbinder', 'Harjot', 'Harvinder', 
              'Inderpreet', 'Lovedeep', 'Parminder', 'Sahejpreet', 
              'Shubhamjit', 'Priyal', 'Martin', 'Vikas', 'Yashaswi'];


function myFunction() {
let choice = position.value ;
	if (choice === 'Staff') {
		para.textContent = 'Hello Jessica !' ;
		console.log(choice);
	} else if (choice === 'Student') {
		para.textContent = names ;
		console.log(choice);
	}
	else {
		para.textContent = '';
		console.log(choice);
	}
}