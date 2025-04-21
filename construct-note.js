// add whatever parameters you deem necessary

function createFreqCounter(iterable) {
    let frequencies = new Map();
    for (let val of iterable){
        let valCount = frequencies.get(val) || 0;
        frequencies.set(val, valCount + 1);
    }
    return frequencies;
}

function constructNote(message, assortedLetters) {

    let messageMap = createFreqCounter(message);
    let assortedLettersMap = createFreqCounter(assortedLetters);
        for(let key of messageMap.keys()){
            if(!assortedLettersMap.has(key)){
                return false;
            }
            if (assortedLettersMap.get(key) < messageMap.get(key)){
                return false;
            }
        }
    return true;

}


