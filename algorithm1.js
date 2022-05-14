process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    let n = data.split(" ");
    let a = Number(n[0]), b = Number(n[1]);
    let row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }
});


// 직사각형 별 찍기
// 문제 링크 https://programmers.co.kr/learn/courses/30/lessons/12969