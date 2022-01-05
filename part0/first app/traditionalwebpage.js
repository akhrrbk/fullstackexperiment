const getFrontPageHtml = (noteCount) => {
    return(`
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>CSS mainly</title>
        </head>
        <body>
            <div>
                <p>hi</p>
                <span>Click me</span>
            </div>
        </body>
        </html>
    `)
}

app.get('/', (req, res) => {
    const page = getFrontPageHtml(notes.length)
    res.send(page)
})