// 'use strict'

// //Array

const fruits = ['사과','바나나']
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);


// 출력방법
//1.for

for(let i=0; i <fruits.length; i++){
    console.log(fruits[i]);
}

// 2. for of
for(let fruit of fruits){  // fruit라는 변수에 fruits안의 요소들을 할당
    console.log(fruit);

}

// 3. forEach
fruits.forEach(fruit => console.log(fruit)); //배열안에 들어있는 value들 마다 
                                            // 내가 전달한 함수들을 출력 (value => function)
 

//4. addtion, deletion, copy

fruits.push('딸기','복숭아'); //fruits뒤에 딸기와 복숭아라는 요소 추가
console.log(fruits);


fruits.pop();               //fruits뒤에 요소하나 빼기 1개만 가능
console.log(fruits);

fruits.unshift('딸기','레몬');  //fruits앞에 딸기와 레몬 요소 추가
console.log(fruits);

fruits.shift();                 //fruits앞에 요소하나 빼기 1개만 가능
console.log(fruits);

//splice
fruits.push('배','귤');
console.log(fruits);
fruits.splice(1,1);     //splice(x,y) x번째 자리에서 y개의 갯수를 자른다
console.log(fruits);   //splice(x) x번째 자리부터 모든데이터 삭제 x번쨰 포함

fruits.splice(1,1,'사과','수박') //splice(x,y,'문자열')
console.log(fruits);            //x번째의 y개의 갯수만큼 요소 제거후 뒤에 문자열 추가 x번째 포함

// 2가지 배열 만들기

const fruits2 = ['오렌지','감']
const newFruits = fruits.concat(fruits2); //contac 새로운 변수에 x.contac(y)
console.log(newFruits);                     //x배열에 y요소들을 뒤에 추가

//검색

console.clear();
console.log(fruits);
console.log(fruits.indexOf('사과'));    //x.indexOf('y')
console.log(fruits.indexOf('수박'));    //x의 배열에 y값이 몇번째에 있는지 알려줌
                                        //x의 배열에 y값이 없으면 -1 출력

console.log(fruits.includes('수박'));   //x.includes('y')
                                        //x의 배열에 y값이 있으면 ruet 없으면 false

//lastIndexOf
fruits.push('사과');
console.log(fruits);
console.log(fruits.indexOf('사과'));    //x.indexOf('y')
                                        //x의 배열에 y값이 몇번째에 있는지 알려줌 (여러개 있을경우 1번째)

console.log(fruits.lastIndexOf('사과')); //x.lastIndexOf('y')
                                        //x의 배열에 y값이 몇번째에 있는지 알려줌(여러개 있을경우 제일 마지막위치)

