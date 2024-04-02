/**
 * try - catch
 *
 * 1) 발생시킬때 -> 던진다고 표현한다 (throw)
 * 2) 명시적으로 인지할 때 -> 잡는다고 한다 (catch)
 */

function runner() {
  try {
    console.log("Hello");
    throw new Error("에러가 발생했습니다");
  } catch (e) {
    console.log("--catch--");
    console.log(e);
  } finally {
    // 에러가 났든 안났든 실행
    console.log("--fianlly--");
  }
}
runner();
