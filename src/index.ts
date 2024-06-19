document.getElementById("split-button")?.addEventListener("click", () => {
	const dkimInput = (
		document.getElementById("dkim-input") as HTMLTextAreaElement
	).value;
	const useGoogleDns = (
		document.getElementById("google-dns") as HTMLInputElement
	).checked;
	const maxChunkSize = useGoogleDns ? 63 : 255;

	let chunks: string[] = [];
	for (let i = 0; i < dkimInput.length; i += maxChunkSize) {
		chunks.push(dkimInput.substring(i, i + maxChunkSize));
	}

	const formattedChunks = chunks.map((chunk) => `"${chunk}"`).join(" ");

	const resultElement = document.getElementById("result") as HTMLDivElement;
	resultElement.textContent = formattedChunks;
});

const showNotification = () => {
	const notificationElement = document.getElementById(
		"notification"
	) as HTMLDivElement;
	notificationElement.classList.remove("hidden");
	setTimeout(() => {
		notificationElement.classList.add("hidden");
	}, 3000); // Hide after 3 seconds
};

document.getElementById("copy-button")?.addEventListener("click", () => {
	const resultElement = document.getElementById("result") as HTMLDivElement;
	const formattedChunks = resultElement.textContent;

	if (formattedChunks) {
		navigator.clipboard
			.writeText(formattedChunks)
			.then(() => {
				showNotification();
			})
			.catch((err) => {
				console.error("Failed to copy!", err);
			});
	}
});

document.getElementById("copy-label")?.addEventListener("click", () => {
	const resultElement = document.getElementById("result") as HTMLDivElement;
	const formattedChunks = resultElement.textContent;

	if (formattedChunks) {
		navigator.clipboard
			.writeText(formattedChunks)
			.then(() => {
				showNotification();
			})
			.catch((err) => {
				console.error("Failed to copy!", err);
			});
	}
});
