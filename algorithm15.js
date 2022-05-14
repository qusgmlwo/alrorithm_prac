function solution(a, b) {
    var answer = 0;
  
    for (i = 0; i < a.length; i++) {
      answer += a[i] * b[i];
    }
    return answer;
  }

  
//내적
//2분컷