/*
    Problem: Given a matrix of n rows and m columns,
             find total number of connected components.
             Matrix contains binary values and value 1 represents a component.
             Any 1 adjacent(Up, down, lef and right) to another 1 is part of that component
             and should be treated as a single component.

    @param matrix[[]]: Binary values list of lists 
    @return int: count

*/

const connectedComponentCount = (graph) => {
    const visited = new Set();
    let count  = 0
    for(let i = 0; i < graph.length; i++){
        for(let j = 0; j < graph[i].length; j++){
            if(explore(graph, i, j, visited)) count += 1;
        }
    }
    return count;
}

const explore = (graph, row, col, visited) => {
    // check for outbound 
    if( (row < 0 || row >= graph.length) || (col < 0 || col >= graph[0].length)) return false;
    
    if(graph[row][col] === 0) return false;
    if(visited.has((`${row},${col}`))) return false;
    
    visited.add((`${row},${col}`))
    const steps = [
        [row - 1, col],
        [row + 1, col],
        [row, col - 1],
        [row, col + 1]
    ]
    for(const [x, y] of steps){
        explore(graph, x, y, visited);
    }
    return true;
}
const matrix = [
    [1, 0, 0, 0, 0], 
    [0, 0, 0, 1, 1], 
    [0, 0, 1, 0, 0], 
    [0, 0, 0, 1, 1], 
    [1, 1, 0, 1, 1]
]

console.log(connectedComponentCount(matrix));