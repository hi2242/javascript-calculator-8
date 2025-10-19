function add(text) {
  // 입력값이 null이거나 빈 문자열이면 0을 반환
  if (!text) {
    return 0;
  }

  let delimiters = /[,:]/;
  let numbersText = text;

  // '//'로 시작한다면 커스텀 구분자 찾기
  if (text.startsWith("//")) {
    // 첫 번째 줄바꿈(\n)을 기준으로 구분자 라인과 숫자 문자열 라인을 분리
    const PARTS = text.split("\n");
    const DELIMITER_LINE = PARTS[0];
    // 두 번째 부분부터 숫자 문자열
    numbersText = PARTS[1];

    // '//'를 제외하여 커스텀 구분자 추출
    const CUSTOM_DELIMITER = DELIMITER_LINE.substring(2);

    // 기존 구분자와 커스텀 구분자를 모두 포함하는 새 정규표현식을 생성
    delimiters = new RegExp(`[,:${CUSTOM_DELIMITER}]`);
  }
  console.log(`구분자 : ${delimiters}`);
  // 앞에서 정해진 구분자를 통해 숫자 분리
  const NUMBERS = numbersText.split(delimiters).map(Number);

  // 배열의 모든 숫자를 더함
  const SUM = NUMBERS.reduce((acc, current) => acc + current, 0);

  return SUM;
}

export default add;
