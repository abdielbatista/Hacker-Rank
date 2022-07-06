function miniMaxSum(arr) {
    let size = arr.length
    let position = 0
    let minSum = 0
    let maxSum = 0   
        
    let max = Math.max.apply(null, arr)
    let min = Math.min.apply(null, arr)
    
    while(position < size){
        if(max == min){
            while(position < size-1){
                minSum = minSum + arr[position] 
                maxSum = maxSum + arr[position]
                
                position++
            } 
            break
        }else{
        
            if(arr[position] != max){
                minSum = minSum + arr[position]
            }
            
            if(arr[position] != min){
                maxSum = maxSum + arr[position]
            }
        }        
        position++
    }
    console.log(minSum, maxSum)    
}