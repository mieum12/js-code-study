/**
 * 타입 변환
 * Type Conversion
 *
 * 1) 명시적
 * 2) 암묵적
 */

let age = 20;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge); //string 20

// 암묵적 -> 좋지 않다
let test = age + "";
console.log(typeof test, test); //string 20
// 숫자에 문자를 더하면 문자열이 된다

console.log("98" + 2); // 982
//2를 문자열로 더하게 된다

console.log("98" * 2); // 196
console.log("98" - 2); // 96
//string에는 곱하거나 뺀다는 개념이 없으니까 98이 숫자로 강제적으로 타입 변환이 된 것

/**
 * 명시적 변화 몇가지 더 배우기
 */

// 문자열 타입으로 변환
console.log(typeof (99).toString()); //string
console.log(typeof true.toString()); //string
console.log(typeof Infinity.toString()); //string

// 숫자 타입으로 변환
console.log(typeof parseInt("0")); //number
console.log(typeof parseFloat("0.99")); //number
console.log(typeof +"1"); //number

// boolean 타입으로 변환
// string에 어떤 값이 존재하면 true이다!
console.log(!"x"); // false
console.log(!!"x"); // true
console.log(!!""); // false
console.log(!!0); // false 0은 false이다
console.log(!!"0"); // true

// 오브젝트, 배열은 무조건 true
console.log(!!{});
console.log(!![]);

/**
 * 1) 아무 글자도 없는 string
 * 2) 값이 없는 경우
 * 3) 0
 *
 * 모두 false를 반환한다
 */
