import "dotenv/config.js";

let path = ''
const modeEnv = process.env.MODE
const port = process.env.PORT || 3001
const host = process.env.HOST || 'http://localhost'

if (modeEnv) path = host
else path = `${host}:${port}`

const message = 'Your server is ready'
const allMessage = `\n${message}:\n=> ${path}\n`


// LISTEN
export const listen = (app, cb= ()=>null) => {
  app.listen(port, () => {
    console.log(allMessage)
    cb()
  })
}
