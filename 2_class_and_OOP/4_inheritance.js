/**
 * Inheritance
 */

class IdolModel {
  name
  year

  constructor(name, year) {
    this.name = name
    this.year = year
  }
}

class FemaleIdol extends IdolModel{
  dance(){
    return '여자 아이돌이 춤을 춥니다'
  }
}

class MaleIdol extends IdolModel{
  sing(){
    return '남자 아이돌이 노래를 부릅니다'
  }
}

const yuJin = new FemaleIdol('안유진', 2023)
console.log(yuJin)

const  jiMin = new MaleIdol('지민', 1995)
console.log(jiMin)

console.log(yuJin.dance())
console.log(yuJin.name)

console.log(jiMin.sing())
console.log(jiMin.name)

const jiWon = new IdolModel('최지원', 1996)
console.log(jiWon)

console.log(yuJin instanceof IdolModel) // true
console.log(yuJin instanceof FemaleIdol) //true

console.log(jiWon instanceof IdolModel) //true
console.log(jiWon instanceof FemaleIdol) //false