const rootEl = document.querySelector(":root");
let getTheme = localStorage.getItem("data-theme");

rootEl.setAttribute("data-theme", getTheme);

// the above step can also be tied to an event handler
// window.addEventListener("load", function () {
// 	rootEl.setAttribute("data-theme", getTheme);
// });

const headerEl = document.getElementById("mainHeading");

function headingChange() {
	const queryString = window.location.search;
	const stringFromUrl = new URLSearchParams(queryString);
	const userName = stringFromUrl.get("user_name");

	let getName = localStorage.getItem("name");

	if (queryString.includes("user_name")) {
		headerEl.textContent = `Hello, ${userName}`;
		localStorage.setItem("name", userName);
	} else if (!queryString.includes("user_name") && getName !== null) {
		headerEl.textContent = `Hello, ${getName}`;
	} else {
		headerEl.textContent = "Header";
	}
}

function modeSwitch() {
	let newColors = rootEl.getAttribute("data-theme");

	if (newColors === "dark") {
		rootEl.setAttribute("data-theme", "light");
	} else {
		rootEl.setAttribute("data-theme", "dark");
	}
	newColors = rootEl.getAttribute("data-theme");
	localStorage.setItem("data-theme", newColors);
}
