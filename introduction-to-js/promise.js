
// // setTimeout(callback,interval,para .....)

// // console.log('start');

// // const timerId = setTimeout((name,age)=>{
// //     console.log(name,age)
// // },2000,'John',20)

// // clearTimeout(timerId)


// // console.log('end')

// // let x =5
// // const timerId1 = setInterval(()=>{
// //     x--;
// //     console.log(x)
// //     if(x === 0){
// //         clearInterval(timerId1)
// //     }

// // },1000)



// // const promise = new Promise((resolve,reject)=> setTimeout(()=>{
// //     console.log('data fetching')
// //     reject('Something went wrong.')
// // },2000))

// // promise.then((data)=> console.log('Then',data))
// // .catch((err)=>console.log('error occurred:',err))

// let isLoading = true

// // const fetchData = (id) =>{
// //     return new Promise((resolve,reject)=>setTimeout(()=>{
// //        if(id){
// //         resolve(`Data loaded  with id ${id}`)
// //        }else{
// //         reject('Id is required')
// //        }
// //     },2000))
// // }

// // fetchData().then((data) => {
// //     // isLoading=false
// //     console.log('then',data)
// //     console.log(isLoading)

// // })
// // .catch((err)=>{
// //     // isLoading = false
// //     console.log('error',err)
// //     console.log(isLoading)

// // })
// // .finally(()=> {
// //     isLoading=false

// //     console.log('finally')
// //     console.log(isLoading)

// // })

// // console.log(isLoading)

// // try catch

// const fetchData = (id) =>{
//     return new Promise((resolve,reject)=>setTimeout(()=>{
//        if(id){
//         resolve(`Data loaded  with id ${id}`)
//        }else{
//         reject('Id is required')
//        }
//     },2000))
// }

const fetchData2 = async (id) =>{
    const response =  await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    return response.json()
}



 async function getData () {
    try {
        // const promise1 =  fetchData(1)
        const data = await fetchData2(2);

        // const [response,response2] = await Promise.all([promise1,promise2])

        console.log(data)
        // console.log(response2)
        
    } catch (error) {
        console.log('err',error)
        
    }

}

getData();


// 