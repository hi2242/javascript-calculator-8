function add(text) {
  // 입력값이 null이거나 빈 문자열이면 0을 반환
  if (!text) {
    return 0;
  }

  let delimiters = /[,:]/;
  let numbersText = text;

  // '-'인 경우를 예외처리 하기 위해 Scope 밖에서 선언
  let customDelimiter = null;
  // '//'로 시작한다면 커스텀 구분자 찾기
  if (text.startsWith('//')) {
    // 문자열 리터럴의 줄바꿈 \\n에서 \n로 수정한 문자열
    const NORMAL_TEXT = text.replace(/\\n/g, '\n');
    // 첫 번째 줄바꿈(\n)을 기준으로 구분자 라인과 숫자 문자열 라인을 분리
    const PARTS = NORMAL_TEXT.split('\n');
    if (PARTS.length < 2) {
      console.log('[ERROR] 커스텀 구분자 형식이 올바르지 않습니다.');
      throw new Error('[ERROR] 커스텀 구분자 형식이 올바르지 않습니다.');
    }
    const DELIMITER_LINE = PARTS[0];
    // 두 번째 부분부터 숫자 문자열
    numbersText = PARTS[1];

    // '//'를 제외하여 커스텀 구분자 추출
    customDelimiter = DELIMITER_LINE.substring(2);

    // 커스텀 구분자는 문자열이 아닌 문자
    if (customDelimiter.length !== 1) {
      console.log('[ERROR] 커스텀 구분자는 한 글자여야 합니다.');
      throw new Error('[ERROR] 커스텀 구분자는 한 글자여야 합니다.');
    }

    // 특수문자 이스케이프 처리
    const ESCAPED_DELIMITER = customDelimiter.replace(
      /[.*+?^${}()|[\]\\]/g,
      '\\$&'
    );
    // 기존 구분자와 커스텀 구분자를 모두 포함하는 새 정규표현식을 생성
    delimiters = new RegExp(`[,:${ESCAPED_DELIMITER}]`);
  }

  // 구분자로 문자열 분리
  const STRING_NUMBERS = numbersText.split(delimiters);

  // 각 문자열을 숫자로 변환 (빈 문자열은 0으로 취급)
  const NUMBERS = STRING_NUMBERS.map((str) => {
    // trim() 하기 전에 공백이 존재하면 에러로 처리 (커스텀 구분자가 공백이 아니기 때문)
    if (str !== '' && /\s/.test(str)) {
      console.log('[ERROR] 구분자 사이에는 숫자만 입력 가능합니다.');
      throw new Error('[ERROR] 구분자 사이에는 숫자만 입력 가능합니다.');
    }
    const TRIMMED = str.trim();
    if (TRIMMED === '') return 0;

    if (TRIMMED === '0') {
      console.log('[ERROR] 양수만 입력 가능합니다.');
      throw new Error('[ERROR] 양수만 입력 가능합니다.');
    }

    return Number(TRIMMED);
  });

  for (const NUM of NUMBERS) {
    if (isNaN(NUM)) {
      console.log('[ERROR] 구분자 사이에는 숫자만 입력 가능합니다.');
      throw new Error('[ERROR] 구분자 사이에는 숫자만 입력 가능합니다.');
    }

    // 음수 또는 0이 존재하는 경우 (단, 커스텀 구분자가 '-'인 경우는 허용)
    if (NUM <= 0) {
      // 빈 문자열로부터 변환된 0은 허용
      if (NUM === 0 && STRING_NUMBERS[NUMBERS.indexOf(NUM)].trim() === '') {
        continue;
      }

      // 그 외에는 에러
      if (customDelimiter !== '-') {
        console.log('[ERROR] 양수만 입력 가능합니다.');
        throw new Error('[ERROR] 양수만 입력 가능합니다.');
      }
    }
  }

  // 모든 숫자를 더함
  const SUM = NUMBERS.reduce((acc, current) => acc + current, 0);

  return SUM;
}

export default add;
