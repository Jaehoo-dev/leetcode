/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
    const maxHeap = new MaxHeap(nums);
    
    for (let i = 1; i <= k; i++) {
        const max = maxHeap.pop();
        
        if (i !== k) continue;
        
        return max;
    }
}

class MaxHeap {
    constructor(nums) {
        this.items = [null, ...nums];
        this.heapify();
    }
    
    heapify() {
        const lastNonLeafNodeIndex = Math.floor(this.items.length / 2);
        
        for (let i = lastNonLeafNodeIndex; i > 0; i--) {
            this.percolateDown(i);
        }
    }
    
    percolateDown(startIndex) {
        const leftIndex = startIndex * 2;
        const rightIndex = startIndex * 2 + 1;
        
        if (
            (this.items[leftIndex] === undefined && this.items[rightIndex] === undefined)
            || (this.items[leftIndex] <= this.items[startIndex] && this.items[rightIndex] <= this.items[startIndex])
            || (this.items[leftIndex] === undefined && this.items[rightIndex] <= this.items[startIndex])
            || (this.items[rightIndex] === undefined && this.items[leftIndex] <= this.items[startIndex])
        ) {
            return;
        }
        
        let largerIndex;
        
        if (this.items[leftIndex] !== undefined && this.items[rightIndex] === undefined) {
            largerIndex = leftIndex;
        } else if (this.items[leftIndex] === undefined && this.items[rightIndex] !== undefined) {
            largerIndex = rightIndex;
        } else {
            largerIndex = this.items[leftIndex] > this.items[rightIndex] ? leftIndex : rightIndex;
        }

        this.swap(startIndex, largerIndex);

        this.percolateDown(largerIndex);
    }
    
    pop() {
        const result = this.items[1];
        
        this.items[1] = this.items.pop();
        
        this.percolateDown(1);
        
        return result;
    }
    
    swap(i, j) {
        [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
    }
}