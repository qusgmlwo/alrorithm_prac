function solution(n) {
    var answer = 0;
    

    
let a = (n+'').split('');
    
let hello = a.sort((a,b) => b-a); 
    
    answer = hello.join('');
    
    return Number(answer);
    
    

}