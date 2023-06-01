/* 
Given a list of numbers and a factor, write a function 
that returns the sum of all the numbers in the list that 
have that number as a factor.
-------------------------------------------------------------
For example, if the list is [1, 2, 3, 4, 5], and the factor is 2 the function should return 6.
The function should take the list of numbers as an input and return the sum of all the numbers that have 2 as an factor as an output.
The function should be written in JavaScript with an emphasis on efficiency and should be reusable and exportable as a module.
*/

//I'll define function with arrow syntax to show how cool and up to date i am with js. 
//Actually function can be more useful as can be defined after calling it in page order.
const exampleFunction = () => {

    //Ok so lets use the example given to talk through
    const exampleList = [1, 2, 3, 4, 5];
    const exampleFactor = 2;

    //Define variable to hold example actual result, define as 0 to imply its a number variable
    let exampleResult = 0;

    //First, need to loop through each item in array, for performance, for can be used as simpler and more efficient than forEach
    //Use i as iterator, the index of each item in array, adding one each time loops through all items until the array length (last item) is done.
    for (let i = 0; i < exampleList.length; i++) {
        //First find out if the number has 2 as a factor, if it does, it will divide by it and the result will be a whole number. Most efficient to use Modulo function % as basic and most efficient
        if (exampleList[i] % exampleFactor == 0) {
            console.log(`Integer returned! ${exampleList[i]} has ${exampleFactor} as a factor.`);
            exampleResult += exampleList[i];
            console.log(exampleResult);
        }

    }
    //Return result
    //Console log it in a sentence to be clearer
    console.log(`Function result was ${exampleResult}`);
    return exampleResult;
}

//It works! The result is 6. 
//Now to make the actual function - same as above just assigning parameters so we can enter whatever numbers and factors we like.
//I'll use traditional function syntax this time to show off both.

function actualSumFactorFunction(listOfNumbers, factor) {
    //create and initialise varaible to store result
    let result = 0;
    for (let i = 0; i < listOfNumbers.length; i++) {
        //define number in list for clearer code
        let currentNumber = listOfNumbers[i];
        //first find out if the number has factor as a factor, use modulo (%)
        if (currentNumber % factor == 0) {
            result += currentNumber;
        }
    }
    //return result
    return result;
}

//Wrap the test function in function to prevent it being called when importing module.
//This one wont be available for export to differentiate from the one you wanted exporting.
const testIt = () => {
    //Examples to test it works, you can run in terminal to check these
    console.log(actualSumFactorFunction([2, 4, 6, 8], 2));
    //Should be ^20^
}

//Export as module.
//Have set the actual function you requested to be exported as default.
export { exampleFunction, actualSumFactorFunction as default };

//Checkout import-test.js to see working imported function.
//Had to add package.json to configure modules, I could have also renamed extension from .js to .mjs.

