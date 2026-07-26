(() => {
    "use strict";

    const SELECTORS = {
        header: "header",
        mobileMenuButton: ".menu_hamburger",
        mobileSubMenu: ".mobileSubMenu",
        hamburgerLines: ".f_hamburger, .s_hamburger, .t_hamburger",

        typedText: "#typedText",

        videoContainer: ".videoContainer",
        videoSlides: ".slideVideo",
        prevButton: ".prevBtn",
        nextButton: ".nextBtn",
        prevNumber: ".prevBtn_topText",
        prevTitle: ".prevBtn_botText",
        nextNumber: ".nextBtn_topText",
        nextTitle: ".nextBtn_botText",

        moreButton: ".mainVisual .moreBtn",
        portfolioSection: "#portfolio",

        contentWrap: "#contentWrap",
        topButton: ".topBtn",

        tabs: ".tab",
        gallery: ".gallery",

        imageModal: ".imgPopUpWindow",
        imageModalClose: ".imgPopUpWindow .closeBtn",
        popupImage: "#popupImg"
    };

    const BREAKPOINTS = {
        desktop: 1200,
        mobile: 575
    };

    const VIDEO_INFO = [
        { number: "01", title: "Diary" },
        { number: "02", title: "Laptop" },
        { number: "03", title: "Beer with LP" },
        { number: "04", title: "Cherry blossom" }
    ];

    const TYPED_WORDS = [
        "Javascript",
        "CSS",
        "Photoshop",
        "Figma"
    ];

    const PORTFOLIO_ITEMS_PER_PAGE = 8;

    const state = {
        currentSlide: 1,
        originalSlideCount: 0,
        isSliderAnimating: false,
        lastFocusedElement: null,
        typingTimer: null,
        resizeTimer: null,

        currentPortfolioCategory: "all",
        currentPortfolioPage: 1
    };

    document.addEventListener("DOMContentLoaded", init);


    /* ==================================================
       01. Initialization
    ================================================== */

    function init() {
        initResponsiveLayout();
        initMobileMenu();
        initTypedText();
        initVideoSlider();
        initScrollEvents();
        initPortfolio();
        initImageModal();
    }


    /* ==================================================
       02. Helpers
    ================================================== */

    function getElement(selector, parent = document) {
        return parent.querySelector(selector);
    }

    function getElements(selector, parent = document) {
        return [...parent.querySelectorAll(selector)];
    }

    function prefersReducedMotion() {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }

    function scrollToElement(element, offset = 0) {
        if (!element) {
            return;
        }

        const top =
            element.getBoundingClientRect().top +
            window.scrollY -
            offset;

        window.scrollTo({
            top,
            behavior: prefersReducedMotion() ? "auto" : "smooth"
        });
    }

    function setElementVisible(element, visible, displayValue = "") {
        if (!element) {
            return;
        }

        element.style.display = visible ? displayValue : "none";
        element.setAttribute("aria-hidden", String(!visible));
    }

    function getFocusableElements(container) {
        if (!container) {
            return [];
        }

        return getElements(
            [
                "a[href]",
                "button:not([disabled])",
                "input:not([disabled])",
                "select:not([disabled])",
                "textarea:not([disabled])",
                '[tabindex]:not([tabindex="-1"])'
            ].join(","),
            container
        ).filter((element) => !element.hidden && element.offsetParent !== null);
    }


    /* ==================================================
       03. Responsive Layout
    ================================================== */

    function initResponsiveLayout() {
        updateResponsiveLayout();

        window.addEventListener("resize", () => {
            window.clearTimeout(state.resizeTimer);

            state.resizeTimer = window.setTimeout(() => {
                updateResponsiveLayout();
            }, 150);
        });
    }

    function updateResponsiveLayout() {
        const width = window.innerWidth;

        if (width >= BREAKPOINTS.desktop) {
            resetMobileMenu();
        }

        /*
         * 이전 jQuery 파일에서 JS 애니메이션으로 조정하던
         * 이전/다음 버튼 위치는 현재 common.css의 반응형 규칙이 담당한다.
         */
    }


    /* ==================================================
       04. Mobile Menu
    ================================================== */

    function initMobileMenu() {
        const menuButton = getElement(SELECTORS.mobileMenuButton);
        const mobileSubMenu = getElement(SELECTORS.mobileSubMenu);

        if (!menuButton || !mobileSubMenu) {
            return;
        }

        menuButton.setAttribute("aria-expanded", "false");

        if (!mobileSubMenu.id) {
            mobileSubMenu.id = "mobileSubMenu";
        }

        menuButton.setAttribute("aria-controls", mobileSubMenu.id);
        mobileSubMenu.setAttribute("aria-hidden", "true");

        menuButton.addEventListener("click", () => {
            const isOpen = menuButton.getAttribute("aria-expanded") === "true";
            setMobileMenuState(!isOpen);
        });

        mobileSubMenu.addEventListener("click", (event) => {
            if (event.target.closest("a")) {
                resetMobileMenu();
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                resetMobileMenu();
            }
        });

        document.addEventListener("click", (event) => {
            const clickedInsideMenu =
                menuButton.contains(event.target) ||
                mobileSubMenu.contains(event.target);

            if (!clickedInsideMenu) {
                resetMobileMenu();
            }
        });
    }

    function setMobileMenuState(isOpen) {
        const menuButton = getElement(SELECTORS.mobileMenuButton);
        const mobileSubMenu = getElement(SELECTORS.mobileSubMenu);
        const hamburgerLines = getElements(SELECTORS.hamburgerLines);

        if (!menuButton || !mobileSubMenu) {
            return;
        }

        menuButton.classList.toggle("active", isOpen);
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute(
            "aria-label",
            isOpen ? "메뉴 닫기" : "메뉴 열기"
        );

        hamburgerLines.forEach((line) => {
            line.classList.toggle("active", isOpen);
        });

        mobileSubMenu.style.display = isOpen ? "block" : "none";
        mobileSubMenu.setAttribute("aria-hidden", String(!isOpen));
    }

    function resetMobileMenu() {
        setMobileMenuState(false);
    }


    /* ==================================================
       05. Typed Text
    ================================================== */

    function initTypedText() {
        const typedText = getElement(SELECTORS.typedText);

        if (!typedText) {
            return;
        }

        typedText.setAttribute("aria-hidden", "true");

        if (prefersReducedMotion()) {
            typedText.textContent = TYPED_WORDS[0];
            return;
        }

        let wordIndex = 0;
        let characterIndex = 0;
        let isDeleting = false;
        let pauseCount = 0;

        function type() {
            const currentWord = TYPED_WORDS[wordIndex];

            if (!isDeleting) {
                characterIndex += 1;
            } else {
                characterIndex -= 1;
            }

            typedText.textContent = currentWord.slice(0, characterIndex);

            let delay = isDeleting ? 55 : 100;

            if (!isDeleting && characterIndex === currentWord.length) {
                pauseCount += 1;
                delay = 1000;

                if (pauseCount >= 1) {
                    isDeleting = true;
                    pauseCount = 0;
                }
            }

            if (isDeleting && characterIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % TYPED_WORDS.length;
                delay = 250;
            }

            state.typingTimer = window.setTimeout(type, delay);
        }

        type();
    }


    /* ==================================================
       06. Video Slider
    ================================================== */

    function initVideoSlider() {
        const container = getElement(SELECTORS.videoContainer);
        const originalSlides = getElements(SELECTORS.videoSlides);
        const prevButton = getElement(SELECTORS.prevButton);
        const nextButton = getElement(SELECTORS.nextButton);

        if (!container || originalSlides.length === 0) {
            return;
        }

        state.originalSlideCount = originalSlides.length;

        /*
         * 무한 슬라이드를 위해 마지막 슬라이드를 맨 앞에,
         * 첫 번째 슬라이드를 맨 뒤에 복제한다.
         * 실제 첫 슬라이드는 복제본 때문에 인덱스 1에서 시작한다.
         */
        const firstClone = originalSlides[0].cloneNode(true);
        const lastClone = originalSlides[originalSlides.length - 1].cloneNode(true);

        firstClone.dataset.clone = "first";
        lastClone.dataset.clone = "last";
        firstClone.setAttribute("aria-hidden", "true");
        lastClone.setAttribute("aria-hidden", "true");

        container.prepend(lastClone);
        container.append(firstClone);

        state.currentSlide = 1;
        setSliderPosition(false);
        updateVideoSliderState();

        prevButton?.addEventListener("click", () => {
            moveVideoSlider(-1);
        });

        nextButton?.addEventListener("click", () => {
            moveVideoSlider(1);
        });

        prevButton?.setAttribute("aria-label", "이전 배경 영상 보기");
        nextButton?.setAttribute("aria-label", "다음 배경 영상 보기");

        container.addEventListener("transitionend", handleSliderTransitionEnd);
    }

    function moveVideoSlider(direction) {
        if (state.isSliderAnimating || state.originalSlideCount <= 1) {
            return;
        }

        state.isSliderAnimating = true;
        state.currentSlide += direction;

        setSliderPosition(true);
        updateVideoSliderState();

        if (prefersReducedMotion()) {
            handleSliderTransitionEnd();
        }
    }

    function setSliderPosition(animate = true) {
        const container = getElement(SELECTORS.videoContainer);

        if (!container) {
            return;
        }

        container.style.transition = animate ? "" : "none";
        container.style.transform =
            `translateX(-${state.currentSlide * 100}%)`;

        if (!animate) {
            /* 강제 리플로우 후 기존 CSS transition을 복구한다. */
            void container.offsetWidth;
            container.style.transition = "";
        }
    }

    function handleSliderTransitionEnd(event) {
        const container = getElement(SELECTORS.videoContainer);

        if (!container) {
            return;
        }

        if (event && event.target !== container) {
            return;
        }

        if (state.currentSlide === 0) {
            state.currentSlide = state.originalSlideCount;
            setSliderPosition(false);
        } else if (state.currentSlide === state.originalSlideCount + 1) {
            state.currentSlide = 1;
            setSliderPosition(false);
        }

        state.isSliderAnimating = false;
        updateVideoSliderState();
    }

    function getLogicalSlideIndex() {
        return (
            state.currentSlide - 1 + state.originalSlideCount
        ) % state.originalSlideCount;
    }

    function updateVideoSliderState() {
        const slides = getElements(SELECTORS.videoSlides);
        const logicalIndex = getLogicalSlideIndex();

        slides.forEach((slide, physicalIndex) => {
            const isClone = Boolean(slide.dataset.clone);
            const isCurrentPhysicalSlide = physicalIndex === state.currentSlide;
            const video = getElement("video", slide);

            slide.setAttribute(
                "aria-hidden",
                String(isClone || !isCurrentPhysicalSlide)
            );

            if (!video) {
                return;
            }

            video.setAttribute("aria-hidden", "true");
            video.setAttribute("tabindex", "-1");

            if (isCurrentPhysicalSlide && !prefersReducedMotion()) {
                const playPromise = video.play();

                if (playPromise instanceof Promise) {
                    playPromise.catch(() => {
                        /* 자동 재생이 차단되어도 다른 기능은 유지한다. */
                    });
                }
            } else {
                video.pause();
            }
        });

        updateVideoNavigation(state.originalSlideCount, logicalIndex);
    }


    function updateVideoNavigation(totalSlides, currentIndex = 0) {
        const prevIndex =
            (currentIndex - 1 + totalSlides) % totalSlides;

        const nextIndex =
            (currentIndex + 1) % totalSlides;

        const prevInfo = VIDEO_INFO[prevIndex] ?? {
            number: String(prevIndex + 1).padStart(2, "0"),
            title: `영상 ${prevIndex + 1}`
        };

        const nextInfo = VIDEO_INFO[nextIndex] ?? {
            number: String(nextIndex + 1).padStart(2, "0"),
            title: `영상 ${nextIndex + 1}`
        };

        const prevNumber = getElement(SELECTORS.prevNumber);
        const prevTitle = getElement(SELECTORS.prevTitle);
        const nextNumber = getElement(SELECTORS.nextNumber);
        const nextTitle = getElement(SELECTORS.nextTitle);

        if (prevNumber) {
            prevNumber.textContent = prevInfo.number;
        }

        if (prevTitle) {
            prevTitle.textContent = prevInfo.title;
        }

        if (nextNumber) {
            nextNumber.textContent = nextInfo.number;
        }

        if (nextTitle) {
            nextTitle.textContent = nextInfo.title;
        }
    }


    /* ==================================================
       07. Scroll Events
    ================================================== */

    function initScrollEvents() {
        const header = getElement(SELECTORS.header);
        const contentWrap = getElement(SELECTORS.contentWrap);
        const topButton = getElement(SELECTORS.topButton);
        const moreButton = getElement(SELECTORS.moreButton);
        const portfolioSection = getElement(SELECTORS.portfolioSection);

        let ticking = false;

        function updateScrollState() {
            const scrollTop = window.scrollY;

            header?.classList.toggle("sticky", scrollTop > 1);

            if (topButton) {
                const threshold = contentWrap
                    ? contentWrap.offsetTop - 200
                    : 500;

                topButton.style.display =
                    scrollTop > threshold ? "block" : "none";
            }

            ticking = false;
        }

        window.addEventListener(
            "scroll",
            () => {
                if (!ticking) {
                    window.requestAnimationFrame(updateScrollState);
                    ticking = true;
                }
            },
            { passive: true }
        );

        topButton?.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: prefersReducedMotion() ? "auto" : "smooth"
            });
        });

        topButton?.setAttribute("aria-label", "페이지 맨 위로 이동");

        moreButton?.addEventListener("click", (event) => {
            event.preventDefault();
            scrollToElement(portfolioSection, 100);
        });

        updateScrollState();
    }


    /* ==================================================
       08. Portfolio
    ================================================== */

    function initPortfolio() {
        const gallery = getElement(SELECTORS.gallery);
        const tabs = getElements(SELECTORS.tabs);

        if (!gallery) {
            return;
        }

        const data = Array.isArray(window.portfolioData)
            ? window.portfolioData
            : [];

        shuffleArray(data);

        gallery.replaceChildren();

        data.forEach((item) => {
            gallery.append(createPortfolioCard(item));
        });

        preparePortfolioTabs(tabs);

        const initialTab =
            tabs.find((tab) => tab.classList.contains("active")) ??
            tabs[0];

        if (initialTab) {
            selectPortfolioTab(initialTab, tabs);
        } else {
            filterPortfolioItems("uiux");
        }

        gallery.addEventListener("click", (event) => {
            const modalButton = event.target.closest(
                '.card button[data-portfolio-modal="true"]'
            );

            if (!modalButton) {
                return;
            }

            openImageModal(
                modalButton.dataset.imageUrl,
                modalButton.dataset.imageAlt
            );
        });

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));

                [array[i], array[j]] = [array[j], array[i]];
            }

            return array;
        }
    }

    function preparePortfolioTabs(tabs) {
        const tabList = tabs[0]?.parentElement;

        tabList?.setAttribute("role", "tablist");

        tabs.forEach((tab, index) => {
            tab.setAttribute("role", "tab");
            tab.setAttribute(
                "aria-selected",
                String(tab.classList.contains("active"))
            );

            if (!tab.id) {
                tab.id = `portfolioTab${index + 1}`;
            }

            tab.addEventListener("click", () => {
                selectPortfolioTab(tab, tabs);
            });

            tab.addEventListener("keydown", (event) => {
                const currentIndex = tabs.indexOf(tab);
                let nextIndex = currentIndex;

                if (event.key === "ArrowRight") {
                    nextIndex = (currentIndex + 1) % tabs.length;
                } else if (event.key === "ArrowLeft") {
                    nextIndex =
                        (currentIndex - 1 + tabs.length) % tabs.length;
                } else if (event.key === "Home") {
                    nextIndex = 0;
                } else if (event.key === "End") {
                    nextIndex = tabs.length - 1;
                } else {
                    return;
                }

                event.preventDefault();
                tabs[nextIndex].focus();
                selectPortfolioTab(tabs[nextIndex], tabs);
            });
        });
    }

    function selectPortfolioTab(selectedTab, tabs) {
        const category = selectedTab.dataset.category ?? "all";
        
        state.currentPortfolioPage = 1;

        tabs.forEach((tab) => {
            const isSelected = tab === selectedTab;

            tab.classList.toggle("active", isSelected);
            tab.setAttribute("aria-selected", String(isSelected));
            tab.setAttribute("tabindex", isSelected ? "0" : "-1");
        });

        filterPortfolioItems(category);
    }

    function createPortfolioCard(item) {
        const card = document.createElement("article");
        const description = document.createElement("div");

        card.className = "card";
        card.dataset.category = item.category ?? "";

        description.className = "description";
        description.textContent =
            item.description ?? item.title ?? "포트폴리오";

        const image = document.createElement("span");

        image.className = "card-image";
        image.style.backgroundImage =
            `url("${String(item.thumbnail ?? "").replaceAll('"', '\\"')}")`;

        if (item.category === "homepage") {
            const link = document.createElement("a");

            link.href = item.url ?? "#";
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.setAttribute(
                "aria-label",
                `${description.textContent} 새 창에서 보기`
            );

            image.setAttribute("aria-hidden", "true");
            link.append(image);
            card.append(link, description);

            return card;
        }

        const button = document.createElement("button");

        button.type = "button";
        button.dataset.portfolioModal = "true";
        button.dataset.imageUrl = item.image ?? "";
        button.dataset.imageAlt =
            item.alt ?? description.textContent;
        button.setAttribute(
            "aria-label",
            `${description.textContent} 상세 이미지 보기`
        );

        image.setAttribute("aria-hidden", "true");
        button.append(image);
        card.append(button, description);

        return card;
    }

    function filterPortfolioItems(category) {
        const gallery = getElement(SELECTORS.gallery);
        const cards = getElements(".card", gallery);

        if (!gallery) {
            return;
        }

        state.currentPortfolioCategory = category;

        const filteredCards = cards.filter((card) => {
            return (
                category === "all" ||
                card.dataset.category === category
            );
        });

        const totalPages = Math.ceil(
            filteredCards.length / PORTFOLIO_ITEMS_PER_PAGE
        );

        if (
            totalPages > 0 &&
            state.currentPortfolioPage > totalPages
        ) {
            state.currentPortfolioPage = totalPages;
        }

        const startIndex =
            (state.currentPortfolioPage - 1) *
            PORTFOLIO_ITEMS_PER_PAGE;

        const endIndex =
            startIndex + PORTFOLIO_ITEMS_PER_PAGE;

        cards.forEach((card) => {
            card.classList.add("hidden");
        });

        filteredCards
            .slice(startIndex, endIndex)
            .forEach((card) => {
                card.classList.remove("hidden");
            });

        renderPortfolioPagination(totalPages);
    }

    function renderPortfolioPagination(totalPages) {
        const gallery = getElement(SELECTORS.gallery);

        if (!gallery) {
            return;
        }

        let pagination = getElement(".portfolio-pagination");

        if (!pagination) {
            pagination = document.createElement("nav");
            pagination.className = "portfolio-pagination";
            pagination.setAttribute(
                "aria-label",
                "포트폴리오 페이지"
            );

            gallery.insertAdjacentElement(
                "afterend",
                pagination
            );

            pagination.addEventListener("click", (event) => {
                const button = event.target.closest("[data-page]");

                if (!button || button.disabled) {
                    return;
                }

                const page = Number(button.dataset.page);

                if (
                    !Number.isInteger(page) ||
                    page < 1 ||
                    page === state.currentPortfolioPage
                ) {
                    return;
                }

                state.currentPortfolioPage = page;

                filterPortfolioItems(
                    state.currentPortfolioCategory
                );

                scrollToElement(gallery, 140);
            });
        }

        pagination.replaceChildren();

        if (totalPages <= 1) {
            pagination.hidden = true;
            return;
        }

        pagination.hidden = false;

        pagination.append(
            createPaginationButton(
                "이전",
                state.currentPortfolioPage - 1,
                state.currentPortfolioPage === 1
            )
        );

        for (let page = 1; page <= totalPages; page += 1) {
            const button = createPaginationButton(
                String(page),
                page,
                false
            );

            if (page === state.currentPortfolioPage) {
                button.classList.add("active");
                button.setAttribute("aria-current", "page");
            }

            pagination.append(button);
        }

        pagination.append(
            createPaginationButton(
                "다음",
                state.currentPortfolioPage + 1,
                state.currentPortfolioPage === totalPages
            )
        );
    }

    function createPaginationButton(label, page, disabled) {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "pagination-button";
        button.textContent = label;
        button.dataset.page = String(page);
        button.disabled = disabled;

        return button;
    }


    /* ==================================================
       09. Image Modal
    ================================================== */

    function initImageModal() {
        const modal = getElement(SELECTORS.imageModal);
        const closeButton = getElement(SELECTORS.imageModalClose);

        if (!modal) {
            return;
        }

        modal.setAttribute("role", "dialog");
        modal.setAttribute("aria-modal", "true");
        modal.setAttribute("aria-hidden", "true");

        closeButton?.setAttribute("aria-label", "상세 이미지 닫기");

        closeButton?.addEventListener("click", closeImageModal);

        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                closeImageModal();
            }
        });

        modal.addEventListener("keydown", trapModalFocus);

        document.addEventListener("keydown", (event) => {
            if (
                event.key === "Escape" &&
                modal.classList.contains("active")
            ) {
                closeImageModal();
            }
        });
    }

    function openImageModal(imageUrl, imageAlt = "포트폴리오 상세 이미지") {
        const modal = getElement(SELECTORS.imageModal);
        const popupImage = getElement(SELECTORS.popupImage);
        const closeButton = getElement(SELECTORS.imageModalClose);

        if (!modal || !popupImage || !imageUrl) {
            return;
        }

        state.lastFocusedElement = document.activeElement;

        popupImage.src = imageUrl;
        popupImage.alt = imageAlt;

        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");

        window.requestAnimationFrame(() => {
            closeButton?.focus();
        });
    }

    function closeImageModal() {
        const modal = getElement(SELECTORS.imageModal);
        const popupImage = getElement(SELECTORS.popupImage);

        if (!modal) {
            return;
        }

        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");

        if (popupImage) {
            popupImage.removeAttribute("src");
            popupImage.alt = "";
        }

        if (
            state.lastFocusedElement instanceof HTMLElement &&
            document.contains(state.lastFocusedElement)
        ) {
            state.lastFocusedElement.focus();
        }

        state.lastFocusedElement = null;
    }

    function trapModalFocus(event) {
        if (event.key !== "Tab") {
            return;
        }

        const modal = getElement(SELECTORS.imageModal);
        const focusableElements = getFocusableElements(modal);

        if (focusableElements.length === 0) {
            event.preventDefault();
            return;
        }

        const firstElement = focusableElements[0];
        const lastElement =
            focusableElements[focusableElements.length - 1];

        if (
            event.shiftKey &&
            document.activeElement === firstElement
        ) {
            event.preventDefault();
            lastElement.focus();
        } else if (
            !event.shiftKey &&
            document.activeElement === lastElement
        ) {
            event.preventDefault();
            firstElement.focus();
        }
    }
})();
