/**
 * Hoisting
 */

// 이렇게 찍힌다
console.log("--------");
console.log(name); // undefined
var name = "지원";
console.log(name); // 지원

// 아래처럼 작용하는 것처럼 위에서 찍힌다(이미 선언 딘것처럼)
console.log("--------");
var name;
console.log(name);
var name = "지원";
console.log(name);

/**
 * Hoisting은 무엇인가?
 *
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 말한다.
 *
 * 📍 let과 const 모두 호이스팅이 된다 (인터뷰에서 많이 나옴)
 * -> 에러로 알려준다
 * -> 호이스팅 현상은 var는 막아주지 못하는데 let과 const는
 *    할당 전에 값을 미리 가져오는 버그를 방지할 수 있다
 * -> let, const 를 쓰는 많은 이유 중 하나이다
 */

// 1.
console.log("--------0");
console.log(jiwon); //Cannot access 'jiwon' before initialization
let jiwon = "지원";
/**
 * jiwon이라는 변수를 초기화 하기 전에 접근할 수 없다는 에러가 뜬다
 * 엥 그럼 jiwon이라는 변수는 호이스팅이 안되잖아 라고 생각할 수 있다.
 */

// 2.
console.log(jiwon); //jiwon is not defined
/**
 * 그럼 이렇게 그냥 콘솔만 찍으면 jiwon이라는 변수는 정의되지 않았다고 에러가 뜬다
 * 그 뜻은 let으로 선언을 한 상태에서 호이스팅이 발생하는 것처럼
 * jiwon 변수 선언 전에 접근한다면
 * jiwon이라는 변수가 존재하는 것이라고 나온다.
 */
