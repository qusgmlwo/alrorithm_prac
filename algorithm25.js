function solution(n) {
    var answer = 0;
    
    let a =Number.isInteger(Math.sqrt(n) )
    
    if(n/a == a){
        answer = (a+1) * (a+1)
    }else{
        answer = -1
    }
    
    return answer;
    
    
}