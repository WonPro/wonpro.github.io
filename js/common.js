$(document).ready(function () {

    /* =====================
        1. 초기 실행
    ===================== */
    let imageData = [
        { thumbnailUrl: '/img/homepage/cs.jpg', description: '(주)CS 회사 홈페이지 제작', category: 'homepage', url: 'http://ucsit.co.kr/' },
        { thumbnailUrl: '/img/homepage/jeus.jpg', description: '주식회사 제우스 회사 홈페이지 제작', category: 'homepage', url: 'https://www.jeuscorp.com/' },
        { thumbnailUrl: '/img/homepage/lscompany.jpg', description: '엘에스컴퍼니 회사 홈페이지 제작', category: 'homepage', url: 'https://www.xn--9t4b19cu7p32a.com/' },
        { thumbnailUrl: '/img/homepage/jdc.jpg', description: 'JDC 서브페이지 유지보수', category: 'homepage', url: 'https://www.jdcenter.com/main.cs' },
        { thumbnailUrl: '/img/homepage/jejuma.jpg', description: '제주마등록관리 정보시스템 홈페이지 제작', category: 'homepage', url: 'https://jejuhorse.jeju.go.kr/' },
        { thumbnailUrl: '/img/homepage/chagoji.jpg', description: '차고지 증명제 홈페이지 제작', category: 'homepage', url: 'https://parking.jeju.go.kr/online/proof.cs' },
        { thumbnailUrl: '/img/homepage/meercop.jpg', description: '미어캅 홈페이지 제작', category: 'homepage', url: 'https://www.meercop.com/' },
        { thumbnailUrl: '/img/detail/가을동화감귤밭_배너.jpg', description: '가을동화감귤밭', category: 'detail', url: '/img/detail/가을동화감귤밭.jpg' },
        { thumbnailUrl: '/img/detail/더카트인통영_배너.jpg', description: '더카트인통영', category: 'detail', url: '/img/detail/더카트인통영.jpg' },
        { thumbnailUrl: '/img/detail/레전드히어로즈_배너.jpg', description: '레전드히어로즈', category: 'detail', url: '/img/detail/레전드히어로즈.jpg' },
        { thumbnailUrl: '/img/detail/매미보트투어_배너.jpg', description: '매미보트투어', category: 'detail', url: '/img/detail/매미보트투어.jpg' },
        { thumbnailUrl: '/img/detail/붕어섬생태공원_배너.jpg', description: '붕어섬생태공원', category: 'detail', url: '/img/detail/붕어섬생태공원.jpg' },
        { thumbnailUrl: '/img/detail/산양큰엉곶_배너.jpg', description: '산양큰엉곶', category: 'detail', url: '/img/detail/산양큰엉곶.jpg' },
        { thumbnailUrl: '/img/detail/석예원본초족욕_배너.jpg', description: '석예원본초족욕', category: 'detail', url: '/img/detail/석예원본초족욕.jpg' },
        { thumbnailUrl: '/img/detail/스카이라인루지통영_배너.jpg', description: '스카이라인루지통영', category: 'detail', url: '/img/detail/스카이라인루지통영.jpg' },
        { thumbnailUrl: '/img/detail/오창온천로하스파_배너.jpg', description: '오창온천로하스파', category: 'detail', url: '/img/detail/오창온천로하스파.jpg' },
        { thumbnailUrl: '/img/detail/우도유람선_배너.jpg', description: '우도유람선', category: 'detail', url: '/img/detail/우도유람선.jpg' },
        { thumbnailUrl: '/img/detail/이스케이프탑_배너.jpg', description: '이스케이프탑', category: 'detail', url: '/img/detail/이스케이프탑.jpg' },
        { thumbnailUrl: '/img/detail/일타스키렌탈샵_배너.jpg', description: '일타스키렌탈샵', category: 'detail', url: '/img/detail/일타스키렌탈샵.jpg' },
        { thumbnailUrl: '/img/detail/쿵스롤러장_배너.jpg', description: '쿵스롤러장', category: 'detail', url: '/img/detail/쿵스롤러장.jpg' },
        { thumbnailUrl: '/img/detail/팔공별빛랜드_배너.jpg', description: '팔공별빛랜드', category: 'detail', url: '/img/detail/팔공별빛랜드.jpg' },
        { thumbnailUrl: '/img/detail/하이스키렌탈샵_배너.jpg', description: '하이스키렌탈샵', category: 'detail', url: '/img/detail/하이스키렌탈샵.jpg' },
        { thumbnailUrl: '/img/detail/홍천VIP렌탈샵_배너.jpg', description: '홍천VIP렌탈샵', category: 'detail', url: '/img/detail/홍천VIP렌탈샵.jpg' },
        { thumbnailUrl: '/img/etc/세계자동차&피아노박물관관악제.jpg', description: '세계자동차&피아노박물관 관악제', category: 'etc', url: '/img/etc/세계자동차&피아노박물관관악제.jpg' },
        { thumbnailUrl: '/img/etc/경북투어패스추석맞이이벤트.jpg', description: '경북투어패스추석맞이이벤트', category: 'etc', url: '/img/etc/경북투어패스추석맞이이벤트.jpg' },
        { thumbnailUrl: '/img/etc/경북투어패스모바일배너.jpg', description: '경북투어패스모바일배너', category: 'etc', url: '/img/etc/경북투어패스모바일배너.jpg' },
        { thumbnailUrl: '/img/etc/경북투어패스가맹점모집_배너.jpg', description: '경북투어패스가맹점모집', category: 'etc', url: '/img/etc/경북투어패스가맹점모집.jpg' },
        { thumbnailUrl: '/img/uiux/delivery-thumbnail.jpg', description: '배송 서비스 앱', category: 'uiux', url: '/img/uiux/delivery.jpg' },
        { thumbnailUrl: '/img/uiux/esports-thumbnail.jpg', description: '게임 커뮤니티 웹', category: 'uiux', url: '/img/uiux/esports.jpg' },
        { thumbnailUrl: '/img/uiux/sellerconnect-thumbnail.jpg', description: '공동구매 매칭 플랫폼', category: 'uiux', url: '/img/uiux/sellerconnect.jpg' },
        { thumbnailUrl: '/img/uiux/shop-thumbnail.jpg', description: '배달 플랫폼 관리 솔루션 앱', category: 'uiux', url: '/img/uiux/shop.jpg' },
    ];

    initLayout();
    initTypedText();
    initVideoSlider();
    initPopup();
    initScrollEvents();
    initPortfolio();

    /* =====================
        2. Layout / Responsive
    ===================== */
    function initLayout() {
        browserWidth();
        $(window).on('resize', browserWidth);
    }

    function browserWidth() {
        let winWidth = $(window).width();

        if (winWidth > 575) {
            if (winWidth > 1199) {
                setPageBtnStyle('pc');
                resetHamburger();
            } else {
                setPageBtnStyle('tablet');
            }
        } else {
            setPageBtnStyle('mobile');
        }
    }

    function setPageBtnStyle(type) {
        const pos = {
            pc: { top: '50%', side: '8.33%' },
            tablet: { top: '70%', side: '10%' },
            mobile: { top: '90%', side: '10%' }
        };

        $(".prevBtn_topText, .prevBtn_botText")
            .stop().animate({ top: pos[type].top, left: pos[type].side }, 300);

        $(".nextBtn_topText, .nextBtn_botText")
            .stop().animate({ top: pos[type].top, right: pos[type].side }, 300);
    }

    function resetHamburger() {
        $("#topBar .menu_hamburger").removeClass("active");
        $(".f_hamburger, .s_hamburger, .t_hamburger").removeClass("active");
        $(".mobileSubMenu").slideUp();
    }

    /* =====================
        3. Typed Text
    ===================== */
    function initTypedText() {
        const typedText = $('#typedText');
        const strings = ["Javascript", "CSS", "Photoshop", "Figma"];
        let str = 0, char = 0, del = false;

        function typing() {
            typedText.text(strings[str].substring(0, del ? --char : ++char));

            if (char === strings[str].length) del = true;
            if (char === 0 && del) {
                del = false;
                str = (str + 1) % strings.length;
            }
            setTimeout(typing, del ? 50 : 100);
        }
        typing();
    }

    /* =====================
        4. Video Slider
    ===================== */
    function initVideoSlider() {
        let idx = 0;
        let total = $('.slideVideo').length;
        let info = [
            { text: "Diary", number: "01" },
            { text: "Laptop", number: "02" },
            { text: "Beer with LP", number: "03" },
            { text: "Cherry blossom", number: "04" }
        ];

        function slide() {
            $('.videoContainer').css('transform', `translateX(${idx * -100}%)`);
            updateBtn();
        }

        function updateBtn() {
            $('.prevBtn_topText').text(info[(idx - 1 + total) % total].number);
            $('.prevBtn_botText').text(info[(idx - 1 + total) % total].text);
            $('.nextBtn_topText').text(info[(idx + 1) % total].number);
            $('.nextBtn_botText').text(info[(idx + 1) % total].text);
        }

        $('.prevBtn').click(() => { idx = (idx - 1 + total) % total; slide(); });
        $('.nextBtn').click(() => { idx = (idx + 1) % total; slide(); });

        slide();
    }    

    /* =====================
        5. Popup
    ===================== */
    function initPopup() {
        function togglePopup(target, scrollLock) {
            $(target).fadeToggle(300);
            if (scrollLock) $("body").toggleClass("modal-open");
        }

        $("#loginBtn").click(() => togglePopup("#loginSection", true));
        $("#joinBtn").click(() => togglePopup("#joinSection", true));

        $(".closeBtn, .darkBg").click(function () {
            togglePopup(`#${$(this).closest("section").attr("id")}`, false);
        });
    }

    /* =====================
        6. Scroll Events
    ===================== */
    function initScrollEvents() {
        $(window).scroll(function () {
            $("header").toggleClass("sticky", $(this).scrollTop() > 1);
            $(".topBtn").toggle($(this).scrollTop() > $("#contentWrap").offset().top - 200);
        });

        $(".topBtn").click(() => $("html, body").animate({ scrollTop: 0 }, 500));
    }

    $(".mainVisual .moreBtn").click(function(){
        $("html, body").animate({scrollTop: $("#portfolio").offset().top - 100}, 1000);
    });

    /* =====================
        7. Portfolio
    ===================== */
    function initPortfolio() {

        imageData.forEach(createCard);
        filterItems('homepage');

        $('.tab').click(function () {
            $('.tab').removeClass('active');
            $(this).addClass('active');
            filterItems($(this).data('category'));
        });

        $('.gallery').on('click', '.card', function () {
            if ($(this).data('category') === 'homepage') return;
            $('body').addClass('modal-open');
            $('.imgPopUpWindow').addClass('active');
            $('#popupImg').attr('src', $(this).find('.card-image').data('url'));
        });

        $('.imgPopUpWindow .closeBtn').click(closeModal);
    }

    function createCard(image) {
        let $card = $('<div class="card"/>').attr('data-category', image.category);
        let $desc = $('<div class="description"/>').text(image.description);

        let $img = $('<div class="card-image"/>')
            .css('background-image', `url(${image.thumbnailUrl})`)
            .attr('data-url', image.url);

        if (image.category === 'homepage') {
            $img = $('<a/>', { href: image.url, target: '_blank' }).append($img);
        }

        $('.gallery').append($card.append($img, $desc));
    }

    function filterItems(category) {
        $('.card').each(function () {
            $(this).toggleClass(
                'hidden',
                !(category === 'all' || $(this).data('category') === category)
            );
        });
    }

    function closeModal() {
        $('body').removeClass('modal-open');
        $('.imgPopUpWindow').removeClass('active');
    }

});
