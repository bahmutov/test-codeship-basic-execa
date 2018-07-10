const execa = require('execa')

execa('ls', ['-la'])
.then(result => {
  console.log(result.stdout)
}, console.error)
