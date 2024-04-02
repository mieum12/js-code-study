/**
 * Property Attribute
 *
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 엑세서 프로퍼티 - 자체적으로 값을 갖고있지 않지만 다른 값을 가져오거나
 *                  설정할 때 호출되는 함수로 구성된 프로퍼티
 *                  예를들면 getter, setter
 */

const yuJin = {
  name: '안유진',
  year: 2003
}

console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'))
// { value: '안유진', writable: true, enumerable: true, configurable: true }

console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'))
//{ value: 2003, writable: true, enumerable: true, configurable: true }

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정할 수 있는지 여부, false로 설정하면 프로퍼티값을 수정할 수 없다
 * 3) enumerable - 열거가 가능한지 여부, for ...in 룹 등을 사영할 수 있으며 true를 반환한다
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다
 *                  false 일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다
 *                  단, writable
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
console.log(yuJin2.age)

yuJin2.age = 32
console.log(yuJin2.age) // 32
console.log(yuJin2.year) //1991

console.log(Object.getOwnPropertyDescriptor(yuJin2,'age'))
// {
//   get: [Function: get age],
//   set: [Function: set age],
//   enumerable: true,
//     configurable: true
// }

/**
 * 프로퍼티 에트리뷰트를 실제 정의할 수 있다
 */
Object.defineProperty(yuJin2,'height',{
  value: 172,
  // 아래 3개를 추가해주지 않으면 전부 false로 들어간다
  writable: true,
  enumerable: true,
  configurable: true
})
console.log(yuJin2)
// { name: '안유진', year: 1991, age: [Getter/Setter], height: 172 }

/**
 * witable test
 * 변경 가능
 */
yuJin2.height = 180
console.log(yuJin2) //180으로 나온다
Object.defineProperty(yuJin2,'height',{
  writable: false // 추가한 값만 변경 가능 ->  false로 바꾸면 더이상 값 변경이 불가하다
})

/**
 * Enumerable test
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
