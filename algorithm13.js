function solution(a, b) {
    let day = new Date(2016, a-1, b); // 날짜 구하기 1
    // let day = new Date(`2016-${a}-${b}`); // 날짜 구하기 2
    var weekDay = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return weekDay[day.getDay()];
}



//날짜 구하기
//https://programmers.co.kr/learn/courses/30/lessons/12901

//솔직히 아직도 잘 모르겠음...