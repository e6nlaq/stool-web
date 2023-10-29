function load_header() {
    var top_url = document.createElement("a");
    top_url.appendChild(document.createTextNode("STool"));
    top_url.setAttribute("href", "./index.html");
    // <a className="pagetop" href="#"><div className="pagetop__arrow"></div></a>
    var top_button = document.createElement("a");
    top_button.innerHTML = '<div class="pagetop__arrow"></div>';
    top_button.classList.add("pagetop");
    top_button.setAttribute("href", "#");
    var header = document.getElementById("header");
    header === null || header === void 0 ? void 0 : header.insertBefore(top_url, header.firstChild);
    document.body.insertBefore(top_button, document.body.firstChild);
}
