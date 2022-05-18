// function solution(numbers) {
    
//     let sum = 0                                 
//     for (let i = 0; i < numbers.length; i++) {  //numbers안에 있는 모든숫자들을
//         sum += numbers[i]                       //더하는 반복문
//     }
//     return 45 - sum
// }

// 없는 숫자 더하기 
// https://programmers.co.kr/learn/courses/30/lessons/86051


numbers = [1,2,3,4,6,7,8,0]	

let sum = numbers.reduce((a,b) => (a+b));

answer = 45 - a