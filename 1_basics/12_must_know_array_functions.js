/**
 * Array Functions
 */
let iveMembers = ["안유진", "가을", "레이", "이서", "장원영", "리즈"];

console.log(iveMembers);

// push() : 맨 끝에 추가, 직접적으로 변경, 리턴값은 배열의 길이
console.log(iveMembers.push("지원")); //7
console.log(iveMembers);

// pop() :  마지막 요소를 삭제해준다, 삭제한 값을 반환해준다
console.log(iveMembers.pop()); // 지원
console.log(iveMembers);

// shift() :  첫번째 요소를 삭제해준다, 삭제한 값을 반환해준다
console.log(iveMembers.shift()); //안유진

// unshift() :  맨 앞에 추가해준다, 배열의 길이 반환
console.log(iveMembers.unshift("안유진")); // 6

console.log(iveMembers.splice(0, 3)); // 0부터 3개 삭제 //[ '안유진', '가을', '레이' ]
console.log(iveMembers); //[ '이서', '장원영', '리즈' ]

/**
 * 원본을 변경하지 않고 처리하는 함수들, 새로운 배열 리턴
 */

iveMembers = ["안유진", "가을", "레이", "이서", "장원영", "리즈"];

//concat() : 끝에 추가해서 새로운 배열을 반환한다.
console.log(iveMembers.concat("콩순이"));

//slice() :
console.log(iveMembers.slice(0, 3)); //0부터 3번 인덱스 전까지 잘라보여줌

// spread operator
let iveMembers2 = [...iveMembers]; // 리스트를 벗겨내고 상위 리스트에 값을 펼쳐서 넣음
console.log(iveMembers2);

let iveMembers3 = [iveMembers];
console.log(iveMembers3); // 리스트 안에 리스트가 들어가있다

// join() :  array를 string으로 엮기
// 그냥 join() : 콤마를 기준으로 모든 값들을 합치기
console.log(iveMembers.join()); // 안유진,가을,레이,이서,장원영,리즈
console.log(typeof iveMembers.join()); // string
console.log(iveMembers.join("/")); // 안유진/가을/레이/이서/장원영/리즈

// sort() : 오름차순으로 정렬, 원본 변경됨
// 내림차순은 reverse()
iveMembers.sort();
console.log(iveMembers); //[ '가을', '레이', '리즈', '안유진', '이서', '장원영' ]

let num = [1, 6, 3, 8, 2];
console.log(num);

// a,b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
num.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(num); //[ 1, 2, 3, 6, 8 ]

// 내림차순
num.sort((a, b) => (a > b ? -1 : 1));
console.log(num); //[ 8, 6, 3, 2, 1 ]

//map() : 모든 값을 순회하며 각각의 값을 변환, 새로운 배열 반환
console.log(iveMembers.map((x) => `아이브 : ${x}`));

console.log(
  iveMembers.map((x) => {
    if (x === "안유진") {
      return `아이브안유진`;
    } else {
      return x;
    }
  })
);

// filter() : true만 걸러준다
numbers = [1, 3, 8, 7, 2];
console.log(numbers.filter((x) => x % 2 === 0)); // 짝수만 필터링 // [ 8, 2 ]

//find() : filter와 같지만 해당되는 첫번쨰 값만 반환함
console.log(numbers.find((x) => x % 2 === 0)); // 8

//findIndex() : filter와 같지만 해당되는 첫번쨰 값의 인덱스를 반환함
console.log(numbers.findIndex((x) => x % 2 === 0)); // 2

// reduce(콜백함수, 초기값) : 모든 값을 곱하거나 더하거나 할 떄 유용
console.log(
  numbers.reduce((p, n) => {
    p + n;
  }, 0) // 초기값인 0이 먼저 p에 입력된 후 시작한다
);
