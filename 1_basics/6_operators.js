/**
 * Operators
 *
 * 연산자
 *
 * - 산술 연산자
 * - 증가와 감소 // number ++, number --
 */

/**
 * 연산자의 위치
 */

let number = 1;
let result = 1;
console.log(result);

// 1.
result = number++; // 2가 된 number를 result에 저장
console.log(result, number); // 1 2
//number가 2가 되기 전에 이미 result가 number의 값을 먼저 저장한 것
// ++ 를 뒤에 작성하면 다른 operator(이 경우엔 '저장')가 먼저 실행된다
// 저장 된 후 증가 operator가 실행이 된다

result = number--; // 1이 된 number를 2인 result에 저장
console.log(result, number); // 2 1

// 2. 솔직히 이렇게 앞에 두는 경우는 없다
result = ++number;
console.log(result, number); // 2 2
// ++ 를 변수의 앞에 두어서 먼저 증가를 시킨 뒤 값을 저장하게 된다
result = --number;
console.log(result, number); // 1 1
// 마찬가지로 미리 계산을 한 뒤 저장이 된다

/**
 * 숫자 타입이 아닌 타입에 +,-을 사용하면 어떻게 될까?
 *
 */

let sample = "99";
console.log(+sample); // 99
console.log(typeof +sample); // number
console.log(-sample); // -99
console.log(typeof -sample); // number

let sample1 = true;
console.log(+sample); // 1
console.log(typeof +sample); // number

let sample2 = true;
console.log(+sample); // 0
console.log(typeof +sample); // number

let sample3 = true;
console.log(+sample); // NaN
console.log(typeof +sample); // number

/**
 * 할당 연산자 (assignment operator)
 *
 * operator에 =을 추가해주면 계산을 한 뒤 그 값을 다시 변수에 저장한다는 뜻
 */

number = 100;
console.log(number); //100

number += 10;
console.log(number); //110

/**
 * 비교 연산자
 *
 * 1) 값의 비교 - 안씀
 *    ==, !=
 *
 * 2) 값과 타입 비교
 *    ===, !==
 */

/**
 * 삼항조건 연산자 (ternary operator)
 */
console.log(10 > 0 ? "10이 0보다 크다" : "10이 0보다 작다");

/**
 * 논리 연산자
 *
 * 1) && - 모두 true여야 true 반환
 *
 * 2) || - 둘중에 하나만 true여도 true 반환
 */
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

/**
 * 단축 평가 (short circuit evaluation)
 *
 * && 사용시 왼쪽이 true면 오른쪽 값 반환
 * && 사용시 왼쪽이 false면 왼쪽 값 반환
 * || 사용시 왼쪽이 true면 왼쪽 값 반환
 * || 사용시 왼쪽이 false면 오른쪽 값 반환
 */
console.log(true && "지원"); // '지원'
console.log(false && "지원"); // false
console.log(true || "지원"); // true
console.log(false || "지원"); // '지원'

console.log(true && true && "지원"); // '지원'

/**
 * 지수 연산자
 */

// 2의 2승
console.log(2 ** 2); //4
// 10의 3승
console.log(10 ** 3); //1000

/**
 * null 연산자
 */

let name; //undefined
name = name ?? "지원";
console.log(name); // 지원
// 좌측값이 null이거나 undefined이면 오른쪽 값을 반환해라
// 즉, name변수가 undefined 이니까 name에 '지원'을 저장해서 반환

name = name ?? "혜원";
console.log(name); // 지원
// name이 undefined가 아니므로 그대로 name이었던 '지원'출력

//한번에 하고싶다면
let name2;
name2 ??= "지원"; //name = name ?? "지원"; 와 같은 코드
console.log(name2); // 지원
