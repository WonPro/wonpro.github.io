import { animate, inView, stagger } from "https://cdn.jsdelivr.net/npm/motion@12.23.24/+esm";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const springy = { type: "spring", stiffness: 360, damping: 24, mass: 0.85 };
const AMBIENT_WORDS = [
    "MOVE", "PLAY", "CREATE", "DESIGN", "INTERACT", "BOLD", "CLEAR",
    "IDEAS", "MOTION", "DIGITAL", "STORY", "FLOW", "TYPE", "HELLO",
    "UI·UX", "CLICK", "SCROLL", "WON.", "MAKE IT MOVE"
];

function splitHeroTitle() {
    const title = document.querySelector("#mainVisualTitle");
    if (!title || title.dataset.split) return [];

    title.dataset.split = "true";
    const label = title.textContent.trim().replace(/\s+/g, " ");
    const words = label.split(" ");
    title.setAttribute("aria-label", label);
    title.textContent = "";

    const letters = [];
    words.forEach((word) => {
        const wordSpan = document.createElement("span");
        wordSpan.className = "heroWord";
        [...word].forEach((letter) => {
            const span = document.createElement("span");
            span.className = "heroLetter";
            span.textContent = letter;
            span.setAttribute("aria-hidden", "true");
            wordSpan.append(span);
            letters.push(span);
        });
        title.append(wordSpan);
    });

    return letters;
}

function animateHero() {
    const letters = splitHeroTitle();
    if (reduceMotion || !letters.length) return;

    animate(".heroEyebrow", { opacity: [0, 1], y: [18, 0] }, { duration: 0.55 });
    letters.forEach((letter, index) => {
        const direction = index % 2 === 0 ? -1 : 1;
        animate(
            letter,
            {
                opacity: [0, 1],
                x: [direction * (70 + index * 8), 0],
                y: [index % 3 === 0 ? -130 : 120, 0],
                rotate: [direction * (22 + index * 2), 0],
                scale: [0.35, 1]
            },
            { delay: 0.08 + index * 0.045, type: "spring", stiffness: 230, damping: 15 }
        );
    });
    animate(".heroSubcopy", { opacity: [0, 1], y: [32, 0] }, { delay: 0.35, duration: 0.7 });
    animate(".moreBtn", { opacity: [0, 1], scale: [0.72, 1] }, { delay: 0.55, ...springy });
}

function setupPageMotion() {
    if (reduceMotion) return;

    const cursor = document.querySelector(".motionCursor");
    const typeHero = document.querySelector(".typeHero");
    const floatingWords = [...document.querySelectorAll(".typeHero__word")];
    let ticking = false;

    document.addEventListener("pointermove", (event) => {
        if (!cursor || event.pointerType === "touch") return;
        cursor.style.opacity = "1";
        animate(cursor, { x: event.clientX, y: event.clientY }, { type: "spring", stiffness: 520, damping: 36, mass: 0.35 });
        const dx = event.clientX / innerWidth - 0.5;
        const dy = event.clientY / innerHeight - 0.5;
        floatingWords.forEach((word, index) => {
            const depth = 18 + index * 12;
            animate(word, { x: dx * depth, y: dy * depth }, { type: "spring", stiffness: 180, damping: 20 });
        });
    }, { passive: true });

    document.querySelectorAll("a, button, .card").forEach((element) => {
        element.addEventListener("pointerenter", () => cursor?.classList.add("is-active"));
        element.addEventListener("pointerleave", () => cursor?.classList.remove("is-active"));
    });

    window.addEventListener("scroll", () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
            const progress = Math.min(1, scrollY / max);
            document.documentElement.style.setProperty("--page-progress", progress);
            if (typeHero && scrollY < innerHeight * 1.2) {
                typeHero.style.transform = `translate3d(0, ${scrollY * 0.12}px, 0) scale(${1 + scrollY * 0.00005})`;
            }
            ticking = false;
        });
    }, { passive: true });

    inView(".kineticBand", (band) => {
        animate(band, { opacity: [0, 1], scale: [0.94, 1], rotate: [-5, -2] }, { type: "spring", stiffness: 170, damping: 18 });
    }, { amount: 0.2 });

    inView("#portfolio .sectionTitle", (title) => {
        animate(title, { opacity: [0, 1], y: [120, 0], scale: [0.78, 1], letterSpacing: ["-0.12em", "-0.075em"] }, { type: "spring", stiffness: 150, damping: 17 });
    }, { amount: 0.35 });
}

