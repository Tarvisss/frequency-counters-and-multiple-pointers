// add whatever parameters you deem necessary
function pivotIndex(intArr) {
let totalSum = intArr.reduce((prevNum, currNum) => {
    return prevNum + currNum;
},0);

let leftSum = 0;
for(let i = 0; i < intArr.length; i++){
    if (leftSum === totalSum - leftSum - intArr[i]){
        return i;
    }
    leftSum += intArr[i]
}
return -1
}
