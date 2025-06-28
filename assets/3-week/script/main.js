const contentWapper = document.querySelector(".content-container");
const controlBox = document.querySelector(".control-box");

const buttons = Array.from(controlBox.querySelectorAll(".page-button"));
const contents = Array.from(contentWapper.querySelectorAll(".content"));
const currentPageSpan = controlBox.querySelector(
  "span[aria-label='current-page']"
);
const maxPageSpan = controlBox.querySelector("span[aria-label='max-page']");

// 전역 변수 및 상수
// 배이지 이동값 저장 배열
const pageArray = 352;

// 버튼 클릭 저장 Value
let clickCount = 0;

// 페이지 마지막 값(페이지 추가시 변경 값)
const maxPageNum = 3;

window.addEventListener("DOMContentLoaded", () => {
  maxPageSpan.textContent = maxPageNum;
  setTabIndex();
  removeTabIndex();
});

// 버튼 연결
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.target.closest(".page-button");

    if (target.getAttribute("aria-label") == "이전 탐색") {
      // console.log("befor Page button clicked");
      --clickCount;
    } else {
      // console.log("next page button clicked");
      ++clickCount;
    }
    console.log(clickCount);

    // 페이지 스위칭
    switchingPage();

    // 현재페이지 부여
    currentPagenumPush();

    // 텝 인덱스 추가
    setTabIndex();

    // 현재 페이지 텝 인덱스 제거
    removeTabIndex();
  });
});

// 페이지 변경 함수
function switchingPage() {
  const showPageArrayValue = maxPageNum - 1;

  if (clickCount === -1) {
    clickCount = showPageArrayValue;
    pushpageValue(pageArray * clickCount);
  }
  if (clickCount === maxPageNum) {
    clickCount = 0;
    pushpageValue(pageArray * clickCount);
  } else {
    pushpageValue(pageArray * clickCount);
  }
}

// 배열값 페이지 속성 부여 function
function pushpageValue(value) {
  contentWapper.style.setProperty("transform", `translateX(-${value}px)`);
}

// 현재 페이지 숫자 부여 Function
function currentPagenumPush() {
  let a = clickCount;
  currentPageSpan.textContent = a + 1;
}

// 탭인덱스
function setTabIndex() {
  for (let content of contents) {
    content.setAttribute("tabindex", "-1");
  }
}

// 텝인덱스 제거
function removeTabIndex() {
  const arr = [
    [0, 1],
    [2, 3],
    [4, 5],
  ];
  for (let i = 0; i < 2; i++) {
    contents[arr[clickCount][i]].removeAttribute("tabindex");
  }
}
