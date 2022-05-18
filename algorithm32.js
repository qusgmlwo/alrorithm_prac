function solution(numbers) {
    const answer = [];                                                               //반복문 돌려서 나온값을 배열에 넣기위해 초기값 설정

    for(let i = 0, len = numbers.length; i < len; i++) {                            //
        for(let j = i + 1, len = numbers.length; j < len; j++) {
            if(!answer.includes(numbers[i] + numbers[j])) answer.push(numbers[i] + numbers[j])  //numbers[i] + number[j] 값이 answer배열에 없을경우만
        }                                                                                       //answer배열에 넣기
    }                                                                                           
    
    return answer.sort((a, b) => a - b);                        //배열 오름차순으로 정렬하고 리턴
}