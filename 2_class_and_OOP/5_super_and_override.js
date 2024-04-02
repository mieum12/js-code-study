/**
 * Super and Override
 */
class IdolModel {
  name
  year

  constructor(name, year) {
    this.name = name
    this.year = year
  }

  sayHello(){
    return `안녕 ${this.name}이야`
  }
}

class FemaleIdol extends IdolModel{
  part

  // override
  // 생성자를 덮어쓰고 싶다면 생성자를 또 만들어주면 된다
  constructor(name, year, part) {
    // 기존 생성자를 그대로 사용하고싶을 떄 super 키워드를 쓰면 된다
    super(name, year); // 부모클래스의 생성자 실행
    this.part = part
  }

  // 재정의
  sayHello(){
    // 주의: super.name 이 아님!
    // 근데 super 키워드는 함수는 실행 가능
    // return `안녕 ${this.name}이야 내 파트는 ${this.part}이야`
    return `${super.sayHello()} 내 파트는 ${this.part}이야`
  }
}

const yuJin = new FemaleIdol('안유진',2023, '보컬')
console.log(yuJin.sayHello())