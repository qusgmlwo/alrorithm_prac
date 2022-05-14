function solution(arr1, arr2) {
    let answer = [];                            //결과값이 배열로 나와야하기 때문에 초기값 설정

    for(let i=0; i<arr1.length; i++){           
        let sum = [];
        for(let j=0; j<arr1[i].length; j++){    //i와j를 같이 돌려야하기때문에 2중 for문작성
            sum.push(arr1[i][j] + arr2[i][j])   //arr1과arr2의 같은 자리를 더한값을 push를 통해 5번라인의 sum배열로 전송
            
        }
        answer.push(sum)                        //값을 받은 sum배열값을 큰 배열에 넣기위해 2번라인의 배열에 전송
    }
    return answer;
}


//행렬의 덧셈
//https://programmers.co.kr/learn/courses/30/lessons/12950