let animals = [
    {name: 'lion', size:'big', isAggress:true , weigth : 200},
    {name: 'monkey', size:'medium', isAggress:true , weigth : 30},
    {name: 'cat', size:'small', isAggress:false , weigth : 10},
    {name: 'rat', size:'small', isAggress:false , weigth : 2},
];

// for (let i =0 ;i<animals.length; i++) {             //i가 0 부터 i가 10미만일때까지 1씩 증가하면서 반복한다
//     console.log(animals[i].name)                    //output:lion,monkey,cat,rat
// }

// for(let animal of animals){                         //animals안에 있는 item을 animal이라고 지정            
//     console.log(animal)                             //output: animals안에 있는 요소                     
// }


// let i = 0;                                              //while = ~하는 동안에
// while(i<10){                                            //i가10보다 작을 동안
//     console.log(i);
//     i++;                                                //i가 한개씩 증가한다라는 조건 필요
// }                                                       //output: 1~9

// forEach,map,filter,reduce

// animals.forEach(function(x,y){                   // animals안에 있는 모든요소를 x라고 지칭
// })                                               // animals안에 있는 모든요소들의 위치를 y


// const animalsNames = animals.map(function(animal){
//     return `Animal's name is${animal.name} and size is ${animal.size}`;   //map을 사용하면 새로운 배열을 재생산 return으로 받아줘야함
// });                                                                       //output "Animal's name islion and size is big",
//                                                                             //"Animal's name ismonkey and size is medium",
//                                                                             //"Animal's name iscat and size is small",
//                                                                             //"Animal's name israt and size is small"

// console.log(animalsNames)


// const smallAnimals = animals.filter(function(item){             //filter을 사용하면 새로운 배열을 생산
//     return item.size === 'small';                               //item.size가 small인 요소들만 출력
// })

// console.log(smallAnimals)

// const numbers = [1,10,11,23,444];                                   //acc원래 앞에 남아있는값 cur현재값 2번째 돌떄는 앞에 더해진값
//                                                                     //2번째 돌때는 acc+cur값이 acc로 들어가게됨
// const total = numbers.reduce(function(acc,cur){
//     console.log(acc,cur);                                           //output :1 10
//     return acc+cur;                                                 //        11 11
// })                                                                  //        22 23
//                                                                     //        45 444
// console.log(total)                                                  //        489       



// const totalWeight = animals.reduce(function(acc,cur){                   //animals안에 weight의 합을 구할때
//     return acc + cur.weigth;
// },0)                                                                    //초기값을 0으로 설정해야함

// console.log(totalWeight)

const x = 10;

// if(x == 10){                                 // == :자료형이 달라도 값이 같으면 true
//     console.log(`x is 10`);
// }

// if(x ===10){                                // === : 자료형까지 같아야 true
//     console.log(`x is 10`)
// }else {
//     console.log(`x is not 10`)
// }


// const animal = "lion";                                          

// const food = amimal === 'lion' ? "meat" : "apple"       //삼항 연산자 animal이 lion이면 meat출력 아니면 apple출력


// const animal = 'lion';

// switch(animal){
//     case 'lion':
//         console.log('animal is lion');
//         break;
//     case 'monkey' :
//         console.log('animal is monkey');
//         break;
//     default :
//         console.log('animal is unknown');
//         break;
// }


// 함수

// function add(a=1,b=1){
//     return a + b;
// }

// const sum = add(10,20)

// console.log(sum)

// const sum = add();

// const add = (a,b) => {
//     return a + b;
// }
// console.log(add(10,20))

const add = (a,b) => a + b;

