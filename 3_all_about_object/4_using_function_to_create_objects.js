/**
 * Using function to create objects
 * - new 키워드를 제대로 사용하는 방법
 */
function IdolModel(name, year) {

  // new를 안썼을 경우(new.target = undefined) 강제로 생성자 함수 생성해주기
  if(!new.target) {
    return new IdolModel(name, year)
  }

  // this를 통해 프로퍼티 세팅
  console.log('💙',this) // 여기에서 this를 찍어본다면? (아래 41줄에 계속)
  this.name = name
  this.year = year

  // 함수, 메서드 추가하기
  this.dance = function () {
    return `${this.name}이 춤을 춥니다.`
  }

  // 근데 이런식으로 오브젝트를 그냥 반환을 해주면 아래에서 new로 생성해도 {} 만 반환이 된다
  // 즉, 생성자함수로 객체를 생성할 수 없게 된다
  // return {}

  // 근데 primitive값을 반환하면 생성자 함수를 사용해 쓸 수 있다
  // 하지만 굳이 안쓴다, 쓰면 안된다~
  // return 123
}

// new를 통해 생성자 함수를 실행할 수 있었다
const yuJin = new IdolModel('안유진', 2003)
console.log(yuJin) // IdolModel { name: '안유진', year: 2003 }

console.log(yuJin.dance()) // 안유진이 춤을 춥니다.

// 만약 new 키워드를 안쓰면?
const yuJin2 = IdolModel('안유진', 2003)
console.log(yuJin2) // undefined
// 그냥 함수형으로 실행이 되면 반환되는 것이 아무것도 없기때문에

// new를 안쓰고 생성자함수를 실행해버리면 this키워드가 global에 붙어버린다 -> 이렇게 되니까 하지 말라는 뜻이다!
// global은 파일이 실행될때 자동으로 생성되는 객체
// js 엔진을 node.js에서 실행 시 필요한 값을 다 들고있다
// 만약 웹에서 진행한다면 window object와 똑같음
console.log(global.name) // 안유진

/**
 * IdolModel안에서 this를 찍어본다면?
 * 순서대로 2가지가 찍힐 것
 * 1. new로 생성한 것
 *  - this가 IdolModel이라는 오브젝트로 맵핑이 되는 것을 볼 수 있다
 * 2. new를 안쓴 것
 *  - this가 global이 되는 것을 볼 수 있다
 *
 * 💙 IdolModel {}
 * IdolModel { name: '안유진', year: 2003, dance: [Function (anonymous)] }
 * 안유진이 춤을 춥니다.
 * 💙 <ref *1> Object [global] {
 *   global: [Circular *1],
 *   queueMicrotask: [Function: queueMicrotask],
 *   clearImmediate: [Function: clearImmediate],
 *   setImmediate: [Function: setImmediate] {
 *     [Symbol(nodejs.util.promisify.custom)]: [Getter]
 *   },
 *   structuredClone: [Getter/Setter],
 *   clearInterval: [Function: clearInterval],
 *   clearTimeout: [Function: clearTimeout],
 *   setInterval: [Function: setInterval],
 *   setTimeout: [Function: setTimeout] {
 *     [Symbol(nodejs.util.promisify.custom)]: [Getter]
 *   },
 *   atob: [Getter/Setter],
 *   btoa: [Getter/Setter],
 *   performance: [Getter/Setter],
 *   fetch: [AsyncFunction: fetch],
 *   crypto: [Getter]
 * }
 *
 * 즉 new를 쓰게 되면 함수에서 this를 어디에 맵핑하는가 결정할 수 있다
 */

// 하지만 흔하게 new를 입력하지 않는 실수를 많이하기에 new가 실행이 됐는지 확인하는 방법이 있다
// IdolModel 함수 안에 new.target을 출력해보면
// 1. new를 사용했을 경우
// [Function: IdoleModel]
// 2. new를 안썼을 경우
// undefined
// 라고 출력된다
// 즉, new를 쓰게되면 new가 실행된 대상 함수가 반환이 되고, new를 쓰지 않았다면 undefined가 된다
// 따라서 함수 안에 로직을 하나 추가해줄 수 있다, 강제로 생성자 함수로 실행시켜주기
// if(!new.target) {
//    return new IdolModel(name, year)
// }

// 이렇게 하면 new 키워드를 쓰던지 안쓰던지 똑같이 생성자함수로 실행이 되도록 설정할 수 있다

/**
 * 📍화살표함수로 생성자함수를 만들 수 있는지 -> 안됨
 */
const IdolModelArrow = (name, year) => {
  this.name = name
  this.year = year
}
const yuJinArrow = new IdolModelArrow('안유진', 2003) // error
// TypeError: IdolModelArrow is not a constructor 라는 에러가 난다