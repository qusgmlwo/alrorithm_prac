function solution(s){
    var answer = " ";                                   //결과값이 문자열

let a = s.toLowerCase().split('p').length - 1;          //a는 s안에있는 모든 P 를 소문자로 낮춘 숫자    
let b = s.toLowerCase().split('y').length - 1;          //b는 s안에있는 모든 Y 를 소문자로 낮춘 숫자

    if(a==b){                                           
    answer = true;
  }else{
      answer = false;
  }

    return answer;
}

// 문자열 내 p와y의 개수
// 