function setupSpringInteractions() {
    document.querySelectorAll(".moreBtn, .tab, .card, .contactItem, .topBar .link").forEach((element) => {
        element.addEventListener("pointerenter", (event) => {
            if (event.pointerType === "touch") return;
            animate(element, { scale: 1.045, y: -5 }, springy);
        });
        element.addEventListener("pointerleave", () => {
            animate(element, { scale: 1, y: 0 }, springy);
        });
    });

    document.querySelectorAll(".card").forEach((card) => {
        card.addEventListener("pointermove", (event) => {
            if (reduceMotion) return;
            const rect = card.getBoundingClientRect();
            const rx = ((event.clientY - rect.top) / rect.height - 0.5) * -7;
            const ry = ((event.clientX - rect.left) / rect.width - 0.5) * 7;
            card.style.setProperty("--rx", `${rx}deg`);
            card.style.setProperty("--ry", `${ry}deg`);
        });
        card.addEventListener("pointerleave", () => {
            card.style.setProperty("--rx", "0deg");
            card.style.setProperty("--ry", "0deg");
        });
    });
}

function setupScrollReveals() {
    if (reduceMotion) return;

    inView(".contentSection", (section) => {
        const title = section.querySelector(".sectionTitle");
        const intro = section.querySelector(".sectionIntro");
        animate([title, intro].filter(Boolean), { opacity: [0, 1], y: [50, 0] }, { delay: stagger(0.12), ...springy });
    }, { amount: 0.2 });

    inView(".gallery", (gallery) => {
        const cards = [...gallery.querySelectorAll(".card:not(.hidden)")];
        animate(cards, { opacity: [0, 1], y: [65, 0], scale: [0.92, 1] }, { delay: stagger(0.065), ...springy });
    }, { amount: 0.1 });

    inView(".profile", (profile) => {
        animate(profile, { opacity: [0, 1], y: [70, 0] }, { type: "spring", stiffness: 220, damping: 22 });
    }, { amount: 0.25 });
}

function setupAnimeDrawing() {
    if (reduceMotion || !window.anime) return;
    const path = document.querySelector(".drawLine path");
    const dot = document.querySelector(".drawLine circle");
    if (!path) return;

    const observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;

        window.anime.timeline({ easing: "easeInOutQuart" })
            .add({ targets: path, strokeDashoffset: [length, 0], duration: 1250 })
            .add({ targets: dot, scale: [0, 1], opacity: [0, 1], duration: 520, easing: "easeOutElastic(1, .45)" }, "-=180");
    }, { threshold: 0.45 });
    observer.observe(path);
}

