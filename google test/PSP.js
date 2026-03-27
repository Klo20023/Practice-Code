// function fizzBuzz(){
//     let n = Math.floor(Math.random() * 100)
//     console.log(`number selected is ${n}`)

//     if(Number.isInteger(n/5) && Number.isInteger(n/3) === true){
//         return 'FizzBuzz'
//     }
//     if(Number.isInteger(n/3) === true){
//         return 'Fizz'
//     }
//     if(Number.isInteger(n/5) === true){
//         return 'Buzz'
//     }
    
//     else{
//         console.log('Neither')
//     }
    
// }

// console.log(9%3)

function letterOccurance(word){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    if (typeof word !== "string"){
        console.error("Error :'(")
        return
    }

    for (const letter of word){
        if (!alphabet.includes(letter.toLowerCase())){
        console.error("Error :'(");
        return;
        }
    }
    let letterCount = {};

    for (let letter of word){
        let lowerCaseLetter = letter.toLowerCase();

        if (letterCount[lowerCaseLetter] !== undefined){
        letterCount[lowerCaseLetter]++;
        }
        else{
        letterCount[lowerCaseLetter] = 1;
        }
    }

  return letterCount;
}





