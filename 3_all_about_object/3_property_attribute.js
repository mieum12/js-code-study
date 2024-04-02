/**
 * Property Attribute
 *
 * Property는 우리가 object를 선언했을 때 ex. { name: 'jiwon' }
 * 이 안에 들어가는 값(name)들을 말한다
 * 그 프로퍼티에 또 속성이 추가로 자동 생성된다
 * 그 속성들에 대해 알아보는 것
 *
 * 프로퍼티는 2가지 타입이 있다
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 엑세서 프로퍼티 - 자체적으로 값을 갖고있지 않지만 다른 값을 가져오거나
 *                  설정할 때 호출되는 함수로 구성된 프로퍼티
 *                  예를들면 getter, setter
 */

const yuJin = {
  name: '안유진',
  year: 2003
}

// Object란? 대문자인 것을 보니 생성자함수 또는 클래스의 이름일 것이다
// getOwnPropertyDescriptor: 생성자함수, 클래스에 점(.)이 바로 붙으면 static함수이다
//    그 안에 우리가 프로퍼티 애트리뷰트를 알고싶은 객체를 넣어준다 = yuJin
//    그 다음 정보를 가져오고싶은 프로퍼티의 키 값을 넣어준다 = 'name'
// 즉, yuJin이라는 객체의 name이라는 프로퍼티의 프로퍼티 애트리뷰트를 알 수 있다
console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'))
// { value: '안유진', writable: true, enumerable: true, configurable: true }

console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'))
//{ value: 2003, writable: true, enumerable: true, configurable: true }

/**
 * 📍 그렇다면 이렇게 나온 프로퍼티 애트리뷰트의 내용들에 대해 알아보자
 *
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정할 수 있는지 여부, false로 설정하면 프로퍼티값을 수정할 수 없다
 * 3) enumerable - 열거가 가능한지 여부, for ...in 룹 등을 사영할 수 있으며 true를 반환한다
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다
 *                  false 일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다
 *                  단, writable이 true인 경우 값 변경과 writable을 변경하는 것은 가능!
 */

// 모든 프로퍼티의 프로퍼티 애트리뷰트를 한번에 출력하기
console.log(Object.getOwnPropertyDescriptors(yuJin))
// {
//   name: {
//     value: '안유진',
//       writable: true,
//       enumerable: true,
//       configurable: true
//   },
//   year: { value: 2003, writable: true, enumerable: true, configurable: true }
// }

const yuJin2 =  {
  // 데이터 프로퍼티 2개
  name: '안유진',
  year: 2003,

  // 엑세서 프로퍼티 2개
  get age(){
    return new Date().getFullYear() - this.year
  },
  set age(age){
    this.year = new Date().getFullYear() - age
  }
}

console.log(yuJin2)
console.log(yuJin2.age) // 21

yuJin2.age = 32
console.log(yuJin2.age) // 32
console.log(yuJin2.year) //1991
// 즉 getter, setter 전부 잘 작동한다

console.log(Object.getOwnPropertyDescriptor(yuJin2,'age'))
// {
//   get: [Function: get age],
//   set: [Function: set age],
//   enumerable: true,
//     configurable: true
// }

// 게터와 세터가 추가로 존재하는 것을 알 수 있다
// accessor property에는 value라는 property attribute가 존재하지 않고
// set, get이라는 property attribute가 존재 = 실제 게터, 세터 함수를 의미하게 된다

// 즉, 데이터 프로퍼티, 엑세서 프로퍼티를 구분하는 방법은 이렇게 getOwnPropertyDescriptor로 확인 가능

/**
 * 📍 프로퍼티 에트리뷰트를 실제 정의할 수 있다, 재정의도 가능하다
 */

// defineProperty의 사용
// 기존의 yuJin2에 새로운 height라는 키값을 추가하고 싶을 때, 프로퍼티 에트리뷰트를 실제 정의할 수 있다
Object.defineProperty(yuJin2,'height',{
  value: 172,
  // 아래 3개를 추가해주지 않으면 전부 false로 들어간다
  writable: true,
  enumerable: true,
  configurable: true
})
console.log(yuJin2)
// { name: '안유진', year: 1991, age: [Getter/Setter], height: 172 }
// height가 추가된 것을 볼 수 있다

/**
 * 📍 writable test - 값 변경 여부
 * 변경 가능
 */
yuJin2.height = 180
console.log(yuJin2) //180으로 나온다
Object.defineProperty(yuJin2,'height',{
  writable: false // 추가한 값만 변경 가능 ->  false로 바꾸면 더이상 값 변경이 불가하다
})

/**
 * 📍 Enumerable test - 열거 여부 설정
 */
console.log(Object.keys(yuJin2)) //[ 'name', 'year', 'age', 'height' ]
for (let key in yuJin2){
  console.log(key)
}
// name
// year
// age
// height
// 이렇게 열거가 잘 되며 for loop도 돌 수 있다

Object.defineProperty(yuJin2,'name',{
  enumerable: false
})
console.log(Object.keys(yuJin2)) //[ 'year', 'age', 'height' ]
for (let key in yuJin2){
  console.log(key)
}
// year
// age
// height

//name 프로퍼디의 이뉴머블을 false로 바꾸었기떄문에 더이상 열거가 되지 않는다

console.log(yuJin2) // { year: 1992, age: [Getter/Setter], height: 180 }
// 여기서도 name이 안나온다
// 그렇다면 name이 사라졌나? 아니다
console.log(yuJin2.name) // 안유진
//name은 존재하고 있다. 다만 열거를 할 수 없을 뿐이다

/**
 * 📍 Configurable test - 프로퍼티 어트리뷰트의 재정의 여부
 */
// Object.defineProperty(yuJin2,'height',{
//   configurable: false
// })
// console.log(Object.getOwnPropertyDescriptor(yuJin2,'height')) // configurable: false인지 확인
// 바꿔보자
// Object.defineProperty(yuJin2,'height', {
//   enumerable: false
// })
// TypeError: Cannot redefine property: height
// 이런 에러가 난다 : height라는 프로퍼티를 재정의할 수 없다
// configurable: false이기 떄문이다 따라서 값을 더이상 변경할 수 없다

// 하지만 앞서 말했듯 writable이 true인 경우
// (1) configurable이 false더라도 value를 변경하는 것은 가능!
Object.defineProperty(yuJin2,'height',{
  writable: true,
  configurable: false
})
// writable: true 이기 때문에 value는 바꿀 수 있다
// 바꿔보자
Object.defineProperty(yuJin2,'height', {
  value: 170,
})
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'))
// { value: 170, writable: true, enumerable: true, configurable: false }로 잘 나온다


// (2) configurable이 false더라도 writable을 false로 변경하는 것도 가능!
// 바꿔보자
Object.defineProperty(yuJin2,'height', {
  writable: false,
})
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'))
// { value: 170, writable: false, enumerable: true, configurable: false }로 잘 바뀜
// 하지만 다시 true로 바꾸려하면 에러가 난다

// 즉, configurable이 false면 기본적으로 property attribute는 변경이 불가하다
// 단 예외!
// writable이 true인 경우 value 값 변경가능, writable을 true -> false로 변경 가능