# 1주차 과제

## 목차

- [1. 변수, 상수 작성 과제](#-변수-상수-작성-과제)
- [2. 함수 작성 과제](#-함수-작성-과제)
  - [1) 인사말 메시지](#1-인사말-메시지)
  - [2) 원가 계산](#2-원가-계산)
  - [3) 주류판매 가능 여부](#3-주류-판매-가능-여부)
  - [4) 할인가 계산](#4-할인가-계산)
  - [5) 등급 판단](#5-등급-판단)
  <!-- - [3. 회고 및 느낀점](#) -->

## ✍ 변수, 상수 작성 과제

- 각 항목에 대해 변수나 상수를 선언하고, 알맞은 값을 할당하세요.

<br>
1. 사용자 이름을 저장할 변수를 선언하고 "자신의 이름"을 할당하세요.

```js
const name = "KimDongKyu";
// 이름은 변하지 않기 때문에 상수(const)입니다.
// typeof "KimDongKyu" => 'string' 문자형 타입입니다.
```

<br>
2. "절대 영도(온도의 최저 한계)인 -273.15°C"를 담을 상수를 선언하세요.

```js
const absoluteZero = -273.15;
// 절대 영도(absolute zero)는 변하지 않는 값이기 때문에 상수(const)입니다.
console.log(absoluteZero + "°C");
// 변수에 저장되는 온도값은 숫자로 저장하며, 출력시에 기호를 더해줍니다.
```

<br>
3. "로그인 여부"를 확인하는 불리언 타입 변수을 선언하고 적절한값을 할당하세요.

```js
let loginStatus = true;
// 현제 참(true)이며, 온라인상태를 의미합니다.
```

<br>
4. "사용자 나이" 변수를 선언하고 숫자 값을 할당하세요.

```js
let userAge = 25;
console.log(userAge + "살"); // 25살
```

<br>
5. "상품 가격(예: 39,900원)"을 담는 변수를 작성하세요.

```js
let productPrice = 39_900;
console.log(productPrice.toLocaleString() + "원"); // 39,900원
// value.toLocaleString() 메소드는 숫자형 데이터를 지역 숫자표기법으로 변환하여 문자형을 출력합니다.
```

<br>
6. 웹 페이지의 "배경색"을 담는 상수를 작성하고 적절한 값을 할당하세요.

```js
const webBackgroundColor = "rgb(43, 166, 243)";
console.log(webBackgroundColor); //"rgb(43, 166, 243)"
```

<br>
7. 사용자가 작성한 "댓글 수(예: 12)"를 담는 변수를 선언하고 값을 할당하세요.

```js
let userCommentCount = 293;
console.log("댓글 수 : " + userCommentCount); // "댓글 수 : 293"
```

<br>
8. "현재 페이지 번호(예: 3)"를 담는 변수를 작성하고 적절한 값을 할당하세요.

```js
let currentPageNum = 199;
console.log("p. " + currentPageNum); // p. 199
```

<br>
9. "회원 등급('VIP', '골드', '실버' 중 하나)"을 담는 변수를 작성해보세요.

```js
let membershipLevel = "VIP";
console.log("회원 등급 : " + membershipLevel); // "회원 등급 : VIP"
```

<br>
10. "버튼이 클릭되었는지 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.

```js
let onClickBtn = true;
onConsole.log(clickBtn); //true
```

<br>

---

## ✍ 함수 작성 과제

### 1. 인사말 메시지

- 사용자로부터 이름을 입력받아 인사말을 출력하는 함수.
  | 함수이름 | greetUser |
  | --- | --- |
  | 매개변수 | username |
  | 기능 | 인사말 메시지 "안녕하세요! {이름}님. 좋은 하루되세요!"를 문자열로 반환 |
  | 반환값 타입 | String |
  | 비고 | 함수 선언으로 작성 |

#### 코드 작성

```js
const userName = "김동규";

function greetUser(username) {
  console.log(`안녕하세요! ${username}님. 좋은 하루되세요!`);
}
greetUser(userName); // 안녕하세요! 김동규님. 좋은하루되세요!
```

<br>

### 2. 원가 계산

- 판매가를 입력 받아 원가를 계산하는 함수를 작성합니다.
- 판매가(세후 금액)에서 원가(세전 금액)를 계산하려면 판매가를 "100% + 세금 비율"로 나눠야 합니다.
- 해당 품목의 세금 비율은 3.3%입니다.
  | 함수이름 | calculateOriginalPrice |
  | --- | --- |
  | 매개변수 | priceWithTax |
  | 기능 | 판매 가격에서 세금을 제외한 원가 반환 |
  | 반환값 타입 | Number |
  | 비고 | 함수 표현식으로 작성 |

#### 코드 작성

```js
let salesPrice = 19_990;

function calculateOriginalPrice(saleprice) {
  // 세금의 비율이 3.3% -> 세금 전 금액은 1.033이 됩니다.
  return saleprice * 1.033;
}

console.log(calculateOriginalPrice(salesPrice) + "원"); // 20649.67원
```

<br>

### 3. 주류 판매 가능 여부

- 신분증의 나이를 확인해 주류 구매 가능 여부를 반환하는 함수를 작성합니다.
- 19세 이상 주류 구매가 가능합니다.
  | 함수이름 | canSellAlcohol |
  | --- | --- |
  | 매개변수 | registrationCard |
  | 기능 | 신분증의 나이를 확인해 주류 판매 가능 여부를 불리언 타입으로 반환 |
  | 반환값 타입 | Boolean |
  | 비고 | 화살표 함수 표현식으로 작성 |

#### 코드 작성

```js
let costomerAge = 20;

function canSellAlcohol(idCardAge) {
  return idCardAge >= 19;
}

console.log(canSellAlcohol(costomerAge)); //true
```

<br>

### 4. 할인가 계산

- 판매가와 할인 비율(%)을 입력 받아, 할인가를 반환하는 함수를 작성합니다.
- [예] 판매가가 18,700원이고, 할인율이 20%인 경우

        계산된 할인가는 14,960원입니다.

  | 함수이름    | getDiscountedPrice                       |
  | ----------- | ---------------------------------------- |
  | 매개변수    | originalPrice, discountPercent           |
  | 기능        | 판매가에서 할인율을 적용한 할인가를 반환 |
  | 반환값 타입 | Number                                   |

#### 코드 작성

```js
function getDiscountedPrice(originalPrice, discountPercent) {
  // 숫자로 들어오는 할인값을 퍼센트로 변경합니다. 예) 12 -> 12% 즉 판매가의 88%
  let numToPercent = 0.01 * (100 - discountPercent);
  // console.log(numToPercent); -> 0.87 == 87%
  return originalPrice * numToPercent;
}

console.log(getDiscountedPrice(14900, 13).toLocaleString() + "원"); // '12,963원'
```

<br>

### 5. 등급 판단

- 점수를 전달받아 점수, 등급과 설명을 포함한 객체를 반환하는 함수를 작성합니다.
  | 점수 범위 | 등급 (Grade) | 설명 |
  | --- | --- | --- |
  | 90 ~ 100점 | A | 매우 우수 |
  | 80 ~ 89점 | B | 우수 |
  | 70 ~ 79점 | C | 보통 |
  | 60 ~ 69점 | D | 미달, 통과 기준 근접 |
  | 0 ~ 59점 | F | 낙제 |

#### 코드 작성

```js
function ScoreGradeDetermination(studentScore) {
  if (studentScore >= 90)
    return { score: studentScore, gride: "A", description: "매우 우수" };
  else if (studentScore >= 80)
    return { score: studentScore, gride: "B", description: "우수" };
  else if (studentScore >= 70)
    return { score: studentScore, gride: "C", description: "보통" };
  else if (studentScore >= 60)
    return {
      score: studentScore,
      gride: "D",
      description: "미달, 통과 기준 근접",
    };
  else return { score: studentScore, gride: "F", description: "낙제" };
}

ScoreGradeDetermination(99); //{score: 99, gride: 'A', description: '매우 우수'}
```

<br>

---
