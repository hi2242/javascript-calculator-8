import { MissionUtils } from '@woowacourse/mission-utils';
import add from './StringCalculator.js';
class App {
  async run() {
    MissionUtils.Console.print("덧셈할 문자열을 입력해 주세요.");
    const input = await MissionUtils.Console.readLineAsync("");

    try {
      const result = add(input);
      MissionUtils.Console.print(`결과 : ${result}`);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
