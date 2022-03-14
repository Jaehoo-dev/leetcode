/**
 * @param {number[]} nums
 * @return {number}
 */
function maxRotateFunction(nums) {
    const maxMultiplier = nums.length - 1;
    const sum = calculateSum(nums);
    let prevResult = calculateF(nums);
    let max = prevResult;
    
    for (let i = 1; i < nums.length; i++) {
        const newResult = prevResult + sum - (maxMultiplier + 1) * nums[nums.length - i];

        max = Math.max(max, newResult);
        
        prevResult = newResult;
    }
    
    return max;
}

function calculateF(nums) {
    return nums.reduce((acc, currentNum, index) => {
        return acc + currentNum * index;
    }, 0);
}

function calculateSum(nums) {
    return nums.reduce((acc, currentNum) => {
        return acc + currentNum
    }, 0);
}