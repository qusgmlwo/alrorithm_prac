function solution(price, money, count) {
    let totalCost = 0;                              //반복문으로 숫자를 계속 받아야해서 초기값0설정
    for (let i = 1; i <= count; i++)                //price를 i번 계속 곱해가면서 totalCost 계산
        totalCost += price * i;                     
      if (totalCost <= money){                      //totalCost값이 money보다 작가나 같아질 경우 0출력
          totalCost = 0;
      }else {                                       //아닐경우 totalCost에 price가i번 곱해진값만큼 출력
         totalCost = totalCost - money;
      }
    
      
      
      return totalCost
  }

  //부족한 금액 계산하기
  //https://programmers.co.kr/learn/courses/30/lessons/82612