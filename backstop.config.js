const fs = require('fs')
let allScenarios = []

function loadScenarios (dirname) {
  const files = fs.readdirSync(dirname)
  files.forEach ((file) => {
    const content = JSON.parse(fs.readFileSync(dirname + file, 'utf-8'))
    if (Array.isArray(content)) {
      content.forEach((scenario) => {
        allScenarios.push(scenario)
      })
    } else {
      allScenarios.push(content)
    }
  })
}

loadScenarios('backstop_data/scenarios/')

module.exports = {
  'viewports': [
    {
      'name': 'PC',
      'width': 1920,
      'height': 1080
    },
    {
      'name': 'Mobile',
      'width': 375,
      'height': 667
    }
  ],
  'scenarios': allScenarios,
  'paths': {
    'bitmaps_reference': 'backstop_data/bitmaps_reference',
    'bitmaps_test': 'backstop_data/bitmaps_test',
    'casper_scripts': 'backstop_data/casper_scripts',
    'html_report': 'backstop_data/html_report',
    'ci_report': 'backstop_data/ci_report'
  },
  'casperFlags': [],
  'engine': 'phantomjs',
  'report': [
    'browser'
  ],
  'onBeforeScript': 'onBefore.js',
  'debug': false
}

