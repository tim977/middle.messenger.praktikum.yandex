function getRandomNumber(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

module.exports = getRandomNumber;