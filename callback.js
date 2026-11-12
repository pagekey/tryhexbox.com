"use strict";

(() => {
    // Run in the head, before loading other assets or rendering the response.
    const query = window.location.search;
    window.history.replaceState(null, "", window.location.pathname);

    document.addEventListener("DOMContentLoaded", () => {
        const message = document.getElementById("message");
        const canceled = () => {
            message.textContent = "Authorization canceled or invalid; return to HexBox and start again.";
        };

        try {
            if (query.length > 16384) return canceled();
            // URLSearchParams otherwise silently repairs malformed percent/UTF-8 input.
            decodeURIComponent(query.replaceAll("+", " "));
            const params = new URLSearchParams(query);
            if (params.has("error")) return canceled();
            if (params.getAll("code").length !== 1 || params.getAll("state").length !== 1) return canceled();
            const code = params.get("code");
            const state = params.get("state");
            if (!code.trim() || !state.trim()) return canceled();

            const bytes = new TextEncoder().encode(JSON.stringify({ code, state }));
            if (bytes.length > 16384) return canceled();
            const connectionCode = "hexbox-google-v1." + btoa(String.fromCharCode(...bytes))
                .replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
            if (connectionCode.length > 16384) return canceled();

            const display = document.getElementById("codeDisplay");
            display.value = connectionCode;
            document.getElementById("heading").textContent = "Return to HexBox";
            message.textContent = "Copy the connection code, return to HexBox, and choose Finish connecting. This short-lived code contains no access or refresh tokens.";
            document.getElementById("result").hidden = false;
            document.getElementById("copyBtn").addEventListener("click", async () => {
                const status = document.getElementById("copyStatus");
                try {
                    await navigator.clipboard.writeText(display.value);
                    status.textContent = "Copied. Return to HexBox and paste the connection code.";
                } catch {
                    display.focus();
                    display.select();
                    status.textContent = "Copy the selected connection code manually, then return to HexBox.";
                }
            });
        } catch {
            canceled();
        }
    }, { once: true });
})();
