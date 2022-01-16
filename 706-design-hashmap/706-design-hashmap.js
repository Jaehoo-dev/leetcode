const SIZE = 1000;

function MyHashMap () {
    this.map = new Array(SIZE);
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    const hashedKey = hashKey(key);
    const newNode = new ListNode(key, value);
    
    if (this.get(key) !== null || this.get(key) !== undefined) {
        let currentNode = this.map[hashedKey];
        
        while (currentNode) {
            if (currentNode.key === key) {
                currentNode.value = value;
                
                return;
            }
            
            currentNode = currentNode.next;
        }
    }
    
    const tail = getTail(this.map[hashedKey]);
    
    if (!tail) {
        this.map[hashedKey] = newNode;
    } else {
        tail.next = newNode;
    }
    
    function getTail(head) {
        if (!head) return head;
        
        let currentNode = head;
        
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        
        return currentNode;
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    const hashedKey = hashKey(key);
    let currentNode = this.map[hashedKey];
    
    if (!currentNode) return -1;
    
    while (currentNode) {
        if (currentNode.key === key) {
            return currentNode.value;
        }
        
        currentNode = currentNode.next;
    }
    
    return -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    const hashedKey = hashKey(key);
    let currentNode = this.map[hashedKey];
    let previousNode = new ListNode(null);
    
    if (!currentNode) return;
    
    if (!currentNode.next && currentNode.key === key) {
        this.map[hashedKey] = null;
        
        return;
    }
    
    if (currentNode.next && currentNode.key === key) {
        this.map[hashedKey] = currentNode.next;
        
        return;
    }
    
    while (currentNode) {
        if (currentNode.key === key) {
            currentNode.value = null;
            previousNode.next = currentNode.next;
            
            return;
        }
        
        previousNode = currentNode;
        currentNode = currentNode.next;
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

function ListNode(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
}

function hashKey(key) {
    return key % SIZE;
};