/*
    Problem: Given a matrix of n rows and m columns,
             find largest connected component.
             Matrix contains binary values and value 1 represents a component.
             Any 1 adjacent(Up, down, lef and right) to another 1 is part of that component
             and should be treated as a single component.

    @param matrix[[]]: Binary values list of lists 
    @return int: size of largest component

*/

const largestConnectedComponent = (graph) => {
    const visited = new Set();
    let largest  = 0
    for(let i = 0; i < graph.length; i++){
        for(let j = 0; j < graph[i].length; j++){
            const size = explore(graph, i, j, visited)
            largest = size > largest ? size : largest;
        }
    }
    return largest;
}

const explore = (graph, row, col, visited) => {
    if( (row < 0 || row >= graph.length) || (col < 0 || col >= graph[0].length)) return 0;
    
    if(graph[row][col] === 0) return 0;
    if(visited.has((`${row},${col}`))) return 0;
    
    let size = 1;
    visited.add((`${row},${col}`))
    const steps = [
        [row - 1, col],
        [row + 1, col],
        [row, col - 1],
        [row, col + 1]
    ]
    for(const [x, y] of steps){
        size += explore(graph, x, y, visited);
    }
    return size;
}
const matrix = [
    [1, 0, 0, 0, 0], 
    [0, 0, 0, 1, 1], 
    [0, 0, 0, 0, 1], 
    [0, 0, 0, 1, 0], 
    [1, 1, 0, 0, 1]
]

console.log(largestConnectedComponent(matrix));