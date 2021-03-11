/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

    // const area = function(l1,l2){
    //     return   console.log(l1 * l2)
    // }
    //   area(10,5)

/* EXERCISE 2
Write a function "crazySum " which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

    // const crazySum = function(n1,n2){

    //     if(n1 !== n2){
    //         return n1 + n2
    //     } 
        
    //     else if(n1 === n2){
    //         return (n1 + n2) * 3
    //     }
    // }

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

    // const crazyDiff = function(gnum){
    //     const difference = gnum > 19 ? (gnum-19) * 3 : 19 - gnum
    //     return console.log(difference)
    // }
    //     crazyDiff(40)


/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is between 20 and 100 (included) or if it's equal to 400.
*/

    // const boundary = function(n){
    //     const scale = n >= 20 && n <= 100 || n === 400 ? true : false
    //     return console.log(scale)
    // }
    //     boundary(300)

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

    // const strivify = function(string){
    //         const testString = string == "Strive" ?  "Strive" : `Strive ${string}`
    //         return console.log(testString)
    // }
    // strivify("Bandit")

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

    // const check3and7 = function(pnum){
        
    //     return pnum % 3 === 0 ? `${pnum} is a multiple of 3!`
    //         : pnum % 7 === 0 ? `${pnum} is a multiple of 7!`
    //         : `${pnum} is not a multiple of 3 or 7`
    //     }
    //     console.log(check3and7(7))

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

    // const reverseString = function(string){
    //         return console.log(string.split("").reverse().join(""))
    // }
    // reverseString("MARATHON")

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

        const upperFirst = function(string){
            let convert = string.charAt(0).toUpperCase()
            convert += convert.substring(1)
            return console.log(convert)
        }
        upperFirst("hello")

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

    // const cutString = function(string){
    //     let removal = string.split("");
    //         removal.push()
    //             removal.shift()
    //     return console.log(removal)
    // }
    // cutString("BROC0DE")

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
//     const giveMeRandom = function(n){
//         let randomNumbers = [];
//         for(let i=0; i<n; i++){
//             randomNumbers.push(Math.floor(Math.random()*10))
//         }
//         return console.log(randomNumbers)
//  }
//     giveMeRandom(3)
