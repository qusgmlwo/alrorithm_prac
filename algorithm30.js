function solution(sizes) {
    var answer = 0;
    
    let a = sizes.map(([x,y]) => x < y ? [y,x] : [x,y])       //sizez의 배열 [가로,세로] 둘 중 더 큰수가 [0]번째 자리에 위치

let maxSize = [0, 0];                                           //배열 안의 숫자로 값을 받아야하기 때문에 초기값 설정
    a.forEach(([x, y]) => {                                     //a의 모든 요소를 [x,y]라고 설정
        if (x > maxSize[0]) maxSize[0] = x;                     //x값중 가장 큰값
        if (y > maxSize[1]) maxSize[1] = y;                     //y값중 가장 큰값
    })
 
    return maxSize[0] * maxSize[1];                             //이 둘을 곱하면 모든 명함을 넣을 수 있는 최소넓이
}