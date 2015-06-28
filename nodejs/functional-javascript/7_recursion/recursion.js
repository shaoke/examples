function reduce(arr, fn, initial) {
    // SOLUTION GOES HERE
    /*for(var i=1; i<arr.length; i++){
        fn(i-1>0 ? arr[i-1]: initial, arr[i], i, arr);
    }*/

    function recursion(prev, index){
        prev = fn(prev, arr[index], index, arr);
        index++;
        // When index equal to array length
        if(index==arr.length){
           return prev;
        }else{
           return recursion(prev, index);
        }
    }

    return recursion(initial, 0);
}

module.exports = reduce;
