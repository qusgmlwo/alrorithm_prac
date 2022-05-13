function solution(s) {
    let a = s.length
    if(a % 2 === 0 ){
        let b = s.substr(a/2-1,2)
        return(b)
    }else if(!a % 2 === 0){
        let c = s.substr(a * .5 - 0.5,1)
        return(c)
    }
}


//https://programmers.co.kr/learn/courses/30/lessons/12925