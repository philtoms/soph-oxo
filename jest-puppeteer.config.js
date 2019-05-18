module.exports = {
  server: {
    command: 'npm start',
    port: 4444,
    launchTimeout: 10000,
    debug: true,
    headless: process.env.HEADLESS !== 'false'
  }
};
