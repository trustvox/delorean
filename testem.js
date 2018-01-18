module.exports = {
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,
  launch_in_ci: [
    'Chrome'
  ],
  launch_in_dev: [
    'Chrome'
  ],
  browser_args: {
    Chrome: {
      mode: 'ci',
      args: [
        '--headless',
        '--disable-gpu',
        '--no-sandbox',
        '--remote-debugging-port=9222',
        '--window-size=1440,900',
        '--no-default-browser-check',
        '--no-first-run',
        '--ignore-certificate-errors',
        '--test-type',
        '--disable-renderer-backgrounding',
        '--disable-background-timer-throttling'
      ]
    }
  }
};
