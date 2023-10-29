
function load_file(func: (value: string) => void): void {
	let file = <HTMLInputElement>document.getElementById("input_file");

	const reader = new FileReader();
	if (file.files?.length == 1) {
		reader.readAsText(file.files[0]);

		reader.addEventListener("load", (): void => {
			func(String(reader.result));
		});
		console.log("Log: load file(" + file.files[0].name + ")");
	}
	else {
		console.error("Error: unselected");
		alert("ファイルを選択してください。");
	}
}

function to_cpp(value: any): string {
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

			let ans: string = "{";
			for (let i = 0; i < value.length; ++i) {
				ans += to_cpp(value[i]);
				if (i < value.length - 1) ans += ",";
			}
			return ans + "}";
		} else {
			// JSON
			let ans: string = "{";
			let check: boolean = false;
			for (let key in value) {
				if (check) {
					ans += ",";
				}
				console.log(typeof key);
				ans += `{${to_cpp(key)},${to_cpp(value[key])}}`;
				check = true;
			}
			return ans + "}";
		}
	}
	else {
		console.warn(`Unknown Type: ${typeof value}`);
	}

	return "";
}

function format(file: string): string {
	if (file === "") return "";

	try {
		let json = JSON.parse(file);
		return to_cpp(json);
	}
	catch {
		return "Somthing is wrong.";
	}
}
