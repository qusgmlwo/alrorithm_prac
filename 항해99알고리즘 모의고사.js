function solution(arr1, arr2){
	let answer=0;
	return answer;
}
let arr1=[9, 9, 9, 9, 7, 9, 8];
let arr2=[23, 23, 30, 28, 30, 23, 23];

for(i =0 ; i<arr2.length; i++){
    if(arr2[i]>29){
        arr2[i] = 21
    }
}


let intime = arr1.reduce((acc,cur) => {return acc += cur ;},0);
let outtime = arr2.reduce((acc,cur) => {return acc += cur ;},0);

answer = outtime - intime ;
console.log(answer)