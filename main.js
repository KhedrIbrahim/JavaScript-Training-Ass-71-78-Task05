let nums = [2, 12, 11, 5, 10, 1, 99];

let finalResult = nums.reduce((acc, cele) => cele % 2 === 0 ? acc * cele : acc + cele , 1)
console.log(finalResult) // 500