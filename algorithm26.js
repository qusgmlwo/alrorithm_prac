function solution(arr) {                                // 이 방법으로도 값이 출력 가능하지만

    let answer = [];                                        
    
    if (arr.length > 1){
        
        let a = arr.sort((a,b) => b-a)                  // 요기 sort 이노무스키가 처리시간을 겁나게 잡아먹음
        answer = arr.slice(0,-1);                       // 그래서 싹 다 엎고 다시짜야함 화가 많이남
    }                                                   
    if(arr.length == 1){   
     answer = [-1];
    }
    
    
    return answer;
   
}



function solution(arr) {                                    //그래서 제일 작은 수를 빼는 방법으로 다시짯음 
    if(arr.length === 1) return[-1];                        //arr의 요소 수가 1개면 작은값을 뺏을때 
                                                            //arr이 빈 배열이 됨으로 -1 리턴

    let i = 0;                                  
    for (let j = 1; j<arr.length; j++){                     //arr의 j번째가 1부터 arr의 요소 숫자 만큼돌리고 
        if(arr[j]<arr[i]) {                                 //arr의 j번째가 i번째보다 작은경우에
            i=j;                                            //이 코드 짠사람 수학의 신인가? 지렸다 
        }
    }

    arr.splice(i,1);

    return arr;
}
