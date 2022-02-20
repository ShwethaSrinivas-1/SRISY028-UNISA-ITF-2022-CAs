const rootEl = document.querySelector(":root");
let getTheme = localStorage.getItem("data-theme");

rootEl.setAttribute("data-theme", getTheme);

// the above step can also be tied to an event handler
// window.addEventListener("load", function () {
// 	rootEl.setAttribute("data-theme", getTheme);
// });

const headerEl = document.getElementById("mainHeading");

function headingChange() {
	//////////get the query sting value from the url, if it exists////////////////
	const queryString = window.location.search;
	const stringFromUrl = new URLSearchParams(queryString);
	const userName = stringFromUrl.get("user_name");

	//////////// get the value of 'name' key from localStorage, if it exists//////////
	let getName = localStorage.getItem("name");

	////////////update the heading element with the value from the query string//////////////
	if (queryString.includes("user_name")) {
		headerEl.textContent = `Hello, ${userName}`;
		///////////assign that value to the'name' key in localStorage/////////////
		localStorage.setItem("name", userName);

		////////////update the heading element with the value from localStoragethe localStorage////////////
	} else if (!queryString.includes("user_name") && getName !== null) {
		headerEl.textContent = `Hello, ${getName}`;
		/////////// if both local storage and query string are empty, update the heading element with 'header'//////////
	} else {
		headerEl.textContent = "Header";
	}
}

function modeSwitch() {
	///////get the theme from localStorage,if it exists//////////
	let newColors = rootEl.getAttribute("data-theme");

	/////////if new colors is dark, update the root element to light////////
	if (newColors === "dark") {
		rootEl.setAttribute("data-theme", "light");
		////////if new colors is light, update the root element to dark////////
	} else {
		rootEl.setAttribute("data-theme", "dark");
	}
	newColors = rootEl.getAttribute("data-theme");
	/////store the user preffered color to local storage/////////////
	localStorage.setItem("data-theme", newColors);
}
