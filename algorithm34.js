function solution(answers) {
    let score = [];                                   //배열로 값을 받기위한 초기값
    let answer = [];
    
    
    let a1 = [1,2,3,4,5]
    let a2 = [2,1,2,3,2,4,2,5]
    let a3 = [3,3,1,1,2,2,4,4,5,5]
    
                                                                                //score 에 answer의 요소값을 x라고 두고 x들의 위치값을 y라고 설정

    score.push(answer.filter((x,y) => x === a1[y % a1.length] ).length)       //x가 y/a1의 길이만큼 나눈숫자의 나머지값 만큼 계속 나눌때 
    score.push(answer.filter((x,y) => x === a2[y % a1.length] ).length)       //그값이 true면 score의 배열에 계속 추가 
    score.push(answer.filter((x,y) => x === a3[y % a1.length] ).length)       //그래서 score의 배열의 길이가 길수록 정답이 많다는 증거
    
    
    for (let i = 0; i < score.length; i++) {
        const max = Math.max(...score);                                     //max는 score안에 있는 가장 큰값
        if (score[i] === max) {                                             //score[i]번째 값이 score안에 있는 가장 큰값일 경우
          answer.push(i + 1);                                               //answer에 넣어준다
        }
      }
    
      return answer;
    }
    