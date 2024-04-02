/**
 * All about objects
 *
 * 객체를 선언할 때 사용할 수 있는 방법들
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화해서 생성 - class와 OOP
 * 3) function을 사용해서 객체 생성
 */

// 1
const yuJin = {
  name: '안유진',
  year: 2003
}
console.log(yuJin)
// { name: '안유진', year: 2003 }

// 2
class IdolModel{
  name;
  year;
  constructor(name,year) {
    this.name = name
    this.year = year
  }
}
console.log(new IdolModel('안유진',2023))
// IdolModel { name: '안유진', year: 2023 }

// 3 - 생성자 함수(객체를 생성할 수 있는 함수)
function IdolFunction(name, year){
  // this로 프로퍼티 할당 -> new IdolFunction로 사용 가능
  this.name = name
  this.year = year
}
const gaEul =  new IdolFunction('가을',2002)
console.log(gaEul)
// IdolFunction { name: '가을', year: 2002 }