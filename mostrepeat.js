function repeated(arr){
    repeatedObj = {}
    emptyArray = []
	for(let i = 0; i < arr.length; i++){
       if(!repeatedObj[arr[i]]){
           repeatedObj[arr[i]] = 1
       }else{
           repeatedObj[arr[i]]++
       }
    }

    // let arr = Object.values(obj);
    // let min = Math.min(...arr);

    return Object.keys(repeatedObj).reduce((a, b) => repeatedObj[a] > repeatedObj[b] ? a : b )
}

console.log(repeated([5,4,3,4,5,4,4,4,3,1,1,4]))