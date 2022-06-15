/*
    Problem: Given an array of block objects,
            find the block where travel distance is
            minimum for every individual requirement
            given in requirements array. You may assume 
            that all requirements are present in every block.

    @param blocks[{}]: List of objects
    @return block: object

*/

const minimumTravelDistanceBlock = (blocks, reqs) => {
    
    // Initializing result array with max integer values
    let results = Array.from(Array(blocks.length), () => {
        let obj = {};
        for(let r of reqs){
            obj[r] = Number.MAX_SAFE_INTEGER;
        }
        return { ...obj, 'index': -1}; 
        
    });
    
    // setting first block of result array equal to first block from blocks
    for(let r of reqs){
        if(blocks[0][r] === true){
            results[0][r] = 0;
        } 
    }
    results[0]['index'] = 0;



    // traversing blocks from start to end and calculate distance
    for(let i = 1; i < blocks.length; i++){
        for(let r of reqs){
            if(blocks[i][r]) results[i][r] = 0;
            else results[i][r] = Math.min(results[i-1][r]+1, results[i][r]);
        }
        results[i]["index"] = i;
    
    }
    
    // traversing blocks from end to start and calculate distance
    // Also finding block with minimum distance to travel for every requirement
    let myBlock = {...results[results.length-1]};
    let maxDis = 0;
    for(let r of reqs){
        if(Math.abs(myBlock[r]) > maxDis) maxDis= Math.abs(myBlock[r]);
    }
    myBlock["max"] = maxDis;
    
    for(let i = blocks.length - 2; i >= 0; i--){
        let max = 0;
        for(let r of reqs){
            if(blocks[i][r]) results[i][r] = 0;
            else results[i][r] = Math.min(results[i+1][r]-1, results[i][r]);
            
            if(Math.abs(results[i][r]) > max) max= Math.abs(results[i][r]);
        }
        if(max < myBlock["max"]){ 
            myBlock = {...results[i], max: max};
        }
    }
    console.log(results);
    return blocks[myBlock.index];
}


blocks = [
    {
        'gym': false, 'school': true, 'store': false
    },
    {
        'gym': true, 'school': false, 'store': false
    },
    {
        'gym': true, 'school': true, 'store': false
    },
    {
        'gym': false, 'school': true, 'store': false
    },
    {
        'gym': false, 'school': true, 'store': true
    }
    
];
requirements = ['gym', 'school', 'store'];
console.log(minimumTravelDistanceBlock(blocks, requirements));
