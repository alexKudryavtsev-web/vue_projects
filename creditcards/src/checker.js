function check(number) {
    if(number.length !== 16) return false

    let arr = number.split('') // Разделяем по символам
    
    arr = arr.map((val, index) => {
        if (index % 2 === 0) {
            let v = val * 2

            // Если результат - составное число, то считаем как сумму цифр
            if (v > 9) {
                let [f1, f2] = v.toString().split('')
                return (+f1) + (+f2)
            }
            return v
        }
        return +val
    })

    let res = arr.reduce((prev, val) => {
        return prev + val
    }, 0)

    return res % 10 === 0
}

function company(number) {
    if (number.startsWith('4'))
        return 'Visa'

    if (number.startsWith('34') || number.startsWith('37'))
        return 'Amex'

    if (number.startsWith('6011') || number.startsWith('644') || number.startsWith('65'))
        return 'Discover'

    if (number.startsWith('51')
        || number.startsWith('52')
        || number.startsWith('53')
        || number.startsWith('54')
        || number.startsWith('55')
    )
        return 'Discover'
    return 'none'
}

function id(number) {
    return number.slice(6, 15) || 'none'
}

function control(number) {
    return number[15] || 'none'
}

export default { check, company, id, control }