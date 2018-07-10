const execa = require('execa')

const listFiles = 'ls -la'
const profilePath = '~/.bash_profile'
const cmd = `source ${profilePath} > /dev/null 2>&1; ${listFiles}`

console.log('command: %s', cmd)
execa.shell(cmd)
  .then(result => {
    console.log(result.stdout)
  }, console.error)
  .then(() => {
    execa.shell('ps -ax')
  })
  .then(result => {
    console.log(result.stdout)
  })
