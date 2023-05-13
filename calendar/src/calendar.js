function create(year, month) {
    let days = daysMonth(year, month)
    days = distribute(days)

    let fd = days[0][0]

    if(!(fd.getDate() === 1 && daysWeek(fd) === 1)) {
        for(let c of days) {
            if(c[0].getDate() === 1) break
            c.unshift(null)        
        }
    }

    return days
}

function distribute(days) {
    let ret = [[],[],[],[],[],[],[]]

    for(let date of days) {
        let index = daysWeek(date) - 1

        ret[index].push(date)
    }
    return ret
}

function daysMonth(year, month) {
    let date = new Date(Date.UTC(year, month, 1));
    let days = [];
    while (date.getUTCMonth() === month) {
        days.push(new Date(date));
        date.setUTCDate(date.getUTCDate() + 1);
    }
    return days;
}

function daysWeek(date) {
    return date.getDay() || 7
}

export default { create }