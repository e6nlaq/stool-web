function random(min, max, integer) {
    var _a;
    if (min === max)
        return min;
    if (min > max) {
        _a = [max, min], min = _a[0], max = _a[1];
    }
    if (integer) {
        max++;
        return Math.floor(Math.random() * (max - min) + min);
    }
    else {
        return Math.random() * (max - min) + min;
    }
}
function random_generate() {
    var ans = "Example";
    try {
        var min_html = document.getElementById("min_number");
        var max_html = document.getElementById("max_number");
        var integer_html = document.getElementById("integer_checkbox");
        ans = String(random(Number(min_html.value), Number(max_html.value), integer_html.checked));
    }
    catch (e) {
        ans = "Something is wrong.";
    }
    var result_html = document.getElementById("result");
    result_html.textContent = ans;
}
function reset() {
    var min_html = document.getElementById("min_number");
    var max_html = document.getElementById("max_number");
    var integer_html = document.getElementById("integer_checkbox");
    var result = document.getElementById("result");
    min_html.value = "";
    max_html.value = "";
    integer_html.checked = true;
    result.textContent = "";
}
function copy() {
    var result_html = document.getElementById("result");
    navigator.clipboard.writeText(String(result_html === null || result_html === void 0 ? void 0 : result_html.textContent)).then(function () {
        alert("Copied!");
    }, function () {
        alert("Copy failed");
    });
}
