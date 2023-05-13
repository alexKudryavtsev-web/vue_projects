import randomWord from 'random-words'
import rand from './rand.js'

function makeCaptcha(canvas) {
    let word = rand.randCase(randomWord())
    let ctx = canvas.getContext('2d')

    for(let coord of rand.randCoord()) {
        ctx.beginPath()
        ctx.arc(coord.x, coord.y, coord.size, 0, 2 * Math.PI, true)
        ctx.fillStyle = coord.color
        ctx.fill()  
    }

    let x = rand.randInt(10, 100)

    for (let sym of rand.randChangeChar(word)) {
        ctx.font = sym.font
        ctx.fillStyle = sym.color
        ctx.fillText(sym.text, x, 80)
        x += rand.randInt(10, 45)
    }

    return word
}

export default { makeCaptcha }