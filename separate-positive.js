// add whatever parameters you deem necessary
function separatePositive(arr) {
    let posArr = [];
     let negArr = [];
    
    for ( let num of arr){
        if(num > 0){
            posArr.push(num);
        } else{
            negArr.push(num);
        }
    }
    arr.length = 0;
    arr.push(...posArr, ...negArr)
    return arr 

}

