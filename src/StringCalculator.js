function add(text) {
  // 입력값이 null이거나 빈 문자열이면 0을 반환
  if (!text) {
    return 0;
  }

  // 쉼표(,) 또는 콜론(:)을 구분자로 사용하도록 정규표현식으로 변경
  const numbers = text.split(/[,:]/).map(Number);

  // 배열의 모든 숫자를 더함
  const sum = numbers.reduce((acc, current) => acc + current, 0);

  return sum;
}

export default add;
