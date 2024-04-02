/**
 * if문과 switch문
 */

const eng = "monday";
let kor;

switch (eng) {
  case "monday":
    kor = "월요일";
    break;
  case "tuesday":
    kor = "화요일";
    break;
  default:
    kor = "나머지";
    break;
}

console.log(kor); // 월요일
