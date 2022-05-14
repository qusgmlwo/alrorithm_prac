function solution(arr, divisor) {
    var answer = [];                            //결과값이 배열이기때문에 초기값 배열로 설정

    for(var i = 0; i < arr.length; ++i) {       
        if(arr[i] % divisor == 0) answer.push(arr[i]);           //arr[i]번째의 숫자가 divisor의 숫자로 나누어질시
    }                                                            //arr[i]의 값을 answer로 전송

    return answer.length < 1 ? [-1] : answer.sort((a, b) => a - b); //answer안에 배열이 없는경우 -1출력
}                                                                   //배열이 있는경우 sort()로 순차정렬