function solution(s) {
    if (!(s.length == 4 || s.length ==  6)){ //s의 글자수가 4이거나 6이 아닐경우 false 리턴
        return false                
    } else {                                 // s의 글자수가 4이거나 6일경우   
        const tmp = s.split('')             //s안에 문자열을 배열로전환
        for(let i =0;i<tmp.length;i++){     // tmp의요소 개수만큼 tmp의 i번째값을 돌림
        if (isNaN(tmp[i])){                 // tmp의 i번째 값이 숫자가 아닐경우 false
            return false
        }
        }

    }
    return true
}