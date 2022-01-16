/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
    let sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
    let pointerIndex = 0;
    
    while (pointerIndex < sortedIntervals.length) {
        if (checkIsOverlapping(sortedIntervals[pointerIndex], sortedIntervals[pointerIndex + 1])) {
            sortedIntervals = [
                ...sortedIntervals.slice(0, pointerIndex), 
                mergeIntervals(sortedIntervals[pointerIndex], sortedIntervals[pointerIndex + 1]),
                ...sortedIntervals.slice(pointerIndex + 2),
            ];
            
            continue;
        }
        
        pointerIndex++;
    }
    
    return sortedIntervals;
}

function mergeIntervals(interval1, interval2) {
    return [interval1[0], Math.max(interval1[1], interval2[1])];
}

function checkIsOverlapping(left, right) {
    if (!right) return false;
    
    return left[1] >= right[0];
}