function setupAmbientTypography() {
    const anime = window.anime;
    const layer = document.querySelector(".ambientTypeLayer");
    if (reduceMotion || !anime || !layer) return;

    // Keep the ambient layer intentionally sparse on small screens so it never competes with content.
    const mobile = matchMedia("(max-width: 767px)").matches;
    const maxTokens = mobile ? 8 : 16;
    const spawnDelay = mobile ? 1500 : 850;
    let lastPointerReaction = 0;

    function spawnToken() {
        if (layer.childElementCount >= maxTokens || document.hidden) return;

        const token = document.createElement("span");
        const size = anime.random(mobile ? 24 : 32, mobile ? 58 : 118);
        token.className = "ambientTypeToken";
        if (anime.random(0, 3) === 0) token.classList.add("is-outline");
        if (anime.random(0, 5) === 0) token.classList.add("is-green");
        token.textContent = AMBIENT_WORDS[anime.random(0, AMBIENT_WORDS.length - 1)];
        token.style.left = `${anime.random(-8, 88)}vw`;
        token.style.top = `${anime.random(4, 92)}vh`;
        token.style.setProperty("--ambient-size", `${size}px`);
        token.style.setProperty("--ambient-mobile-size", `${Math.min(size, 54)}px`);
        layer.append(token);

        const duration = anime.random(9000, 16000);
        const maxOpacity = anime.random(3, 10) / 100;
        const startX = anime.random(-80, 40);
        const startY = anime.random(-60, 60);
        const endX = anime.random(80, 260);
        const endY = anime.random(-180, 180);

        // Every token owns its lifecycle; removal on completion prevents detached animation buildup.
        anime.timeline({ targets: token, easing: "linear", complete: () => token.remove() })
            .add({
                opacity: [0, maxOpacity],
                translateX: [startX, startX + (endX - startX) * 0.18],
                translateY: [startY, startY + (endY - startY) * 0.18],
                rotate: anime.random(-18, 18),
                duration: 1500
            })
            .add({
                opacity: maxOpacity,
                translateX: endX,
                translateY: endY,
                rotate: anime.random(-35, 35),
                duration: duration - 3000
            })
            .add({ opacity: 0, duration: 1500 });
    }

    for (let index = 0; index < Math.min(6, maxTokens); index += 1) {
        setTimeout(spawnToken, index * 240);
    }

    const spawnTimer = setInterval(spawnToken, spawnDelay);
    window.addEventListener("pagehide", () => clearInterval(spawnTimer), { once: true });

    // Throttle proximity reactions to avoid running a full token scan for every pointer event.
    document.addEventListener("pointermove", (event) => {
        const now = performance.now();
        if (event.pointerType === "touch" || now - lastPointerReaction < 90) return;
        lastPointerReaction = now;

        [...layer.children].forEach((token) => {
            const rect = token.getBoundingClientRect();
            const dx = rect.left + rect.width / 2 - event.clientX;
            const dy = rect.top + rect.height / 2 - event.clientY;
            if (Math.hypot(dx, dy) > 150) return;
            anime({
                targets: token,
                scale: [1, 1.28, 1],
                color: token.classList.contains("is-outline") ? undefined : ["#0a0a0a", "#006b4f", "#0a0a0a"],
                letterSpacing: ["-0.07em", "0.02em", "-0.07em"],
                duration: 700,
                easing: "easeOutElastic(1, .55)"
            });
        });
    }, { passive: true });
}

function setupHeroTextReplay() {
    const anime = window.anime;
    const title = document.querySelector("#mainVisualTitle");
    if (reduceMotion || !anime || !title) return;

    title.addEventListener("click", () => {
        const letters = title.querySelectorAll(".heroLetter");
        anime.remove(letters);
        anime.timeline({ targets: letters })
            .add({
                translateX: () => anime.random(-140, 140),
                translateY: () => anime.random(-100, 100),
                rotate: () => anime.random(-55, 55),
                opacity: 0.18,
                scale: () => anime.random(5, 13) / 10,
                duration: 360,
                delay: anime.stagger(16, { from: "center" }),
                easing: "easeInExpo"
            })
            .add({
                translateX: 0,
                translateY: 0,
                rotate: 0,
                opacity: 1,
                scale: 1,
                duration: 1050,
                delay: anime.stagger(22, { from: "center" }),
                easing: "easeOutElastic(1, .48)"
            });
    });
}

function initMotion() {
    animateHero();
    requestAnimationFrame(() => {
        setupSpringInteractions();
        setupScrollReveals();
        setupAnimeDrawing();
        setupPageMotion();
        setupAmbientTypography();
        setupHeroTextReplay();
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMotion, { once: true });
} else {
    initMotion();
}
