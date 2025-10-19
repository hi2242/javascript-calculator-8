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
    if (PARTS.length < 2) {
      throw new Error("커스텀 구분자 형식이 올바르지 않습니다.");
    }
    const DELIMITER_LINE = PARTS[0];
    // 두 번째 부분부터 숫자 문자열
    numbersText = PARTS[1];

    // '//'를 제외하여 커스텀 구분자 추출
    const CUSTOM_DELIMITER = DELIMITER_LINE.substring(2);
    // 커스텀 구분자는 문자열이 아닌 문자
    if (CUSTOM_DELIMITER.length !== 1) {
      throw new Error("커스텀 구분자는 한 글자여야 합니다.");
    }

    // 특수문자 이스케이프 처리
    const ESCAPED_DELIMITER = CUSTOM_DELIMITER.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    );
    // 기존 구분자와 커스텀 구분자를 모두 포함하는 새 정규표현식을 생성
    delimiters = new RegExp(`[,:${CUSTOM_DELIMITER}]`);
  }

  // 구분자로 문자열 분리
  const STRING_NUMBERS = numbersText.split(delimiters);

  // 각 문자열을 숫자로 변환 (빈 문자열은 0으로 취급)
  const NUMBERS = STRING_NUMBERS.map((str) =>
    str.trim() === "" ? 0 : Number(str)
  );

  for (const NUM of NUMBERS) {
    if (isNaN(NUM)) {
      throw new Error("구분자 사이에는 숫자만 입력 가능합니다.");
    }
    if (NUM < 0) {
      throw new Error("음수는 입력할 수 없습니다.");
    }
  }

  // 모든 숫자를 더함
  const SUM = NUMBERS.reduce((acc, current) => acc + current, 0);

  return SUM;
}

export default add;
