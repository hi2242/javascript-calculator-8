import add from "./StringCalculator.js";
class App {
  async run() {
    console.log("--- 덧셈 계산기 테스트 시작 ---");

    console.log(`입력: "1,2:3" => 결과: ${add("1,2:3")}`); // 예상: 6
    console.log(`입력: "//;\\n1;2;3" => 결과: ${add("//;\n1;2;3")}`); // 예상: 6
    console.log(`입력: "//;\\n1;2,3:4" => 결과: ${add("//;\n1;2,3:4")}`); // 예상: 10
    console.log(`입력: "//0\\n0,1,2" => 결과: ${add("//;\n0,1,2")}`); // 예상: 3
    console.log(`입력: "//-\\n-1,2,3" => 결과: ${add("//-\n-1,2,3")}`); // 예상: 6
    console.log(`입력: "//;\\n10,20,30" => 결과: ${add("//;\n10,20,30")}`); // 예상: 60
    console.log(`입력: "//0\\n10,20,30" => 결과: ${add("//0\n10,20,30")}`); // 예상: 6
    console.log(`입력: "//0\\n10,20,0" => 결과: ${add("//0\n10,20,0")}`); // 예상: 3

    console.log("--- 덧셈 계산기 테스트 종료 ---");
  }
}

export default App;
