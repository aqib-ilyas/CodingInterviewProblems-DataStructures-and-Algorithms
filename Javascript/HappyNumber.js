/** LEET-CODE #202
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    var hashSet = new Set();
    
    let getNext = (no) => {
        let num = no.toString();
        let newNum = 0;
        for(let i = 0; i < num.length; i++){
            newNum += Math.pow(parseInt(num[i], 10), 2);
        }
        if(newNum === 1) return true;
        else if(hashSet.has(newNum)) return false;
        else{
            hashSet.add(newNum);
            return getNext(newNum); 
        } 
    }
    return getNext(n);
};