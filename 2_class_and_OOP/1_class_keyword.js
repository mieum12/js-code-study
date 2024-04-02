/**
 * Class Keyword
 */

class IdolModel {
  // name;
  // year;
  // 자바스크립트는 이렇게 멤버변수를 등록하지 않아도 된다!!!!
  // 근데 정의 해주는게 좋다!!!!

  //생성자
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayName() {
    return `안녕 나는 ${this.name}이야`;
  }
}

const yuJin = new IdolModel("안유진", 2023);
console.log(yuJin);

const gaeul = new IdolModel("가을", 2002);
console.log(gaeul);

// 이렇게 원하는 만큼 인스턴스를 제작할 수 있다

console.log(yuJin.sayName());

console.log(typeof IdolModel); //function
console.log(typeof yuJin); //object
// class는 함수이다! class로 생성한 인스턴스는 object이다!
