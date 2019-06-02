module.exports = {
  launch: {
    dumpio: true,
    headless: process.env.HEADLESS !== 'false'
  },
  server: process.env.HEADLESS !== 'false' && {
    command: 'npm start'
  },
  browserContext: 'default'
};
