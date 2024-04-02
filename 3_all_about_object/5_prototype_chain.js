/**
 * Prototype Chain
 */

//프로퍼티가 없는 객체 만들기
const testObj = {}
// 📍 __proto__ :모든 객체에 존재하는 프로퍼티
// class 의 상속에서 부모 클래스에 해당하는 값이다 (부모클래스의 레퍼런스와 같은 역할을 한다)
// 근데 일반 오브젝트에서 실행을 할 수 있는 이유는
// 클래스 또한 오브젝트로 인스턴스화 되기 떄문이다

console.log(testObj.__proto__) // [Object: null prototype] {}


function IdolModel (name, year) {
  this.name = name
  this.year = year
}

console.log(IdolModel.prototype) // {}
// 위처럼 객체가 하나 던져진다, 값이 없는 것이 아니라 감춰진 것이다
console.dir(IdolModel.prototype, {
  showHidden: true
})
// {
//   [constructor]: [Function: IdolModel] {
//   [length]: 2,
//     [name]: 'IdolModel',
//     [arguments]: null,
//     [caller]: null,
//     [prototype]: [Circular *1]
//   }
// }
// 이런 숨겨진 값을 볼 수 있다

// 확인해보자
console.log(IdolModel.prototype.constructor === IdolModel) // true
// 즉, IdolModel안의 prototype안의 constructor는 실제로 그냥 이 함수라는 것을 증명
// 실제로 동일하고 둘다 객체이기때문에 메모리 공간상 봤을때 같은 메모리 주소를 참조하고있다해도 무방

// 그렇다면?
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype) // true

// 📍 이러한 상황을 circular reference라 한다 = 서로가 서로를 참조하고있는 상태

// 실제 해보자
const yuJin = new IdolModel('안유진', 2003)
console.log(yuJin.__proto__) // {}
console.log(yuJin.__proto__ === IdolModel.prototype) // true

// 그렇다면
console.log(testObj.__proto__ === Object.prototype)
// 아무것도 없는 객체인데 자동으로 부모로, 자동으로 오브젝트의 프로토타입이 들어가는 것을 볼 수 있다

console.log(IdolModel.__proto__ === Function.prototype) // true
console.log(Function.prototype.__proto__ === Object.prototype) // true
// 즉 IdolModel의 부모는 Function이고
// Funcion의 prototype의 부모는 Object이다
// 그래서 결국 IdolModel은 결국 Object까지 상속을 받게 되는 것이다
console.log(IdolModel.prototype.__proto__ === Object.prototype)
// 그렇다면 IdolModel의 prototype의 부모는 Object.prototype과 같다

// 결국! IdolModel의 프로토타입은 결국 최상위 객체가 Object.prototype이 된다
// 모든 값들의 최상위 프로토 값은 전부 Object.prototype

/**
 * 그렇다면 이러한 체인이 어떤 장점을 가져다주는가?
 * __proto__ 는 실제 무언가의 프로토타입을 레퍼런스로 갖고있다는 것을 알 수 있다
 * 예를들어 우리가 yuJin.toString()을 찍어보면 Object로 나오게 된다
 * toString()이라는 메서드는 어디에서 온 것일까?
 * Object.prototype에 toString이 존재한다!
 * 즉 아래 두개는 같다.
 */
console.log(yuJin.toString()) // [object Object]
console.log(Object.prototype.toString()) // [object Object]

/**
 * 상속받은 대상의 모든 프로퍼티들을
 * 상속받은 child(=yuJin)에서 사용할 수 있다
 * 따라서 yuJin 객체는 Object.prototype에 있는 기능까지 전부 사용 가능
 * 이것을 프로토타입 체인이라고 부른다
 */

// 어떤것이 유용할까?
function IdolModel2 (name, year) {
  this.name = name
  this.year = year

  this.sayHi = function () {
    return `${this.name}: 안녕~`
  }
}

const wonYoung = new IdolModel2('장원영', 2002)
const yuJin2 = new IdolModel2('안유진', 2003)

console.log(yuJin2.sayHi()) // 안유진: 안녕~
console.log(wonYoung.sayHi()) // 장원영: 안녕~
console.log(yuJin2.sayHi() === wonYoung.sayHi()) // false
// sayHi의 property는 yuJin2, wonYoung 고유의 값이기 때문
// 실제 같은 기능의 프로퍼티이지만 다른 메모리 공간을 차지
// 그러면 리소스 낭비가 될 것이다

// 상속을 받은 것인지 고유의 것인지 확인 -> 고유의 프로퍼티라는 뜻
console.log(yuJin2.hasOwnProperty('sayHi')) // true

// 하지만 개발자는 효율을 따지는 직업이다!!!!
// sayHi가 공유가 됐으면 좋겠다면 프로토타입 체인을 활용해 코드 작성

function IdolModel3 (name, year) {
  this.name = name
  this.year = year
}
// 이렇게 밖에다 정의한다
// (IdolModel3의 인스턴스에서 정의할 것이기때문에 this을 써도 괜찮다)
IdolModel3.prototype.sayHi = function () {
  return `${this.name}: 안녕~`
}

const wonYoung3 = new IdolModel3('장원영', 2002)
const yuJin3 = new IdolModel3('안유진', 2003)

console.log(yuJin3.sayHi()) // 안유진: 안녕~
console.log(wonYoung3.sayHi()) // 장원영: 안녕~
console.log(yuJin3.sayHi() === wonYoung3.sayHi())