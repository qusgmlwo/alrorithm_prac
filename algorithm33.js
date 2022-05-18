function solution(lottos, win_nums) {
    var answer = [];
    
    let a = lottos.filter(x => win_nums.includes(x)).length; // a는 lottos와 win_nums중 겹치는 값의 개수
let b = lottos.filter(el => 0 === el).length;     // b는 lottos안에 있는 0의 개수

//=====================================================

if ( a==0 && b==0){                                         //다풀고 마지막에 넣은 예외처리
    return [6,6]                                            //겹치는 값의 개수와 lottos안에 있는 0의 개수가 둘다 없을때
}                                                           //무조건 [6,6]
    
//=====================================================

if(b == 6){                                                 //lottos안에 모든 값이 0일 경우 [1,6] 확정
    answer.push(1,6)
}else{
    answer.push(7-(a+b),7-a)                                //아닐경우 7-(겹치는수+lottos안에 0의 숫자) 가 최고등수
}                                                           //7 - 겹치는 숫자   가 최저 등수

    return answer;
}