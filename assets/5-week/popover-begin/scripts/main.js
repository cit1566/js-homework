const container = document.querySelector(".container");

const [...popBtns] = document.querySelectorAll(".popover-trigger");
const [...popovers] = document.querySelectorAll(".popover");

console.log(popBtns);

// 여유값
const SPACINGVALUE_X = 30;
const SPACINGVALUE_Y = 80;

popovers.forEach((pop) => {
  pop.classList.add("is-hidden");
});

let resizeTimeout;

window.addEventListener("resize", function () {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function () {
    location.reload();
  }, 500);
});

window.addEventListener("DOMContentLoaded", () => {
  // top
  {
    {
      const Xresult =
        setButtonXCenterValue(popBtns[0]) - setPopWidthVlaue(popovers[0]) / 2;
      popInputStyle(popovers[0], Xresult);
    }
    {
      const Yresult =
        setButtonTopValue(popBtns[0]) -
        setPopHeighthVlaue(popovers[0]) -
        SPACINGVALUE_X;
      popInputStyle(popovers[0], Yresult, "y");
    }
  }

  // top-right
  {
    {
      const Xresult = setButtonLeftValue(popBtns[1]) + SPACINGVALUE_Y + 15;
      popInputStyle(popovers[1], Xresult);
    }
    {
      const Yresult =
        setButtonTopValue(popBtns[1]) -
        setPopHeighthVlaue(popovers[1]) -
        SPACINGVALUE_X +
        15;
      popInputStyle(popovers[1], Yresult, "y");
    }
  }

  // right
  {
    {
      const Xresult = setButtonLeftValue(popBtns[2]) + SPACINGVALUE_Y;
      popInputStyle(popovers[2], Xresult);
    }
    {
      const Yresult =
        setButtonYCenterValue(popBtns[2]) - setPopHeighthVlaue(popovers[2]) / 2;
      popInputStyle(popovers[2], Yresult, "y");
    }
  }

  // bottom-right
  {
    {
      const Xresult = setButtonLeftValue(popBtns[3]) + SPACINGVALUE_Y + 15;
      popInputStyle(popovers[3], Xresult);
    }
    {
      const Yresult = setButtonTopValue(popBtns[3]) + SPACINGVALUE_Y + 15;
      popInputStyle(popovers[3], Yresult, "y");
    }
  }

  // bottom
  {
    {
      const Xresult =
        setButtonXCenterValue(popBtns[4]) - setPopWidthVlaue(popovers[4]) / 2;
      popInputStyle(popovers[4], Xresult);
    }
    {
      const Yresult = setButtonTopValue(popBtns[4]) + SPACINGVALUE_Y;
      popInputStyle(popovers[4], Yresult, "y");
    }
  }

  // bottom-left
  {
    {
      const Xresult =
        setButtonLeftValue(popBtns[5]) -
        setPopWidthVlaue(popovers[5]) -
        SPACINGVALUE_X +
        15;
      popInputStyle(popovers[5], Xresult);
    }
    {
      const Yresult = setButtonTopValue(popBtns[5]) + SPACINGVALUE_Y + 15;
      popInputStyle(popovers[5], Yresult, "y");
    }
  }

  //left
  {
    {
      const Xresult =
        setButtonLeftValue(popBtns[6]) -
        setPopWidthVlaue(popovers[6]) -
        SPACINGVALUE_X;
      popInputStyle(popovers[6], Xresult);
    }
    {
      const Yresult =
        setButtonYCenterValue(popBtns[6]) - setPopHeighthVlaue(popovers[6]) / 2;
      popInputStyle(popovers[6], Yresult, "y");
    }
  }

  // top-left
  {
    {
      const Xresult =
        setButtonLeftValue(popBtns[7]) -
        setPopWidthVlaue(popovers[7]) -
        SPACINGVALUE_X +
        15;
      popInputStyle(popovers[7], Xresult);
    }
    {
      const Yresult =
        setButtonTopValue(popBtns[7]) -
        setPopHeighthVlaue(popovers[7]) -
        SPACINGVALUE_X +
        15;
      popInputStyle(popovers[7], Yresult, "y");
    }
  }
});

// 버튼 함수 -------------------------------------------------------------------------------
// 버튼 X축 중심 반환 함수
function setButtonXCenterValue(btn) {
  const btnXCenterValue =
    (btn.getBoundingClientRect().left + btn.getBoundingClientRect().right) / 2;
  return btnXCenterValue;
}

// 버튼 LEFT 반환 함수
function setButtonLeftValue(btn) {
  const btnLeftValue = btn.getBoundingClientRect().left;
  return btnLeftValue;
}

// 버튼 Y축 중심 반환 함수
function setButtonYCenterValue(btn) {
  const btnYCenterValue =
    (btn.getBoundingClientRect().top + btn.getBoundingClientRect().bottom) / 2;
  return btnYCenterValue;
}

// 버튼 Y축 TOP 반환 함수
function setButtonTopValue(btn) {
  const btnTopValue = btn.getBoundingClientRect().top;
  return btnTopValue;
}

// 팝오버 함수 ------------------------------------------------------------------------------
// 팝오버 너비 반환 함수
function setPopWidthVlaue(targetPop) {
  const popWidth = targetPop.getBoundingClientRect().width;
  return popWidth;
}

// 팝오버 높이 반환 함수
function setPopHeighthVlaue(targetPop) {
  const popWidth = targetPop.getBoundingClientRect().height;
  return popWidth;
}

// 팝오버 CSS 입력 함수
function popInputStyle(target, inputValue, axis = "x") {
  if (axis === "x") {
    target.style.setProperty("left", `${inputValue}px`);
  } else if (axis === "y") {
    target.style.setProperty("top", `${inputValue}px`);
  }
}

// EventListener
container.addEventListener("click", setTriggerTarget);

function setTriggerTarget({ target }) {
  const targetBtn = target.closest("button");
  if (!targetBtn) return;

  // console.log(popovers[setBtnToPop(targetBtn)]);
  setpopover(popovers[setBtnToPop(targetBtn)]);
}

function setpopover(targetPop) {
  targetPop.classList.toggle("is-hidden");
}

function setBtnToPop(trigger) {
  const triggerData = trigger.getAttribute("data-popover-position");
  switch (triggerData) {
    case "top":
      return "0";
    case "top-right":
      return "1";
    case "right":
      return "2";
    case "bottom-right":
      return "3";
    case "bottom":
      return "4";
    case "bottom-left":
      return "5";
    case "left":
      return "6";
    case "top-left":
      return "7";
    default:
      console.log("error");
  }
}

// 구현에만 목적을 둔 것 같다... 함수의 재사용성은 좋았으나, 반복구문이 너무 많아. 손이 힘들었다. 이건 코딩을 하는건지, 타자연습을
// 하는건지 잘 모를정도이다... 시간이 된다면 리펙토링을 해보자.

// 문제점
// 버큰배열과, 팝오버 배열을 배열메소드를 통해 훨씬 축약가능한 기능들이 많았던 것 같다.
// 반복구문이 많은 관계로, 로딩이 느려 hidden상태였던 팝업이 화면에 출력되는 동시에 값을 계산하는 부분이 오류를 발생시켜 정확한 위치에
// 조정되지 못하는 문제가 있는 것 같다. 정확한 원인은 모르겠으나, 추측상 아마 그런것 같다.
