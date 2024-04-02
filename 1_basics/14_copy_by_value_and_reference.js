/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 *
 * 1) 기본적으로 모든 primitive 값은 copy by value다.
 * 2) 객체는 copy by reference다.
 */

// copy by value
let original = "안녕"; // 1. 변수 선언과 초기화
let clone = original; // 2. 클론 변수에 오리지널 변수 복사

console.log(original);
console.log(clone);

clone += "반가워요"; // 3. 클론 변수가 가리키고 있는 메모리 공간에만 변화를 준 것

console.log(original); // 안녕
console.log(clone); // 반가워요
console.log(original === clone); //false

// copy by reference
//1. 객체가 메모리에 할당이 된다
// 근데 originalObj라는 변수의 공간에서 다시 실제 객체가 저장된 공간을 가리킨다.
// 즉 각각의 메모리 공간에 존재하게 된다
let originalObj = {
  name: "안유진",
  group: "아이브",
};
let cloneObj = originalObj; // 2. 클론 변수에 오리지널 변수 복사해 저장
// 오리지날오브젝트는 오브젝트를 들고있는데 아니라 가리킬 뿐이다
// 마찬가지로 클론오브젝트도 그 오브젝트의 공간을 가리키게 된다

console.log(originalObj); // { name: '안유진', group: '아이브' }
console.log(cloneObj); // { name: '안유진', group: '아이브' }

originalObj["group"] = "아이브말고다른그룹"; // 3. 객체 변경
console.log(originalObj); // { name: '안유진', group: '아이브말고다른그룹' }
console.log(cloneObj); // { name: '안유진', group: '아이브말고다른그룹' }
// -> 오리지날만 변경했는데 클론도 전부 변경됐다

console.log(originalObj === cloneObj); // true

// 오브젝트의 값이 같다고 같은 값이라고 인식하지 않는다
originalObj = {
  name: "지원",
  group: "구글",
};
cloneObj = {
  name: "지원",
  group: "구글",
};
console.log(originalObj === cloneObj); //false

// 퀴즈
const yuJin1 = {
  name: "안유진",
  group: "아이브",
};
const yuJin2 = yuJin1;
const yuJin3 = {
  name: "안유진",
  group: "아이브",
};
console.log(yuJin1 === yuJin2); //true
// 1,2는 참조 복사라서 같은 메모리 공간을 참조하게 됐다
console.log(yuJin1 === yuJin3); //false
// 1,3은 값은 똑같지만 다른 메모리 공간을 차지하고 있다
console.log(yuJin2 === yuJin3); //false
// 2,3은 1,3 비교와 같다

/**
 * Spread Operator는 copy by value
 * -> 실제로 오브젝트를 새로 선언했기 때문에
 */
const yuJin4 = {
  ...yuJin3,
};

console.log(yuJin4);
console.log(yuJin3 === yuJin4); //false

// 순서도 중요하다, 나중의 값으로 대체된다
const yuJin5 = {
  year: 2023,
  ...yuJin4,
};
