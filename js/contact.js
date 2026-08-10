(() => {
    "use strict";

    const revealButton = document.querySelector("[data-email-reveal]");
    const result = document.querySelector("[data-email-result]");
    const address = document.querySelector("[data-email-address]");
    const copyButton = document.querySelector("[data-email-copy]");
    const emailLink = document.querySelector("[data-email-link]");

    if (!revealButton || !result || !address || !copyButton || !emailLink) return;
    if (revealButton.dataset.emailReady === "true") return;
    revealButton.dataset.emailReady = "true";

    // Character codes keep the complete address out of HTML and obvious source strings.
    const emailCodes = [
        119, 111, 110, 106, 117, 110, 104, 101, 101, 46, 99, 111, 109,
        64, 103, 109, 97, 105, 108, 46, 99, 111, 109
    ];
    let copyStatusTimer;

    revealButton.addEventListener("click", () => {
        const email = String.fromCharCode(...emailCodes);
        address.textContent = email;
        emailLink.href = `mailto:${email}`;
        result.hidden = false;
        revealButton.hidden = true;
        copyButton.focus();
    });

    copyButton.addEventListener("click", async () => {
        if (!address.textContent) return;
        try {
            await navigator.clipboard.writeText(address.textContent);
            copyButton.textContent = "복사 완료";
            clearTimeout(copyStatusTimer);
            copyStatusTimer = setTimeout(() => {
                copyButton.textContent = "주소 복사";
            }, 1800);
        } catch (error) {
            console.error("이메일 주소를 복사하지 못했습니다.", error);
        }
    });
})();
