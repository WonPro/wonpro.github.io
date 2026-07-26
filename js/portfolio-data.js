"use strict";

/**
 Portfolio Data
 -------------------------------------------------------
 포트폴리오 콘텐츠만 관리하는 데이터 파일입니다.
 category 권장값:
 - web       : 웹사이트 / 웹 퍼블리싱
 - uiux      : UI/UX 디자인
 - marketing : SNS / 마케팅 콘텐츠
 - detail    : 쇼핑몰 상세페이지
 - graphic   : 배너 / 포스터 / 그래픽 디자인
  type 권장값:
 - image : 이미지 확대 모달
 - link  : 외부 웹사이트 이동
 */
window.portfolioData = [
    {
        id: 1,
        category: "homepage",
        type: "link",
        title: "(주)CS 회사 홈페이지",
        description: "(주)CS 회사 홈페이지 제작",
        thumbnail: "../img/homepage/cs.jpg",
        image: "",
        url: "http://ucsit.co.kr/",
        year: "",
        client: "(주)CS",
        role: [
            "홈페이지 제작"
        ],
        skills: [],
        alt: "(주)CS 회사 홈페이지 제작 화면",
        featured: false
    },

    {
        id: 2,
        category: "homepage",
        type: "link",
        title: "주식회사 제우스 회사 홈페이지",
        description: "주식회사 제우스 회사 홈페이지 제작",
        thumbnail: "./img/homepage/jeus.jpg",
        image: "",
        url: "https://www.jeuscorp.com/",
        year: "",
        client: "주식회사 제우스",
        role: [
            "홈페이지 제작"
        ],
        skills: [],
        alt: "주식회사 제우스 회사 홈페이지 제작 화면",
        featured: false
    },

    {
        id: 3,
        category: "homepage",
        type: "link",
        title: "엘에스컴퍼니 회사 홈페이지",
        description: "엘에스컴퍼니 회사 홈페이지 제작",
        thumbnail: "./img/homepage/lscompany.jpg",
        image: "",
        url: "https://www.xn--9t4b19cu7p32a.com/",
        year: "",
        client: "엘에스컴퍼니",
        role: [
            "홈페이지 제작"
        ],
        skills: [],
        alt: "엘에스컴퍼니 회사 홈페이지 제작 화면",
        featured: false
    },

    {
        id: 4,
        category: "homepage",
        type: "link",
        title: "JDC 서브페이지",
        description: "JDC 서브페이지 유지보수",
        thumbnail: "./img/homepage/jdc.jpg",
        image: "",
        url: "https://www.jdcenter.com/main.cs",
        year: "",
        client: "JDC",
        role: [
            "서브페이지 유지보수"
        ],
        skills: [],
        alt: "JDC 서브페이지 유지보수 화면",
        featured: false
    },

    {
        id: 5,
        category: "homepage",
        type: "link",
        title: "제주마등록관리 정보시스템",
        description: "제주마등록관리 정보시스템 홈페이지 제작",
        thumbnail: "./img/homepage/jejuma.jpg",
        image: "",
        url: "https://jejuhorse.jeju.go.kr/",
        year: "",
        client: "",
        role: [
            "홈페이지 제작"
        ],
        skills: [],
        alt: "제주마등록관리 정보시스템 홈페이지 제작 화면",
        featured: false
    },

    {
        id: 6,
        category: "homepage",
        type: "link",
        title: "차고지 증명제 홈페이지",
        description: "차고지 증명제 홈페이지 제작",
        thumbnail: "./img/homepage/chagoji.jpg",
        image: "",
        url: "https://parking.jeju.go.kr/online/proof.cs",
        year: "",
        client: "",
        role: [
            "홈페이지 제작"
        ],
        skills: [],
        alt: "차고지 증명제 홈페이지 제작 화면",
        featured: false
    },

    {
        id: 7,
        category: "homepage",
        type: "link",
        title: "미어캅 홈페이지",
        description: "미어캅 홈페이지 제작",
        thumbnail: "./img/homepage/meercop.jpg",
        image: "",
        url: "https://www.meercop.com/",
        year: "",
        client: "미어캅",
        role: [
            "홈페이지 제작"
        ],
        skills: [],
        alt: "미어캅 홈페이지 제작 화면",
        featured: false
    },

    {
        id: 8,
        category: "detail",
        type: "image",
        title: "가을동화감귤밭",
        description: "가을동화감귤밭 상세페이지 디자인",
        thumbnail: "./img/detail/가을동화감귤밭_배너.jpg",
        image: "./img/detail/가을동화감귤밭.jpg",
        url: "",
        year: "",
        client: "가을동화감귤밭",
        role: [
            "상세페이지 디자인"
        ],
        skills: [],
        alt: "가을동화감귤밭 상세페이지 디자인",
        featured: false
    },

    {
        id: 9,
        category: "detail",
        type: "image",
        title: "더카트인통영",
        description: "더카트인통영 상세페이지 디자인",
        thumbnail: "./img/detail/더카트인통영_배너.jpg",
        image: "./img/detail/더카트인통영.jpg",
        url: "",
        year: "",
        client: "더카트인통영",
        role: [
            "상세페이지 디자인"
        ],
        skills: [],
        alt: "더카트인통영 상세페이지 디자인",
        featured: false
    },

    {
        id: 10,
        category: "detail",
        type: "image",
        title: "레전드히어로즈",
        description: "레전드히어로즈 상세페이지 디자인",
        thumbnail: "./img/detail/레전드히어로즈_배너.jpg",
        image: "./img/detail/레전드히어로즈.jpg",
        url: "",
        year: "",
        client: "레전드히어로즈",
        role: [
            "상세페이지 디자인"
        ],
        skills: [],
        alt: "레전드히어로즈 상세페이지 디자인",
        featured: false
    },

    {
        id: 11,
        category: "detail",
        type: "image",
        title: "매미보트투어",
        description: "매미보트투어 상세페이지 디자인",
        thumbnail: "./img/detail/매미보트투어_배너.jpg",
        image: "./img/detail/매미보트투어.jpg",
        url: "",
        year: "",
        client: "매미보트투어",
        role: [
            "상세페이지 디자인"
        ],
        skills: [],
        alt: "매미보트투어 상세페이지 디자인",
        featured: false
    },

    {
        id: 12,
        category: "detail",
        type: "image",
        title: "붕어섬생태공원",
        description: "붕어섬생태공원 상세페이지 디자인",
        thumbnail: "./img/detail/붕어섬생태공원_배너.jpg",
        image: "./img/detail/붕어섬생태공원.jpg",
        url: "",
        year: "",
        client: "붕어섬생태공원",
        role: [
            "상세페이지 디자인"
        ],
        skills: [],
        alt: "붕어섬생태공원 상세페이지 디자인",
        featured: false
    },

    {
        id: 13,
        category: "detail",
        type: "image",
        title: "산양큰엉곶",
        description: "산양큰엉곶 상세페이지 디자인",
        thumbnail: "./img/detail/산양큰엉곶_배너.jpg",
        image: "./img/detail/산양큰엉곶.jpg",
        url: "",
        year: "",
        client: "산양큰엉곶",
        role: [
            "상세페이지 디자인"
        ],
        skills: [],
        alt: "산양큰엉곶 상세페이지 디자인",
        featured: false
    },

    {
        id: 14,
        category: "detail",
        type: "image",
        title: "석예원본초족욕",
        description: "석예원본초족욕 상세페이지 디자인",
        thumbnail: "./img/detail/석예원본초족욕_배너.jpg",
        image: "./img/detail/석예원본초족욕.jpg",
        url: "",
        year: "",
        client: "석예원본초족욕",
        role: [
            "상세페이지 디자인"
        ],
        skills: [],
        alt: "석예원본초족욕 상세페이지 디자인",
        featured: false
    },

    {
        id: 15,
        category: "detail",
        type: "image",
        title: "스카이라인루지통영",
        description: "스카이라인루지통영 상세페이지 디자인",
        thumbnail: "./img/detail/스카이라인루지통영_배너.jpg",
        image: "./img/detail/스카이라인루지통영.jpg",
        url: "",
        year: "",
        client: "스카이라인루지통영",
        role: [
            "상세페이지 디자인"
        ],
        skills: [],
        alt: "스카이라인루지통영 상세페이지 디자인",
        featured: false
    },

    {
        id: 16,
        category: "detail",
        type: "image",
        title: "오창온천로하스파",
        description: "오창온천로하스파 상세페이지 디자인",
        thumbnail: "./img/detail/오창온천로하스파_배너.jpg",
        image: "./img/detail/오창온천로하스파.jpg",
        url: "",
        year: "",
        client: "오창온천로하스파",
        role: [
            "상세페이지 디자인"
        ],
        skills: [],
        alt: "오창온천로하스파 상세페이지 디자인",
        featured: false
    },

    {
        id: 17,
        category: "detail",
        type: "image",
        title: "우도유람선",
        description: "우도유람선 상세페이지 디자인",
        thumbnail: "./img/detail/우도유람선_배너.jpg",
        image: "./img/detail/우도유람선.jpg",
        url: "",
        year: "",
        client: "우도유람선",
        role: [
            "상세페이지 디자인"
        ],
        skills: [],
        alt: "우도유람선 상세페이지 디자인",
        featured: false
    },

    {
        id: 18,
        category: "detail",
        type: "image",
        title: "이스케이프탑",
        description: "이스케이프탑 상세페이지 디자인",
        thumbnail: "./img/detail/이스케이프탑_배너.jpg",
        image: "./img/detail/이스케이프탑.jpg",
        url: "",
        year: "",
        client: "이스케이프탑",
        role: [
            "상세페이지 디자인"
        ],
        skills: [],
        alt: "이스케이프탑 상세페이지 디자인",
        featured: false
    },

    {
        id: 19,
        category: "detail",
        type: "image",
        title: "일타스키렌탈샵",
        description: "일타스키렌탈샵 상세페이지 디자인",
        thumbnail: "./img/detail/일타스키렌탈샵_배너.jpg",
        image: "./img/detail/일타스키렌탈샵.jpg",
        url: "",
        year: "",
        client: "일타스키렌탈샵",
        role: [
            "상세페이지 디자인"
        ],
        skills: [],
        alt: "일타스키렌탈샵 상세페이지 디자인",
        featured: false
    },

    {
        id: 20,
        category: "detail",
        type: "image",
        title: "쿵스롤러장",
        description: "쿵스롤러장 상세페이지 디자인",
        thumbnail: "./img/detail/쿵스롤러장_배너.jpg",
        image: "./img/detail/쿵스롤러장.jpg",
        url: "",
        year: "",
        client: "쿵스롤러장",
        role: [
            "상세페이지 디자인"
        ],
        skills: [],
        alt: "쿵스롤러장 상세페이지 디자인",
        featured: false
    },

    {
        id: 21,
        category: "detail",
        type: "image",
        title: "팔공별빛랜드",
        description: "팔공별빛랜드 상세페이지 디자인",
        thumbnail: "./img/detail/팔공별빛랜드_배너.jpg",
        image: "./img/detail/팔공별빛랜드.jpg",
        url: "",
        year: "",
        client: "팔공별빛랜드",
        role: [
            "상세페이지 디자인"
        ],
        skills: [],
        alt: "팔공별빛랜드 상세페이지 디자인",
        featured: false
    },

    {
        id: 22,
        category: "detail",
        type: "image",
        title: "하이스키렌탈샵",
        description: "하이스키렌탈샵 상세페이지 디자인",
        thumbnail: "./img/detail/하이스키렌탈샵_배너.jpg",
        image: "./img/detail/하이스키렌탈샵.jpg",
        url: "",
        year: "",
        client: "하이스키렌탈샵",
        role: [
            "상세페이지 디자인"
        ],
        skills: [],
        alt: "하이스키렌탈샵 상세페이지 디자인",
        featured: false
    },

    {
        id: 23,
        category: "detail",
        type: "image",
        title: "홍천 VIP 렌탈샵",
        description: "홍천 VIP 렌탈샵 상세페이지 디자인",
        thumbnail: "./img/detail/홍천VIP렌탈샵_배너.jpg",
        image: "./img/detail/홍천VIP렌탈샵.jpg",
        url: "",
        year: "",
        client: "홍천 VIP 렌탈샵",
        role: [
            "상세페이지 디자인"
        ],
        skills: [],
        alt: "홍천 VIP 렌탈샵 상세페이지 디자인",
        featured: false
    },

    {
        id: 24,
        category: "etc",
        type: "image",
        title: "세계자동차&피아노박물관 관악제",
        description: "세계자동차&피아노박물관 관악제 홍보 디자인",
        thumbnail: "./img/etc/세계자동차&피아노박물관관악제.jpg",
        image: "./img/etc/세계자동차&피아노박물관관악제.jpg",
        url: "",
        year: "",
        client: "세계자동차&피아노박물관",
        role: [
            "홍보 콘텐츠 디자인"
        ],
        skills: [],
        alt: "세계자동차&피아노박물관 관악제 홍보 디자인",
        featured: false
    },

    {
        id: 25,
        category: "etc",
        type: "image",
        title: "경북투어패스 추석맞이 이벤트",
        description: "경북투어패스 추석맞이 이벤트 디자인",
        thumbnail: "./img/etc/경북투어패스추석맞이이벤트.jpg",
        image: "./img/etc/경북투어패스추석맞이이벤트.jpg",
        url: "",
        year: "",
        client: "경북투어패스",
        role: [
            "이벤트 콘텐츠 디자인"
        ],
        skills: [],
        alt: "경북투어패스 추석맞이 이벤트 디자인",
        featured: false
    },

    {
        id: 26,
        category: "etc",
        type: "image",
        title: "경북투어패스 모바일 배너",
        description: "경북투어패스 모바일 배너 디자인",
        thumbnail: "./img/etc/경북투어패스모바일배너.jpg",
        image: "./img/etc/경북투어패스모바일배너.jpg",
        url: "",
        year: "",
        client: "경북투어패스",
        role: [
            "모바일 배너 디자인"
        ],
        skills: [],
        alt: "경북투어패스 모바일 배너 디자인",
        featured: false
    },

    {
        id: 27,
        category: "etc",
        type: "image",
        title: "경북투어패스 가맹점 모집",
        description: "경북투어패스 가맹점 모집 배너 디자인",
        thumbnail: "./img/etc/경북투어패스가맹점모집_배너.jpg",
        image: "./img/etc/경북투어패스가맹점모집.jpg",
        url: "",
        year: "",
        client: "경북투어패스",
        role: [
            "배너 디자인"
        ],
        skills: [],
        alt: "경북투어패스 가맹점 모집 배너 디자인",
        featured: false
    },

    {
        id: 28,
        category: "uiux",
        type: "image",
        title: "배송 서비스 앱",
        description: "배송 서비스 모바일 앱 UI/UX 디자인",
        thumbnail: "./img/uiux/delivery-thumbnail.jpg",
        image: "./img/uiux/delivery.jpg",
        url: "",
        year: "",
        client: "",
        role: [
            "UI/UX 디자인"
        ],
        skills: [],
        alt: "배송 서비스 모바일 앱 UI UX 디자인",
        featured: false
    },

    {
        id: 29,
        category: "uiux",
        type: "image",
        title: "게임 커뮤니티 웹",
        description: "게임 커뮤니티 웹 UI/UX 디자인",
        thumbnail: "./img/uiux/esports-thumbnail.jpg",
        image: "./img/uiux/esports.jpg",
        url: "",
        year: "",
        client: "",
        role: [
            "UI/UX 디자인"
        ],
        skills: [],
        alt: "게임 커뮤니티 웹 UI UX 디자인",
        featured: false
    },

    {
        id: 30,
        category: "uiux",
        type: "image",
        title: "공동구매 매칭 플랫폼",
        description: "공동구매 매칭 플랫폼 UI/UX 디자인",
        thumbnail: "./img/uiux/sellerconnect-thumbnail.jpg",
        image: "./img/uiux/sellerconnect.jpg",
        url: "",
        year: "",
        client: "",
        role: [
            "UI/UX 디자인"
        ],
        skills: [],
        alt: "공동구매 매칭 플랫폼 UI UX 디자인",
        featured: false
    },

    {
        id: 31,
        category: "uiux",
        type: "image",
        title: "배달 플랫폼 관리 솔루션 앱",
        description: "배달 플랫폼 관리 솔루션 모바일 앱 UI/UX 디자인",
        thumbnail: "./img/uiux/shop-thumbnail.jpg",
        image: "./img/uiux/shop.jpg",
        url: "",
        year: "",
        client: "",
        role: [
            "UI/UX 디자인"
        ],
        skills: [],
        alt: "배달 플랫폼 관리 솔루션 모바일 앱 UI UX 디자인",
        featured: false
    },

	{
        id: 32,
        category: "detail",
        type: "image",
        title: "신혼,입주가구 3종세트",
        description: "신혼,입주가구 3종패키지 상세페이지 디자인",
        thumbnail: "./img/detail/3종세트_배너.jpg",
        image: "./img/detail/3종세트.jpg",
        url: "",
        year: "",
        client: "가구점",
        role: [
            "상세페이지 디자인"
        ],
        skills: [],
        alt: "가구 3종세트 상세페이지 디자인",
        featured: false
    },


	{
        id: 33,
        category: "detail",
        type: "image",
        title: "패브릭 침대 상세페이지",
        description: "패브릭 원목침대 상세페이지 디자인",
        thumbnail: "./img/detail/패브릭B원목침대_배너.jpg",
        image: "./img/detail/패브릭B원목침대.jpg",
        url: "",
        year: "",
        client: "가구점",
        role: [
            "상세페이지 디자인"
        ],
        skills: [],
        alt: "가구 패브릭B원목침대 상세페이지 디자인",
        featured: false
    },

	{
        id: 34,
        category: "etc",
        type: "image",
        title: "신상 소파 소개",
        description: "신상아쿠아릭소파 홍보용 인스타 게시글 디자인",
        thumbnail: "./img/etc/신상아쿠아릭소파_배너.jpg",
        image: "./img/etc/신상아쿠아릭소파.jpg",
        url: "",
        year: "",
        client: "가구점",
        role: [
            "인스타 게시글 디자인"
        ],
        skills: [],
        alt: "신상아쿠아릭소파 인스타 게시글 디자인",
        featured: false
    },
	
	{
        id: 35,
        category: "etc",
        type: "image",
        title: "배송 후기 홍보",
        description: "실제 가구 모습 및 배송 후기 홍보용 인스타 게시글 디자인",
        thumbnail: "./img/etc/오늘의공간_배너.jpg",
        image: "./img/etc/오늘의공간.jpg",
        url: "",
        year: "",
        client: "가구점",
        role: [
            "인스타 게시글 디자인"
        ],
        skills: [],
        alt: "배송후기 인스타 게시글 디자인",
        featured: false
    },
	
	{
        id: 36,
        category: "etc",
        type: "image",
        title: "패키지특가 홍보",
        description: "패키지특가 홍보용 인스타 게시글 디자인",
        thumbnail: "./img/etc/패키지특가_배너.jpg",
        image: "./img/etc/패키지특가.jpg",
        url: "",
        year: "",
        client: "가구점",
        role: [
            "인스타 게시글 디자인"
        ],
        skills: [],
        alt: "패키지특가 인스타 게시글 디자인",
        featured: false
    },
	
	{
        id: 37,
        category: "etc",
        type: "image",
        title: "휴양지 대신 호텔침대",
        description: "호텔침대 구매전환 및 홍보용 인스타 게시글 디자인",
        thumbnail: "./img/etc/휴양지대신호텔침대_배너.jpg",
        image: "./img/etc/휴양지대신호텔침대.jpg",
        url: "",
        year: "",
        client: "가구점",
        role: [
            "인스타 게시글 디자인"
        ],
        skills: [],
        alt: "휴양지대신호텔침대 인스타 게시글 디자인",
        featured: false
    },
	
	{
        id: 38,
        category: "etc",
        type: "image",
        title: "인스타 스토리 가구 홍보",
        description: "신규 상품 홍보용 인스타 스토리 디자인",
        thumbnail: "./img/etc/260629_스토리.jpg",
        image: "./img/etc/260629_스토리.jpg",
        url: "",
        year: "",
        client: "가구점",
        role: [
            "인스타 스토리 디자인"
        ],
        skills: [],
        alt: "신규 상품 인스타 스토리 디자인",
        featured: false
    },
	
	{
        id: 39,
        category: "etc",
        type: "image",
        title: "인스타 스토리 가구 홍보",
        description: "신규 상품 홍보용 인스타 스토리 디자인",
        thumbnail: "./img/etc/260703_스토리.jpg",
        image: "./img/etc/260703_스토리.jpg",
        url: "",
        year: "",
        client: "가구점",
        role: [
            "인스타 스토리 디자인"
        ],
        skills: [],
        alt: "신규 상품 인스타 스토리 디자인",
        featured: false
    },
	
	{
        id: 40,
        category: "etc",
        type: "image",
        title: "인스타 스토리 가구 홍보",
        description: "상품 홍보용 인스타 스토리 디자인",
        thumbnail: "./img/etc/260704_스토리.jpg",
        image: "./img/etc/260704_스토리.jpg",
        url: "",
        year: "",
        client: "가구점",
        role: [
            "인스타 스토리 디자인"
        ],
        skills: [],
        alt: "상품 홍보 인스타 스토리 디자인",
        featured: false
    },
	
	{
        id: 41,
        category: "etc",
        type: "image",
        title: "인스타 스토리 매장 홍보",
        description: "매장 홍보용 인스타 스토리 디자인",
        thumbnail: "./img/etc/260711_스토리.jpg",
        image: "./img/etc/260711_스토리.jpg",
        url: "",
        year: "",
        client: "가구점",
        role: [
            "인스타 스토리 디자인"
        ],
        skills: [],
        alt: "매장 홍보 인스타 스토리 디자인",
        featured: false
    },
	
	{
        id: 42,
        category: "etc",
        type: "image",
        title: "인스타 스토리 할인 홍보",
        description: "매장 할인 홍보용 인스타 스토리 디자인",
        thumbnail: "./img/etc/260628_스토리.jpg",
        image: "./img/etc/260628_스토리.jpg",
        url: "",
        year: "",
        client: "가구점",
        role: [
            "인스타 스토리 디자인"
        ],
        skills: [],
        alt: "매장 할인 홍보 인스타 스토리 디자인",
        featured: false
    },
	
	{
        id: 43,
        category: "etc",
        type: "image",
        title: "인스타 스토리 매장 홍보",
        description: "매장 홍보용 인스타 스토리 디자인",
        thumbnail: "./img/etc/260715_스토리.jpg",
        image: "./img/etc/260715_스토리.jpg",
        url: "",
        year: "",
        client: "가구점",
        role: [
            "인스타 스토리 디자인"
        ],
        skills: [],
        alt: "매장 홍보 인스타 스토리 디자인",
        featured: false
    },
];