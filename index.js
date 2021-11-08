//write your code here
function averageInArray(nums){
    let average = 0;
    for(let i = 0; i < nums.length; i++){
        average += nums[i];
    }
    average / nums.length;
    return average;
}
console.log(averageInArray([2, 2, 2, 2, 2]));