/**
 * Scope
 */

var numberOne = 20

function levelOne() {
  console.log(numberOne)
}

// levelOne() // 20
// 이렇게 함수를 실행하면 함수 바깥의 변수에 접근할 수 있다
// 즉, 함수를 선언하면 상위 변수가 존재하는 상위 스코프를 포함하게된다

// 그러면
// 함수를 새로 선언하면 같은 스코프 최상위 스코프 안의 levelOne함수를 덮어쓰게 된다
function levelOne() {
  var numberOne = 30
  console.log(numberOne)
}
// levelOne() // 30
// 가장 가까운 스코프에 있는 변수를 가져오기 때문
// 하지만,
// 함수 스코프 안에서 넘버원을 선언하게 되면 상위 스코프 넘버원 변수를 덮어쓰지 않는다!!
console.log(numberOne) // 20
// 그래서 그대로 20이 나온다

// 또 다른 예시
function levelOne() {
  var numberOne = 40

  function levelTwo() {
    var numberTwo = 99

    console.log(`levelTwo numberTwo : ${numberTwo}`) // 99
    console.log(`levelTwo numberOne : ${numberOne}`) // 40
  }
  levelTwo()
  console.log(`levelOne numberOne : ${numberOne}`) // 40
}
levelOne()
// 이를 통해 - 모든 선언은 가장 가까운 스코프에 있는 선언부터 활용
console.log(numberOne) // 20
// console.log(numberTwo) // error -> 하위 스코프에는 접근 불가

/**
 * JS -> Lexical Scope
 * = 선언된 위치가 상위 스코프를 정한다
 *
 * 반대 : Dynamic Scope - 실행한 위치가 상위 스코프를 정한다
 */
var numberThree = 3
function functionOne() {
  var numberThree = 100
  functionTwo()
}

function functionTwo() {
  console.log(numberThree) // 3
  // functionTwo는 글로벌 스코프에 선언되었기 때문에
  // 글로벌 스코프에서 numberThree라는 변수를 가져왔다는 것을 알 수 있다
}
functionOne()
// 이것이 렉시컬 스코프의 개념

/**
 * var, let, const가 어떻게 스코프에 영향을 주는지 알아보자
 */

var i = 999
for (var i = 0; i < 10; i++) {
  console.log(i) // 0~9
}
console.log(`i in global scope : ${i}`) // 10
// for-loop, while-loop, if의 경우에는 var 키워드를 썼을 떄 새로운 스코프를 만들어내지 않는다
// 함수에서만 새로운 스코프를 만드는 것이다
// 따라서 999였던 i를 0부터 9로 변경해서 글로벌 스코프에서도 변수값이 변경된 값으로 나오게 된다

i = 999
// block level scope
for (let i = 0; i < 10; i++) {
  console.log(i) // 0~9
}
console.log(`i in global scope : ${i}`) // 999
// let, const을 쓰면 변경이 안된다
// 함수 뿐 아니라for, if, while 전부 블록레벨 스코프를 만들어낼 수 있다
// 보통 var을 안쓰기때문에 늘 새로운 스코프를 만들어낸다고 생각하면 됨

/**
 * 즉,
 *
 * var 키워드는 함수레벨 스코프만 만들어낸다
 *
 * let, const 키워드는 함수 레벨 스코프, 블록레벨 스코프를 만들어낸다
 */