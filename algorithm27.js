function collatz(num) {         

    for(var answer = 0;answer<500;answer++){      //500번을 반복해도 1이 되지않으면 -1이 반환되어야하기 때문에 499번까지로 제한
      if(num%2==0){                             //1-1 입력된 수가 짝수라면
        num = num/2;                              // 2로 나눈다
      }
      else if(num==1){                            // 결과가 1이 나오면 결과 도출
          return answer;
      }
      else if(num%2==1){                          //1-2 입력된 수가 홀수라면 3을곱하고 1을 더한다
        num = (num*3)+1;                            
      }                                           //이 과정을 499번까지 반복
    }
    
      return -1;
  }