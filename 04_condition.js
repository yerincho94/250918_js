// 흐름제어
// 특정한 조건에서 분기 / 반복하는 것.

// 삼항연산자 -> 값만 분기 시킴 -> console.log(...)

//반반의 확률로 당첨
console.log(Math.random() > 0.5 ? "당첨입니다" : "꽝입니다"); //이렇게 하면 값만 구분함.

// 조건에 따른 분기
// if(조건 boolean) { 블록 } // let, const에서 말했던 블록 스코프
if (Math.random() > 0.5) {
  console.log("당첨입니다.~~");
  console.log("축하드립니다요!!");
} else {
  console.log("꽝입니다.~~");
  console.log("아쉬워요, 다시 츄라이츄라이");
}

//floor : 소수점 아래를 무조건 무시
const dice = Math.floor(Math.random() * 6 + 1);
console.log("dice : ", dice); // 0 ~ 1

if (dice >= 5) {
  console.log("🤩우승!!");
} else if (dice >= 3) {
  console.log("😑무승부---");
} else {
  console.log("😪패배!!!");
}
