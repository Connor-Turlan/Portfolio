function copyToClipboard() {
	let text = document.getElementById("liEmail").getAttribute("value");
	navigator.clipboard.writeText(text);
	alert("Email copied to clipboard!");
}
