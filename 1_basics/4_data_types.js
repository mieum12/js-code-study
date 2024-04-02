/**
 * Data Types
 *
 * 6개의 Primitive Type과
 * 1개의 object타입이 있다
 *
 * 1) Number
 * 2) String
 * 3) Boolean
 * 4) undefined - 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값
 * 5) null - undefined와 마찬가지로 값이 없다는 뜻이나, JS에서는 개발자가 명시적으로 없는 값으로 초기화할 때 사용된다.
 * 6) Symbol -  유일무이한 값을 생성할 떄 사용한다, 다른 프리미티브 값들과 다르게 Symbol 함수를 호출해서 사용한다
 *
 * 7) Object (객체) - Function, Array, Object
 */

/**
 * Template Literal
 *
 * Escaping Character
 * 1) new line -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고싶다면 두번 입력
 *    console.log('아이브\\안유진') -> 아이브\안유진
 */

/**
 * Symbol 타입
 */
const test1 = "1";
const test2 = "1";

console.log(test1 === test2); //true

const symbol1 = Symbol("1");
const symbol2 = Symbol("1");

console.log(symbol1 === symbol2); //false

/**
 * Object 타입
 *
 * Map
 * 키:밸류의 쌍으로 이루어짐
 */

const dictionary = {
  red: "빨강",
  orange: "주황",
  yellow: "노랑",
};
console.log(dictionary);
console.log(dictionary["red"]);
console.log(dictionary["orange"]);

/**
 * Array Type
 *
 * 값을 리스트로 나열할 수 있는 타입이다
 */
const ive = ["안유진", "장원영", "이서", "리즈", "가을", "레이"];

/**
 * static typing
 * -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시를 한다 (C)
 *
 * dynamic typing
 * -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 추론한다 (JS)
 */
