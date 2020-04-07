function repeated(arr){
    repeatedObj = {}
	for(let i = 0; i < arr.length; i++){
       if(repeatedObj[arr[i]]){
           repeatedObj[arr[i]]++
       }else{
           repeatedObj[arr[i]] = 1
           console.log(Object.keys(repeatedObj))
       }
    }

    return Object.keys(repeatedObj).reduce((a, b) => repeatedObj[a] > repeatedObj[b] ? a : b )
}

console.log(repeated([5,4,3,4,5,4,4,4,3,1,1,4]))