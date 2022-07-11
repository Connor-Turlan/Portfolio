// copy the content of the email contact element to the clipboard.
function copyEmailToClipboard() {
	let text = document.getElementById("liEmail").getAttribute("value");
	navigator.clipboard.writeText(text);
	alert("Email copied to clipboard!");
}
