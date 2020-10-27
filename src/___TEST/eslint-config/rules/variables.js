

module.exports = {
  // 룰 검토 완료
  rules: {
    // 상위 스코프에 정의된 변수명 사용 제한 (Resort와 동일)
    'no-shadow': 'error',

    // 함수 선언문, 클래스에 대해서는 순서를 제한하지 않는다. 변수는 선언전에 사용하는 것을 금지한다.
    'no-use-before-define': ['error', 'nofunc'],
  },
};
