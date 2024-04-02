/**
 * Getter and Setter
 */

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  /**
   * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
   * 2) private한 값을 반환할 때
   */
  get nameAndYear() {
    return `${this.name}은 ${this.year}년생이야!!`;
  }

  /**
   * 정의한 데이터를 변경
   * -> 잘 쓰지 않는다
   */
  set setName(name) {
    this.name = name;
  }
}

const yuJin = new IdolModel("안유진", 2023);
console.log(yuJin);
console.log(yuJin.nameAndYear);

yuJin.setName = "안유진이이이이";
console.log(yuJin);

class IdolModel2 {
  #name; // private
  year;

  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}

const yuJin2 = new IdolModel2("안유진", 2023);
console.log(yuJin2); // year값만 출력이 된다, name에는 접근 불가
console.log(yuJin2.name); //안유진

yuJin2.name = "최지원";
console.log(yuJin2.name); //최지원

// getter와 setter는 private property가 있을때 가장 많이 사용한다
