// 변수, 타입, 연산자
// var : 재선언의 경우에 감지할 수 없다.

//var a; -> undefined이라는 샘 : 선언 및 undefined 할당
console.log(a); //없는 변수를 쓸 수 있는 이슈가 생기는 것.

var a; //실질적으로 등장을 하는 시점이 여기인데..

var b = 100; //변하기를 원하지 않아

//.....

var b = 200; //한 번 더 할당을 해버림. 그치만 var는 아무 감지를 못함

//let, const

//console.log(c); //ReferenceError: Cannot access 'c' before initialization

let c;
c = 10;
c = 100; //재할당은 막을 수 없음
c = c + 10;
c = c + 10;
console.log(c); //120 -> 어떠한 연산의 결과. 변화하는 값을 처리할 때 let 사용.
let d = 100; //초기화 var와 같은 용법
//let c; SyntaxError: Identifier 'c' has already been declared

// console.log(e); //ReferenceError: Cannot access 'e' before initialization
const e = 1000;
// const e; //한 번에 할당까지하는 초기화를 진행해줘야 한다.
// e = 1000; //TypeError: Assignment to constant variable.
// 변동할 여지가 없으면 const 권장하긴 함.

// 해당 변수명을 다른 변수에 대입 연산자 (=)으로해서 넣어서 쓰거나, 구문(statement)나 표현식(expression)에서 사용할 수 있다.
a + 1;
let abc = a + b + c;

// 타입(type) - 자료형(data type)
/*
    1 
    "글자"
    ["배열"]
    {"객체"}
    이런식으로 되어 있는 복잡한 형태의 데이터들이 어떻게 구조화되어있고 저장되어있고 연관된 기능(함수, 메서드)이 무엇인지 등을 알려주고 사용하는 방식을 '타입'이라고 한다.
*/

//언어들마다 다름.
/*
    JavaScript - 7가지, 참조타입.
    기본/원시타입 - 실행환경 - 기본적으로 지원 (공통적으로 언어 자체에 있는 것)
    참조타입 - API/인터페이스 제공, 개발자 라이브러리/패키지 만들어내는 타입 (실행환경, 개발환경)
    //5가지(자세히 봄), 2가지 (적당히 봄)
*/
console.log("------Number-------");
//Number (숫자) -> short, long, integer, byte X 그냥 number임!!
//정수, 실수
console.log(1); //숫자는 별도의 특수문자 없이 그대로 입력할 수 있음
console.log(1.01); //소수를 넣으면 소수점이 붙어서 실수 형태
console.log(4 / 7);
// 계산이 가능하다. (산술연산)

// 문자열
// 문자 -> javascript에는 별도로 '문자'가 없습니다. 다 문자열 "String"
// '', "", `` 묶어서 나타냄. `` -> `앞뒤에${변수명}텍스트`
console.log("---String---");
const s = "안녕하세요";
console.log(s);

// Boolean : George Boole -> 참/거짓
// T/F Bool, Boolean
console.log("---Boolean---");
console.log(true);
console.log(false);
// 값을 연산자나 함수 등으로 '평가'해서 boolean으로 1(참)/0(거짓)으로 판정한다.
//truthy, falsy 연산자

//null, undefined
console.log("---null, undefined---");
const n = null;
const ud = undefined;
let ud2;
console.log(n, ud, ud2);
const aa = {};
console.log(aa.bb); //undefined : 값이 있는 척함, 에러를 안띄움... js 짜증남
//console.log(ud.bb); //TypeError: Cannot read property 'bb' of undefined : 정작 undefined 한테는 에러를 띄움;;

console.log(typeof b); //number
console.log(typeof s); //string
console.log(typeof n); //object
console.log(typeof ud); //undefined

//symbol, bigint
console.log("---symbol, bigint---");
const string1 = "hello";
const string2 = "hello";
console.log(string1 == string2); //true

//다른 객체로 취급하고 싶을때 사용
const symbol1 = Symbol("hello");
const symbol2 = Symbol("hello");
console.log(symbol1 == symbol2); //false

// bigint : 엄청 큰 숫자 long? 몇십억보다 더 큰 숫자 -> 문자열로 바꿔버리면 된다.
const big = 123456789012345678901234567890n;
console.log(big + 10n); // BigInt 연산 OK
// console.log(big + 10);         // TypeError: Cannot mix BigInt and other types

// 7가지의 원시타입, 기본타입
// Number, String, Boolean, Null, undefined, symbol, bigint

// 참조타입
/* 
    {}, [], class,... 
    -> 값 자체가 메모리에 들어가는게 아니라, 해당 데이터를 찾을 수 있는 '주소'가 변수에 들어가는 꼴.
    -> 변수 자체를 재할당하지 않아도 내부에서 수정이 가능한 데이터 타입.
    [1,2,3,4,5] -> [] 배열을 찾을 수 있는 정보 -> [] 배열 자체는 어느정도 수정이 가능

*/
