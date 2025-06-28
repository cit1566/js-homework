# 케러셀 과제를 하며

## 파일 구조

- 프로젝트와 같은 환경에저 제작해보고 싶다는 생각을 가졌기에, 쌤이 제공해주신 폴더 형식대로 과제를 만들어보았습니다.

```bash
.
|-- component.html
|-- img
|   |-- akBg.png
|   |-- akCh.png
|   |-- bgBackground.png
|   |-- bgCaracter.png
|   |-- clnBg.png
|   |-- clnCh.png
|   |-- game-icon.png
|   |-- odinBg.png
|   |-- odinCh.png
|   |-- passBg.png
|   |-- passCh.png
|   |-- tom.png
|   `-- tomcharacter.png
|-- index.html
|-- script
|   `-- main.js
`-- style
    |-- components
    |   `-- carousel.css
    |-- demo.css
    |-- main.css
    `-- theme.css
```

## HTML & CSS

마크업 작업에는 `index.html`과 `component.hmlt`로 구분하였습니다.

- `component`와 `Assembly`를 구분하여 작성을 하니, 구조의 획일화가 쉬웠고 동일한 요소를 여러번 만들 필요가 없어 훨씬 수월하게 마크업을 작성 할 수 있었던것 같습니다.
- CSS작성방식에서도 프로젝트에서 진행했던 방식과 유사한 형태에 익숙해지기 위해서 불편함을 감수하더라도, 각각의 파일들의 역할을 분리하고 구분하여 작성하는 연습을 했습니다.

처음에는 각 파일들에 사용용도와 코드가 분리되어있어 여러번 이동이 필요했기에 불편함을 느꼈지만, 이후 추가작업에서 정리되어있는 코드를 읽을 수 있어 이러한 방식의 사용에 필요성을 느낄 수 있었습니다.

### 1) 버튼 컴포넌트

```html
<section>
  <h2>1. 탐색버튼</h2>
  <button type="button" aria-label="다음 탐색" class="page-button">
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path ... />
    </svg>
  </button>
</section>
```

- 간단한 이미지의 경우, SVG요소를 사용하였습니다.
- 스크린리더가 읽을 필요가 없는 SVG요소에는 `aria-hidden="ture"`를 부여해 주었습니다.

### 2) 타이틀 링크

```html
<h2>2. 타이틀 링크</h2>
<a href="/" class="title" aria-label="추천 게임 바로가기">
  <img src="./img/game-icon.png" alt="게임" width="24" height="24" />
  <span>추천 게임</span>
  <svg
    width="8"
    height="13"
    viewBox="0 0 8 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path ... />
  </svg>
</a>
```

- 앵커태그 내부에는 `<p>`를 사용할 수 없었기에 인라인요소인 `<span>`으로 단락을 구분해주었습니다.
- 전체를 `<a>`로 묶어주었으며, 실제 사용에서는 `<h1>`으로 한번 더 묶어주었습니다.

### 3) 콘텐츠 링크

```html
<section>
  <h2>3. 콘텐츠 링크</h2>
  <div class="content">
    <div class="img-box" aria-hidden="true">
      <span></span>
    </div>
    <div class="content-title" role="heading" aria-level="2">
      크로노 오디세이
    </div>
    <div class="content-text">멈춰 있던 시간이 흐른다</div>
    <div class="content-type">MMORPG</div>
  </div>
</section>
```

- CSS를 어떻게 작성해야할지에 대해 고민하며 마크업을 작성하다보니, 계속 수정이되었던것 같습니다.
- 콘텐츠의 타이틀에 대한 접근성을 고려하여, `aria-level=2`를 부여해주었습니다.

### 마크업과 CSS를 하며 어려웠던 점

게임 이미지의 캐릭터 호버효과의 부여하는 방식을 적용하는 과정에서 많은 어려움이 있었던것 같아요. 처음 제작되었을 때에 부모요소에 `border-raious`를 부여했음에도 불구하고 자식요소였던 캐릭터 이미지가 `position = absolue`의 상태였기에 부모요소의 모서리를 가리는 문제가 있었습니다.

- 가상요소 선택자를 사용해서 CSS의 `background-image`로 대체를 하였고, 가상요소 선택자에 캐릭터를 띄워 문제를 해결했습니다.(정말 간신히 해결한 것 같아요..)
- 자바스크립트 작성 이후에(JS 실력의 이슈로 인해) 페이지가 넘어가야하는 간격을 직접 계산해야했던 문제가 있었습니다. 때문에 `overflow`로 콘텐츠를 덮고있는 요소의 크기가 잘 맞지 않아 콘텐츠가 일부 잘리는 문제로 한동안 기싸움을 좀 했습니다. 하하하...

## JavaScript(본론!!)
대망의 자바스크립트!! 
케러셀 실습에서 작성해보았던 방식을 이용하기 위해 `.content`클래스를 가진 요소의 `left`값을 찾아보았으나,, CSS에서 콘텐츠를 묶는 과정에서 `flex-direaction = row`로 뚝딱 해결한 줄만 알았던 디자인이, 자바스크립트에서 발목을 잡아버렸습니다. 이로서 CSS도 결국 자바스크립트의 목적에 맞게 디자인을 해야할 필요성이 있음을 깨달았습니다.

### 전역 변수
```js
// 전역 변수 및 상수
// 배이지 이동값 저장 배열
const pageArray = 352;

