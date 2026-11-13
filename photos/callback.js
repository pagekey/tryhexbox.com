
"use strict";

(() => {
    // Remove OAuth parameters from the visible URL immediately.
    const query = window.location.search;
    window.history.replaceState(null, "", window.location.pathname);

    document.addEventListener("DOMContentLoaded", () => {
        const heading = document.getElementById("heading");
        const message = document.getElementById("message");
        const result = document.getElementById("result");
        const statusIcon = document.getElementById("statusIcon");
        const statusSymbol = document.getElementById("statusSymbol");
        const eyebrow = document.getElementById("eyebrow");

        const canceled = () => {
            heading.textContent = "Connection couldn't be completed";
            message.textContent =
                "The authorization response was canceled or invalid. Return to HexBox and try connecting Google Drive again.";

            eyebrow.textContent = "Connection unsuccessful";
            statusIcon.classList.add("error");
            statusSymbol.textContent = "!";
            result.hidden = true;
        };

        try {
            if (query.length > 16384) return canceled();

            // Reject malformed percent encoding and UTF-8.
            decodeURIComponent(query.replaceAll("+", " "));

            const params = new URLSearchParams(query);

            if (params.has("error")) return canceled();

            if (
                params.getAll("code").length !== 1 ||
                params.getAll("state").length !== 1
            ) {
                return canceled();
            }

            const code = params.get("code");
            const state = params.get("state");

            if (!code.trim() || !state.trim()) return canceled();

            const bytes = new TextEncoder().encode(
                JSON.stringify({ code, state })
            );

            if (bytes.length > 16384) return canceled();

            const connectionCode =
                "hexbox-google-v1." +
                btoa(String.fromCharCode(...bytes))
                    .replaceAll("+", "-")
                    .replaceAll("/", "_")
                    .replace(/=+$/, "");

            if (connectionCode.length > 16384) return canceled();

            const display = document.getElementById("codeDisplay");
            const copyBtn = document.getElementById("copyBtn");
            const copyLabel = document.getElementById("copyLabel");
            const copyStatus = document.getElementById("copyStatus");

            display.value = connectionCode;

            heading.textContent = "Return to your HexBox";
            message.textContent =
                "Google authorization was successful. Copy the connection code below to finish connecting your account.";

            eyebrow.textContent = "Authorization successful";
            statusSymbol.textContent = "✓";

            result.hidden = false;

            copyBtn.addEventListener("click", async () => {
                copyStatus.textContent = "";

                try {
                    await navigator.clipboard.writeText(display.value);

                    copyBtn.classList.add("success");
                    copyLabel.textContent = "Copied successfully";
                    copyStatus.textContent =
                        "Your code is copied. Return to HexBox to finish connecting.";
                } catch {
                    display.focus();
                    display.select();
                    display.setSelectionRange(0, display.value.length);

                    copyBtn.classList.remove("success");
                    copyLabel.textContent = "Copy manually";
                    copyStatus.textContent =
                        "Your code is selected. Copy it manually, then return to HexBox.";
                }
            });
        } catch {
            canceled();
        }
    }, { once: true });
})();
