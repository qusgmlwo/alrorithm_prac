function solution(arr){
    let answer = [];                                //반복문을 돌려서 나온값을 배열로 넣어주기 위해 초기값 설정
    for(let i = 0; i < arr.length; i++){            
        if(arr[i] !== arr[i + 1]){                  //arr[i]번째의 값과 arr[i+1]값이 다를경우
           answer.push(arr[i]);                     //arr[i]번째의 값만 배열에 추가
        }        
    }
    return answer;
}