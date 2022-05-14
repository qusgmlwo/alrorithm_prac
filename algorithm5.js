
// 내 풀이

function solution(s) {

    let str = s;
    let regex = /[^0-9]/g;              // /[^0-9] 는 숫자가 아닌 문자들을 의미하는 패턴
                                        // g 는 문자열에서 모든 패턴을 찾으라는 의미
                                        // 고로 문자열에서 모든 문자들을 찾으라는 의미

    let result = s.replace(regex, "");  // replace()를 이용해서 안에있는 값들
                                        // 이렇게 리턴되면 문자에 숫자들이 섞여있는 값들중에 문자들이 삭제
                                        // 근데 숫자들이 str 즉 문자열로 리턴을 받음
    
    let number = parseInt(result);      // parseInt()로 문자열이였던 문장이 number타입으로 변환
        
        return number
    }


// 문자열을 정수로 바꾸기
//https://programmers.co.kr/learn/courses/30/lessons/12925


// 이슈
// 양수는 잘 출력이 되는데 중간에 음수가 끼워져 있는경우 음수가아니라 양수로 나옴

//정답

function solution(s) {
    return parseInt(s);     //s를 정수로 변환한 값을 리턴합니다.
  }                         // 만약, s의 첫 글자를 정수로 변경할 수 없으면 NaN(Not a Number) 값을 리턴합니다.

  


  function solution(s) {   //number()문자열을 숫자로 바꿔주는 함수
    return Number(s);
  }