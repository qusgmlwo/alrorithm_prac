function solution(phone_number) {
    return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);      //repeat() 복붙기능(?) 으로 핸드폰 뒷자리 4자리 제외한 나머지 기능 덮기
  }                                                                           //slice() 로 문자열 가르기 -가 붙으면 뒷자리부터 잘라내는기능


  //핸드폰 번호 가리기
  //https://programmers.co.kr/learn/courses/30/lessons/12948