exports.config = {
  tests: './tests/*/*_test.js',

  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.stoloto.ru/',
	  show: true
    }
  },
  include: {
    I: './steps_file.js',
	authPage: './pages/authPage.js'
  },
  bootstrap: null,
  mocha: {},
  name: '.bin',
  translation: 'ru-RU'
}