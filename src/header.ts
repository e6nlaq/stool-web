
function load_header(): void {
	let top_url = document.createElement("a");
	top_url.appendChild(document.createTextNode("STool"));
	top_url.setAttribute("href", "./index.html");

	// <a className="pagetop" href="#"><div className="pagetop__arrow"></div></a>
	let top_button = document.createElement("a");
	top_button.innerHTML = '<div class="pagetop__arrow"></div>';
	top_button.classList.add("pagetop");
	top_button.setAttribute("href", "#");

	let header = document.getElementById("header");
	header?.insertBefore(top_url, header.firstChild);

	document.body.insertBefore(top_button, document.body.firstChild);
}
