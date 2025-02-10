// scope

// var let const




// {

//     var block_var = "block level var";
//     let block_let = "block level let";
//     const block_const = "block level const";
//     console.log(x,y,z);

// }

// console.log(block_var);
// console.log(block_let());


// function scope

// const helloWorld = () =>{
//     var x =1
//     let y =2
//     const z = 3
//     console.log(x,y,z);
// }

// console.log('function scope var',y);

// lexical scope


const lexicalScope = () =>{
    const x = 'outer';
    // console.log(y)

    const inner = () => {
        const y ='inner'
        console.log(x)
    }
    inner();
}

lexicalScope();
