import { animate, inView, stagger } from "https://cdn.jsdelivr.net/npm/motion@12.23.24/+esm";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const springy = { type: "spring", stiffness: 360, damping: 24, mass: 0.85 };

function splitHeroTitle() {
    const title = document.querySelector("#mainVisualTitle");
    if (!title || title.dataset.split) return [];

    title.dataset.split = "true";
    const letters = [...title.textContent.trim()];
    title.setAttribute("aria-label", letters.join(""));
    title.textContent = "";

    return letters.map((letter) => {
        const span = document.createElement("span");
        span.className = "heroLetter";
        span.textContent = letter === " " ? "\u00a0" : letter;
        span.setAttribute("aria-hidden", "true");
        title.append(span);
        return span;
    });
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
    animate(".titleWrap > .specialHeading:nth-of-type(2)", { opacity: [0, 1], y: [32, 0] }, { delay: 0.35, duration: 0.7 });
    animate(".moreBtn", { opacity: [0, 1], scale: [0.72, 1] }, { delay: 0.55, ...springy });
}

function setupPageMotion() {
    if (reduceMotion) return;

    const cursor = document.querySelector(".motionCursor");
    const videoWrap = document.querySelector(".videoWrap");
    let ticking = false;

    document.addEventListener("pointermove", (event) => {
        if (!cursor || event.pointerType === "touch") return;
        cursor.style.opacity = "1";
        animate(cursor, { x: event.clientX, y: event.clientY }, { type: "spring", stiffness: 520, damping: 36, mass: 0.35 });
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
            if (videoWrap && scrollY < innerHeight * 1.2) {
                videoWrap.style.transform = `translate3d(0, ${scrollY * 0.18}px, 0) scale(${1 + scrollY * 0.00008})`;
            }
            ticking = false;
        });
    }, { passive: true });

    inView(".kineticBand", (band) => {
        animate(band, { opacity: [0, 1], scale: [0.94, 1], rotate: [-5, -2] }, { type: "spring", stiffness: 170, damping: 18 });
    }, { amount: 0.2 });
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

function initMotion() {
    animateHero();
    requestAnimationFrame(() => {
        setupSpringInteractions();
        setupScrollReveals();
        setupAnimeDrawing();
        setupPageMotion();
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMotion, { once: true });
} else {
    initMotion();
}
