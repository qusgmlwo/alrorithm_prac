function solution(x) {
    var answer = true;

    let a = (x+'').split('');     //x를 배열로 변환 
    
    let sum = 0;
    
    for (let i=0; i < a.length; i++){           //x의 배열의 숫자가 결국 x의 자릿수 임으로
        sum += Number(a[i])                     //x배열의 모든 값을 더하면 나눠져야하는 수(sum)가 나옴
    }
    if(x%sum === 0){                            //x를 sum으로 나눴을때
        answer = true                           //나누어진다면 true
    }else{
        answer = false                          //나누어지지 않는다면 false
    }
    
    
    return answer;
}