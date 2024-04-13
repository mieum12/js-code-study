/**
 * callback
 */
function waitAndRun() {
  setTimeout(()=>{
    console.log('끝')
  },2000)
}
// waitAndRun()

function waitAndRun2() {
  setTimeout(()=>{
    console.log('1번 콜백 끝')
    setTimeout(()=>{
      console.log('2번 콜백 끝')
      setTimeout(()=>{
        console.log('3번 콜백 끝')
        setTimeout(()=>{
          console.log('4번 콜백 끝')
          // 이런식으로 계쏙 된다면?
          // 콜백헬!
        },2000)
      },2000)
    },2000)
  },2000)
}
// waitAndRun2()

/**
 * Promise
 */
const timeoutPromise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('완료')
  },2000)
})
// timeoutPromise.then((res)=>{
//   console.log('---then---')
//   console.log(res)
// })

// promise를 반환하는 함수를 만들 수 있다
const getPromise = (seconds) => new Promise((resolve, reject) => {
  setTimeout(()=>{
    // if (xxx){
      resolve('완료~')
    // } else {
    //   reject('에러!!')
    // }
  },seconds*1000)
})

// getPromise(1)
//   .then((res)=> {
//     console.log('---then1---')
//     console.log(res)
//     return getPromise(1)
//   }).then((res)=> {
//   console.log('---then2---')
//   console.log(res)
//   return getPromise(1)
// }).then((res)=> {
//   console.log('---then3---')
//   console.log(res)
//   return getPromise(1)
// }).then((res)=> {
//   console.log('---then4---')
//   console.log(res)
//   return getPromise(1)
// }).catch((rej)=>{
//   console.log(rej)
// }).finally(()=>{
//   console.log('---finally---')
// })
// 이렇게 계속 체이닝 가능하다

// 동시에 실행하기
Promise.all([
  getPromise(1),
  getPromise(2),
  getPromise(1),
]).then(res => {
  console.log(res)
})
// 가장 느린 함수 기준으로 then이 불린다