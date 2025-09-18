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

const dice2 = Math.floor(Math.random() * 6 + 1);
console.log("dice2 : ", dice2);

// switch
switch (dice2) {
  case 1:
    // 한 번 통과가 되면 뒤에까지 다 break를 만날 때까지 모두 통과해버림. -> fall through
    console.log("1번이 뽑혔습니다.");
    break;
  case 2:
    console.log("2번이 뽑혔습니다.");
    break;
  case 3:
    console.log("3번이 뽑혔습니다.");
    break;
  default:
    console.log("4 ~ 6 사이의 값입니다.");
}

// while -> if (조건) {} 1번 실행. while(조건) {} true이면 계속 실행함.
let flag = true;
while (flag) {
  console.log("-----실행 중------");
  if (Math.random() > 0.5) {
    flag = false;
    console.log("--- 실행 끝 ----");
  }
}

let w = 0;
while (w < 10) {
  w++;
  console.log(w + "번 째 반복");
}

//while(1) //hip하게 보이려면
/*
while (true) {
  //무한반복
  //중간에 중지를 시켜주고 싶으면
  console.log("이번에는 멈출까나??");
  if (Math.random() > 0.5) {
    console.log("멈췄다!!!");
    break; //지금까지의 반복을 멈춰주는 친구.

    //이 이상으로 진행하지 않음.
  }
  //여기를 도달하지 않음.
  console.log("헬로우??");
}
*/

while (true) {
  //무한반복
  //중간에 중지를 시켜주고 싶으면
  console.log("이번에는 멈출까나??");
  if (Math.random() > 0.5) {
    console.log("멈췄다!!!");
    continue; //이 이상으로 진행하지 않고, 다음 반복으로 넘어가게 해주는 키워드
  }

  //여기를 도달하지 않음.
  console.log("헬로우??");
  break;
}

/*
 * 반복문으로 반복하는 3가지 방법
    1) 조건을 제대로 넣고 해당 조건을 만족시키도록 하는 방법.
    2) (조건을 넣지 않고 무한히 반복하게 하며) 특정한 상황에서 종료하게 함. (break)
    3) (...) 그냥 두면 종료(break)가 되는데, 특정 상황에서 강제로 반복(continue)하게 함
*/
