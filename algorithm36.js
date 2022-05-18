function solution(s) {
    // 문자열 -> 배열 -> 정렬 -> 순서뒤집기 -> 문자열
    return s.split("").sort().reverse().join("");
  }