/**
 * Object 객체
 */

// key : value pair
let yuJin = {
  name: "안유진",
  group: "아이브",
  dance: function () {
    return `${this.name}이 춤을 춥니다!`;
  },
};

console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin["name"]);

const key = "name";
console.log(yuJin[key]);
console.log(yuJin.dance());

const nameKey = "name";
const nameValue = "안유진";
const groupKey = "group";
const groupValue = "아이브";

const yuJin2 = {
  [nameKey]: nameValue,
  [groupKey]: groupValue,
  dance: function () {
    return `${this.name}이 춤을 춥니다!`;
  },
};

yuJin2["group"] = "아이브인가 뭔가"; // 값을 바꿀 수 있다
console.log(yuJin2);

yuJin2["englishName"] = "An Yu Jin"; // 존재하지 않는 키를 넣으면 속성이 추가됨
console.log(yuJin2);

delete yuJin2["englishName"]; //삭제
console.log(yuJin2);

/**
 * const로 선언한 객체의 특징
 *
 * 1) const로 선언할 경우 객체 자체를 변경할 수는 없다
 * 2) 객체 안의 프로퍼티나 메서드는 변경할 수 없다
 */

/**
 * 모든 키, 밸류값 다 가져오기
 */
console.log(Object.keys(yuJin));
console.log(Object.values(yuJin));

const name = "안유진";
const yuJin3 = {
  // 두 개는 같다
  name: name,
  name,
};
