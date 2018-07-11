const electron = require('electron')
console.log('started index')
// const app = require('app')
// const execa = require('execa')

// const listFiles = 'ls -la'
// const profilePath = '~/.bash_profile'
// // const cmd = `source ${profilePath} > /dev/null 2>&1; ${listFiles}`
// const cmd = listFiles

// console.log('command: %s', cmd)
// execa.shell(cmd)
//   .then(result => {
//     console.log(result.stdout)
//   }, console.error)
//   .then(() => {
//     return execa.shell('ps -ax')
//   })
//   .then(result => {
//     console.log(result.stdout)
//   })
//   .then(() => {
//     console.log('quitting app')
//     app.quit()
//   })
electron.app.quit()
