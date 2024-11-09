const removeFromArray = function(array, ...removeNum) {
    let newArray = [];
    let result = false;
    for(let i = 0; i < array.length; i++) {
        for(const remove of removeNum) {
            if(array[i] === remove) {
                result = true;
            }
        }
        if (result === true) {
            result = false;
            continue;
        } else {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
