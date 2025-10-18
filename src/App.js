import add from "./StringCalculator.js";
class App {
  async run() {
    console.log("--- 덧셈 계산기 테스트 시작 ---");

    console.log(`입력: "1,2:3" => 결과: ${add("1,2:3")}`); // 예상: 6

    console.log("--- 덧셈 계산기 테스트 종료 ---");
  }
}

export default App;
