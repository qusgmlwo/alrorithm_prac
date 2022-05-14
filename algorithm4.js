function solution(a, b) {
    let answer = 0;
     
    if(a==b){                   // a==b 라고 선언했는데 결과값이 자꾸 a+b가 나오는중 해결해야할 문제
        answer = (a+b)/2;
    }else if(a<b)
    for (let i = a; i <= b; i++) {         // for문으로 a<b 일경우 a를 b의 숫자까지 계속 더해주는 반복문
    answer = answer + i;                   
   }
    else (a>b)
            for (let i = b; i <= a; i++) {
            answer = answer + i;
            
            }       
    return answer;
    
}



// 두 정수 사이의 합
// https://programmers.co.kr/learn/courses/30/lessons/12912
