//过滤如下数组，只保留正数，在原数组上操作
var arr = [3,1,0,-1,-3,2,-5]
function filter(arr){
    for(var i = 0; i < arr.length; i++){
    if (arr[i] <= 0){
        arr.splice (i, 1)
        filter(arr)
        }
    }
}
filter(arr)
console.log(arr) // [3,1,2]



//过滤如下数组，只保留正数，生成新的数组
function filterPositive(arr){
    var newArr = []
    for(i = 0; i<arr.length; i++){
        if(arr[i] > 0 && typeof arr[i] === 'number'){
            newArr.push(arr[i])
        }
    }
    return newArr
}
var arr = [3, -1,  2,  '饥人谷', true]
var newArr = filterPositive(arr)
console.log(newArr) //[3, 2]
console.log(arr) //[3, -1,  2,  '饥人谷', true]