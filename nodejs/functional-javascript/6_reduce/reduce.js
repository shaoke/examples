function countWords(arrWords){
    var result = {};
    arrWords.forEach(function(word){
        if(result[word.toString()]){
            result[word.toString()]++;
        }else{
            result[word.toString()] = 1;
        }
    });

    return result;
}

module.exports = countWords;
