function solution(n)
{
    

    let a = (n + '').split('');
    
    let answer = 0
 for (i=0; i<a.length; i++){
     answer += Number(a[i])
     
}

    return answer;
}