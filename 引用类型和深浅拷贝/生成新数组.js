//过滤如下数组，只保留正数，原数组不变，生成新数组

var arr = [3, 1, 0, -1, -3, 2, -5]
function filter(arr) {
    var newArr = []
    for (var i in arr) {
        if (arr[i] > 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
var arr2 = filter(arr)
console.log(arr2) // [3,1,2]
console.log(arr)  // [3,1,0,-1,-2,2,-5]