// 버튼 클릭 저장 Value
let clickCount = 0;

// 페이지 마지막 값(페이지 추가시 변경 값)
const maxPageNum = 3;
```
- `pageArray` : 페이지가 넘어가야할 PX값입니다. 이후 Click이 되었을 때에 카운트 값과 곱해져 콘텐츠를 묶고있는 요소 `transform`에 부여될 값입니다. 처음에는 배열값 `[0, 352, 704]` 배열값이었으나, 이후 코드 작성을 하면서 배열이 필요없다는걸 깨달은 후 부랴부랴 상수값으로 변경을 하였습니다.
- `clickCount` : 버튼과 연결하여 유동적으로 움직이는 값입니다. 위 컴포넌트의 모든 동작에 가장 중심이 되는 값으로, 사용자가 넘김 버튼을 누르면 `++`, 이전 버튼을 누르면 `--`의 형태로 동작합니다.

- `maxPageNum` : 이러한 방식의 문제점은 페이지가 추가되었을 경우에 기존에 있었던 코드에서 확장성이 좋지 못하다는 문제점이 있었습니다. 예를 들어 `if문`에 비교기준값을 `3`으로 정해놓았던 페이지에 콘텐츠 추가로 인해 값 `5`로 변경이 되어야 한다면, 위 값들을 모두 수정 해주어야하는 번거로움이 생길 수 있다는 것입니다. 때문에 기준이 되는 비교 상수를 정해놓았습니다. 이후 콘텐츠가 추가된다면, `maxPageNum`상수의 값만을 변경하면 됩니다.

### 버튼 이벤트리스너
```js
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
```
- 이벤트 버블링을 사용하여, 클릭된 요소의 타겟값을 변수로 저장했습니다. `target`의 `aria-label`이 "이전 탐색"인 경우에 `--`, 그 외의 값 `++`로 `clickCount`가 작동됩니다.

### switchingPage()
```js
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
```
현재 페이지가 넘어갈 때에 필요로 한 값은 `0`, `352px`, `704px`입니다. 따라서 첫 페이지의 경우 기본상태이기에 0값, 두번 째 페이지에는 `352px`... 2의 배수로 진행되고 있습니다. 즉 `pageArray`와 `clickCount`의 곲으로 원하는 값을 얻어낼 수 있습니다. 
- `clickCount`가 `-1` 기본 상태에서 뒤로가기를 눌렀을 경우에는 `clickCount`를 2로 변경해줍니다.
- `clickCount`가 `마지막페이지(3)`에 도달 할 경우 `clickCount`를 `0`으로 초기화 해줍니다.
- 위 상황 외의 경우 조건 없이 바로 `pushpageVlaue()`함수에 두 변수의 곲을 인수로 전달하니다.

### 나머지~
```js
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
```
- 하나의 함수는 하나의 작동만을 가지는 것이 좋다는 것을 쌤이 이야기해주신 기억이 있습니다. 너무 세분화하여 나누는 것 또한 코드의 양이 많아지기에 복잡해 질 수 있으나, `function`을 선언하는 것이야말로 주석을 다는 것이라고 알고 있기에 각각의 기능들로 구분지어봤습니다.

## 느낀점 & 회고
> "연습과 실전은 다르다"
> 항상 쌤과 할때면 어떠한 문제도 쉽게 느껴졌으나.. 직접 무언가를 구현해볼 때면 항상 어렵게 느껴지는것 같습니다. 그래서 진짜 실력이 드러나는 것은 스스로 무언가를 구상하고, 작성해볼 때에 확연하게 나타나는 것 같습니다.

기존의 실습에서 진행되었던 케러셀 실습과 유사한 형태였기에 어렵지 않을 것이라 자만하며 과제를 시작했었습니다. 하지만 생각과 다르게 많은 문제들에 어려움을 겼었던것 같아요. 특히 CSS스타일의 작성 과정에서 내부 케러셀 묶음 컴포넌트를 디자인을 `flex`로 하였고, 자바스크립트 코드를 작성하는 과정에서 `left`값을 가져오지 못한다는것을 알아차렸습니다. ㅠㅠ
그래서 다음부터는 실습예제의 CSS 및 마크업 구조도 함께 꼼꼼히 확인하고 공부해봐야겠습니다.

#### 이번주 회고
이번주에 새로 생긴 운동 스터디에 가입했습니다. 평소에도 운동은 꾸준히 하고 있던 터라, 운동 스터디가 생긴것이 너무나 반가운 소식이었습니다. 마음속으로는 "한번 내가 만들어볼까?" 라는 생각도 있었지만 실행력이 좋았다면 이러한 고민도 하지 않았겠죠...? 어찌되었든 지금의 현재 상황에서 최선을 다하며, 하루하루 성장해 나아가는 나의 모습에 충분히 만족하고 있습니다.

