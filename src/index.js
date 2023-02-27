module.exports = function reverse(n) {
    if (n < 0) {
        let x = n * -1;
        return (
            parseInt(x.toString().split("").reverse().join("")) * Math.sign(x)
        );
    } else {
        return (
            parseInt(n.toString().split("").reverse().join("")) * Math.sign(n)
        );
    }
};
