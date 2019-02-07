exports.config = {
  tests: './tests/*/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
		url: 'https://www.stoloto.ru',
		show: true,
		restart: false,
		keepBrowserState: true,
		uniqueScreenshotNames: true,
		waitForTimeout: 1500,
		waitForAction: 1500,
		windowSize : '1200x800',
		chrome: {
                args: [
                    '--no-sandbox', '--disable-dev-shm-usage'
                ],
        },
	},
    helpersmy: {
        require: './helpers/helpersmy.js'
    },
  },
  include: {
		I: './steps_file.js',
		authPage: './pages/authPage.js',
      Change_dataPage: './pages/Change_dataPage.js',
      Find_ticketPage: './pages/Find_ticketPage.js',
      Find_numberPage: './pages/Find_numberPage.js',

  },
  bootstrap: null,
  mocha: {},
  name: '.bin',
  translation: 'ru-RU',  
}

