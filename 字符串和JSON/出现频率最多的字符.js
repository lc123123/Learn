function getHighFreq(str) {
    var dict = {}

    for (var i = 0; i < str.length; i++) {
        if (dict[str[i]]) {
            ++dict[str[i]]
        } else {
            dict[str[i]] = 1
        }
    }

    var max = 0
    var maxValue
    for (key in dict) {
        if (dict[key] > max) {
            maxValue = key
            max = dict[key]
        }
    }
    return { max, maxValue }
}

console.log(getHighFreq('qwerqqqqq'))
