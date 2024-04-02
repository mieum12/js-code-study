/**
 * function 함수
 */

/**
 * DRY
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */

function cal(x, y) {
  return x + y;
}

// Arrow function
const mul = (x, y) => {
  return x * y;
};

const mul2 = (x, y) => x * y;

const mul3 = (x) => (y) => (z) => `x: ${x}, y: ${y}, z: ${z}`;
console.log(mul3(2)(5)(8)); // x: 2, y: 5, z: 8

function mul3_1(x) {
  return function (y) {
    return function (z) {
      return `x: ${x}, y: ${y}, z: ${z}`;
    };
  };
}

// 변수에 함수 저장
const mul4 = function (x, y) {
  return x * y;
};

// Arguments : 실제 입력된 값들을 순서대로 보여줌
const mul5 = function (x, y, z) {
  console.log(arguments); // [Arguments] { '0': 2, '1': 3, '2': 4 }
  return x * y * z;
};
console.log(mul5(2, 3, 4));

// ...arguments의 사용 -> 무한하게 파라미터를 받기
const multiplyAll = function (...arguments) {
  //실제 입력된 값들을(=Object.values) 전부 하나씩 곱해서 반환
  return Object.values(arguments).reduce((a, b) => a * b, 1);
};

/**
 * 즉시 실행 함수 Immediately invoked function
 */
(function (x, y) {
  console.log(x * y);
})(4, 5);

console.log(typeof mul3); //function
console.log(mul3 instanceof Object); // mul3가 Object인가? 비교 //true
