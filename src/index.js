exports.min = function min(array) {
    if (Array.isArray(array) && array.length !== 0) {
        return Math.min(...array);
    }
    return 0;
}

exports.max = function max(array) {
    if (Array.isArray(array) && array.length !== 0) {
        return Math.max(...array);
    }
    return 0;
}

exports.avg = function avg(array) {
    if (Array.isArray(array) && array.length !== 0) {
        let sum = 0;
        array.forEach(el => sum += el);
        return sum / array.length;
    }
    return 0;
}
