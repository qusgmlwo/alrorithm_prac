function solution(absolutes, signs) {             
    let answer = 0;                                 //반복문을 계속 쌓기위해 설정해둔 초기값(?)
    for (let i = 0; i < absolutes.length; i++) {    //absoulutes배열 안에 있는 값들을 배열요소의 숫자만큼 돌려서
      if (signs[i] === false) {                     //singn의 i 번째 값이 false일경우
        answer = answer - absolutes[i];             //absolutes[i]의 값에 -부여
      } else {                                      //아닐경우
        answer = answer + absolutes[i];             //absolutes[i]의 값에 +부여
      }
    }
  
    return answer;   
  }

  //음양 더하기
  //https://programmers.co.kr/learn/courses/30/lessons/76501
  
  
  
  
  
  function solution(absolutes, signs) {
    let t = []
    let e = 0
    for (let i=0; i < absolutes.length; i++){
    let f = signs[i]
    if(f === false){
        t.push(-1)
    }else{
        t.push(1)
    }
    let d = absolutes[i] * t[i]
    e += d
}
return e
}