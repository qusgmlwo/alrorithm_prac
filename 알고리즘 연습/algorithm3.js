function solution(s) {
    
    let answer = ''; // answer = ' '; 의 기능을 모르겠음

    
    const point=Math.floor(s.length/2)  // 가운데 글자를 point라는 이름으로 설정
    
    if (s.length%2 == 0)                //전체 글자 수를 2로 나눠서 나머지가 0이되면 짝수
        answer = s[point-1] + s[point]; //짝수일시에는 가운데 2글자를 가져와야함으로 앞에 글자는 
                                        //첫번째 글자는 s를 2로 나눈값에 -1을 한 값을 가져옴 1번째글자는 0에서 시작하기 때문
                                        //두번째 글자는 s를 2로 나눈값 번째의 글자를 가져옴

        else answer = s[point];         //전체 글자수를 2로 나누었을시 나머지가 0이 되지않을경우는 홀수
                                        //이럴경우 전체글자수 나누기 2 한 번째글자가 가운데 글자가 됨으로 값을 가져옴
    
    
    
   
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12903