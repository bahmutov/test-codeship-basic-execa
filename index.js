const execa = require('execa')

// const profilePath = '~/.bash_profile'
// const cmd = `source #{profilePath} > /dev/null 2>&1; #{ls -la}`
// const shellEnv = require("shell-env")

execa.shell('ls -la')
  .then(result => {
    console.log(result.stdout)
  }, console.error)

