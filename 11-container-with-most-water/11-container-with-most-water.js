/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(heights) {
    let result = 0;
    let leftPointer = 0;
    let rightPointer = heights.length - 1;
    
    while (leftPointer < rightPointer) {
        result = Math.max(result, (rightPointer - leftPointer) * Math.min(heights[leftPointer], heights[rightPointer]));
        
        heights[leftPointer] < heights[rightPointer] ? leftPointer++ : rightPointer--;
    }
    
    return result;
}