// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    result =  {};
    for (i = 0; i < arr1.length; i++){
        const key = arr1[i];
        const val = arr2[i] !== undefined ? arr2[i] : null;
        result[key] = val;
        if(key === undefined){
            return null;
        }
    }

   
    return result;
    
}
