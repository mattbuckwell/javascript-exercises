const repeatString = function(string, repeatNum) {
    if (repeatNum < 0) {
        return 'ERROR';
    }
    let result = '';
    for(let i = 0; i < repeatNum; i++) {
        result = result.concat(string);
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
