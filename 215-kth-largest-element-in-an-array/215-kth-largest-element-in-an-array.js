/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
    const heap = new MaxHeap();
    let result;
    
    nums.forEach(num => heap.add(num));

    for (let i = 1; i <= k; i++) {
        result = heap.remove();
    }
    
    return result;
}

class MaxHeap {
    constructor() {
        this.items = [null];
    }
    
    add(value) {
        this.items.push(value);
        this.percolateUp();
    }
    
    remove() {
        this.swap(1, this.items.length - 1);
        
        const value = this.items.pop();
        
        this.percolateDown(1);
        
        return value;
    }
    
    percolateUp() {
        let currentIndex = this.items.length - 1;
        let parentIndex = parseInt(currentIndex / 2);
        
        while (parentIndex > 0) {
            if (this.items[currentIndex] > this.items[parentIndex]) {
                this.swap(currentIndex, parentIndex);
            }
            
            currentIndex = parentIndex;
            parentIndex = parseInt(parentIndex / 2);
        }
    }
    
    percolateDown(index) {
        const leftIndex = index * 2;
        const rightIndex = index * 2 + 1;
        let indexOfMax = index;
        
        if (
            leftIndex < this.items.length 
            && this.items[leftIndex] > this.items[indexOfMax]
        ) {
            indexOfMax = leftIndex;
        }
        
        if (
            rightIndex < this.items.length
            && this.items[rightIndex] > this.items[indexOfMax]
        ) {
            indexOfMax = rightIndex;
        }
        
        if (indexOfMax !== index) {
            this.swap(indexOfMax, index);
            this.percolateDown(indexOfMax);
        }
    }
    
    swap(index1, index2) {
        [this.items[index1], this.items[index2]] = [this.items[index2], this.items[index1]];
    }
}