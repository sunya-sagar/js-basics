// hoisting


// console.log(x)
// var x = 1
// console.log(x)


// greet()

// function greet (){
//     console.log('Hello world');
// }

// func()

// var func = function (){

// }

// console.log(greet)


// let hoisting

// const x = 10;



// console.log(x)



// closures


// function outer (){
//     var x = 1;
//     function inner (){
//         console.log(x)
//     }
//     x = 100
//     inner()
// }
// outer()
// const func =  outer()
// func()

// 

// function factor(f){

//    return function mult (num){
//         console.log(num * f)
//     }

// }

// const double = factor(2)
// const triple = factor(3)
// const multBy5 = factor(5)

// double(20)
// triple(20)
// multBy5(10)


// function counter (){
//     let count = 0;

//    return {
//         increment: () => {
//             count++
//             console.log(count)
//         },
//         decrement : ()=>{
//             count--
//         },
//         getCount: () =>{
//             console.log(count)
//         }

//     }
// }

// const count = counter()
// count.increment()
// count.increment()
// count.getCount()


// function add (){

//     let cache = {}

//     return function inner (num){
//         if(num in cache){
//            return console.log('Log from cache',cache[num])
//         }else{
//             console.log('computing')
//             cache[num]= num + 10;
//             console.log(cache[num])
//         }
        
//     }

// }

// const func = add();
// func(10)
// const func2= add(10)
// func(10)
// func(20)
// func(20)







