let array1 = [2,3,4];
console.log("array1 Value: "+ array1);

let array2 = [6,7];
console.log("array2 Value: "+array2);

let combinedArray = [...array1,...array2];
console.log("array1 and array2 combined as combinedArray: "+combinedArray);

let mergedArray = [1,...array1,5,...array2,8];
console.log("Merge array1 and array2 by adding a new element at the beginning, middle, and end of th: "+mergedArray);