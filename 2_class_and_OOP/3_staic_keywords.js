/**
 * Static Keywords
 */

class IdolModel {
  name;
  year;
  static groupName = "아이브";

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  static returnGroupName() {
    return "아이브";
  }
}
const yuJin = new IdolModel("안유진", 2023);
console.log(yuJin);

// static - 스태틱 키워드는 인스턴스에 귀속되지 않고 클래스 자체에 귀속된다.
// 그래서 new로 인스턴스를 생성할 필요가 없음
console.log(IdolModel.groupName);
console.log(IdolModel.returnGroupName);


/**
 * factory constructor
 *
 * 하나의 생성자로만 인스턴스를 반환받지 않고,
 * 미리 어떤 데이터를 입력받아서 이 인스턴스를 만들지 템플리터에서 정의를 해놓을 수 있다
 */

class IdolModel2 {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  // 오브젝트로부터 이 클래스의 인스턴스를 만들겠다는 뜻
  static fromObject(object){
    return new IdolModel2(object.name, object.year)
  }

  static fromList(list){
    return new IdolModel2(list[0], list[1])
  }

}

// new를 쓰지 않아도 인스턴스,객체가 생겨난다
const yuJin2 = IdolModel2.fromObject({
  name: '안유진',
  year: 2023
})
console.log((yuJin2))

const wonYoung = IdolModel2.fromList(['장원영', 2023])
console.log((wonYoung))