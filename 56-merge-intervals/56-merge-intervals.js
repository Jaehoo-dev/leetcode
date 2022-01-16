/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
    if (!intervals.length) return [];
    
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
    
    return sortedIntervals.reduce((accumulator, _, index, original) => {
        if (index >= original.length - 1) return accumulator;
        
        if (checkIsOverlapping(accumulator[accumulator.length - 1], original[index + 1])) {
            accumulator[accumulator.length - 1] = mergeIntervals(accumulator[accumulator.length - 1], original[index + 1]);
        } else {
            accumulator.push(original[index + 1]);
        }
        
        return accumulator;
    }, [sortedIntervals[0]]);
}

function mergeIntervals(interval1, interval2) {
    return [interval1[0], Math.max(interval1[1], interval2[1])];
}

function checkIsOverlapping(left, right) {
    if (!right) return false;
    
    return left[1] >= right[0];
}