const execa = require('execa')

const printAllProcs = () => {
  if (!process.env.CODESHIP) {
    return null
  }

  return (
    execa('pstree')
    .then((result) => {
      /* eslint-disable no-console */
      console.log('')
      console.log('All running processes tree')
      console.log('')
      console.log(result.stdout)
      console.log('')
      console.log('end')
      console.log('')
      /* eslint-enable no-console */
      return null
    })
    .then(() => {
      return execa('ps -ax')
    })
    .then((result) => {
      /* eslint-disable no-console */
      console.log('')
      console.log('All running processes')
      console.log('')
      console.log(result.stdout)
      console.log('')
      console.log('end')
      console.log('')
      /* eslint-enable no-console */
      return null
    })
  )
}

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

module.exports = (on, config) => {
  on('task', {
    'print-all-procs': printAllProcs,
  })
}
