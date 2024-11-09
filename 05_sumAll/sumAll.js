const sumAll = function(start, end) {
    if(start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) {
        return 'ERROR';
    }

    if (start > end) {
        start += end;
        end = start - end;
        start -= end;
    }

    let total = 0;
    for(let i = start; i <= end; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
