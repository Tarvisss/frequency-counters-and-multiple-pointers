// add whatever parameters you deem necessary
function averagePair(sortedNumsArr, targetAvg) {
    let left = 0;
    let right = sortedNumsArr.length - 1;
    while(left < right){
        sum = sortedNumsArr[left] + sortedNumsArr[right];
        avg = sum / 2;
        if(avg === targetAvg){
            return true;
        } 
        else if(avg > targetAvg){
            right --;
        }
        else {
            left ++;
        }
    }
    return false;
}

