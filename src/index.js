module.exports = function getZerosCount(number, base) {

    let countOfZeros = number;

    for (let i = 2; i <= base; i++) {
        if (base % i === 0) {
            let tempNumb = number;
            let numberQual = 0;
            let countOfNumbInDivide = 0;

            while (base % i === 0) {
                numberQual++;
                base = base / i;
            }

            while (tempNumb > 0) {
                tempNumb = Math.floor(tempNumb / i);
                countOfNumbInDivide += tempNumb;
            }

            countOfZeros = Math.floor(Math.min(countOfZeros, countOfNumbInDivide / numberQual));
        }
    }
    return countOfZeros;
}