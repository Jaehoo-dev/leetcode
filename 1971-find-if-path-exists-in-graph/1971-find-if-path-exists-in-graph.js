/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
function validPath(n, edges, source, destination) {
    if (source === destination) {
        return true;
    }
    
    const graph = createGraph(edges, source);
    const queue = [source];
    const visited = new Set();

    while (queue.length) {
        const head = queue.shift();
        const neighbors = graph[head];

        visited.add(head);
        
        for (const neighbor of neighbors) {
            if (neighbor === destination) {
                return true;
            }
            
            if (visited.has(neighbor)) continue;
            
            queue.push(neighbor);
        }
    }
    
    return false;
}

function createGraph(edges, source) {
    const result = { [source]: [] };
    
    edges.forEach(([node1, node2]) => {
        if (!result.hasOwnProperty(node1)) {
            result[node1] = [];
        }
        
        if (!result.hasOwnProperty(node2)) {
            result[node2] = [];
        }
        
        result[node1].push(node2);
        result[node2].push(node1);
    });
    
    return result;
}