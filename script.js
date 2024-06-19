document.getElementById("split-button").addEventListener("click", () => {
	const dkimInput = document.getElementById("dkim-input").value;
	const useGoogleDns = document.getElementById("google-dns").checked;
	const maxChunkSize = useGoogleDns ? 63 : 255; // Google Cloud DNS max chunk size is 63 characters

	// Split the DKIM record into chunks
	let chunks = [];
	for (let i = 0; i < dkimInput.length; i += maxChunkSize) {
		chunks.push(dkimInput.substring(i, i + maxChunkSize));
	}

	// Format the chunks
	const formattedChunks = chunks.map((chunk) => `"${chunk}"`).join(" ");

	// Display the result
	document.getElementById("result").textContent = formattedChunks;
});
