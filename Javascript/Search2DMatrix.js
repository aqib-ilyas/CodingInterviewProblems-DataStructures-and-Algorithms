/** LEET-CODE #74
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    const [rows, cols] = [matrix.length, matrix[0].length];
    if(rows === 1){
        for(let i = 0; i < cols; i++){
            if(matrix[0][i] === target) return true;
        }
        return false;
    }
   
    if(target > matrix[0][cols-1]){
        matrix.shift();
        return searchMatrix(matrix, target);
    }else{
        return searchMatrix([matrix[0]], target);
    }
};