function load_file(func) {
    var _a;
    var file = document.getElementById("input_file");
    var reader = new FileReader();
    if (((_a = file.files) === null || _a === void 0 ? void 0 : _a.length) == 1) {
        reader.readAsText(file.files[0]);
        reader.addEventListener("load", function () {
            func(String(reader.result));
        });
        console.log("Log: load file(" + file.files[0].name + ")");
    }
    else {
        console.error("Error: unselected");
        alert("ファイルを選択してください。");
    }
}
function to_cpp(value) {
    if (typeof value === "string") {
        return "\"" + value + "\"";
    }
    else if (typeof value === "number" || typeof value == "bigint") {
        return String(value);
    }
    else if (typeof value === "boolean") {
        return (value ? "true" : "false");
    }
    else if (typeof value === "object") {
        if (Array.isArray(value)) {
            // Array
            var ans = "{";
            for (var i = 0; i < value.length; ++i) {
                ans += to_cpp(value[i]);
                if (i < value.length - 1)
                    ans += ",";
            }
            return ans + "}";
        }
        else {
            // JSON
            var ans = "{";
            var check = false;
            for (var key in value) {
                if (check) {
                    ans += ",";
                }
                console.log(typeof key);
                ans += "{".concat(to_cpp(key), ",").concat(to_cpp(value[key]), "}");
                check = true;
            }
            return ans + "}";
        }
    }
    else {
        console.warn("Unknown Type: ".concat(typeof value));
    }
    return "";
}
function format(file) {
    if (file === "")
        return "";
    try {
        var json = JSON.parse(file);
        return to_cpp(json);
    }
    catch (_a) {
        return "Somthing is wrong.";
    }
}
