function getTime() {
    return new Date().toLocaleTimeString().slice(0,-3);
}

module.exports = getTime;

