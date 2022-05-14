
let participant = ["leo", "kiki", "eden"]
let completion = ["eden", "kiki"]



    let answer = " ";
    // 두 배열을 정렬한다!
    participant.sort();
    completion.sort();

    
    for (let i = 0; i < participant.length; i++) {
      if (participant[i] != completion[i]) {
        answer = participant[i];
      }
      console.log(answer)
    }
    
  