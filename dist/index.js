"use strict";
var _a, _b, _c;
(_a = document.getElementById("split-button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var dkimInput = document.getElementById("dkim-input").value;
    var useGoogleDns = document.getElementById("google-dns").checked;
    var maxChunkSize = useGoogleDns ? 63 : 255;
    var chunks = [];
    for (var i = 0; i < dkimInput.length; i += maxChunkSize) {
        chunks.push(dkimInput.substring(i, i + maxChunkSize));
    }
    var formattedChunks = chunks.map(function (chunk) { return "\"".concat(chunk, "\""); }).join(" ");
    var resultElement = document.getElementById("result");
    resultElement.textContent = formattedChunks;
});
var showNotification = function () {
    var notificationElement = document.getElementById("notification");
    notificationElement.classList.remove("hidden");
    setTimeout(function () {
        notificationElement.classList.add("hidden");
    }, 3000); // Hide after 3 seconds
};
(_b = document.getElementById("copy-button")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var resultElement = document.getElementById("result");
    var formattedChunks = resultElement.textContent;
    if (formattedChunks) {
        navigator.clipboard
            .writeText(formattedChunks)
            .then(function () {
            showNotification();
        })
            .catch(function (err) {
            console.error("Failed to copy!", err);
        });
    }
});
(_c = document.getElementById("copy-label")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    var resultElement = document.getElementById("result");
    var formattedChunks = resultElement.textContent;
    if (formattedChunks) {
        navigator.clipboard
            .writeText(formattedChunks)
            .then(function () {
            showNotification();
        })
            .catch(function (err) {
            console.error("Failed to copy!", err);
        });
    }
});
