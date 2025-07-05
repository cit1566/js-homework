document.addEventListener("DOMContentLoaded", () => {
  // 가운데 중심 이미지
  gsap.from(".item:nth-child(6)", {
    scale: 0,
    duration: 0.6,
    ease: "back.out(1.7)",
  });

  // 상하좌우 순서로 조립되는 애니메이션
  const animations = [
    { selector: ".item:nth-child(1)", x: 300 },
    { selector: ".item:nth-child(2)", y: 300 },
    { selector: ".item:nth-child(3)", x: -300 },
    { selector: ".item:nth-child(4)", y: -300 },
    { selector: ".item:nth-child(5)", x: 300 },
    // 중심 이미지 (6) 이미 위에서 등장
    { selector: ".item:nth-child(7)", x: -300 },
    { selector: ".item:nth-child(8)", y: 300 },
    { selector: ".item:nth-child(9)", y: -300 },
    { selector: ".item:nth-child(10)", x: 300 },
    { selector: ".item:nth-child(11)", y: 300 },
    { selector: ".item:nth-child(12)", x: -300 },
    { selector: ".item:nth-child(13)", y: -300 },
    { selector: ".item:nth-child(14)", x: 300 },
    { selector: ".item:nth-child(15)", y: 300 },
    { selector: ".item:nth-child(16)", x: -300 },
  ];

  // 순차적으로 조립되는 효과
  animations.forEach((anim, i) => {
    gsap.from(anim.selector, {
      x: anim.x || 0,
      y: anim.y || 0,
      opacity: 0,
      scale: 0.5,
      delay: 0.2 + i * 0.1,
      duration: 0.6,
      ease: "power2.out",
    });
  });

  // context-box의 제목 텍스트 (위에서 아래로)
  gsap.from(".context-box h1", {
    y: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    delay: 0.2,
  });

  // 라벨 (약간 더 느리게)
  gsap.from(".context-box .label", {
    y: -30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    delay: 0.4,
  });

  // 본문 텍스트
  gsap.from(".context-box p", {
    y: -20,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    delay: 0.6,
  });

  gsap.from(".context-box", {
    scrollTrigger: ".context-box",
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });
});
