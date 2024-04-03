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
console.log(yuJin2.sayHi === wonYoung.sayHi) // false
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
// IdolModel3의 안에 sayHi를 정의하지 않고 밖에 했지만 IdolModel3의 prototype에 함수를 저장하고, 각각 객체별로 생성하지 않았기 때문
// prototype은 실제 객체를 만들면 __proto가 가져가게 되는(레퍼런스하게 되는) 객체이다
// 상속받는 부모의 역할을 하기에 sayHi는 상속이 돼서 실행이 가능하다

const wonYoung3 = new IdolModel3('장원영', 2002)
const yuJin3 = new IdolModel3('안유진', 2003)

console.log(yuJin3.sayHi()) // 안유진: 안녕~
console.log(wonYoung3.sayHi()) // 장원영: 안녕~
console.log(yuJin3.sayHi === wonYoung3.sayHi) // true
// 같은 값이라는 것이다. 한 공간에 저장되어있다는 뜻이라 리소스를 더 효율적으로 사용 가능하다

console.log(yuJin3.hasOwnProperty('sayHi')) //false
// 상속받은 프로퍼티이다. yuJin3에 선언된 객체는 아니다


// 그렇다면 static 키워드로 선언한 값은 어떻게 선언할까
// (당연히 인스턴스에는 이 선언이 존재하지 않긴하다)
IdolModel3.sayStaticHi = function (){
  return '안녕하세요 저는 static method입니다~'
}
console.log(IdolModel3.sayStaticHi())

/**
 * Overriding
 */
function IdolModel4 (name, year) {
  this.name = name
  this.year = year
}

IdolModel4.prototype.sayHi = function (){
  return '안녕하세요 전 프로토타입 메서드입니다'
}

const yuJin4 = new IdolModel4('안유진', 2003)
console.log(yuJin4.sayHi()) // 안녕하세요 전 프로토타입 메서드입니다
// 왜냐면 프로토타입 상속을 받기 떄문에 sayHi함수는 존재한다

// 이것을 오버라이드하려면
function IdolModel5 (name, year) {
  this.name = name
  this.year = year

  // 이렇게 써준다
  this.sayHi = function (){
    return '안녕하세요 전 인스턴스 메서드입니다'
  }
}
IdolModel5.prototype.sayHi = function (){
  return '안녕하세요 전 프로토타입 메서드입니다'
}

const yuJin5 = new IdolModel5('안유진', 2003)
console.log(yuJin5.sayHi()) // 안녕하세요 전 인스턴스 메서드입니다
// 즉, 상속받은 sayHi를 인스턴스의 sayHi로 덮어씌울 수 있다
// 이것을 프로퍼티 셰도잉이라 한다 - 클래스의 오버라이드와 똑같다

/**
 * 📍 getPrototypeOf (가져오기), setPrototypeOf (변경하기)
 *
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 *
 * 자스는 일반적인 OOP와는 다르기 때문에 이런 변경이 가능
 */
function IdolModel(name, year) {
  this.name = name
  this.year = year
}
// 이렇게 하면 인스턴스를 만들때 모두 상속받기때문에 효율적으로 관리할 수 있다고 배웠다
IdolModel.prototype.sayHi = function (){
  return `${this.name}이 인사합니당`
}
function FemaleIdolModel(name, year) {
  this.name = name
  this.year = year

  //인스턴스 안에 그냥 함수를 만들어볼게요
  this.dance = function (){
    return `${this.name}가 춤을 춥니다`
  }
}

const gaEul = new IdolModel('가을', 2004)
const ray = new FemaleIdolModel('레이', 2004)

console.log(gaEul.__proto__) // { sayHi: [Function (anonymous)] }
console.log(gaEul.__proto__ === IdolModel.prototype) //true
// getPrototypeOf은 프로토를 가져오라는 뜻
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype) // true

console.log(gaEul.sayHi()) // 가을이 인사합니당
console.log(ray.dance()) // 레이가 춤을 춥니다

// 하지만
// console.log(ray.sayHi())
// ray에는 sayHi를 선언하지 않았기때문에 에러가 난다
// sayHi를 ray에 정의하고싶은게 아니고 IdolModel의 프로토타입을 상속받고싶다
console.log(ray.__proto__ === FemaleIdolModel.prototype) //true

// [인스턴스의 __proto__ 변경]
// 인스턴스를 만든 다음 상속하는 대상을 바꿔버릴 수 있다!
// 이미 생성된 객체의 상속 체인, 프로토 체인을 바꿔버렸다
Object.setPrototypeOf(ray, IdolModel.prototype)
console.log(ray.sayHi()) // 레이이 인사합니당
// 이제 에러가 안나고 사용 가능하다, 변경한 프로토체인의 함수 실행 가능

console.log(ray.constructor) // [Function: IdolModel]
// 원래 FemaleIdolModel이 나와야하는데 프로토를 바꿨기때문에 IdolModel이 나온다
// 즉
console.log(ray.constructor === FemaleIdolModel) // false
console.log(ray.constructor === IdolModel) //true
// FemaleIdolModel의 프로토타입은 그대로 있지만 ray 객체와의 연결이 끊긴것

// [함수의 prototype 변경]
// 여기서 강제로 이렇게 입력을 해서 변경할 수 있다
FemaleIdolModel.prototype = IdolModel.prototype

const eSeo = new FemaleIdolModel('이서', 2007)
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype) // true
// 위에서 변경을 했음에도 true가 나온다
console.log(FemaleIdolModel.prototype === IdolModel.prototype) //true

// 즉 함수에서 직접 프로토타입을 변경해버리면 new 키워드로 인스턴스를 생성할 때
// 변경된 프로토타입을 그대로 상속받기때문에
// Object.getPrototypeOf(eSeo)와 FemaleIdolModel.prototype와 IdolModel.prototype가 전부 같아짐
// 하지만 이미 ray 객체를 생성한 후! ray 객체의 프로토타입만 바꾸게 되면 그 객체만 변경이 되고
// 실제 ray 객체를 생성할때 사용한 함수의 프로토타입은 변경되지 않음