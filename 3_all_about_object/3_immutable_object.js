/**
 * Immutable Object
 * 중요!!!
 * extensive, seal, freeze를 이용해 이뮤터블 프로그래밍을 섬세하게 구현 가능
 */

const yuJin =  {
  name: '안유진',
  year: 2003,

  get age(){
    return new Date().getFullYear() - this.year
  },
  set age(age){
    this.year = new Date().getFullYear() - age
  }
}

console.log(yuJin)

/**
 * 1. Extensible - 확장 가능 여부
 * 많이 사용하지는 않는다
 * isExtensible - 값을 추가할 수 없게한다, 삭제는 가능
 */

// yuJin이라는 객체가 확장이 가능한지
console.log(Object.isExtensible(yuJin)) //true
// 오브젝트를 생성할때 기본 extensible 값은 true이다
// 값을 추가 가능하다
yuJin['position'] = 'vocal'
console.log(yuJin) // { name: '안유진', year: 2003, age: [Getter/Setter], position: 'vocal' }

// extensible을 false로 만들어보자
Object.preventExtensions(yuJin)
console.log(Object.isExtensible(yuJin)) //false
// 이 상태에서 프로퍼티를 추가해보자
yuJin['groupName'] = 'ive'
console.log(yuJin) //하면 아무것도 바뀐게 없음
// 하지만 에러를 내진 않음
// 즉, isExtensible는 값을 추가하지 못하게 하는 기능을 한다

// 하지만 삭제는 가능하다
delete yuJin['position']
console.log(yuJin) // { name: '안유진', year: 2003, age: [Getter/Setter] }
// position이 삭제된 것을 볼 수 있다

/**
 * 2. Seal
 * 편지봉투에 seal을 붙여 봉인한다는 의미
 */

const yuJin2 = {
  name: '안유진',
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year
  },
  set age(age) {
    this.year = new Date().getFullYear() - age
  }
}
console.log(yuJin2)
// isSealed - 씰이 되어있는지 안되어있는지 확인
console.log(Object.isSealed(yuJin2)) // false
// 기본값은 false이다 = 봉인이 안되어있다는 뜻이다

// 만약 봉인을 하게 된다면?
Object.seal(yuJin2)
console.log(Object.isSealed(yuJin2)) // true

// 값을 추가해보자
yuJin2['groupName'] = 'ive'
console.log(yuJin2) // groupName이 추가가 안되어있는 것을 알 수 있다
// isExtensive처럼 값을 추가하지 못하게 함

// 값을 삭제해보자
delete yuJin2['name']
console.log(yuJin2) // 삭제도 되지 않는다, 에러는 나지 않음!!

// 프로퍼티 애트리뷰트를 변경해보자
Object.defineProperty(yuJin2,'name', {
  value:' 최지원'
})
console.log(Object.getOwnPropertyDescriptor(yuJin2,'name'))
// {
//   value: ' 최지원',
//     writable: true,
//   enumerable: true,
//   configurable: false
// }
// value가 잘 변경됨
// 다른 것도 해보면 프로퍼티 애트리뷰트는 잘 변경된다
// seal을 하는 작업은 configurable을 false로 만드는 작업과 똑같다고 생각하면 된다, 그 효과도 똑같다 + 거기에 값을 추가하거나 삭제하지 못하는 상황

/**
 * 3. Freezed
 * 가장 높은 immutable 프로그래밍의 등급. 아예 동결시키는 것.
 * 읽기 외에 모든 기능을 불가능하게 만든다
 */
const yuJin3 = {
  name: '안유진',
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year
  },
  set age(age) {
    this.year = new Date().getFullYear() - age
  }
}

// 동결됐는지 확인
console.log(Object.isFrozen(yuJin3)) //false

// 얼려보자
Object.freeze(yuJin3)
console.log(Object.isFrozen(yuJin3)) // true
// 값 추가, 삭제 불가능
// 프로퍼티 애트리뷰트 변경 불가

// 프로퍼티 애트리뷰트 확인
console.log(Object.getOwnPropertyDescriptor(yuJin3,'name'))
// {
//   value: '안유진',
//     writable: false,
//   enumerable: true,
//   configurable: false
// }
// enumerable빼고 전부 false, 즉 값을 바꾸지 못함

/**
 * Object Nesting 상황에서는 어떻게 될까?
 * (객체 안에 또 객체가 들어있는 상황)
 */

const yuJin4 = {
  name: '안유진',
  year: 2003,
  wonYoung: {
    name:'장원영',
    year: 2002,
  }
}
// 상위 오브젝트를 freeze, seal하거나 extensive를 변경했을때
// 하위의 오브젝트가 어떻게 될까?

// freeze해보기
Object.freeze((yuJin4))
console.log(Object.isFrozen(yuJin4)) //true
console.log(Object.isFrozen(yuJin4['wonYoung'])) //false
// 즉 상위 오브젝트를 freeze했다고해서 하위도 그렇게 되는것은 아니다!!
// 이것은 seal, extensive 전부 마찬가지이다