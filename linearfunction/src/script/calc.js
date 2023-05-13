function parse(s) {
    if(s.indexOf('x') === -1) {
        let v = eval(s)
        return [1, v, -1, v]
    }

    let x = eval(s.replace('x', '-1'))
    let y = eval(s.replace('x', '1'))

    if(x === 0 && y === 0) {
        return [0, -1, 0, 1]
    }

    return [y, 1, x, -1]
}

export default { parse }