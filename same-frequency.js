// add whatever parameters you deem necessary
//helper function. which is called freqCounter
// since numbers are not iterables i used to string to convert them into an iterable
function freqCounter(iterable){
    frequencies = new Map();
    for (let val of iterable.toString()){
        let valCount = frequencies.get(val) || 0;
        frequencies.set(val, valCount + 1);
    }
    return frequencies;
}
function sameFrequency(num1, num2) {
    let num1Map = freqCounter(num1);
    let num2Map = freqCounter(num2);
    for (let key of num1Map.keys()){
        if (!num2Map.has(key)){
            return false;
        }
        if (num1Map.get(key) !== num2Map.get(key))
            return false;
    }
    return true;
}
