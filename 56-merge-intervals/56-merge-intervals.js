/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
    if (!intervals.length) return [];
    
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
    const result = [sortedIntervals[0]];
    let pointerIndex = 1;
    
    while (pointerIndex < sortedIntervals.length) {
        if (checkIsOverlapping(result[result.length - 1], sortedIntervals[pointerIndex])) {
            result[result.length - 1] = mergeIntervals(result[result.length - 1], sortedIntervals[pointerIndex]);
        } else {
            result.push(sortedIntervals[pointerIndex]);
        }
        
        pointerIndex++;
    }
    
    return result;
}

function mergeIntervals(interval1, interval2) {
    return [interval1[0], Math.max(interval1[1], interval2[1])];
}

function checkIsOverlapping(left, right) {
    if (!right) return false;
    
    return left[1] >= right[0];
}