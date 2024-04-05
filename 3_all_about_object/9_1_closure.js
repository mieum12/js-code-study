/**
 * Closure
 *
 * A closure is the combination of a function and the lexical environment
 * within which that function wad declared.
 *
 * 클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다
 *
 * '상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure라 한다'
 */

function getNumber() {
  var number = 5

  function innerGetNumber() {
    return number
  }

  // innerGetNumber 반환 시 콜스택에서 사라진다 (하위함수가 오래 남아있는 성황은 아님)
  return innerGetNumber()
}

// console.log(getNumber()) // 5

// 그렇다면 하위 함수인 innerGetNumber가 더 오래 살아있는 상황은 무엇이냐?
function getNumber2() {
  var number = 5
  function innerGetNumber2() {
    return number
  }
  // 위에랑 차이 - innerGetNumber 실행하지 않고 그냥 함수 반환하기
  return innerGetNumber2
}

// getNumber2 실행 됨
const runner = getNumber2()

console.log(runner) // [Function: innerGetNumber2]
// 이제 runner 실행하기
console.log(runner()) // 5

// 지금 innerGetNumber2가 실행 된 상황은
// 이미 getNumber2가 실행 된 상황이다
// = 이미 getNumber2의 execution context가 끝난 뒤
// = getNumber2가 콜스택에서 사라진 뒤
// 이게 바로 상위함수보다 하위함수가 더 오래 살아있는 경우

/**
 * 클로저를 사용하는 예제
 *
 * 1) 데이터 캐싱
 * - 데이터를 반복적으로 가져와야하는 경우
 */
function cacheFunction(newNum) {
  // 아래 계산은 매우 오래 걸린다는 가정을 해보자
  var number = 10 * 10

  return number * newNum
}

console.log(cacheFunction(20))
console.log(cacheFunction(30))
console.log(cacheFunction(40))
// 이렇게 되면 매번 10 * 10 이라는 오래 걸리는 작업을 계속 하게 되는 비효율성

// 해결 !! = 클로저를 만든다
function cacheFunction2() {
  var number = 10 * 10

  // closure!
  function innerCacheFunction(newNum) {
    return number * newNum
  }

  return innerCacheFunction
}

// 10 * 10라는 오래 걸리는 작업을 한번 해주게 된다!!
// 그 값을 클로저에서 기억을 함
// 그리고 innerCacheFunction를 반환만 해준다
const runner2 = cacheFunction2()

// 여기서 innerCacheFunction만 실행할 수 있게 된다
console.log(runner2(10))
console.log(runner2(20))
console.log(runner2(30))

/**
 * 이것도 데이터 캐싱과 비슷
 * 2) 반복적으로 특정 값을 변경해야할 때 사용
 */
function cacheFunc() {
  var num = 99

  function increment() {
    num ++;
    return num
  }

  return increment
}
const runner3 = cacheFunc()

console.log(runner3()) // 100
console.log(runner3()) // 101
// 외부에서 넘버값을 엑세스 할 수 있는 방법은 존재하지 않는데
// increment는 그 넘버값을 기억하고 있다
// 그랫 실행을 할 때마다 넘버값이 올라간다

/**
 * 3) 정보 은닉
 * - private을 쓴지 오래 되지 않음
 */

function Idol(name, year) {
  this.name = name

  // this키워드로 저장 안했기 때문에
  // 객체 생성 시 year값에 접근 못함
  var _year = year

  this.sayNameAndYear = function () {
    return `저는 ${this.name}입니다. ${_year}년에 태어났습니다.`
  }
}
const yuJin = new Idol('안유진', 2003)
// 아래처럼 잘 나온다
console.log(yuJin.sayNameAndYear()) // 저는 안유진입니다. 2003년에 태어났습니다.

// 근데 _year에 접근하려고하면 안된다
// this로 저장안해서 객체의 프로퍼티로 엑세스 불가
console.log(yuJin._year) // undefined
// 하지만 생성이 완료된 다음에 이 함수(Idol)의 메소드(sayNameAndYear) 안에서 나중에 가져올 수 있다
// 이런식으로 정보 은닉 가능
