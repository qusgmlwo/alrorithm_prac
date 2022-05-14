function solution(arr) {
    
    let sum = 0                                   // 알고리즘 문제6 번 참고
    for (let i = 0; i < arr.length; i++) {        // arr리스트 안에있는 값들을 다 더하는 식
        sum += arr[i];                            
    }

        

    return sum/arr.length;                        // arr리스트 안에있는 값들을 리스트 인덱스 숫자만큼 나누면 평균값이 나옴
}


//평균 구하기
//https://programmers.co.kr/learn/courses/30/lessons/12944