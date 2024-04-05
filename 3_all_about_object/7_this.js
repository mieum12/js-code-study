/**
 * This
 *
 * JS의 OOP는 조금 다르기에 this가 가리키는 요소가 매번 바뀐다
 * JS는 Lexical scope를 사용하기 때문에 함수의 상위 스코프가 정의되는 시점에 평가된다
 * 🌟 하지만 this 키워드는 객체가 생성되는 시점에 바인딩이 결정된다
 */

const testFunction = function () {
  return this
}

console.log(testFunction())
// Object [global] 이렇게 맵핑이 된 것을 볼 수 있다
// 일반함수로 실행하면 this가 글로벙 오브젝트에 맵핑이 된다
console.log(testFunction() === global) //true

// 1.
const yuJin = {
  name: '안유진',
  year: 2003,
  sayHi: function () {
    return `안녕 나는 ${this.name}이야.` // 여기서 this는 현재 객체
  }
}

// 2.
function Person(name, year) {
  this.name = name
  this.year = year
  this.sayHi = function () {
    return `안녕 나는 ${this.name}이야.` // 여기도 this는 객체
  }
}
const yuJin2 = new Person('안유진', 2003)
console.log(yuJin2.sayHi()) // this가 yuJin2 객체에 맵핑됨

Person.prototype.dance = function () {
  return `${this.name}이 춤을 춥니다.`
}
console.log(yuJin2.dance()) // 안유진이 춤을 춥니다.
// prototype에 함수를 정의해고 this 키워드는
// 우리가 실행하는 대상의 객체로 맵핑된다는 것을 알 수 있다

Person.prototype.dance = function () {
  function dance2() {
    return `${this.name}이 춤을 춥니다.`
  }
  return dance2()
}
console.log(yuJin2.dance()) // undefined이 춤을 춥니다.
// 객체의 메서드 dance2는 상위 레벨에 함수가 선언된 것이 아니다
// 그렇게 되면 그 함수의 this는 무조건 글로벌이 된다

/**
 * 정리!
 * this 키워드가 어떤걸 가르키냐는 3가지만 기억하기
 *
 * 1) 일반 함수 호출 시 this는 최상위 객체 (global 또는 window)
 * 2) 메서드로 호출 시 this는 호출된 객체
 * 3) new 키워드를 사용해서 객체를 생성 시 this는 객체
 */

/**
 * 원하는 this 값으로 맵핑하는 방법
 * (원하는 함수에 원하는 객체 바인딩하기)
 *
 * 1) apply()
 * 2) call()
 * 3) bind()
 */

function returnName() {
  return this.name
}

console.log(returnName()) // undefined // this는 글로벌인데 아무것도 없으니

const yuJin3 = {
  name: '안유진',
}
// returnName을 yuJin3에 바인딩해 call하겠다는 뜻
// this가 yuJin3에 바인딩됐기때문에 yuJin3의 name의 value인 안유진이 출력됨
console.log(returnName.call(yuJin3)) // 안유진
console.log(returnName.apply(yuJin3)) // 안유진

/**
 * 1) call - 콤마를 기반으로 아규먼트를 순서대로 넘겨줌
 * 2) apply - 아규먼트를 리스트로 입력해야한다
 */

function multiply(x, y, z) {
  return `${this.name} / 결과값 : ${x*y*z}`
}

console.log(multiply.call(yuJin3, 3,4,5)) // 안유진 / 결과값 : 60
console.log(multiply.apply(yuJin3, [3,4,5])) // 안유진 / 결과값 : 60

/**
 * 3) bind() - this를 바인딩만 하고 나중에 실행할 수 있다
 */
const laterFunc = multiply.bind(yuJin3, 3,4,5)
console.log(laterFunc) //[Function: bound multiply] // 함수이며 multiply에 바인드가 됐다는 뜻
// 함수니까 실행 가능
console.log(laterFunc()) // 안유진 / 결과값 : 60
