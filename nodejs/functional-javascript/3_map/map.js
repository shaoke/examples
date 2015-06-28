function doubleAll (numbers){
    function doubleNumber(number){
        return number*2;
    }
    return numbers.map(doubleNumber);
}

module.exports = doubleAll;
