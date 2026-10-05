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
        features: ["홈페이지 전체 페이지 반응형 퍼블리싱"],
        process: null,
        role: [
            "반응형 퍼블리싱"
        ],
        skills: ["HTML", "CSS", "jQuery"],
        alt: "(주)CS 회사 홈페이지 제작 화면",
        featured: false
    },

    {
        id: 2,
        category: "homepage",
        type: "link",
        title: "주식회사 제우스 회사 홈페이지",
        description: "주식회사 제우스 회사 홈페이지 제작",
        overview: "(주)제우스 회사 홈페이지 제작",
        thumbnail: "./img/homepage/jeus.jpg",
        image: "",
        url: "https://www.jeuscorp.com/",
        year: "",
        client: "주식회사 제우스",
        features: ["홈페이지 전체 페이지 반응형 퍼블리싱"],
        process: null,
        role: [
            "반응형 퍼블리싱"
        ],
        skills: ["HTML", "CSS", "jQuery"],
        alt: "주식회사 제우스 회사 홈페이지 제작 화면",
        featured: false
    },

    {
        id: 3,
        category: "homepage",
        type: "link",
        title: "엘에스컴퍼니 회사 홈페이지",
        description: "엘에스컴퍼니 회사 홈페이지 제작",
        overview: "(주)엘에스컴퍼니 회사 홈페이지 제작",
        thumbnail: "./img/homepage/lscompany.jpg",
        image: "",
        url: "https://www.xn--9t4b19cu7p32a.com/",
        year: "",
        client: "엘에스컴퍼니",
        features: ["홈페이지 전체 페이지 반응형 퍼블리싱"],
        process: null,
        role: [
            "홈페이지 디자인 참여",
            "반응형 퍼블리싱"
        ],
        skills: ["HTML", "CSS", "jQuery", "GSAP"],
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
        features: ["게시글 등록 및 수정", "배너 변경", "메인 히어로 이미지 제작 및 변경", "홈페이지 내 콘텐츠 변경 및 제작"],
        process: null,
        role: [
            "서브페이지 디자인 수정",
            "서브페이지 퍼블리싱"
        ],
        skills: ["HTML", "CSS", "jQuery"],
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
        features: ["전체 페이지 퍼블리싱"],
        process: null,
        year: "",
        client: "",
        role: [
            "퍼블리싱"
        ],
        skills: ["HTML", "CSS", "jQuery"],
        alt: "제주마등록관리 정보시스템 홈페이지 제작 화면",
        featured: false
    },

    {
        id: 6,
        category: "homepage",
        type: "link",
        title: "차고지 증명제 홈페이지",
        description: "차고지 증명제 홈페이지 제작",
        overview: "차고지 증명제 홈페이지 유지보수",
        thumbnail: "./img/homepage/chagoji.jpg",
        image: "",
        url: "https://parking.jeju.go.kr/online/proof.cs",
        features: ["게시글 등록 및 수정", "배너 변경", "메인 히어로 이미지 제작 및 변경", "홈페이지 내 콘텐츠 변경 및 제작"],
        process: null,
        year: "",
        client: "",
        role: [
            "서브페이지 디자인 수정",
            "서브페이지 퍼블리싱"
        ],
        skills: ["HTML", "CSS", "jQuery"],
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
        features: ["홈페이지 전체 페이지 반응형 퍼블리싱"],
        process: null,
        role: [
            "반응형 퍼블리싱"
        ],
        skills: ["HTML", "CSS", "jQuery"],
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
        overview: "육지에서 제주로 화물을 보내고, 골프장이나 호텔로 짐을 바로 배송할 수 있도록 구성한 배송 서비스 앱입니다.",
        features: ["편도·왕복 및 배송지 3개 이상 여부 선택", "출발지·목적지 지정", "배송기사와의 소통", "골프장 추천", "배송 현황 바로 확인"],
        process: "서비스 기획이 마련되지 않은 상태에서 배송 프로세스와 골프장 연계 방식을 정리해야 했습니다. 서비스 프로세스 구축과 기획을 전담하고, 이를 화면·기능 설계와 UI/UX 디자인으로 구체화했습니다.",
        thumbnail: "./img/uiux/delivery-thumbnail.jpg",
        image: "./img/uiux/delivery.jpg",
        url: "",
        year: "",
        client: "",
        role: [
            "서비스 기획",
            "화면 설계",
            "기능 설계",
            "UI/UX 디자인"
        ],
        skills: ["Figma"],
        alt: "배송 서비스 모바일 앱 UI UX 디자인",
        featured: false
    },

    {
        id: 29,
        category: "uiux",
        type: "image",
        title: "게임 커뮤니티 웹",
        description: "게임 커뮤니티 웹 UI/UX 디자인",
        overview: "리그 오브 레전드 대회 라이브 스트리밍 커뮤니티입니다. 경기 시청과 함께 출전 챔피언의 빌드, 승률과 예측에 참고할 수 있는 경기 데이터를 수치로 확인할 수 있도록 구성한 솔루션입니다.",
        features: ["대회 라이브 스트리밍 시청 화면", "출전 챔피언의 빌드 확인 화면", "승률과 경기 예측에 참고할 수 있는 수치 데이터 표시"],
        process: null,
        thumbnail: "./img/uiux/esports-thumbnail.jpg",
        image: "./img/uiux/esports.jpg",
        url: "",
        year: "",
        client: "",
        role: [
            "서비스 기획",
            "화면 설계",
            "기능 설계",
            "UI/UX 디자인"
        ],
        skills: ["Figma"],
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
        overview: "배달앱을 사용하는 소상공인을 위한 통합 관리 솔루션입니다. 쿠팡이츠·배달의민족 등 여러 배달 플랫폼의 관리자 업무를 한곳에서 처리하고, 메뉴 추가·변경, 가격 변경과 물품 구매까지 할 수 있도록 구성한 서비스입니다.",
        features: ["전체 화면의 기능 추가에 따른 UI/UX 디자인과 디자인 리뉴얼", "배달 플랫폼 통합 관리 화면", "메뉴 추가·변경 및 가격 변경 화면", "물품 구매 화면"],
        process: null,
        thumbnail: "./img/uiux/shop-thumbnail.jpg",
        image: "./img/uiux/shop.jpg",
        url: "",
        year: "",
        client: "",
        role: [
            "기존 서비스의 기능 추가에 따른 UI/UX 디자인",
            "기존 화면 디자인 리뉴얼"
        ],
        skills: ["Figma"],
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
];// Shared project records: the same project appears in development and design filters.
const groupBuying = window.portfolioData.find((item) => item.id === 30);
Object.assign(groupBuying, {
    categories: ['frontend', 'uiux'], featured: true,
    title: '공동구매 플랫폼 UI 설계 및 프론트엔드 구현',
    description: '공동구매 플랫폼 UI 설계 및 프론트엔드 구현',
    overview: '브랜드와 인플루언서를 연결하는 공동구매 플랫폼입니다. 브랜드는 자사 제품과 인플루언서의 매칭을 요청하고, 판매로 발생한 주문의 배송과 CS를 담당합니다. 인플루언서는 제안된 제품 중 판매할 제품을 선택해 판매를 요청하고, 수락 후 판매 활동에 따른 수수료를 정산받습니다. 마스터 관리자는 별도 관리자 사이트에서 전체 흐름을 관리합니다.',
    role: ['서비스 역제안 및 제안서 작성', '서비스 기획·화면 설계·기능 설계', 'UI/UX 및 추가 UI 컴포넌트 디자인 전담', 'LLM을 활용한 Vue.js 기반 프론트엔드 전반 구현 및 백엔드 개발자와 협업'],
    skills: ['Vue 3', 'JavaScript', 'Vue Router', 'Vuex', 'Axios', 'SCSS', 'Tailwind CSS', 'Vite', 'Figma', 'Photoshop'],
    features: ['브랜드·인플루언서 두 회원 유형의 회원가입·로그인 화면', '상품 검색·목록·상세 화면', '브랜드의 제품·인플루언서 매칭 요청 화면', '인플루언서의 광고제품 선택·판매 요청 및 공동구매 신청 화면', '주문·판매 수수료 정산 관리 화면', '회원 유형별 업무와 매칭·판매·주문·정산 흐름을 관리하는 마스터 관리자 사이트 구현', '계정 관리, 문의·공지사항 화면', '버튼·입력창·모달·상품 카드 등 공통 UI 컴포넌트', 'Vue Router 기반 페이지 이동과 일부 경로 접근 제어', 'Vuex 기반 데이터 관리', 'SCSS·Tailwind CSS를 활용한 스타일과 반응형 구성'],
    process: '클라이언트에게 서비스를 역제안하는 프로젝트로, 제안서 작성부터 화면 설계와 기능 설계까지 혼자 담당했습니다. 개발 과정에서 추가로 필요한 UI 컴포넌트 디자인도 전담했습니다. 프론트엔드는 ChatGPT 등 LLM을 활용해 구현하고 백엔드 개발자와 협업했습니다. 실제 테스트 데이터가 준비되기 전에는 임시 JSON 데이터를 만들어 데이터 표시와 UI 동작을 확인했습니다.',
    verification: '모든 기능의 서버 연동, 실제 운영, 테스트 완료 여부는 확인되지 않았습니다.',
    imageCaption: '공동구매 플랫폼 SELLERCONNECT의 기존 UI 디자인 자료입니다. 상품 목록·상세, 마이페이지, 공동구매 신청 화면을 보여줍니다.'
});
window.portfolioData.unshift(groupBuying);
window.portfolioData = window.portfolioData.filter((item, index, items) => items.findIndex((other) => other.id === item.id) === index);
window.portfolioData.splice(1, 0, {
    id: 44, category: 'frontend', title: '가상화폐 거래 웹서비스 프론트엔드 구현',
    description: '가상화폐 거래 웹서비스 프론트엔드 구현',
    overview: '실제 코인시장 데이터를 활용해 가상으로 코인을 매매하는 거래 시뮬레이션 웹서비스입니다.',
    role: ['바이브 코딩을 활용한 Vue.js 기반 프론트엔드 화면 구현'],
    skills: ['Vue.js', 'Chart.js', 'Tailwind CSS'],
    features: ['코인 목록과 차트', '매수·매도 주문창', '보유 자산', '거래 내역'],
    process: '바이브 코딩을 활용해 거래 화면을 구현했습니다. 외부 코인시장 API 연결은 백엔드 개발자가 담당했습니다.',
    verification: 'Vue 버전과 상태 관리 도구는 현재 자료에서 확인되지 않았습니다.',
    thumbnail: '', image: '', url: '', featured: true
});
window.portfolioData.splice(1, 0,
    {
        id: 45,
        category: 'frontend',
        categories: ['frontend', 'uiux', 'homepage'],
        title: '클린온 청소서비스 웹사이트 UI 설계 및 프론트엔드 구현',
        description: '클린온 청소서비스 웹사이트 UI 설계 및 프론트엔드 구현',
        overview: '청소가 필요한 누구나 서비스를 살펴보고 예약·상담을 신청할 수 있는 클린온(CLEAN ON) 청소서비스 웹사이트입니다.',
        role: ['화면 설계', '기능 설계', 'UI 디자인', '반응형 퍼블리싱을 포함한 웹 개발 전반 수행'],
        skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'AOS', 'Google Forms'],
        features: ['브랜드 메인 화면과 서비스 소개 섹션', 'AOS 기반 스크롤 등장 효과', 'Google Forms를 iframe으로 삽입한 예약·상담 신청 화면'],
        process: '서버 운영에 익숙하지 않은 클라이언트도 신청 내용을 쉽게 확인하고 관리할 수 있도록 운영 흐름을 기획했습니다. Google Forms로 청소 신청을 받고 Gmail로 예약 알림을 확인하며, Google 스프레드시트에서 고객별 의뢰 내용과 처리 결과를 데이터로 관리할 수 있도록 구현했습니다.',
        verification: '첨부 소스에서 확인한 화면과 동작을 설명합니다. 신청은 외부 Google Forms 삽입 방식이며, 별도 예약 서버·관리자 시스템 구현이나 실제 접수 완료를 주장하지 않습니다. Slick 파일은 포함되어 있지만 실행 초기화가 확인되지 않아 구현 기술에서 제외했습니다.',
        thumbnail: './img/frontend/cleanon-desktop.jpg',
        image: './img/frontend/cleanon-desktop.jpg',
        screenshots: [{ src: './img/frontend/cleanon-google-form.jpg', alt: '클린온 Google Forms 예약·상담 신청 화면의 신청자 성함, 연락처, 주소, 청소 요청일 및 서비스 선택 항목' }],
        imageCaption: '제공된 allclean 소스를 로컬 브라우저에서 실행해 캡처한 실제 메인 화면입니다.',
        alt: '클린온 청소서비스 사이트의 브랜드 소개와 예약하기 버튼이 있는 메인 화면',
        url: ''
    },
    {
        id: 46,
        category: 'frontend',
        title: '먹깨비 신문고 민원 관리 UI 및 프론트엔드 구현',
        description: '먹깨비 신문고 민원 관리 UI 및 프론트엔드 구현',
        overview: '먹깨비 앱을 사용하는 배달원의 민원 접수를 위한 웹서비스입니다.',
        role: ['UI 디자인, 반응형 화면 구성, 프론트엔드 구현 전반 수행'],
        skills: ['Vue 3', 'JavaScript', 'Vue Router 4', 'Vuex 4', 'Tailwind CSS', 'Vue CLI'],
        features: ['민원 게시판 목록 및 표시 개수 설정', '민원 작성·조회·수정·삭제와 관리자 답변', 'Vue를 활용한 민원 작성의 비동기 처리와 화면 갱신'],
        process: 'Vue를 활용해 페이지 전체를 새로고침하지 않고 민원 작성과 목록 갱신이 이루어지도록 구현했습니다.',
        verification: '제공된 소스는 dummyData 기반으로 동작합니다. 로그인·회원가입과 민원·답변 변경은 브라우저 메모리에서 처리하며, 새로고침 이후 데이터 보존이나 서버 인증·권한 검증·백엔드 API 연동 완료를 의미하지 않습니다.',
        coverText: '민원 목록 · 작성 · 답변 UI',
        thumbnail: '', image: '', url: ''
    }
);
const mukkebiProject = window.portfolioData.find((item) => item.id === 46);
Object.assign(mukkebiProject, {
    thumbnail: './img/frontend/mukkebi-desktop.jpg',
    image: './img/frontend/mukkebi-desktop.jpg',
    imageCaption: '제공된 먹깨비 신문고 소스를 빌드해 로컬에서 실행한 민원 목록 화면입니다. 화면 데이터는 원본의 더미 데이터입니다.',
    alt: '먹깨비 신문고의 민원 목록, 답변 상태, 페이지 이동 및 새 요청 작성 화면'
});
window.portfolioData.forEach((item) => {
    if (['detail', 'etc'].includes(item.category)) {
        item.skills = ['Photoshop', 'Illustrator', 'Figma'];
    }
});
window.portfolioData.splice(1, 0, {
    id: 47,
    category: 'frontend',
    categories: ['frontend', 'uiux'],
    title: '모두의 발주 UI 디자인 및 프론트엔드 구현',
    description: '모두의 발주 UI 디자인 및 프론트엔드 구현',
    overview: '매장 운영자가 발주 신청·배송 현황·포인트 및 거래 내역을 확인할 수 있도록 구성한 웹서비스 프론트엔드.',
    role: ['UI 디자인과 프론트엔드 구현 전반 직접 수행', '반응형 화면과 사용자 입력·페이지 이동 구성'],
    skills: ['Vue 3', 'Vue Router 4', 'Tailwind CSS', 'Vite', 'Chart.js', 'vue-chartjs', 'v-calendar'],
    features: ['로그인·회원가입·가입 대기 화면', '잔액·발주 현황·최근 내역을 표시하는 대시보드', 'Chart.js 기반 월별 발주 금액 차트와 달력', '품목 선택, 수량 입력, 배송지 선택·추가와 발주 확인 모달', '수량·배송지·포인트 잔액 검증과 발주 완료 화면', '월·품목·배송 상태별 발주 내역 필터', '포인트 충전·출금 UI와 거래 내역 필터', '프로필·배송지 관리 화면', 'Vue composable 기반 사용자·품목·주문·지갑·거래 상태 관리', '거래 내역의 localStorage 저장·불러오기'],
    process: '화면에 필요한 정보를 관리하고, 품목 가격과 수량에 따라 발주 금액이 자동으로 계산되도록 구현했습니다. 수량·배송지·잔액을 확인한 뒤 발주 확인창과 완료 화면으로 연결했습니다. 월별 주문 금액은 차트로 보여주고, 거래 내역은 브라우저에 저장하도록 구성했습니다.',
    verification: '제공된 소스를 빌드해 테스트 계정으로 대시보드와 발주 입력 모달을 실제로 확인했습니다. 원본의 로그인·주문·지갑은 테스트 데이터와 로컬 상태 기반이며, 실제 서버 인증·주문 접수·결제·충전·출금 연동 완료를 의미하지 않습니다. 발주 완료 화면 이동과 발주 내역의 서버 저장은 구분합니다.',
    thumbnail: './img/frontend/mobal-dashboard.jpg',
    image: './img/frontend/mobal-dashboard.jpg',
    imageCaption: '제공된 모두의 발주 소스를 빌드해 로컬 브라우저에서 캡처한 대시보드입니다. 금액·주문·거래 정보는 원본 테스트 데이터입니다.',
    alt: '모두의 발주 대시보드의 지갑 잔액, 발주 현황, 달력과 월별 발주 추이 차트',
    screenshots: [{src: './img/frontend/mobal-order.jpg', alt: '모두의 발주 품목 수량, 배송지 선택, 총액과 포인트 잔액을 확인하는 발주 입력 모달', caption: '실제 로컬 실행 화면: 발주 입력 모달. 테스트 데이터 기반 화면입니다.'}],
    url: ''
});
