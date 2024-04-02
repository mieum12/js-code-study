/**
 * Loops
 *
 * 1) for
 * 2) while
 */

for (let i = 0; i < 10; i++) {
  console.log(i); // 0부터 9까지 찍히게 된다
}

for (let i = 0; i < 3; i++) {
  for (let j = 3; j > 0; j--) {
    console.log(i, j);
  }
}

// 0 3
// 0 2
// 0 1
// 1 3
// 1 2
// 1 1
// 2 3
// 2 2
// 2 1

// *을 이용해 6x6의 정사각형을 출력해라
let square = "";
let side = 6;

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < side; j++) {
    square += "*";
  }
  square += "\n";
}
console.log(square);
// ******
// ******
// ******
// ******
// ******
// ******

/**
 * 📍 for in loop
 *
 * 인덱스값이나 키값을 가져올 때 사용
 */

//오브젝트의 경우 - 키값을 받을 수 있다
const jiwon = {
  name: "지원",
  year: 1996,
};
//jiwon이라는 오브젝트의 키값들을 key에 저장하게 된다
for (let key in jiwon) {
  console.log(key); // name year
}

//배열의 경우 - 인덱스 값을 저장해 받을 수 있다
const membersArray = ["지원", "혜원", "경준"];
for (let key in membersArray) {
  console.log(key); // 0,1,2
  console.log(`${key}: ${membersArray[key]}`);
  // 0: 지원
  // 1: 혜원
  // 2: 경준
}

/**
 * 📍 for of loop
 *
 * 값을 가져올때 사용
 * 이터러블에서 사용가능(looping을 할 수 있는 값들에서 사용 가능)
 */
const membersArr = ["지원", "혜원", "경준"];
for (let value of membersArr) {
  console.log(value); //지원 혜원 경준
}

/**
 * while loop
 */

/**
 * break
 */

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i); // 0 1 2 3 4
}

let number = 0;
while (number < 10) {
  if (number === 5) {
    break;
  }
  number++;
  console.log(number); // 1 2 3 4 5
}

/**
 * continue
 */
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // 현재 진행중인 loop을 종료하고 다음 loop을 진행하라
  }
  console.log(i); // 0 1 2 3 4 6 7 8 9
  //5가 스킵되어 나온다
}
