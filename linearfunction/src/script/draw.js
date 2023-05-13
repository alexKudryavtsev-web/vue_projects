function init(canvas) {
    horizontal(canvas)
    vertical(canvas)

    vertDegree(canvas)
    horDegree(canvas)

    drawXandY(canvas)
}

function drawByCoord(canvas, x1, y1, x2, y2, color) {
    let ctx = canvas.getContext('2d')

    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.stroke()
}
function infinityByTwoCoord(canvas, x1, y1, x2, y2, color) {
    let a = (y2 - y1) / (x2 - x1);
    let b = (y1 * x2 - y2 * x1) / (x2 - x1);
    let ctx = canvas.getContext('2d')

    let width = ctx.canvas.width;
    let height = ctx.canvas.height;

    let leftSideY = b;
    let rightSideY = (width * a) + b;
    let topSideX = (-b) / a;
    let bottomSideX = (height - b) / a;

    if ([Infinity, -Infinity].includes(a)) {
        topSideX = bottomSideX = x1;
    }

    if (a !== a) {
        throw new Error("point1 and point2 are the same")
    }

    const edgePoints = [{
            x: 0,
            y: leftSideY
        },
        {
            x: width,
            y: rightSideY
        },
        {
            x: topSideX,
            y: 0
        },
        {
            x: bottomSideX,
            y: height
        }
    ].filter(({
        x,
        y
    }) => x >= 0 && x <= width && y >= 0 && y <= height);

    ctx.beginPath();

    ctx.moveTo(edgePoints[0].x, edgePoints[0].y || 0);
    ctx.lineTo(edgePoints[1].x || point2.x, edgePoints[1].y || height);
    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.stroke();
}

function vertical(canvas) {
    let ctx = canvas.getContext('2d')

    ctx.beginPath(); 
    ctx.moveTo(canvas.width / 2, 0)
    ctx.lineTo(canvas.width / 2, canvas.height)
    ctx.strokeStyle = '#111'
    ctx.stroke()
}
function vertDegree(canvas) {
    let ctx = canvas.getContext('2d')

    let x = 0
    let c = canvas.width / 20

    for(let i = 0; i < c; i++) {
        ctx.beginPath()
        ctx.moveTo(x - 5, canvas.height / 2 - 8)
        ctx.lineTo(x - 5, canvas.height / 2)
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#111'
        ctx.stroke()

        x += 20;
    }
}

function horizontal(canvas) {
    let ctx = canvas.getContext('2d')

    ctx.beginPath()
    ctx.moveTo(0, canvas.height / 2) 
    ctx.lineTo(canvas.width, canvas.height / 2)
    ctx.strokeStyle = '#111'
    ctx.lineWidth = 1
    ctx.stroke()
}
function horDegree(canvas) {
    let ctx = canvas.getContext('2d')

    let y = 0
    let c = canvas.width / 20

    for(let i = 0; i < c; i++) {
        ctx.beginPath()
        ctx.moveTo(canvas.height / 2 + 2, y - 5)
        ctx.lineTo(canvas.height / 2 + 8, y - 5)
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#111'
        ctx.stroke()

        y+= 20;
    }
}

function drawXandY(canvas) {
    let ctx = canvas.getContext('2d')
    let offset = 20

    ctx.font = "22px consolas"
    ctx.fillText('X', canvas.width / 2 - offset, offset)

    ctx.fillText('Y', canvas.width - offset, canvas.height / 2 - offset)
}

export default { init, drawByCoord, infinityByTwoCoord }