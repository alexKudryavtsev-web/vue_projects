function randChoose(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randInt(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function randColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

function randFont() {
    let fonts = ['serif', 'sans-serif', 'Consolas', 'Ariel', 'Calibry', 'Impact']
    let sizes = [30, 32, 36, 48, 42, 52, 56]

    return randChoose(sizes) + 'px' + ' ' + randChoose(fonts)
}

function randCase(str) {
    let ret = ''
    for (let sym of str.split('')) {
        ret += randChoose([sym, sym.toUpperCase()])
    }
    return ret
}

function randChangeChar(str) {
    let ret = []

    for (let sym of str.split('')) {
        ret.push({
            text: sym,
            font: randFont(),
            color: randChoose([randColor(), '#111'])
        })
    }

    return ret
}

function randCoord(count = randInt(400, 1400)) {
    let ret = []
    while(ret.length < count) {
        ret.push({
            x: randInt(0, 375),
            y: randInt(0, 120),
            size: randInt(1, 2),
            color: randColor()
        })
    }
    return ret
}

export default {
    randChoose,
    randInt,
    randColor,
    randFont,
    randCase,
    randChangeChar,
    randCoord
}