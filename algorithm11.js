function solution(x, n) {
let answer = [];                                //결과값이 배열이기때문에 초기값 배열설정
    
    for(i=1; i<= n; i++){                       
        let f = answer.push(x*i);               //x를 n번만큼 곱한다 한번 결과가 나올때마다 보내주는중
    }
    
    
    
    
    
    return answer;
}

//x만큼 간격이 있는 n개의 숫자
//https://programmers.co.kr/learn/courses/30/lessons/12954