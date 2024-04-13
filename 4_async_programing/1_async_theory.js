/**
 * Async Theory
 */

// 동기 예시
function longWork() {
  const now = new Date()

  /**
   * millisecond since epoch
   * - 1970년 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을 밀리초로 반환
   */
  const millisecond = now.getTime()
  const afterTwoSecond = millisecond + 2*1000

  // 2초 동안 하고 싶은 작업
  // false가 되면 2초 뒤가 될 것이다
  while(new Date().getTime() < afterTwoSecond) {

  }

  console.log('완료!')
}

console.log('Hello')
longWork()
console.log('World')
// Hello
// 완료!
// World


// 비동기 예시
function longWork2() {
  // 2초 기다린 뒤 함수 실행 - 비동기
  setTimeout(()=> {
    console.log('완료')
  }, 2000)
}
console.log('Hello')
longWork2()
console.log('World')
// Hello
// World
// 완료

// 비동기로 프로그래밍 하면 싱글스레드로 자바스크립트를 작업하더라도 효율적으로 스레드를 활용할 수 있다

/**
 * Event Loop
 *
 * 보통 콜스택에 함수가 쌓이고 빠지며 실행되는데,
 * 콜스택에 비동기 함수가 올라가면
 * 그 비동기 함수는 task queue 또는 event queue로 옮겨지게 된다
 * 그래서 콜스택을 막고있지 않게 된다
 * 큐 안에서 작업을 따로 수행하며 기다리게 된다
 *
 * 이벤트 루프는 자스 런타임이 생성되는 순간에 생성된다
 * 이벤트 루프는 큐를 계속 지켜보며 그 안에서 실행이 종료된 함수가 있는지 확인한다
 * 또 추가로 콜스택이 비어있는지 확인
 * 따라서 큐 안의 함수가 종료됐을 때 콜스택이 비어있으면
 * 그 종료된 함수를 다시 콜스택으로 옮겨준다
 * 또 동기로 실행될 것을 실행이 되고 완료 후 종료.
 *
 */